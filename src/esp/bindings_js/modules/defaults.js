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
export const taskHome = "data/tasks/pick_and_place/";
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
    },
    {
      object: "yellow plant pot",
      objectIcon:
        "/data/test_assets/objects/Pennington_Electric_Pot_Cabana_4.png",
      objectHandle:
        "/data/objects/Pennington_Electric_Pot_Cabana_4.object_config.json",
      physicsProperties:
        "test_assets/objects/Pennington_Electric_Pot_Cabana_4.object_config.json",
      renderMesh: "test_assets/objects/Pennington_Electric_Pot_Cabana_4.glb"
    },
    {
      object: "grey plant pot",
      objectIcon: "/data/test_assets/objects/Cole_Hardware_Flower_Pot_1025.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Flower_Pot_1025.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Flower_Pot_1025.object_config.json",
      renderMesh: "test_assets/objects/Cole_Hardware_Flower_Pot_1025.glb"
    },
    {
      object: "red coffee mug",
      objectIcon:
        "/data/test_assets/objects/ACE_Coffee_Mug_Kristen_16_oz_cup.png",
      objectHandle:
        "/data/objects/ACE_Coffee_Mug_Kristen_16_oz_cup.object_config.json",
      physicsProperties:
        "test_assets/objects/ACE_Coffee_Mug_Kristen_16_oz_cup.object_config.json",
      renderMesh: "test_assets/objects/ACE_Coffee_Mug_Kristen_16_oz_cup.glb"
    },
    {
      object: "white tray",
      objectIcon:
        "/data/test_assets/objects/Threshold_Tray_Rectangle_Porcelain.png",
      objectHandle:
        "/data/objects/Threshold_Tray_Rectangle_Porcelain.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Tray_Rectangle_Porcelain.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Tray_Rectangle_Porcelain.glb"
    },
    {
      object: "spiderman action figure",
      objectIcon:
        "/data/test_assets/objects/SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP.png",
      objectHandle:
        "/data/objects/SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP.object_config.json",
      physicsProperties:
        "test_assets/objects/SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP.object_config.json",
      renderMesh:
        "test_assets/objects/SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP.glb"
    },
    {
      object: "toy school bus",
      objectIcon: "/data/test_assets/objects/SCHOOL_BUS.png",
      objectHandle: "/data/objects/SCHOOL_BUS.object_config.json",
      physicsProperties: "test_assets/objects/SCHOOL_BUS.object_config.json",
      renderMesh: "test_assets/objects/SCHOOL_BUS.glb"
    },
    {
      object: "Squirrel",
      objectIcon: "/data/test_assets/objects/Squirrel.png",
      objectHandle: "/data/objects/Squirrel.object_config.json",
      physicsProperties: "test_assets/objects/Squirrel.object_config.json",
      renderMesh: "test_assets/objects/Squirrel.glb"
    },
    {
      object: "green toy train",
      objectIcon:
        "/data/test_assets/objects/Thomas_Friends_Woodan_Railway_Henry.png",
      objectHandle:
        "/data/objects/Thomas_Friends_Woodan_Railway_Henry.object_config.json",
      physicsProperties:
        "test_assets/objects/Thomas_Friends_Woodan_Railway_Henry.object_config.json",
      renderMesh: "test_assets/objects/Thomas_Friends_Woodan_Railway_Henry.glb"
    },
    {
      object: "teapot",
      objectIcon:
        "/data/test_assets/objects/Threshold_Porcelain_Teapot_White.png",
      objectHandle:
        "/data/objects/Threshold_Porcelain_Teapot_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Porcelain_Teapot_White.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Porcelain_Teapot_White.glb"
    },
    {
      object: "chocolate box",
      objectIcon:
        "/data/test_assets/objects/KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces.png",
      objectHandle:
        "/data/objects/KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces.object_config.json",
      physicsProperties:
        "test_assets/objects/KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces.object_config.json",
      renderMesh:
        "test_assets/objects/KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces.glb"
    },
    {
      object: "ramekin",
      objectIcon:
        "/data/test_assets/objects/Threshold_Ramekin_White_Porcelain.png",
      objectHandle:
        "/data/objects/Threshold_Ramekin_White_Porcelain.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Ramekin_White_Porcelain.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Ramekin_White_Porcelain.glb"
    },
    {
      object: "dixie bowl",
      objectIcon: "/data/test_assets/objects/Dixie_10_ounce_Bowls_35_ct.png",
      objectHandle:
        "/data/objects/Dixie_10_ounce_Bowls_35_ct.object_config.json",
      physicsProperties:
        "test_assets/objects/Dixie_10_ounce_Bowls_35_ct.object_config.json",
      renderMesh: "test_assets/objects/Dixie_10_ounce_Bowls_35_ct.glb"
    },
    {
      object: "red fabric cube",
      objectIcon:
        "/data/test_assets/objects/Closetmaid_Premium_Fabric_Cube_Red.png",
      objectHandle:
        "/data/objects/Closetmaid_Premium_Fabric_Cube_Red.object_config.json",
      physicsProperties:
        "test_assets/objects/Closetmaid_Premium_Fabric_Cube_Red.object_config.json",
      renderMesh: "test_assets/objects/Closetmaid_Premium_Fabric_Cube_Red.glb"
    },
    {
      object: "green saucer",
      objectIcon:
        "/data/test_assets/objects/Ecoforms_Quadra_Saucer_SQ1_Avocado.png",
      objectHandle:
        "/data/objects/Ecoforms_Quadra_Saucer_SQ1_Avocado.object_config.json",
      physicsProperties:
        "test_assets/objects/Ecoforms_Quadra_Saucer_SQ1_Avocado.object_config.json",
      renderMesh: "test_assets/objects/Ecoforms_Quadra_Saucer_SQ1_Avocado.glb"
    },
    {
      object: "red orchid pot",
      objectIcon:
        "/data/test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Red.png",
      objectHandle:
        "/data/objects/Down_To_Earth_Orchid_Pot_Ceramic_Red.object_config.json",
      physicsProperties:
        "test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Red.object_config.json",
      renderMesh: "test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Red.glb"
    },
    {
      object: "blue orchid pot",
      objectIcon:
        "/data/test_assets/objects/Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue.png",
      objectHandle:
        "/data/objects/Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue.object_config.json",
      physicsProperties:
        "test_assets/objects/Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue.object_config.json",
      renderMesh:
        "test_assets/objects/Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue.glb"
    },
    {
      object: "blue dog food bowl",
      objectIcon:
        "/data/test_assets/objects/Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total.png",
      objectHandle:
        "/data/objects/Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total.object_config.json",
      physicsProperties:
        "test_assets/objects/Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total.object_config.json",
      renderMesh:
        "test_assets/objects/Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total.glb"
    },
    {
      object: "toy shark",
      objectIcon: "/data/test_assets/objects/Weisshai_Great_White_Shark.png",
      objectHandle:
        "/data/objects/Weisshai_Great_White_Shark.object_config.json",
      physicsProperties:
        "test_assets/objects/Weisshai_Great_White_Shark.object_config.json",
      renderMesh: "test_assets/objects/Weisshai_Great_White_Shark.glb"
    },
    {
      object: "toy school bus",
      objectIcon: "/data/test_assets/objects/Sonny_School_Bus.png",
      objectHandle: "/data/objects/Sonny_School_Bus.object_config.json",
      physicsProperties:
        "test_assets/objects/Sonny_School_Bus.object_config.json",
      renderMesh: "test_assets/objects/Sonny_School_Bus.glb"
    },
    {
      object: "ceramic plate",
      objectIcon:
        "/data/test_assets/objects/Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring.png",
      objectHandle:
        "/data/objects/Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring.object_config.json",
      renderMesh:
        "test_assets/objects/Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring.glb"
    },
    {
      object: "turtle toy",
      objectIcon: "/data/test_assets/objects/Vtech_Roll_Learn_Turtle.png",
      objectHandle: "/data/objects/Vtech_Roll_Learn_Turtle.object_config.json",
      physicsProperties:
        "test_assets/objects/Vtech_Roll_Learn_Turtle.object_config.json",
      renderMesh: "test_assets/objects/Vtech_Roll_Learn_Turtle.glb"
    },
    {
      object: "blue mug",
      objectIcon:
        "/data/test_assets/objects/Cole_Hardware_Mug_Classic_Blue.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Mug_Classic_Blue.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Mug_Classic_Blue.object_config.json",
      renderMesh: "test_assets/objects/Cole_Hardware_Mug_Classic_Blue.glb"
    },
    {
      object: "bookend",
      objectIcon: "/data/test_assets/objects/Victor_Reversible_Bookend.png",
      objectHandle:
        "/data/objects/Victor_Reversible_Bookend.object_config.json",
      physicsProperties:
        "test_assets/objects/Victor_Reversible_Bookend.object_config.json",
      renderMesh: "test_assets/objects/Victor_Reversible_Bookend.glb"
    },
    {
      object: "green toy rail",
      objectIcon:
        "/data/test_assets/objects/Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o.png",
      objectHandle:
        "/data/objects/Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o.object_config.json",
      physicsProperties:
        "test_assets/objects/Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o.object_config.json",
      renderMesh:
        "test_assets/objects/Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o.glb"
    },
    {
      object: "dinosaur action figure",
      objectIcon:
        "/data/test_assets/objects/Schleich_Spinosaurus_Action_Figure.png",
      objectHandle:
        "/data/objects/Schleich_Spinosaurus_Action_Figure.object_config.json",
      physicsProperties:
        "test_assets/objects/Schleich_Spinosaurus_Action_Figure.object_config.json",
      renderMesh: "test_assets/objects/Schleich_Spinosaurus_Action_Figure.glb"
    },
    {
      object: "buzzy bee toy",
      objectIcon:
        "/data/test_assets/objects/Fisher_price_Classic_Toys_Buzzy_Bee.png",
      objectHandle:
        "/data/objects/Fisher_price_Classic_Toys_Buzzy_Bee.object_config.json",
      physicsProperties:
        "test_assets/objects/Fisher_price_Classic_Toys_Buzzy_Bee.object_config.json",
      renderMesh: "test_assets/objects/Fisher_price_Classic_Toys_Buzzy_Bee.glb"
    },
    {
      object: "toy airplane",
      objectIcon: "/data/test_assets/objects/TURBOPROP_AIRPLANE_WITH_PILOT.png",
      objectHandle:
        "/data/objects/TURBOPROP_AIRPLANE_WITH_PILOT.object_config.json",
      physicsProperties:
        "test_assets/objects/TURBOPROP_AIRPLANE_WITH_PILOT.object_config.json",
      renderMesh: "test_assets/objects/TURBOPROP_AIRPLANE_WITH_PILOT.glb"
    },
    {
      object: "dish drainer",
      objectIcon:
        "/data/test_assets/objects/Room_Essentials_Dish_Drainer_Collapsible_White.png",
      objectHandle:
        "/data/objects/Room_Essentials_Dish_Drainer_Collapsible_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Room_Essentials_Dish_Drainer_Collapsible_White.object_config.json",
      renderMesh:
        "test_assets/objects/Room_Essentials_Dish_Drainer_Collapsible_White.glb"
    },
    {
      object: "large ramekin",
      objectIcon:
        "/data/test_assets/objects/Utana_5_Porcelain_Ramekin_Large.png",
      objectHandle:
        "/data/objects/Utana_5_Porcelain_Ramekin_Large.object_config.json",
      physicsProperties:
        "test_assets/objects/Utana_5_Porcelain_Ramekin_Large.object_config.json",
      renderMesh: "test_assets/objects/Utana_5_Porcelain_Ramekin_Large.glb"
    },
    {
      object: "baking pan",
      objectIcon:
        "/data/test_assets/objects/Chef_Style_Round_Cake_Pan_9_inch_pan.png",
      objectHandle:
        "/data/objects/Chef_Style_Round_Cake_Pan_9_inch_pan.object_config.json",
      physicsProperties:
        "test_assets/objects/Chef_Style_Round_Cake_Pan_9_inch_pan.object_config.json",
      renderMesh: "test_assets/objects/Chef_Style_Round_Cake_Pan_9_inch_pan.glb"
    },
    {
      object: "android panda figure",
      objectIcon: "/data/test_assets/objects/Android_Figure_Panda.png",
      objectHandle: "/data/objects/Android_Figure_Panda.object_config.json",
      physicsProperties:
        "test_assets/objects/Android_Figure_Panda.object_config.json",
      renderMesh: "test_assets/objects/Android_Figure_Panda.glb"
    },
    {
      object: "cole hammer",
      objectIcon: "/data/test_assets/objects/Cole_Hardware_Hammer_Black.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Hammer_Black.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Hammer_Black.object_config.json",
      renderMesh: "test_assets/objects/Cole_Hardware_Hammer_Black.glb"
    },
    {
      object: "plastic dog food dish",
      objectIcon:
        "/data/test_assets/objects/Grreat_Choice_Dog_Double_Dish_Plastic_Blue.png",
      objectHandle:
        "/data/objects/Grreat_Choice_Dog_Double_Dish_Plastic_Blue.object_config.json",
      physicsProperties:
        "test_assets/objects/Grreat_Choice_Dog_Double_Dish_Plastic_Blue.object_config.json",
      renderMesh:
        "test_assets/objects/Grreat_Choice_Dog_Double_Dish_Plastic_Blue.glb"
    },
    {
      object: "porcelain spoon",
      objectIcon:
        "/data/test_assets/objects/Threshold_Porcelain_Spoon_Rest_White.png",
      objectHandle:
        "/data/objects/Threshold_Porcelain_Spoon_Rest_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Porcelain_Spoon_Rest_White.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Porcelain_Spoon_Rest_White.glb"
    },
    {
      object: "puzzle football",
      objectIcon:
        "/data/test_assets/objects/Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler.png",
      objectHandle:
        "/data/objects/Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler.object_config.json",
      physicsProperties:
        "test_assets/objects/Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler.object_config.json",
      renderMesh:
        "test_assets/objects/Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler.glb"
    },
    {
      object: "dust pan",
      objectIcon:
        "/data/test_assets/objects/Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct.png",
      objectHandle:
        "/data/objects/Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct.object_config.json",
      physicsProperties:
        "test_assets/objects/Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct.object_config.json",
      renderMesh:
        "test_assets/objects/Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct.glb"
    },
    {
      object: "rahzar action figure",
      objectIcon:
        "/data/test_assets/objects/Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure.png",
      objectHandle:
        "/data/objects/Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure.object_config.json",
      physicsProperties:
        "test_assets/objects/Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure.object_config.json",
      renderMesh:
        "test_assets/objects/Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure.glb"
    },
    {
      object: "toy shark",
      objectIcon: "/data/test_assets/objects/Shark.png",
      objectHandle: "/data/objects/Shark.object_config.json",
      physicsProperties: "test_assets/objects/Shark.object_config.json",
      renderMesh: "test_assets/objects/Shark.glb"
    },
    {
      object: "lion action figure",
      objectIcon: "/data/test_assets/objects/Schleich_Lion_Action_Figure.png",
      objectHandle:
        "/data/objects/Schleich_Lion_Action_Figure.object_config.json",
      physicsProperties:
        "test_assets/objects/Schleich_Lion_Action_Figure.object_config.json",
      renderMesh: "test_assets/objects/Schleich_Lion_Action_Figure.glb"
    },
    {
      object: "brown bag",
      objectIcon:
        "/data/test_assets/objects/INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count.png",
      objectHandle:
        "/data/objects/INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count.object_config.json",
      physicsProperties:
        "test_assets/objects/INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count.object_config.json",
      renderMesh:
        "test_assets/objects/INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count.glb"
    },
    {
      object: "square porcelain plate",
      objectIcon:
        "/data/test_assets/objects/Threshold_Dinner_Plate_Square_Rim_White_Porcelain.png",
      objectHandle:
        "/data/objects/Threshold_Dinner_Plate_Square_Rim_White_Porcelain.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Dinner_Plate_Square_Rim_White_Porcelain.object_config.json",
      renderMesh:
        "test_assets/objects/Threshold_Dinner_Plate_Square_Rim_White_Porcelain.glb"
    },
    {
      object: "pink fabric cube",
      objectIcon:
        "/data/test_assets/objects/Room_Essentials_Fabric_Cube_Lavender.png",
      objectHandle:
        "/data/objects/Room_Essentials_Fabric_Cube_Lavender.object_config.json",
      physicsProperties:
        "test_assets/objects/Room_Essentials_Fabric_Cube_Lavender.object_config.json",
      renderMesh: "test_assets/objects/Room_Essentials_Fabric_Cube_Lavender.glb"
    },
    {
      object: "blue toy train",
      objectIcon:
        "/data/test_assets/objects/Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj.png",
      objectHandle:
        "/data/objects/Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj.object_config.json",
      physicsProperties:
        "test_assets/objects/Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj.object_config.json",
      renderMesh:
        "test_assets/objects/Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj.glb"
    },
    {
      object: "stack ring toy",
      objectIcon:
        "/data/test_assets/objects/Vtech_Stack_Sing_Rings_636_Months.png",
      objectHandle:
        "/data/objects/Vtech_Stack_Sing_Rings_636_Months.object_config.json",
      physicsProperties:
        "test_assets/objects/Vtech_Stack_Sing_Rings_636_Months.object_config.json",
      renderMesh: "test_assets/objects/Vtech_Stack_Sing_Rings_636_Months.glb"
    },
    {
      object: "yellow mug",
      objectIcon:
        "/data/test_assets/objects/Room_Essentials_Mug_White_Yellow.png",
      objectHandle:
        "/data/objects/Room_Essentials_Mug_White_Yellow.object_config.json",
      physicsProperties:
        "test_assets/objects/Room_Essentials_Mug_White_Yellow.object_config.json",
      renderMesh: "test_assets/objects/Room_Essentials_Mug_White_Yellow.glb"
    },
    {
      object: "toy dog",
      objectIcon:
        "/data/test_assets/objects/Toysmith_Windem_Up_Flippin_Animals_Dog.png",
      objectHandle:
        "/data/objects/Toysmith_Windem_Up_Flippin_Animals_Dog.object_config.json",
      physicsProperties:
        "test_assets/objects/Toysmith_Windem_Up_Flippin_Animals_Dog.object_config.json",
      renderMesh:
        "test_assets/objects/Toysmith_Windem_Up_Flippin_Animals_Dog.glb"
    },
    {
      object: "android figure",
      objectIcon: "/data/test_assets/objects/Great_Dinos_Triceratops_Toy.png",
      objectHandle:
        "/data/objects/Great_Dinos_Triceratops_Toy.object_config.json",
      physicsProperties:
        "test_assets/objects/Great_Dinos_Triceratops_Toy.object_config.json",
      renderMesh: "test_assets/objects/Great_Dinos_Triceratops_Toy.glb"
    },
    {
      object: "pressure cooker",
      objectIcon:
        "/data/test_assets/objects/TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black.png",
      objectHandle:
        "/data/objects/TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black.object_config.json",
      physicsProperties:
        "test_assets/objects/TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black.object_config.json",
      renderMesh:
        "test_assets/objects/TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black.glb"
    },
    {
      object: "hair straightener",
      objectIcon:
        "/data/test_assets/objects/Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates.png",
      objectHandle:
        "/data/objects/Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates.object_config.json",
      physicsProperties:
        "test_assets/objects/Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates.object_config.json",
      renderMesh:
        "test_assets/objects/Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates.glb"
    },
    {
      object: "red saucer",
      objectIcon: "/data/test_assets/objects/Ecoforms_Plant_Saucer_SQ8COR.png",
      objectHandle:
        "/data/objects/Ecoforms_Plant_Saucer_SQ8COR.object_config.json",
      physicsProperties:
        "test_assets/objects/Ecoforms_Plant_Saucer_SQ8COR.object_config.json",
      renderMesh: "test_assets/objects/Ecoforms_Plant_Saucer_SQ8COR.glb"
    },
    {
      object: "storage bin",
      objectIcon:
        "/data/test_assets/objects/Curver_Storage_Bin_Black_Small.png",
      objectHandle:
        "/data/objects/Curver_Storage_Bin_Black_Small.object_config.json",
      physicsProperties:
        "test_assets/objects/Curver_Storage_Bin_Black_Small.object_config.json",
      renderMesh: "test_assets/objects/Curver_Storage_Bin_Black_Small.glb"
    },
    {
      object: "white pitcher",
      objectIcon:
        "/data/test_assets/objects/Threshold_Porcelain_Pitcher_White.png",
      objectHandle:
        "/data/objects/Threshold_Porcelain_Pitcher_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Porcelain_Pitcher_White.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Porcelain_Pitcher_White.glb"
    },
    {
      object: "pink saucer",
      objectIcon: "/data/test_assets/objects/Cole_Hardware_Saucer_Electric.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Saucer_Electric.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Saucer_Electric.object_config.json",
      renderMesh: "test_assets/objects/Cole_Hardware_Saucer_Electric.glb"
    },
    {
      object: "white mug",
      objectIcon:
        "/data/test_assets/objects/Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White.png",
      objectHandle:
        "/data/objects/Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White.object_config.json",
      renderMesh:
        "test_assets/objects/Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White.glb"
    },
    {
      object: "cereal bowl",
      objectIcon:
        "/data/test_assets/objects/Threshold_Bead_Cereal_Bowl_White.png",
      objectHandle:
        "/data/objects/Threshold_Bead_Cereal_Bowl_White.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Bead_Cereal_Bowl_White.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Bead_Cereal_Bowl_White.glb"
    },
    {
      object: "flashlight",
      objectIcon: "/data/test_assets/objects/HeavyDuty_Flashlight.png",
      objectHandle: "/data/objects/HeavyDuty_Flashlight.object_config.json",
      physicsProperties:
        "test_assets/objects/HeavyDuty_Flashlight.object_config.json",
      renderMesh: "test_assets/objects/HeavyDuty_Flashlight.glb"
    },
    {
      object: "red plastic bowl",
      objectIcon:
        "/data/test_assets/objects/Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl.png",
      objectHandle:
        "/data/objects/Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl.object_config.json",
      physicsProperties:
        "test_assets/objects/Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl.object_config.json",
      renderMesh:
        "test_assets/objects/Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl.glb"
    },
    {
      object: "soap dish",
      objectIcon:
        "/data/test_assets/objects/Threshold_Bamboo_Ceramic_Soap_Dish.png",
      objectHandle:
        "/data/objects/Threshold_Bamboo_Ceramic_Soap_Dish.object_config.json",
      physicsProperties:
        "test_assets/objects/Threshold_Bamboo_Ceramic_Soap_Dish.object_config.json",
      renderMesh: "test_assets/objects/Threshold_Bamboo_Ceramic_Soap_Dish.glb"
    },
    {
      object: "brown hat",
      objectIcon: "/data/test_assets/objects/DPC_Handmade_Hat_Brown.png",
      objectHandle: "/data/objects/DPC_Handmade_Hat_Brown.object_config.json",
      physicsProperties:
        "test_assets/objects/DPC_Handmade_Hat_Brown.object_config.json",
      renderMesh: "test_assets/objects/DPC_Handmade_Hat_Brown.glb"
    },
    {
      object: "lime orchid pot",
      objectIcon:
        "/data/test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Lime.png",
      objectHandle:
        "/data/objects/Down_To_Earth_Orchid_Pot_Ceramic_Lime.object_config.json",
      physicsProperties:
        "test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Lime.object_config.json",
      renderMesh:
        "test_assets/objects/Down_To_Earth_Orchid_Pot_Ceramic_Lime.glb"
    },
    {
      object: "red butter dish",
      objectIcon:
        "/data/test_assets/objects/Cole_Hardware_Butter_Dish_Square_Red.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Butter_Dish_Square_Red.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Butter_Dish_Square_Red.object_config.json",
      renderMesh: "test_assets/objects/Cole_Hardware_Butter_Dish_Square_Red.glb"
    },
    {
      object: "grey dog food bowl",
      objectIcon:
        "/data/test_assets/objects/Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total.png",
      objectHandle:
        "/data/objects/Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total.object_config.json",
      physicsProperties:
        "test_assets/objects/Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total.object_config.json",
      renderMesh:
        "test_assets/objects/Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total.glb"
    },
    {
      object: "android lego",
      objectIcon: "/data/test_assets/objects/Android_Lego.png",
      objectHandle: "/data/objects/Android_Lego.object_config.json",
      physicsProperties: "test_assets/objects/Android_Lego.object_config.json",
      renderMesh: "test_assets/objects/Android_Lego.glb"
    },
    {
      object: "utensil holder",
      objectIcon:
        "/data/test_assets/objects/BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028.png",
      objectHandle:
        "/data/objects/BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028.object_config.json",
      physicsProperties:
        "test_assets/objects/BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028.object_config.json",
      renderMesh:
        "test_assets/objects/BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028.glb"
    },
    {
      object: "yellow serving bowl",
      objectIcon:
        "/data/test_assets/objects/Cole_Hardware_Bowl_Scirocco_YellowBlue.png",
      objectHandle:
        "/data/objects/Cole_Hardware_Bowl_Scirocco_YellowBlue.object_config.json",
      physicsProperties:
        "test_assets/objects/Cole_Hardware_Bowl_Scirocco_YellowBlue.object_config.json",
      renderMesh:
        "test_assets/objects/Cole_Hardware_Bowl_Scirocco_YellowBlue.glb"
    },
    {
      object: "basket",
      objectIcon: "/data/test_assets/objects/basket.png",
      objectHandle: "/data/objects/basket.object_config.json",
      physicsProperties: "test_assets/objects/basket.object_config.json",
      renderMesh: "test_assets/objects/basket.glb"
    },
    {
      object: "grey hat",
      objectIcon: "/data/test_assets/objects/grey_hat.png",
      objectHandle: "/data/objects/grey_hat.object_config.json",
      physicsProperties: "test_assets/objects/grey_hat.object_config.json",
      renderMesh: "test_assets/objects/grey_hat.glb"
    }
  ]
};

