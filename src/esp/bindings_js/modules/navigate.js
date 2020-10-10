// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/* global FS, Module */

import ObjectSensor from "./object_sensor";
import PsiturkEventLogger from "./event_logger";
import { inventorySlots } from "./defaults";
import { replaceAll } from "./utils";
import Inventory from "./inventory";
import TaskValidator from "./TaskValidator";

/**
 * NavigateTask class
 */
class NavigateTask {
  // PUBLIC methods.

  /**
   * Create navigate task.
   * @param {SimEnv} sim - simulator
   * @param {TopDownMap} topdown - TopDown Map
   * @param {Object} components - dictionary with status and canvas elements
   */
  constructor(sim, components) {
    this.sim = sim;
    this.components = components;
    this.topdown = components.topdown;
    this.semanticsEnabled = false;
    this.radarEnabled = false;
    this.keyBindListener = null;
    this.lastInteractedObjectId = -1;
    this.inventory = new Inventory(inventorySlots);
    this.taskValidator = null;

    if (this.components.semantic) {
      this.semanticsEnabled = true;
      this.semanticCtx = components.semantic.getContext("2d");
      this.semanticShape = this.sim.getObservationSpace("semantic").shape;
      this.semanticImageData = this.semanticCtx.createImageData(
        this.semanticShape.get(1),
        this.semanticShape.get(0)
      );
      this.semanticObservation = new Module.Observation();
      this.semanticScene = this.sim.sim.getSemanticScene();
      this.semanticObjects = this.semanticScene.objects;

      if (window.config.category) {
        const scopeWidth = this.components.scope.offsetWidth;
        const scopeHeight = this.components.scope.offsetHeight;
        const scopeInsetX = (this.components.canvas.width - scopeWidth) / 2;
        const scopeInsetY = (this.components.canvas.height - scopeHeight) / 2;
        const objectSearchRect = {
          left: scopeInsetX,
          top: scopeInsetY,
          right: scopeInsetX + scopeWidth,
          bottom: scopeInsetY + scopeHeight
        };
        this.objectSensor = new ObjectSensor(
          objectSearchRect,
          this.semanticShape,
          this.semanticScene,
          window.config.category
        );
      }

      components.canvas.onmousedown = e => {
        this.handleMouseDown(e);
      };
    }

    if (this.components.radar) {
      this.radarEnabled = true;
      this.radarCtx = components.radar.getContext("2d");
    }

    if (this.components.inventory) {
      this.inventory.initInventory(components.inventory);
    }

    if (this.components.taskValidator) {
      this.taskValidator = this.components.taskValidator;
    }

    this.psiturk = new PsiturkEventLogger(window.psiTurk);

    this.actions = [
      { name: "moveForward", key: "w", keyCode: 87 },
      { name: "moveBackward", key: "s", keyCode: 83 },
      { name: "turnLeft", key: "ArrowLeft", keyCode: 37 },
      { name: "turnRight", key: "ArrowRight", keyCode: 39 },
      { name: "turnLeft", key: "a", keyCode: 65 },
      { name: "turnRight", key: "d", keyCode: 68 },
      { name: "lookUp", key: "ArrowUp", keyCode: 38 },
      { name: "lookDown", key: "ArrowDown", keyCode: 40 },
      { name: "grabReleaseObject", key: " ", keyCode: 32 }
    ];
  }

  handleMouseDown(event) {
    const height = this.semanticShape.get(0);
    const width = this.semanticShape.get(1);
    const offsetY = height - 1 - event.offsetY; /* flip-Y */
    const offsetX = event.offsetX;
    const objectId = this.semanticData[width * offsetY + offsetX];
    this.setStatus(this.semanticObjects.get(objectId).category.getName(""));
  }

  /**
   * Initialize the task. Should be called once.
   */
  init() {
    this.bindKeys();
    this.psiturk.handleRecordTrialData("TEST", "simInitialized", {
      config: window.config
    });
    this.initialized = true;
    this.initPhysics();
  }

  initPhysics() {
    if (
      Module.enablePhysics &&
      window.config.runFlythrough !== true &&
      window.config.enableStepPhysics === true
    ) {
      console.log("enabled physics step at 100ms interval");
      this.physicsStepFunction = setInterval(() => {
        let stepSize = 1.0 / 10.0;
        this.sim.stepWorld(stepSize);
        let objectStates = this.sim.getObjectStates();
        this.psiturk.handleRecordTrialData("TEST", "stepPhysics", {
          step: stepSize,
          objectStates: objectStates
        });
        this.render();
      }, 100.0);
    }
  }

  disablePhysics() {
    if (this.physicsStepFunction) {
      console.log("clearing physics interval on reset");
      window.clearInterval(this.physicsStepFunction);
    }
  }

  /**
   * Reset the task.
   */
  reset() {
    this.disablePhysics();
    this.sim.reset();
    this.inventory.reset();
    this.inventory.renderInventory();
    this.setStatus("Ready");
    this.initPhysics();
    this.render();
  }

