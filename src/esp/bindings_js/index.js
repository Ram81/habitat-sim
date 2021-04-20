// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/* global FS, Module */

import WebDemo from "./modules/web_demo";
import VRDemo from "./modules/vr_demo";
import ViewerDemo from "./modules/viewer_demo";
import {
  defaultScene,
  dataHome,
  sceneHome,
  fileBasedObjects,
  taskFiles,
  episodeIdObjectReceptacleMap
} from "./modules/defaults";
import { cleaningTaskEpObjectsMap } from "./modules/object_maps";
import "./bindings.css";
import {
  checkWebAssemblySupport,
  checkWebgl2Support,
  getInfoSemanticUrl,
  buildConfigFromURLParameters,
  loadEpisode
} from "./modules/utils";

function preload(url) {
  let file = url;
  if (url.indexOf("http") === 0) {
    const splits = url.split("/");
    file = splits[splits.length - 1];
  }
  if (window.config.dataset == "objectnav") {
    url = url.split(".")[0] + "/" + url;
  }
  FS.createPreloadedFile("/", file, sceneHome.concat(url), true, false);
  return file;
}

function preloadPhysConfig(url, episodeId) {
  let emDataHome = "/data";
  FS.mkdir(emDataHome);

  let file = url;
  if (url.indexOf("http") === 0) {
    const splits = url.split("/");
    file = splits[splits.length - 1];
  }
  FS.createPreloadedFile(emDataHome, file, dataHome.concat(url), true, false);

  let emObjHome = emDataHome.concat("/objects");
  FS.mkdir(emObjHome);
  // Do not load object assets for object nav task
  if (window.config.dataset == "objectnav") {
    return emDataHome.concat("/".concat(file));
  }

  // TODO Need to loop through the objects directory on the server (`phys/objects/*`) and put all of the glbs onto the client
  // TODO Fix hacky loading of selected objects for each episode
  let objectList = episodeIdObjectReceptacleMap["object_list"];
  if (window.config.task == 0 || window.config.task >= 15) {
    objectList = cleaningTaskEpObjectsMap;
  }
  if (window.config.task >= 20) {
    objectList = [];
  }
  let objectToLoadList = objectList[episodeId % objectList.length];
  let trainingTaskObjects = [
    "mustard_bottle",
    "colored_wood_blocks",
    "tomato_soup_can",
    "plate",
    "Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue",
    "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
    "banana",
    "ACE_Coffee_Mug_Kristen_16_oz_cup",
    "Threshold_Porcelain_Pitcher_White",
    "b_colored_wood_blocks",
    "HeavyDuty_Flashlight",
    "Shark",
    "Closetmaid_Premium_Fabric_Cube_Red",
    "orange",
    "bowl",
    "Threshold_Dinner_Plate_Square_Rim_White_Porcelain",
    "bleach_cleanser",
    "Threshold_Porcelain_Teapot_White"
  ];
  var objects = fileBasedObjects["objects"];
  for (let objectIdx in objects) {
    let is_present = false;
    for (let ii in objectToLoadList) {
      let objectLoadName = objectToLoadList[ii];
      if (objects[objectIdx]["objectHandle"].includes(objectLoadName)) {
        is_present = true;
      }
    }
    for (let ii in trainingTaskObjects) {
      let objectLoadName = trainingTaskObjects[ii];
      if (objects[objectIdx]["objectHandle"].includes(objectLoadName)) {
        is_present = true;
      }
    }
    if (is_present == false) {
      continue;
    }
    console.log(objects[objectIdx]["objectHandle"]);
    let physicsProperties = objects[objectIdx]["physicsProperties"];
    let physicsPropertyName = physicsProperties.split("/")[
      physicsProperties.split("/").length - 1
    ];
    let renderMesh = objects[objectIdx]["renderMesh"];
    let renderMeshName = renderMesh.split("/")[
      renderMesh.split("/").length - 1
    ];

    FS.createPreloadedFile(
      emObjHome,
      renderMeshName,
      dataHome.concat(renderMesh),
      true,
      false
    );
    FS.createPreloadedFile(
      emObjHome,
      physicsPropertyName,
      dataHome.concat(physicsProperties),
      true,
      false
    );
  }

  return emDataHome.concat("/".concat(file));
}