export const flythroughReplayTask = {
  name: "replay_task_1.json",
  config: "tasks/pick_and_place/replay_task_1.json"
};

export const flythroughReplayFile = {
  name: "replay_task_1.csv",
  location: "replays/replay_task_1.csv"
};

export const taskFiles = {
  tasks: [
    {
      name: "remake_v0_JustBigStuff_00.json",
      config: "tasks/clean_floor/remake_v0_JustBigStuff_00.json",
      scene: "remake_v0_JustBigStuff_00.glb",
      trainingTask: {
        name: "training_task_3.json",
        config: "tasks/pick_and_place/training_task_3.json"
      }
    },
    {
      name: "task_4.json",
      config: "tasks/pick_and_place/task_4.json",
      scene: "empty_house.glb",
      trainingTask: {
        name: "training_task_3.json",
        config: "tasks/pick_and_place/training_task_3.json"
      }
    },
    {
      name: "task_5.json",
      config: "tasks/pick_and_place/task_5.json",
      scene: "big_house.glb",
      trainingTask: {
        name: "training_task_5.json",
        config: "tasks/pick_and_place/training_task_5.json"
      }
    },
    {
      name: "task_6.json",
      config: "tasks/pick_and_place/task_6.json",
      scene: "house.glb",
      trainingTask: {
        name: "training_task_6.json",
        config: "tasks/pick_and_place/training_task_6.json"
      }
    },
    {
      name: "task_7.json",
      config: "tasks/pick_and_place/task_7.json",
      scene: "big_house_2.glb",
      trainingTask: {
        name: "training_task_7.json",
        config: "tasks/pick_and_place/training_task_7.json"
      }
    },
    {
      name: "task_9.json",
      config: "tasks/pick_and_place/task_9.json",
      scene: "bigger_house.glb",
      trainingTask: {
        name: "training_task_9.json",
        config: "tasks/pick_and_place/training_task_9.json"
      }
    },
    {
      name: "house_4.json",
      config: "tasks/pick_and_place/house_4.json",
      scene: "house_4.glb",
      trainingTask: {
        name: "house_4_training_task.json",
        config: "tasks/pick_and_place/house_4_training_task.json"
      }
    },
    {
      name: "house_5.json",
      config: "tasks/pick_and_place/house_5.json",
      scene: "house_5.glb",
      trainingTask: {
        name: "house_5_training_task.json",
        config: "tasks/pick_and_place/house_5_training_task.json"
      }
    },
    {
      name: "house_6.json",
      config: "tasks/pick_and_place/house_6.json",
      scene: "house_6.glb",
      trainingTask: {
        name: "house_6_training_task.json",
        config: "tasks/pick_and_place/house_6_training_task.json"
      }
    },
    {
      name: "house_8.json",
      config: "tasks/pick_and_place/house_8.json",
      scene: "house_8.glb",
      trainingTask: {
        name: "house_8_training_task.json",
        config: "tasks/pick_and_place/house_8_training_task.json"
      }
    },
    {
      name: "empty_house_v2.json",
      config: "tasks/pick_and_place/empty_house_v2.json",
      scene: "empty_house.glb",
      trainingTask: {
        name: "training_task_3.json",
        config: "tasks/pick_and_place/training_task_3.json"
      }
    },
    {
      name: "big_house_v2.json",
      config: "tasks/pick_and_place/big_house_v2.json",
      scene: "big_house.glb",
      trainingTask: {
        name: "training_task_5.json",
        config: "tasks/pick_and_place/training_task_5.json"
      }
    },
    {
      name: "house_v2.json",
      config: "tasks/pick_and_place/house_v2.json",
      scene: "house.glb",
      trainingTask: {
        name: "training_task_6.json",
        config: "tasks/pick_and_place/training_task_6.json"
      }
    },
    {
      name: "big_house_2_v2.json",
      config: "tasks/pick_and_place/big_house_2_v2.json",
      scene: "big_house_2.glb",
      trainingTask: {
        name: "training_task_7.json",
        config: "tasks/pick_and_place/training_task_7.json"
      }
    },
    {
      name: "bigger_house_v2.json",
      config: "tasks/pick_and_place/bigger_house_v2.json",
      scene: "bigger_house.glb",
      trainingTask: {
        name: "training_task_9.json",
        config: "tasks/pick_and_place/training_task_9.json"
      }
    },
    {
      name: "remake_v0_JustBigStuff_00.json",
      config: "tasks/clean_floor/remake_v0_JustBigStuff_00.json",
      scene: "remake_v0_JustBigStuff_00.glb",
      trainingTask: {
        name: "remake_v0_JustBigStuff_00_train_task.json",
        config: "tasks/clean_floor/remake_v0_JustBigStuff_00_train_task.json"
      }
    },
    {
      name: "remake_v0_v3_sc4_staging_17.json",
      config: "tasks/clean_floor/remake_v0_v3_sc4_staging_17.json",
      scene: "remake_v0_v3_sc4_staging_17.glb",
      trainingTask: {
        name: "remake_v0_v3_sc4_staging_17_train_task.json",
        config: "tasks/clean_floor/remake_v0_v3_sc4_staging_17_train_task.json"
      }
    },
    {
      name: "remake_v0_v3_sc4_staging_18.json",
      config: "tasks/clean_floor/remake_v0_v3_sc4_staging_18.json",
      scene: "remake_v0_v3_sc4_staging_18.glb",
      trainingTask: {
        name: "remake_v0_v3_sc4_staging_18_train_task.json",
        config: "tasks/clean_floor/remake_v0_v3_sc4_staging_18_train_task.json"
      }
    },
    {
      name: "remake_v0_v3_sc4_staging_19.json",
      config: "tasks/clean_floor/remake_v0_v3_sc4_staging_19.json",
      scene: "remake_v0_v3_sc4_staging_19.glb",
      trainingTask: {
        name: "remake_v0_v3_sc4_staging_19_train_task.json",
        config: "tasks/clean_floor/remake_v0_v3_sc4_staging_19_train_task.json"
      }
    },
    {
      name: "remake_v0_v3_sc4_staging_20.json",
      config: "tasks/clean_floor/remake_v0_v3_sc4_staging_20.json",
      scene: "remake_v0_v3_sc4_staging_20.glb",
      trainingTask: {
        name: "remake_v0_v3_sc4_staging_20_train_task.json",
        config: "tasks/clean_floor/remake_v0_v3_sc4_staging_20_train_task.json"
      }
    },
    {
      name: "i5noydFURQK.json",
      config: "tasks/objectnav/i5noydFURQK.json",
      scene: "i5noydFURQK.glb",
      trainingTask: {
        name: "i5noydFURQK_train.json",
        config: "tasks/objectnav/i5noydFURQK_train.json"
      }
    }
  ]
};