  /**
   * Runs flythrough for a task
   */
  runFlythrough() {
    this.setStatus("Initializing...");
    const _self = this;
    this.psiturk.handleRecordTrialData("TEST", "flythroughStart", {});

    const keysWereBound = !!this.keyBindListener;
    this.unbindKeys();

    // playback speed
    let speed = 1.0;

    const replayContents = FS.readFile(
      "/data/".concat(window.config.flythroughFile),
      {
        encoding: "utf8"
      }
    );
    const replayLines = replayContents.split(/\r?\n/);

    let startTimestamp = null;
    let replayDuration = 0;
    let startReplay = false;

    this.replayTimeouts = [];
    for (let iLine = 0; iLine < replayLines.length; ++iLine) {
      const line = replayLines[iLine];
      // Skip empty lines
      if (line.length === 0) {
        continue;
      }

      const rawLineParts = line.split(",");
      const lineParts = rawLineParts.slice(0, 3);

      const timestamp = lineParts[2];
      let datumStr = rawLineParts.slice(3).join(",");
      if (datumStr[0] == '"' && datumStr[datumStr.length - 1] == '"') {
        // Remove outside quotes
        datumStr = datumStr.slice(1, datumStr.length - 1);
        // Replace double quotes with single
        datumStr = replaceAll(datumStr, '""', '"');
      }

      const datum = JSON.parse(datumStr);

      if (startReplay === false) {
        if (datum["step"] === "viewer") {
          startReplay = true;
        } else {
          continue;
        }
      }

      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const delay = (timestamp - startTimestamp) / speed;
      const replayTimeout = window.setTimeout(function() {
        if (datum["event"] === "simReset") {
          _self.reset();
        } else if (datum["event"] == "handleAction") {
          _self.handleAction(datum["data"]["action"]);
        } else if (datum["event"] == "stepPhysics") {
          //_self.sim.stepWorld(1.0 / 10.0);
          //console.log(datum["data"]);
          let objectStates = datum["data"]["objectStates"];
          for (let i = 0; i < objectStates.length; i++) {
            let objectId = objectStates[i]["objectId"];
            let translation = _self.sim.convertVec3fToVector3(
              objectStates[i]["translation"]
            );
            let rotation = _self.sim.quatFromCoeffs(
              objectStates[i]["rotation"]
            );
            // console.log(translation.toString());
            //console.log(rotation + " " + objectId);
            _self.sim.setTranslation(translation, objectId, 0);
            _self.sim.setRotation(rotation, objectId, 0);
          }
          _self.render();
        }
      }, delay);
      this.replayTimeouts.push(replayTimeout);
      replayDuration = delay;
    }

    this.clearTimeouts = function() {
      this.clearTimeouts = null;

      if (this.replayTimeouts) {
        for (let i = 0; i < this.replayTimeouts.length; ++i) {
          const timeout = this.replayTimeouts[i];
          window.clearTimeout(timeout);
        }
        delete this.replayTimeouts;
      }

      if (keysWereBound) {
        _self.bindKeys();
      }
      _self.setStatus("");
    };

    const finalTimeout = window.setTimeout(function() {
      if (typeof this.clearTimeouts === "function") {
        this.clearTimeouts();
      }
      window.finishTrial();
    }, replayDuration + 1);

    this.replayTimeouts.push(finalTimeout);
    this.psiturk.handleRecordTrialData("TEST", "flythroughEnd", {});
  }

  setTaskValidator(epsiode) {
    this.taskValidator = new TaskValidator(epsiode, this.sim);
  }

  // PRIVATE methods.

  setStatus(text) {
    this.components.status.style = "color:white";
    this.components.status.innerHTML = text;
  }

  setErrorStatus(text) {
    this.components.status.style = "color:red";
    this.components.status.innerHTML = text;
  }

  setWarningStatus(text) {
    this.components.status.style = "color:orange";
    this.components.status.innerHTML = text;
  }

  setSuccessStatus(text) {
    this.components.status.style = "color:green";
    this.components.status.innerHTML = text;
  }

  renderImage() {
    this.sim.displayObservation("rgb");
    this.renderRadar();
  }

  renderSemanticImage() {
    if (!this.semanticsEnabled || this.semanticObjects.size() == 0) {
      return;
    }

    this.sim.getObservation("semantic", this.semanticObservation);
    const rawSemanticBuffer = this.semanticObservation.getData();
    const objectIds = new Uint32Array(
      rawSemanticBuffer.buffer,
      rawSemanticBuffer.byteOffset,
      rawSemanticBuffer.length / 4
    );
    this.semanticData = objectIds;

    // TOOD(msb) implement a better colorization scheme
    for (let i = 0; i < objectIds.length; i++) {
      const objectId = objectIds[i];
      if (objectId & 1) {
        this.semanticImageData.data[i * 4] = 255;
      } else {
        this.semanticImageData.data[i * 4] = 0;
      }
      if (objectId & 2) {
        this.semanticImageData.data[i * 4 + 1] = 255;
      } else {
        this.semanticImageData.data[i * 4 + 1] = 0;
      }
      if (objectId & 4) {
        this.semanticImageData.data[i * 4 + 2] = 255;
      } else {
        this.semanticImageData.data[i * 4 + 2] = 0;
      }
      this.semanticImageData.data[i * 4 + 3] = 255;
    }

    this.semanticCtx.putImageData(this.semanticImageData, 0, 0);
  }

