// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/* global Module */
import {
  defaultAgentConfig,
  defaultEpisode,
  defaultResolution
} from "./defaults";
import SimEnv from "./simenv_embind";
import TopDownMap from "./topdown";
import NavigateTask from "./navigate";
import { buildConfigFromURLParameters, loadEpisode } from "./utils";
import TaskValidator from "./TaskValidator";

class WebDemo {
  currentResolution = defaultResolution;
  constructor(canvasId = "canvas") {
    this.canvasId = canvasId;
  }
  initializeModules(
    agentConfig = defaultAgentConfig,
    episode = defaultEpisode,
    initializeTopDown = false
  ) {
    this.config = new Module.SimulatorConfiguration();
    this.config.scene_id = Module.scene;
    this.config.enablePhysics = Module.enablePhysics;
    this.config.physicsConfigFile = Module.physicsConfigFile;

    this.simenv = new SimEnv(this.config, episode, 0);

    agentConfig = this.updateAgentConfigWithSensors({ ...agentConfig });

    this.simenv.addAgent(agentConfig);
    this.simenv.updateCrossHairNode(this.simenv.resolution);

    if (initializeTopDown) {
      this.topdown = new TopDownMap(
        this.simenv.getPathFinder(),
        document.getElementById("topdown")
      );
    } else {
      this.topdown = null;
    }

    this.canvasElement = document.getElementById(this.canvasId);

    this.taskValidator = new TaskValidator(episode, this.simenv);
    this.task = new NavigateTask(this.simenv, {
      topdown: this.topdown,
      canvas: this.canvasElement,
      inventory: document.getElementById("inventory"),
      semantic: document.getElementById("semantic"),
      radar: document.getElementById("radar"),
      scope: document.getElementById("scope"),
      status: document.getElementById("status"),
      taskValidator: this.taskValidator
    });
  }

  setEpisode(episode) {
    let taskInstruction = document.getElementById("task-instruction");
    if (taskInstruction !== undefined && taskInstruction !== null) {
      taskInstruction.innerHTML =
        "<hr> <h1>Task: " + episode.task.instruction + "</h1> <hr>";
    }
    this.simenv.setEpisode(episode);
  }

  setTaskValidator(episode) {
    this.task.setTaskValidator(episode);
  }

  runFlythrough() {
    window.config.disableLogging = true;
    window.config.runFlythrough = true;
    window.config.enableStepPhysics = false;
    let replayEpisode = window.config.taskConfig.flythroughTask.name;
    let replayFile = window.config.taskConfig.flythroughReplayFile.name;
    let episode = loadEpisode("/data/".concat(replayEpisode));
    this.setEpisode(episode);
    this.setTaskValidator(episode);
    this.task.reset();
    this.task.runFlythrough(replayFile);
  }

  runInit() {
    window.config.disableLogging = false;
    window.config.runFlythrough = false;
    window.config.enableStepPhysics = true;
    let episode = loadEpisode("/data/".concat(window.config.taskConfig.name));
    this.setEpisode(episode);
    this.setTaskValidator(episode);
    this.task.reset();
  }

  runTrainingTask() {
    window.config.disableLogging = true;
    window.config.runFlythrough = false;
    window.config.enableStepPhysics = true;
    let trainingEpisode = window.config.taskConfig.trainingTask.name;
    let episode = loadEpisode("/data/".concat(trainingEpisode));
    this.setEpisode(episode);
    this.setTaskValidator(episode);
    this.task.reset();
  }

  updateAgentConfigWithSensors(agentConfig = defaultAgentConfig) {
    const sensorConfigs = [
      {
        uuid: "rgb",
        sensorType: Module.SensorType.COLOR,
        resolution: [480, 640]
      },
      {
        uuid: "semantic",
        sensorType: Module.SensorType.SEMANTIC,
        resolution: [480, 640],
        channels: 1
      }
    ];

    agentConfig.sensorSpecifications = sensorConfigs;
    agentConfig = this.updateAgentConfigWithResolution(agentConfig);

    return agentConfig;
  }

  resetCanvas(resolution) {
    this.canvasElement.width = resolution.width;
    this.canvasElement.height = resolution.height;
  }

  updateAgentConfigWithResolution(agentConfig) {
    agentConfig.sensorSpecifications.forEach(sensorConfig => {
      sensorConfig.resolution = [
        this.currentResolution.height,
        this.currentResolution.width
      ];
    });

    return agentConfig;
  }

  display(agentConfig = defaultAgentConfig, episode = {}) {
    const config = buildConfigFromURLParameters();
    if (config.useDefaultEpisode) {
      episode = defaultEpisode;
    }

    this.initializeModules(agentConfig, episode);

    this.task.init();
    this.task.reset();
  }

  validateTask() {
    this.task.validateTask();
  }
}

export default WebDemo;
