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
  position: [-4.94049, -2.63092, -7.57733],
  rotation: [0, 0.980792, 0, 0.195056]
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
export const flythroughHome = "data/replays/";
export const primitiveObjectHandles = [
  "cylinderSolid_rings_1_segments_12_halfLen_1_useTexCoords_false_useTangents_false_capEnds_true"
];

export const fileBasedObjects = {
  objects: [
    {
      object: "apple",
      objectIcon: "/data/test_assets/objects/apple.png",
      objectHandle: "/data/objects/apple.object_config.json",
      physicsProperties: "test_assets/objects/apple.object_config.json",
      renderMesh: "test_assets/objects/apple.glb"
    },
    {
      object: "banana",
      objectIcon: "/data/test_assets/objects/banana.png",
      objectHandle: "/data/objects/banana.object_config.json",
      physicsProperties: "test_assets/objects/banana.object_config.json",
      renderMesh: "test_assets/objects/banana.glb"
    },
    {
      object: "cracker box",
      objectIcon: "/data/test_assets/objects/cracker_box.png",
      objectHandle: "/data/objects/cracker_box.object_config.json",
      physicsProperties: "test_assets/objects/cracker_box.object_config.json",
      renderMesh: "test_assets/objects/cracker_box.glb"
    },
    {
      object: "colored wood blocks",
      objectIcon: "/data/test_assets/objects/colored_wood_blocks.png",
      objectHandle: "/data/objects/colored_wood_blocks.object_config.json",
      physicsProperties:
        "test_assets/objects/colored_wood_blocks.object_config.json",
      renderMesh: "test_assets/objects/colored_wood_blocks.glb"
    },
    {
      object: "gelatin box",
      objectIcon: "/data/test_assets/objects/gelatin_box.png",
      objectHandle: "/data/objects/gelatin_box.object_config.json",
      physicsProperties: "test_assets/objects/gelatin_box.object_config.json",
      renderMesh: "test_assets/objects/gelatin_box.glb"
    },
    {
      object: "hammer",
      objectIcon: "/data/test_assets/objects/hammer.png",
      objectHandle: "/data/objects/hammer.object_config.json",
      physicsProperties: "test_assets/objects/hammer.object_config.json",
      renderMesh: "test_assets/objects/hammer.glb"
    },
    {
      object: "master chef can",
      objectIcon: "/data/test_assets/objects/master_chef_can.png",
      objectHandle: "/data/objects/master_chef_can.object_config.json",
      physicsProperties:
        "test_assets/objects/master_chef_can.object_config.json",
      renderMesh: "test_assets/objects/master_chef_can.glb"
    },
    {
      object: "soccer ball",
      objectIcon: "/data/test_assets/objects/mini_soccer_ball.png",
      objectHandle: "/data/objects/mini_soccer_ball.object_config.json",
      physicsProperties:
        "test_assets/objects/mini_soccer_ball.object_config.json",
      renderMesh: "test_assets/objects/mini_soccer_ball.glb"
    },
    {
      object: "mustard bottle",
      objectIcon: "/data/test_assets/objects/mustard_bottle.png",
      objectHandle: "/data/objects/mustard_bottle.object_config.json",
      physicsProperties:
        "test_assets/objects/mustard_bottle.object_config.json",
      renderMesh: "test_assets/objects/mustard_bottle.glb"
    },
    {
      object: "orange",
      objectIcon: "/data/test_assets/objects/orange.png",
      objectHandle: "/data/objects/orange.object_config.json",
      physicsProperties: "test_assets/objects/orange.object_config.json",
      renderMesh: "test_assets/objects/orange.glb"
    },
    {
      object: "red bowl",
      objectIcon: "/data/test_assets/objects/bowl.png",
      objectHandle: "/data/objects/bowl.object_config.json",
      physicsProperties: "test_assets/objects/bowl.object_config.json",
      renderMesh: "test_assets/objects/bowl.glb"
    },
    {
      object: "red mug",
      objectIcon: "/data/test_assets/objects/mug.png",
      objectHandle: "/data/objects/mug.object_config.json",
      physicsProperties: "test_assets/objects/mug.object_config.json",
      renderMesh: "test_assets/objects/mug.glb"
    },
    {
      object: "red plate",
      objectIcon: "/data/test_assets/objects/plate.png",
      objectHandle: "/data/objects/plate.object_config.json",
      physicsProperties: "test_assets/objects/plate.object_config.json",
      renderMesh: "test_assets/objects/plate.glb"
    },
    {
      object: "red sphere",
      objectIcon: "/data/test_assets/objects/sphere.png",
      objectHandle: "/data/objects/sphere.object_config.json",
      physicsProperties: "test_assets/objects/sphere.object_config.json",
      renderMesh: "test_assets/objects/sphere.glb"
    },
    {
      object: "tomato soup can",
      objectIcon: "/data/test_assets/objects/tomato_soup_can.png",
      objectHandle: "/data/objects/tomato_soup_can.object_config.json",
      physicsProperties:
        "test_assets/objects/tomato_soup_can.object_config.json",
      renderMesh: "test_assets/objects/tomato_soup_can.glb"
    },
    {
      object: "toy airplane",
      objectIcon: "/data/test_assets/objects/toy_airplane.png",
      objectHandle: "/data/objects/toy_airplane.object_config.json",
      physicsProperties: "test_assets/objects/toy_airplane.object_config.json",
      renderMesh: "test_assets/objects/toy_airplane.glb"
    },
    {
      object: "wood block",
      objectIcon: "/data/test_assets/objects/wood_block.png",
      objectHandle: "/data/objects/wood_block.object_config.json",
      physicsProperties: "test_assets/objects/wood_block.object_config.json",
      renderMesh: "test_assets/objects/wood_block.glb"
    },
    {
      object: "large clamp",
      objectIcon: "/data/test_assets/objects/large_clamp.png",
      objectHandle: "/data/objects/large_clamp.object_config.json",
      physicsProperties: "test_assets/objects/large_clamp.object_config.json",
      renderMesh: "test_assets/objects/large_clamp.glb"
    },
    {
      object: "blue cup",
      objectIcon: "/data/test_assets/objects/b_cups.png",
      objectHandle: "/data/objects/b_cups.object_config.json",
      physicsProperties: "test_assets/objects/b_cups.object_config.json",
      renderMesh: "test_assets/objects/b_cups.glb"
    },
    {
      object: "green cup",
      objectIcon: "/data/test_assets/objects/c_cups.png",
      objectHandle: "/data/objects/c_cups.object_config.json",
      physicsProperties: "test_assets/objects/c_cups.object_config.json",
      renderMesh: "test_assets/objects/c_cups.glb"
    },
    {
      object: "baseball",
      objectIcon: "/data/test_assets/objects/baseball.png",
      objectHandle: "/data/objects/baseball.object_config.json",
      physicsProperties: "test_assets/objects/baseball.object_config.json",
      renderMesh: "test_assets/objects/baseball.glb"
    },
    {
      object: "tennis ball",
      objectIcon: "/data/test_assets/objects/tennis_ball.png",
      objectHandle: "/data/objects/tennis_ball.object_config.json",
      physicsProperties: "test_assets/objects/tennis_ball.object_config.json",
      renderMesh: "test_assets/objects/tennis_ball.glb"
    },
    {
      object: "blue jug",
      objectIcon: "/data/test_assets/objects/pitcher_base.png",
      objectHandle: "/data/objects/pitcher_base.object_config.json",
      physicsProperties: "test_assets/objects/pitcher_base.object_config.json",
      renderMesh: "test_assets/objects/pitcher_base.glb"
    },
    {
      object: "potted meat can",
      objectIcon: "/data/test_assets/objects/potted_meat_can.png",
      objectHandle: "/data/objects/potted_meat_can.object_config.json",
      physicsProperties:
        "test_assets/objects/potted_meat_can.object_config.json",
      renderMesh: "test_assets/objects/potted_meat_can.glb"
    },
    {
      object: "sugar box",
      objectIcon: "/data/test_assets/objects/sugar_box.png",
      objectHandle: "/data/objects/sugar_box.object_config.json",
      physicsProperties: "test_assets/objects/sugar_box.object_config.json",
      renderMesh: "test_assets/objects/sugar_box.glb"
    },
    {
      object: "rubiks cube",
      objectIcon: "/data/test_assets/objects/rubiks_cube.png",
      objectHandle: "/data/objects/rubiks_cube.object_config.json",
      physicsProperties: "test_assets/objects/rubiks_cube.object_config.json",
      renderMesh: "test_assets/objects/rubiks_cube.glb"
    },
    {
      object: "softball",
      objectIcon: "/data/test_assets/objects/softball.png",
      objectHandle: "/data/objects/softball.object_config.json",
      physicsProperties: "test_assets/objects/softball.object_config.json",
      renderMesh: "test_assets/objects/softball.glb"
    },
    {
      object: "plum",
      objectIcon: "/data/test_assets/objects/plum.png",
      objectHandle: "/data/objects/plum.object_config.json",
      physicsProperties: "test_assets/objects/plum.object_config.json",
      renderMesh: "test_assets/objects/plum.glb"
    },
    {
      object: "spoon",
      objectIcon: "/data/test_assets/objects/spoon.png",
      objectHandle: "/data/objects/spoon.object_config.json",
      physicsProperties: "test_assets/objects/spoon.object_config.json",
      renderMesh: "test_assets/objects/spoon.glb"
    },
    {
      object: "blue wood block",
      objectIcon: "/data/test_assets/objects/b_colored_wood_blocks.png",
      objectHandle: "/data/objects/b_colored_wood_blocks.object_config.json",
      physicsProperties:
        "test_assets/objects/b_colored_wood_blocks.object_config.json",
      renderMesh: "test_assets/objects/b_colored_wood_blocks.glb"
    },
    {
      object: "fork",
      objectIcon: "/data/test_assets/objects/fork.png",
      objectHandle: "/data/objects/fork.object_config.json",
      physicsProperties: "test_assets/objects/fork.object_config.json",
      renderMesh: "test_assets/objects/fork.glb"
    },
    {
      object: "knife",
      objectIcon: "/data/test_assets/objects/knife.png",
      objectHandle: "/data/objects/knife.object_config.json",
      physicsProperties: "test_assets/objects/knife.object_config.json",
      renderMesh: "test_assets/objects/knife.glb"
    },
    {
      object: "red cup",
      objectIcon: "/data/test_assets/objects/e_cups.png",
      objectHandle: "/data/objects/e_cups.object_config.json",
      physicsProperties: "test_assets/objects/e_cups.object_config.json",
      renderMesh: "test_assets/objects/e_cups.glb"
    },
    {
      object: "yellow cup",
      objectIcon: "/data/test_assets/objects/d_cups.png",
      objectHandle: "/data/objects/d_cups.object_config.json",
      physicsProperties: "test_assets/objects/d_cups.object_config.json",
      renderMesh: "test_assets/objects/d_cups.glb"
    },
    {
      object: "toy gun",
      objectIcon: "/data/test_assets/objects/b_toy_airplane.png",
      objectHandle: "/data/objects/b_toy_airplane.object_config.json",
      physicsProperties:
        "test_assets/objects/b_toy_airplane.object_config.json",
      renderMesh: "test_assets/objects/b_toy_airplane.glb"
    },
    {
      object: "screwdriver",
      objectIcon: "/data/test_assets/objects/phillips_screwdriver.png",
      objectHandle: "/data/objects/phillips_screwdriver.object_config.json",
      physicsProperties:
        "test_assets/objects/phillips_screwdriver.object_config.json",
      renderMesh: "test_assets/objects/phillips_screwdriver.glb"
    },
    {
      object: "brown box",
      objectIcon: "/data/test_assets/objects/foam_brick.png",
      objectHandle: "/data/objects/foam_brick.object_config.json",
      physicsProperties: "test_assets/objects/foam_brick.object_config.json",
      renderMesh: "test_assets/objects/foam_brick.glb"
    },
    {
      object: "purple lego",
      objectIcon: "/data/test_assets/objects/b_lego_duplo.png",
      objectHandle: "/data/objects/b_lego_duplo.object_config.json",
      physicsProperties: "test_assets/objects/b_lego_duplo.object_config.json",
      renderMesh: "test_assets/objects/b_lego_duplo.glb"
    },
    {
      object: "blue lego",
      objectIcon: "/data/test_assets/objects/e_lego_duplo.png",
      objectHandle: "/data/objects/e_lego_duplo.object_config.json",
      physicsProperties: "test_assets/objects/e_lego_duplo.object_config.json",
      renderMesh: "test_assets/objects/e_lego_duplo.glb"
    },
    {
      object: "spatula",
      objectIcon: "/data/test_assets/objects/spatula.png",
      objectHandle: "/data/objects/spatula.object_config.json",
      physicsProperties: "test_assets/objects/spatula.object_config.json",
      renderMesh: "test_assets/objects/spatula.glb"
    },
    {
      object: "wrench",
      objectIcon: "/data/test_assets/objects/adjustable_wrench.png",
      objectHandle: "/data/objects/adjustable_wrench.object_config.json",
      physicsProperties:
        "test_assets/objects/adjustable_wrench.object_config.json",
      renderMesh: "test_assets/objects/adjustable_wrench.glb"
    },
    {
      object: "orange cup",
      objectIcon: "/data/test_assets/objects/a_cups.png",
      objectHandle: "/data/objects/a_cups.object_config.json",
      physicsProperties: "test_assets/objects/a_cups.object_config.json",
      renderMesh: "test_assets/objects/a_cups.glb"
    },
    {
      object: "tuna fish can",
      objectIcon: "/data/test_assets/objects/tuna_fish_can.png",
      objectHandle: "/data/objects/tuna_fish_can.object_config.json",
      physicsProperties: "test_assets/objects/tuna_fish_can.object_config.json",
      renderMesh: "test_assets/objects/tuna_fish_can.glb"
    },
    {
      object: "power drill",
      objectIcon: "/data/test_assets/objects/power_drill.png",
      objectHandle: "/data/objects/power_drill.object_config.json",
      physicsProperties: "test_assets/objects/power_drill.object_config.json",
      renderMesh: "test_assets/objects/power_drill.glb"
    },
    {
      object: "green lego",
      objectIcon: "/data/test_assets/objects/a_lego_duplo.png",
      objectHandle: "/data/objects/a_lego_duplo.object_config.json",
      physicsProperties: "test_assets/objects/a_lego_duplo.object_config.json",
      renderMesh: "test_assets/objects/a_lego_duplo.glb"
    },
    {
      object: "purple cup",
      objectIcon: "/data/test_assets/objects/f_cups.png",
      objectHandle: "/data/objects/f_cups.object_config.json",
      physicsProperties: "test_assets/objects/f_cups.object_config.json",
      renderMesh: "test_assets/objects/f_cups.glb"
    },
    {
      object: "pear",
      objectIcon: "/data/test_assets/objects/pear.png",
      objectHandle: "/data/objects/pear.object_config.json",
      physicsProperties: "test_assets/objects/pear.object_config.json",
      renderMesh: "test_assets/objects/pear.glb"
    },
    {
      object: "racquetball",
      objectIcon: "/data/test_assets/objects/racquetball.png",
      objectHandle: "/data/objects/racquetball.object_config.json",
      physicsProperties: "test_assets/objects/racquetball.object_config.json",
      renderMesh: "test_assets/objects/racquetball.glb"
    },
    {
      object: "scissors",
      objectIcon: "/data/test_assets/objects/scissors.png",
      objectHandle: "/data/objects/scissors.object_config.json",
      physicsProperties: "test_assets/objects/scissors.object_config.json",
      renderMesh: "test_assets/objects/scissors.glb"
    },
    {
      object: "white bottle",
      objectIcon: "/data/test_assets/objects/bleach_cleanser.png",
      objectHandle: "/data/objects/bleach_cleanser.object_config.json",
      physicsProperties:
        "test_assets/objects/bleach_cleanser.object_config.json",
      renderMesh: "test_assets/objects/bleach_cleanser.glb"
    }
  ]
};