  renderTopDown(options) {
    if (options.renderTopDown && this.topdown !== null) {
      this.topdown.moveTo(this.sim.getAgentState().position, 500);
    }
  }

  renderRadar() {
    if (!this.radarEnabled) {
      return;
    }
    const width = 100,
      height = 100;
    let radius = width / 2;
    let centerX = width / 2;
    let centerY = height / 2;
    let ctx = this.radarCtx;
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = 0.5;
    // draw circle
    ctx.fillStyle = "darkslategray";
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    // draw sector
    ctx.fillStyle = "darkgray";
    ctx.beginPath();
    // TODO(msb) Currently 90 degress but should really use fov.
    ctx.arc(centerX, centerY, radius, (-Math.PI * 3) / 4, -Math.PI / 4);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fill();
    // draw target
    ctx.globalAlpha = 1.0;
    ctx.beginPath();
    let magnitude, angle;
    [magnitude, angle] = this.sim.distanceToGoal();
    let normalized = magnitude / (magnitude + 1);
    let targetX = centerX + Math.sin(angle) * radius * normalized;
    let targetY = centerY - Math.cos(angle) * radius * normalized;
    ctx.fillStyle = "maroon";
    ctx.arc(targetX, targetY, 3, 0, 2 * Math.PI);
    ctx.fill();
  }

  render(options = { renderTopDown: true }) {
    this.renderImage();

    this.sim.updateCrossHairNode(this.sim.getCrosshairPosition());
    this.sim.drawBBAroundNearestObject();

    this.renderImage();
    this.renderSemanticImage();
    this.renderTopDown(options);
  }

  handleInventoryUpdate(isCollision) {
    let objectId = this.sim.grippedObjectId;
    if (isCollision) {
      this.setStatus("Collision while releasing object!");
      return;
    }
    if (objectId == -1) {
      let slot = this.inventory.findObjectSlot(this.lastInteractedObjectId);
      if (slot != -1) {
        this.inventory.setSlot(slot, undefined);
      }
      if (this.lastInteractedObjectId != -1) {
        let object = this.sim.getObjectFromScene(this.lastInteractedObjectId);
        this.setStatus(object["object"] + " released");
      }
    } else {
      let emptySlot = this.inventory.getEmptySlot();
      let object = this.sim.getObjectFromScene(objectId);

      if (emptySlot == -1) {
        console.log("No empty slot in inventory!");
      } else {
        this.inventory.setSlot(emptySlot, {
          objectId: objectId,
          object: object["object"],
          objectIcon: object["objectIcon"]
        });
        this.setStatus(object["object"] + " picked up");
      }
    }
    this.lastInteractedObjectId = objectId;
  }

  handleAction(action) {
    if (action === "addPrimitiveObject") {
      this.sim.addPrimitiveObject();
    } else if (action === "addTemplateObject") {
      this.sim.addTemplateObject();
    } else if (action === "removeLastObject") {
      this.sim.removeLastObject();
    } else if (action == "grabReleaseObject") {
      let collision = this.sim.inventoryGrabReleaseObject();
      this.handleInventoryUpdate(collision);
      this.inventory.renderInventory();
      if (this.sim.grippedObjectId === -1 && this.taskValidator.validate()) {
        if (window.finishTrial) {
          this.setStatus("Task completed!");
          setTimeout(window.finishTrial, 500);
        }
      }
    } else if (action == "physicsTest") {
      this.sim.runPhysicsTest();
    } else {
      this.sim.step(action);
      this.setStatus(action);
    }
    this.render();
  }

  handleKeypress(key) {
    for (let a of this.actions) {
      if (a.keyCode === key) {
        this.psiturk.handleRecordTrialData("TEST", "handleAction", {
          action: a.name
        });
        this.handleAction(a.name);
        break;
      }
    }
  }

  bindKeys() {
    var _self = this;
    if (_self.keyBindListener) {
      console.log("Keys already bound. Returning");
      return;
    }
    _self.keyBindListener = function(event) {
      event.preventDefault();
      _self.handleKeypress(event.keyCode);
    };
    document.addEventListener("keydown", _self.keyBindListener, true);
  }

  unbindKeys() {
    if (this.keyBindListener) {
      document.removeEventListener("keydown", this.keyBindListener, true);
      this.keyBindListener = null;
    }
  }
}

export default NavigateTask;