function preloadTask(task) {
  let emDataHome = "/data";
  // load task config
  if (task !== undefined) {
    let taskName = task["name"];
    let taskConfig = task["config"];

    FS.createPreloadedFile(
      emDataHome,
      taskName,
      dataHome.concat(taskConfig),
      true,
      false
    );

    // load training task episode config
    FS.createPreloadedFile(
      emDataHome,
      task.trainingTask.name,
      dataHome.concat(task.trainingTask.config),
      true,
      false
    );
  }
}

Module.preRun.push(() => {
  const args = decodeURIComponent(window.location.search.substr(1))
    .trim()
    .split("&");
  for (let i = 0; i != args.length; ++i) {
    let j = args[i].indexOf("=");
    /* Key + value */
    if (j != -1) {
      Module.arguments.push("--" + args[i].substring(0, j));
      Module.arguments.push(args[i].substring(j + 1));

      /* Just key */
    } else {
      Module.arguments.push("--" + args[i]);
    }
  }

  let config = {};
  config.scene = defaultScene;
  buildConfigFromURLParameters(config);

  window.config = config;
  let taskConfig = taskFiles["tasks"][parseInt(window.config.task)];
  window.config.taskConfig = taskConfig;
  let episodeId = config.episodeId;

  // load scene from task if valid
  if (taskConfig !== undefined) {
    config.scene = taskConfig["scene"];
    window.config.scene = taskConfig["scene"];
  }

  const scene = config.scene;
  Module.scene = preload(scene);

  const physicsConfigFile = window.config.defaultPhysConfig;
  Module.physicsConfigFile = preloadPhysConfig(physicsConfigFile, episodeId);

  Module.enablePhysics = window.config.enablePhysics === "true";
  window.config.runFlythrough = window.config.runFlythrough === "true";
  window.config.enableStepPhysics = window.config.enableStepPhysics === "true";

  preloadTask(taskConfig);

  const fileNoExtension = scene.substr(0, scene.lastIndexOf("."));

  if (!window.config.recomputeNavMesh) {
    preload(fileNoExtension + ".navmesh");
    preload(fileNoExtension + ".stage_config.json");
  }
  if (config.semantic === "mp3d") {
    preload(fileNoExtension + ".house");
    preload(fileNoExtension + "_semantic.ply");
  } else if (config.semantic === "replica") {
    preload(getInfoSemanticUrl(config.scene));
  }
});

Module.onRuntimeInitialized = () => {
  console.log("hsim_bindings initialized");
  let demo;
  if (window.vrEnabled) {
    if (navigator && navigator.getVRDisplays) {
      console.log("Web VR is supported");
      demo = new VRDemo();
    }
  } else if (window.viewerEnabled) {
    demo = new ViewerDemo();
  }

  if (!demo) {
    demo = new WebDemo();
  }

  if (window.config.taskConfig !== undefined) {
    let episode = loadEpisode(
      "/data/".concat(window.config.taskConfig.name),
      window.config.episodeId,
      window.config.dataset
    );
    demo.display(undefined, episode);
  } else {
    demo.display();
  }
  if (window.config.runFlythrough === true) {
    demo.runFlythrough();
  }
  window.demo = demo;
};

function checkSupport() {
  const webgl2Support = checkWebgl2Support();
  let message = "";

  if (!webgl2Support) {
    message = "WebGL2 is not supported on your browser. ";
  } else if (webgl2Support === 1) {
    message = "WebGL2 is supported on your browser, but not enabled. ";
  }

  const webasmSupport = checkWebAssemblySupport();

  if (!webasmSupport) {
    message += "Web Assembly is not supported in your browser";
  }

  if (message.length > 0) {
    const warningElement = document.getElementById("warning");
    warningElement.innerHTML = message;
    // Remove the default hidden class
    warningElement.className = "";
  }
}

checkSupport();