export const flythroughReplayTask = {
  name: "replay_task_1.json",
  config: "tasks/replay_task_1.json"
};

export const flythroughReplayFile = {
  name: "replay_task_1.csv",
  location: "replays/replay_task_1.csv"
};

export const taskFiles = {
  tasks: [
    {
      name: "task_3.json",
      config: "tasks/task_3.json",
      scene: "empty_house.glb",
      flythroughTask: {
        name: "replay_task_3.json",
        config: "tasks/replay_task_3.json"
      },
      flythroughReplayFile: {
        name: "replay_task_3.csv",
        location: "replays/replay_task_3.csv"
      },
      trainingTask: {
        name: "training_task_3.json",
        config: "tasks/training_task_3.json"
      }
    },
    {
      name: "task_4.json",
      config: "tasks/task_4.json",
      scene: "empty_house.glb",
      flythroughTask: {
        name: "replay_task_3.json",
        config: "tasks/replay_task_3.json"
      },
      flythroughReplayFile: {
        name: "replay_task_3.csv",
        location: "replays/replay_task_3.csv"
      },
      trainingTask: {
        name: "training_task_3.json",
        config: "tasks/training_task_3.json"
      }
    },
    {
      name: "task_5.json",
      config: "tasks/task_5.json",
      scene: "big_house.glb",
      flythroughTask: {
        name: "replay_task_3.json",
        config: "tasks/replay_task_3.json"
      },
      flythroughReplayFile: {
        name: "replay_task_3.csv",
        location: "replays/replay_task_3.csv"
      },
      trainingTask: {
        name: "training_task_5.json",
        config: "tasks/training_task_5.json"
      }
    },
    {
      name: "task_7.json",
      config: "tasks/task_7.json",
      scene: "big_house_2.glb",
      flythroughTask: {
        name: "replay_task_3.json",
        config: "tasks/replay_task_3.json"
      },
      flythroughReplayFile: {
        name: "replay_task_3.csv",
        location: "replays/replay_task_3.csv"
      },
      trainingTask: {
        name: "training_task_7.json",
        config: "tasks/training_task_7.json"
      }
    },
    {
      name: "task_8.json",
      config: "tasks/task_8.json",
      scene: "house_3.glb",
      flythroughTask: {
        name: "replay_task_3.json",
        config: "tasks/replay_task_3.json"
      },
      flythroughReplayFile: {
        name: "replay_task_3.csv",
        location: "replays/replay_task_3.csv"
      },
      trainingTask: {
        name: "training_task_8.json",
        config: "tasks/training_task_8.json"
      }
    }
  ]
};

export const trainingTask = {
  name: "training_task_1.json",
  config: "tasks/training_task_1.json"
};

export const inventorySlots = 1;
