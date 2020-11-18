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

    if (this.sim.grippedObjectId != -1) {
      return false;
    }

    let objectToGoalMap = goal.objectToReceptacleMap;
    let objectsInScene = this.sim.getObjectsInScene();
    let episode = this.sim.episode;
    let taskStarted = false;

    // Check if objects have moved from the initial position
    let objectsInitialState = episode.objects;
    for (let index in objectsInitialState) {
      let objectId = objectsInitialState[index]["objectId"];
      let objectInitialTranslation = objectsInitialState[index]["position"];
      let objectTranslation = this.sim.convertVector3ToVec3f(
        this.sim.getTranslation(objectId, 0)
      );

      let distance = this.sim.geodesicDistance(
        objectInitialTranslation,
        objectTranslation
      );
      if (distance > 0) {
        taskStarted = true;
      }
    }

    for (let key in objectToGoalMap) {
      let sourceObjectId = objectsInScene[parseInt(key)]["objectId"];
      let sourcePosition = this.sim.convertVector3ToVec3f(
        this.sim.getTranslation(sourceObjectId, 0)
      );
      let receptacles = objectToGoalMap[key];

      let success = false;
      for (let i = 0; i < receptacles.length; i++) {
        let receptacleObjectId = objectsInScene[receptacles[i]]["objectId"];
        let receptaclePosition = this.sim.convertVector3ToVec3f(
          this.sim.getTranslation(receptacleObjectId, 0)
        );

        let distance = this.sim.geodesicDistance(
          sourcePosition,
          receptaclePosition
        );
        let receptacleY =
          receptaclePosition[1] +
          this.sim.getObjectBBYCoord(receptacleObjectId);
        if (distance <= 1.5 && sourcePosition[1] > receptacleY) {
          success = true;
        }
      }
      if (!success) {
        return false;
      }
    }
    return true && taskStarted;
  }

  validateStackingTask() {}
}

export default TaskValidator;
