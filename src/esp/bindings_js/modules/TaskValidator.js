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
    let goal = this.task.goal;
    if (goal === undefined || goal.objectToGoalMap === undefined) {
      return true;
    }

    let objectToGoalMap = goal.objectToGoalMap;
    for (let key in objectToGoalMap) {
      let sourceObjectId = parseInt(key);
      let receptacles = objectToGoalMap[key];

      let success = false;
      for (let i = 0; i < receptacles.length; i++) {
        let distance = this.sim.getDistanceBetweenObjects(
          sourceObjectId,
          receptacles[i]
        );
        if (distance <= 2.0) {
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
