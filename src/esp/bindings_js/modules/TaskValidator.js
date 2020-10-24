// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/**
 * TaskValidator class
 */
class TaskValidator {
  // PUBLIC methods.

  /**
   * Create task validator.
   * @param {object} episode - task config
   */
  constructor(episode, sim) {
    this.episode = episode;
    this.sim = sim;
    this.task = this.episode.task;
  }

  validate() {
    if (this.task === undefined) {
      return true;
    }
    if (this.task.type === "arrangement") {
      return this.validateArrangementTask();
    } else if (this.task.type === "stacking") {
      return this.validateStackingTask();
    }
  }

  validateArrangementTask() {
    let goal = this.task.goals;
    if (goal === undefined || goal.objectToReceptacleMap === undefined) {
      return true;
    }

    let objectToGoalMap = goal.objectToReceptacleMap;
    let objectsInScene = this.sim.getObjectsInScene();
    for (let key in objectToGoalMap) {
      let sourceObjectId = objectsInScene[parseInt(key)]["objectId"];
      let receptacles = objectToGoalMap[key];

      let success = false;
      for (let i = 0; i < receptacles.length; i++) {
        let receptacleObjectId = objectsInScene[receptacles[i]]["objectId"];
        let distance = this.sim.getDistanceBetweenObjects(
          sourceObjectId,
          receptacleObjectId
        );
        if (distance <= 0.8) {
          success = true;
        }
      }
      if (!success) {
        return false;
      }
    }
    return true;
  }

  validateStackingTask() {}
}

export default TaskValidator;
