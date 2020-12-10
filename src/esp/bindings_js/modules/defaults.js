// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

export const defaultAgentConfig = {
  height: 1.5,
  radius: 0.1,
  mass: 32.0,
  linearAcceleration: 20.0,
  angularAcceleration: 4 * Math.PI,
  linearFriction: 0.5,
  angularFriction: 1.0,
  coefficientOfRestitution: 0.0
};

export const defaultStartState = {
  position: [-1.2676633596420288, 0.2047852873802185, 12.595427513122559],
  rotation: [0, 0.4536385088584658, 0, 0.8911857849408661]
};

export const defaultGoal = {
  position: [2.2896811962127686, 0.11950381100177765, 16.97636604309082]
};

export const defaultEpisode = {
  startState: defaultStartState,
  goal: defaultGoal
};

export const defaultResolution = { height: 480, width: 640 };

export const defaultScene =
  window.location.href.indexOf("localhost") === -1
    ? "https://habitat-resources.s3.amazonaws.com/data/scene_datasets/habitat-test-scenes/skokloster-castle.glb"
    : "skokloster-castle.glb";

export const infoSemanticFileName = "info_semantic.json";

export const dataHome = "data/";
export const taskHome = "data/tasks/";
export const sceneHome = "data/scenes/";
export const primitiveObjectHandles = [
  "cylinderSolid_rings_1_segments_12_halfLen_1_useTexCoords_false_useTangents_false_capEnds_true"
];
export const fileBasedObjectHandles = [
  "/data/objects/sphere.phys_properties.json",
  "/data/objects/chair.phys_properties.json",
  "/data/objects/mini_soccer_ball.phys_properties.json",
  "/data/objects/colored_wood_blocks.phys_properties.json"
];

export const fileBasedObjects = {
  objects: [
    {
      objectName: "sphere.glb",
      objectHandle: "sphere.phys_properties.json",
      physicsProperties: "test_assets/objects/sphere.phys_properties.json",
      renderMesh: "test_assets/objects/sphere.glb"
    },
    {
      objectName: "chair.glb",
      objectHandle: "chair.phys_properties.json",
      physicsProperties: "test_assets/objects/chair.phys_properties.json",
      renderMesh: "test_assets/objects/chair.glb"
    },
    {
      objectName: "mini_soccer_ball.glb",
      objectHandle: "mini_soccer_ball.phys_properties.json",
      physicsProperties:
        "test_assets/objects/mini_soccer_ball.phys_properties.json",
      renderMesh: "test_assets/objects/mini_soccer_ball.glb"
    },
    {
      objectName: "colored_wood_blocks.glb",
      objectHandle: "colored_wood_blocks.phys_properties.json",
      physicsProperties:
        "test_assets/objects/colored_wood_blocks.phys_properties.json",
      renderMesh: "test_assets/objects/colored_wood_blocks.glb"
    }
  ]
};

export const flythroughReplayTask = {
  name: "rtask.json",
  config: "tasks/rtask.json"
};

export const flythroughReplayFile = {
  name: "flythroughInventory.csv",
  location: "replays/flythroughInventory.csv"
};

export const taskFiles = {
  tasks: [
    {
      name: "task.json",
      config: "tasks/task.json"
    }
  ]
};

export const trainingTask = {
  name: "trainingTask.json",
  config: "tasks/trainingTask.json"
};

export const inventorySlots = 1;