export const trainingTask = {
  name: "training_task_1.json",
  config: "tasks/pick_and_place/training_task_1.json"
};

export const inventorySlots = 1;

export const episodeIdObjectReceptacleMap = {
  object_list: [
    ["tomato_soup_can", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["tomato_soup_can", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["master_chef_can", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["master_chef_can", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["tuna_fish_can", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["tuna_fish_can", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["potted_meat_can", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["potted_meat_can", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["gelatin_box", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["gelatin_box", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["apple", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["apple", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["apple", "Dixie_10_ounce_Bowls_35_ct"],
    ["apple", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["banana", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["banana", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["banana", "Dixie_10_ounce_Bowls_35_ct"],
    ["banana", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["orange", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["orange", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["orange", "Dixie_10_ounce_Bowls_35_ct"],
    ["orange", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["plum", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["plum", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["plum", "Dixie_10_ounce_Bowls_35_ct"],
    ["plum", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["pear", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["pear", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["pear", "Dixie_10_ounce_Bowls_35_ct"],
    ["pear", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["cracker_box", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["cracker_box", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["sugar_box", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["sugar_box", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["mustard_bottle", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["mustard_bottle", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["bleach_cleanser", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["bleach_cleanser", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["spoon", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["spoon", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["spoon", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["fork", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["fork", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["fork", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["knife", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["knife", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["knife", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["spatula", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["spatula", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["spatula", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["b_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["b_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["b_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["c_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["c_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["c_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["e_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["e_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["e_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["d_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["d_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["d_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["a_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["a_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["a_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["f_cups", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["f_cups", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["f_cups", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["mug", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["mug", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["mug", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["bowl", "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"],
    ["bowl", "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"],
    ["bowl", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["plate", "Room_Essentials_Dish_Drainer_Collapsible_White"],
    ["plate", "Dixie_10_ounce_Bowls_35_ct"],
    ["plate", "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl"],
    ["Cole_Hardware_Bowl_Scirocco_YellowBlue", "plate"],
    ["Cole_Hardware_Bowl_Scirocco_YellowBlue", "b_colored_wood_blocks"],
    ["Cole_Hardware_Bowl_Scirocco_YellowBlue", "foam_brick"],
    [
      "Cole_Hardware_Bowl_Scirocco_YellowBlue",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Cole_Hardware_Bowl_Scirocco_YellowBlue",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Cole_Hardware_Bowl_Scirocco_YellowBlue",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Dixie_10_ounce_Bowls_35_ct", "plate"],
    ["Dixie_10_ounce_Bowls_35_ct", "b_colored_wood_blocks"],
    ["Dixie_10_ounce_Bowls_35_ct", "foam_brick"],
    [
      "Dixie_10_ounce_Bowls_35_ct",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Dixie_10_ounce_Bowls_35_ct",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Dixie_10_ounce_Bowls_35_ct",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Threshold_Bead_Cereal_Bowl_White", "plate"],
    ["Threshold_Bead_Cereal_Bowl_White", "b_colored_wood_blocks"],
    ["Threshold_Bead_Cereal_Bowl_White", "foam_brick"],
    [
      "Threshold_Bead_Cereal_Bowl_White",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Threshold_Bead_Cereal_Bowl_White",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Threshold_Bead_Cereal_Bowl_White",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl", "plate"],
    [
      "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl",
      "b_colored_wood_blocks"
    ],
    ["Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl", "foam_brick"],
    [
      "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Bradshaw_International_11642_7_Qt_MP_Plastic_Bowl",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    [
      "Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total",
      "b_colored_wood_blocks"
    ],
    [
      "Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total",
      "colored_wood_blocks"
    ],
    [
      "Top_Paw_Dog_Bowl_Blue_Paw_Bone_Ceramic_25_fl_oz_total",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Grreat_Choice_Dog_Double_Dish_Plastic_Blue", "b_colored_wood_blocks"],
    ["Grreat_Choice_Dog_Double_Dish_Plastic_Blue", "colored_wood_blocks"],
    [
      "Grreat_Choice_Dog_Double_Dish_Plastic_Blue",
      "Curver_Storage_Bin_Black_Small"
    ],
    [
      "Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total",
      "b_colored_wood_blocks"
    ],
    [
      "Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total",
      "colored_wood_blocks"
    ],
    [
      "Grreatv_Choice_Dog_Bowl_Gray_Bones_Plastic_20_fl_oz_total",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Pennington_Electric_Pot_Cabana_4", "b_colored_wood_blocks"],
    ["Pennington_Electric_Pot_Cabana_4", "wood_block"],
    ["Pennington_Electric_Pot_Cabana_4", "foam_brick"],
    ["Pennington_Electric_Pot_Cabana_4", "Curver_Storage_Bin_Black_Small"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Red", "b_colored_wood_blocks"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Red", "wood_block"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Red", "foam_brick"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Red", "Curver_Storage_Bin_Black_Small"],
    ["Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue", "b_colored_wood_blocks"],
    ["Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue", "wood_block"],
    ["Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue", "foam_brick"],
    [
      "Down_To_Earth_Ceramic_Orchid_Pot_Asst_Blue",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Lime", "b_colored_wood_blocks"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Lime", "wood_block"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Lime", "foam_brick"],
    ["Down_To_Earth_Orchid_Pot_Ceramic_Lime", "Curver_Storage_Bin_Black_Small"],
    [
      "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
      "b_colored_wood_blocks"
    ],
    [
      "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
      "colored_wood_blocks"
    ],
    [
      "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP", "basket"],
    [
      "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "SpiderMan_Titan_Hero_12Inch_Action_Figure_5Hnn4mtkFsP",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Schleich_Spinosaurus_Action_Figure", "b_colored_wood_blocks"],
    ["Schleich_Spinosaurus_Action_Figure", "colored_wood_blocks"],
    [
      "Schleich_Spinosaurus_Action_Figure",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Schleich_Spinosaurus_Action_Figure", "basket"],
    [
      "Schleich_Spinosaurus_Action_Figure",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Schleich_Spinosaurus_Action_Figure", "Curver_Storage_Bin_Black_Small"],
    [
      "Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure",
      "b_colored_wood_blocks"
    ],
    [
      "Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure",
      "colored_wood_blocks"
    ],
    [
      "Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure", "basket"],
    [
      "Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Teenage_Mutant_Ninja_Turtles_Rahzar_Action_Figure",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Schleich_Lion_Action_Figure", "b_colored_wood_blocks"],
    ["Schleich_Lion_Action_Figure", "colored_wood_blocks"],
    ["Schleich_Lion_Action_Figure", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Schleich_Lion_Action_Figure", "basket"],
    ["Schleich_Lion_Action_Figure", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Schleich_Lion_Action_Figure", "Curver_Storage_Bin_Black_Small"],
    ["SCHOOL_BUS", "b_colored_wood_blocks"],
    ["SCHOOL_BUS", "colored_wood_blocks"],
    ["SCHOOL_BUS", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["SCHOOL_BUS", "basket"],
    ["SCHOOL_BUS", "Room_Essentials_Fabric_Cube_Lavender"],
    ["SCHOOL_BUS", "Curver_Storage_Bin_Black_Small"],
    ["Thomas_Friends_Woodan_Railway_Henry", "b_colored_wood_blocks"],
    ["Thomas_Friends_Woodan_Railway_Henry", "colored_wood_blocks"],
    [
      "Thomas_Friends_Woodan_Railway_Henry",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Thomas_Friends_Woodan_Railway_Henry", "basket"],
    [
      "Thomas_Friends_Woodan_Railway_Henry",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Thomas_Friends_Woodan_Railway_Henry", "Curver_Storage_Bin_Black_Small"],
    ["Weisshai_Great_White_Shark", "b_colored_wood_blocks"],
    ["Weisshai_Great_White_Shark", "colored_wood_blocks"],
    ["Weisshai_Great_White_Shark", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Weisshai_Great_White_Shark", "basket"],
    ["Weisshai_Great_White_Shark", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Weisshai_Great_White_Shark", "Curver_Storage_Bin_Black_Small"],
    ["Sonny_School_Bus", "b_colored_wood_blocks"],
    ["Sonny_School_Bus", "colored_wood_blocks"],
    ["Sonny_School_Bus", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Sonny_School_Bus", "basket"],
    ["Sonny_School_Bus", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Sonny_School_Bus", "Curver_Storage_Bin_Black_Small"],
    ["Vtech_Roll_Learn_Turtle", "b_colored_wood_blocks"],
    ["Vtech_Roll_Learn_Turtle", "colored_wood_blocks"],
    ["Vtech_Roll_Learn_Turtle", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Vtech_Roll_Learn_Turtle", "basket"],
    ["Vtech_Roll_Learn_Turtle", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Vtech_Roll_Learn_Turtle", "Curver_Storage_Bin_Black_Small"],
    [
      "Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o",
      "b_colored_wood_blocks"
    ],
    ["Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o", "colored_wood_blocks"],
    [
      "Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o", "basket"],
    [
      "Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Thomas_Friends_Wooden_Railway_Porter_5JzRhMm3a9o",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Fisher_price_Classic_Toys_Buzzy_Bee", "b_colored_wood_blocks"],
    ["Fisher_price_Classic_Toys_Buzzy_Bee", "colored_wood_blocks"],
    [
      "Fisher_price_Classic_Toys_Buzzy_Bee",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Fisher_price_Classic_Toys_Buzzy_Bee", "basket"],
    [
      "Fisher_price_Classic_Toys_Buzzy_Bee",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Fisher_price_Classic_Toys_Buzzy_Bee", "Curver_Storage_Bin_Black_Small"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "b_colored_wood_blocks"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "colored_wood_blocks"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "basket"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "Room_Essentials_Fabric_Cube_Lavender"],
    ["TURBOPROP_AIRPLANE_WITH_PILOT", "Curver_Storage_Bin_Black_Small"],
    [
      "Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj",
      "b_colored_wood_blocks"
    ],
    [
      "Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj",
      "colored_wood_blocks"
    ],
    [
      "Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj", "basket"],
    [
      "Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Thomas_Friends_Wooden_Railway_Talking_Thomas_z7yi7UFHJRj",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Vtech_Stack_Sing_Rings_636_Months", "b_colored_wood_blocks"],
    ["Vtech_Stack_Sing_Rings_636_Months", "colored_wood_blocks"],
    ["Vtech_Stack_Sing_Rings_636_Months", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Vtech_Stack_Sing_Rings_636_Months", "basket"],
    [
      "Vtech_Stack_Sing_Rings_636_Months",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Vtech_Stack_Sing_Rings_636_Months", "Curver_Storage_Bin_Black_Small"],
    ["Toysmith_Windem_Up_Flippin_Animals_Dog", "b_colored_wood_blocks"],
    ["Toysmith_Windem_Up_Flippin_Animals_Dog", "colored_wood_blocks"],
    [
      "Toysmith_Windem_Up_Flippin_Animals_Dog",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Toysmith_Windem_Up_Flippin_Animals_Dog", "basket"],
    [
      "Toysmith_Windem_Up_Flippin_Animals_Dog",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Toysmith_Windem_Up_Flippin_Animals_Dog",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Squirrel", "b_colored_wood_blocks"],
    ["Squirrel", "colored_wood_blocks"],
    ["Squirrel", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Squirrel", "basket"],
    ["Squirrel", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Squirrel", "Curver_Storage_Bin_Black_Small"],
    ["Threshold_Porcelain_Teapot_White", "b_colored_wood_blocks"],
    ["Threshold_Porcelain_Teapot_White", "colored_wood_blocks"],
    ["Threshold_Porcelain_Teapot_White", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Threshold_Porcelain_Teapot_White", "basket"],
    [
      "Threshold_Porcelain_Teapot_White",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Threshold_Porcelain_Teapot_White", "Curver_Storage_Bin_Black_Small"],
    [
      "KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces",
      "b_colored_wood_blocks"
    ],
    [
      "KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces",
      "colored_wood_blocks"
    ],
    [
      "KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces", "basket"],
    [
      "KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "KS_Chocolate_Cube_Box_Assortment_By_Neuhaus_2010_Ounces",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Great_Dinos_Triceratops_Toy", "b_colored_wood_blocks"],
    ["Great_Dinos_Triceratops_Toy", "colored_wood_blocks"],
    ["Great_Dinos_Triceratops_Toy", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Great_Dinos_Triceratops_Toy", "basket"],
    ["Great_Dinos_Triceratops_Toy", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Great_Dinos_Triceratops_Toy", "Curver_Storage_Bin_Black_Small"],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "b_colored_wood_blocks"
    ],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "colored_wood_blocks"
    ],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "basket"
    ],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Remington_TStudio_Silk_Ceramic_Hair_Straightener_2_Inch_Floating_Plates",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Threshold_Porcelain_Pitcher_White", "b_colored_wood_blocks"],
    ["Threshold_Porcelain_Pitcher_White", "colored_wood_blocks"],
    ["Threshold_Porcelain_Pitcher_White", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Threshold_Porcelain_Pitcher_White", "basket"],
    [
      "Threshold_Porcelain_Pitcher_White",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    ["Threshold_Porcelain_Pitcher_White", "Curver_Storage_Bin_Black_Small"],
    ["Chef_Style_Round_Cake_Pan_9_inch_pan", "b_colored_wood_blocks"],
    ["Chef_Style_Round_Cake_Pan_9_inch_pan", "colored_wood_blocks"],
    ["Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct", "b_colored_wood_blocks"],
    ["Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct", "colored_wood_blocks"],
    [
      "Ocedar_Snap_On_Dust_Pan_And_Brush_1_ct",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Shark", "b_colored_wood_blocks"],
    ["Shark", "colored_wood_blocks"],
    ["Shark", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Shark", "basket"],
    ["Shark", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Shark", "Curver_Storage_Bin_Black_Small"],
    ["Victor_Reversible_Bookend", "b_colored_wood_blocks"],
    ["Victor_Reversible_Bookend", "colored_wood_blocks"],
    ["Victor_Reversible_Bookend", "Curver_Storage_Bin_Black_Small"],
    ["HeavyDuty_Flashlight", "b_colored_wood_blocks"],
    ["HeavyDuty_Flashlight", "colored_wood_blocks"],
    ["HeavyDuty_Flashlight", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["HeavyDuty_Flashlight", "basket"],
    ["HeavyDuty_Flashlight", "Room_Essentials_Fabric_Cube_Lavender"],
    ["HeavyDuty_Flashlight", "Curver_Storage_Bin_Black_Small"],
    ["Android_Lego", "b_colored_wood_blocks"],
    ["Android_Lego", "colored_wood_blocks"],
    ["Android_Lego", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["Android_Lego", "basket"],
    ["Android_Lego", "Room_Essentials_Fabric_Cube_Lavender"],
    ["Android_Lego", "Curver_Storage_Bin_Black_Small"],
    ["DPC_Handmade_Hat_Brown", "b_colored_wood_blocks"],
    ["DPC_Handmade_Hat_Brown", "colored_wood_blocks"],
    ["DPC_Handmade_Hat_Brown", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["DPC_Handmade_Hat_Brown", "basket"],
    ["DPC_Handmade_Hat_Brown", "Room_Essentials_Fabric_Cube_Lavender"],
    ["DPC_Handmade_Hat_Brown", "Curver_Storage_Bin_Black_Small"],
    ["grey_hat", "b_colored_wood_blocks"],
    ["grey_hat", "colored_wood_blocks"],
    ["grey_hat", "Closetmaid_Premium_Fabric_Cube_Red"],
    ["grey_hat", "basket"],
    ["grey_hat", "Room_Essentials_Fabric_Cube_Lavender"],
    ["grey_hat", "Curver_Storage_Bin_Black_Small"],
    [
      "INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count",
      "b_colored_wood_blocks"
    ],
    [
      "INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count",
      "colored_wood_blocks"
    ],
    [
      "INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count", "basket"],
    [
      "INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "INTERNATIONAL_PAPER_Willamette_4_Brown_Bag_500Count",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler", "b_colored_wood_blocks"],
    ["Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler", "colored_wood_blocks"],
    [
      "Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler",
      "Closetmaid_Premium_Fabric_Cube_Red"
    ],
    ["Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler", "basket"],
    [
      "Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler",
      "Room_Essentials_Fabric_Cube_Lavender"
    ],
    [
      "Toys_R_Us_Treat_Dispenser_Smart_Puzzle_Foobler",
      "Curver_Storage_Bin_Black_Small"
    ],
    ["Threshold_Bamboo_Ceramic_Soap_Dish", "b_colored_wood_blocks"],
    ["Threshold_Bamboo_Ceramic_Soap_Dish", "colored_wood_blocks"],
    ["Cole_Hardware_Butter_Dish_Square_Red", "b_colored_wood_blocks"],
    ["Cole_Hardware_Butter_Dish_Square_Red", "colored_wood_blocks"],
    [
      "BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028",
      "b_colored_wood_blocks"
    ],
    [
      "BIA_Cordon_Bleu_White_Porcelain_Utensil_Holder_900028",
      "colored_wood_blocks"
    ],
    ["Ecoforms_Quadra_Saucer_SQ1_Avocado", "b_colored_wood_blocks"],
    ["Ecoforms_Quadra_Saucer_SQ1_Avocado", "foam_brick"],
    [
      "Ecoforms_Quadra_Saucer_SQ1_Avocado",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    ["Ecoforms_Plant_Saucer_SQ8COR", "b_colored_wood_blocks"],
    ["Ecoforms_Plant_Saucer_SQ8COR", "foam_brick"],
    [
      "Ecoforms_Plant_Saucer_SQ8COR",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    ["Cole_Hardware_Saucer_Electric", "b_colored_wood_blocks"],
    ["Cole_Hardware_Saucer_Electric", "foam_brick"],
    [
      "Cole_Hardware_Saucer_Electric",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring",
      "b_colored_wood_blocks"
    ],
    ["Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring", "foam_brick"],
    [
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    [
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain",
      "b_colored_wood_blocks"
    ],
    ["Threshold_Dinner_Plate_Square_Rim_White_Porcelain", "foam_brick"],
    [
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain",
      "Room_Essentials_Dish_Drainer_Collapsible_White"
    ],
    ["ACE_Coffee_Mug_Kristen_16_oz_cup", "plate"],
    [
      "ACE_Coffee_Mug_Kristen_16_oz_cup",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "ACE_Coffee_Mug_Kristen_16_oz_cup",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Cole_Hardware_Mug_Classic_Blue", "plate"],
    [
      "Cole_Hardware_Mug_Classic_Blue",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Cole_Hardware_Mug_Classic_Blue",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Room_Essentials_Mug_White_Yellow", "plate"],
    [
      "Room_Essentials_Mug_White_Yellow",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Room_Essentials_Mug_White_Yellow",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    ["Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White", "plate"],
    [
      "Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White",
      "Threshold_Dinner_Plate_Square_Rim_White_Porcelain"
    ],
    [
      "Threshold_Porcelain_Coffee_Mug_All_Over_Bead_White",
      "Threshold_Bistro_Ceramic_Dinner_Plate_Ruby_Ring"
    ],
    [
      "TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black",
      "b_colored_wood_blocks"
    ],
    ["TriStar_Products_PPC_Power_Pressure_Cooker_XL_in_Black", "foam_brick"],
    ["Cole_Hardware_Hammer_Black", "b_colored_wood_blocks"],
    ["Cole_Hardware_Hammer_Black", "wood_block"],
    ["Cole_Hardware_Hammer_Black", "foam_brick"]
  ]
};
