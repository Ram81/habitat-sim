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
  flythroughReplayFile,
  flythroughReplayTask,
  trainingTask
} from "./modules/defaults";
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
  FS.createPreloadedFile("/", file, sceneHome.concat(url), true, false);
  return file;
}

function preloadPhysConfig(url) {
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

  // TODO Need to loop through the objects directory on the server (`phys/objects/*`) and put all of the glbs onto the client
  var objects = fileBasedObjects["objects"];
  for (let objectIdx in objects) {
    let objectName = objects[objectIdx]["objectName"];
    let objectHandle = objects[objectIdx]["objectHandle"];
    let physicsProperties = objects[objectIdx]["physicsProperties"];
    let renderMesh = objects[objectIdx]["renderMesh"];

    FS.createPreloadedFile(
      emObjHome,
      objectName,
      dataHome.concat(renderMesh),
      true,
      false
    );
    FS.createPreloadedFile(
      emObjHome,
      objectHandle,
      dataHome.concat(physicsProperties),
      true,
      false
    );
  }

  // load task config
  var tasks = taskFiles.tasks;
  for (let index in tasks) {
    let taskName = tasks[index]["name"];
    let taskConfig = tasks[index]["config"];

    if (
      window.config.taskConfig !== undefined &&
      taskName == window.config.taskConfig.name
    ) {
      FS.createPreloadedFile(
        emDataHome,
        taskName,
        dataHome.concat(taskConfig),
        true,
        false
      );
    }
  }

  // load replay episode config
  FS.createPreloadedFile(
    emDataHome,
    flythroughReplayTask.name,
    dataHome.concat(flythroughReplayTask.config),
    true,
    false
  );

  FS.createPreloadedFile(
    emDataHome,
    flythroughReplayFile.name,
    dataHome.concat(flythroughReplayFile.location),
    true,
    false
  );

  // load training task episode config
  FS.createPreloadedFile(
    emDataHome,
    trainingTask.name,
    dataHome.concat(trainingTask.config),
    true,
    false
  );

  return emDataHome.concat("/".concat(file));
}

Module.preRun.push(() => {
  let config = {};
  config.scene = defaultScene;
  buildConfigFromURLParameters(config);

  window.config = config;
  window.config.taskConfig = taskFiles["tasks"][parseInt(window.config.task)];

  const scene = config.scene;
  Module.scene = preload(scene);

  const physicsConfigFile = window.config.defaultPhysConfig;
  Module.physicsConfigFile = preloadPhysConfig(physicsConfigFile);

  Module.enablePhysics = window.config.enablePhysics === "true";

  const fileNoExtension = scene.substr(0, scene.lastIndexOf("."));

  preload(fileNoExtension + ".navmesh");
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
    let episode = loadEpisode("/data/".concat(window.config.taskConfig.name));
    demo.display(undefined, episode);
  } else {
    demo.display();
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
