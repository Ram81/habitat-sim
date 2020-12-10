// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

/*global Module */

/**
 * SimEnv class
 *
 * TODO(aps,msb) - Add support for multiple agents instead of
 * hardcoding 0th one.
 */
class SimEnv {
  // PUBLIC methods.

  /**
   * Create a simulator.
   * @param {Object} config - simulator config
   * @param {Object} episode - episode to run
   * @param {number} agentId - default agent id
   */
  constructor(config, episode = {}, agentId = 0) {
    this.sim = new Module.Simulator(config);
    this.episode = episode;
    this.initialAgentState = null;

    if (Object.keys(episode).length > 0) {
      this.initialAgentState = this.createAgentState(episode.startState);
    }
    this.selectedAgentId = agentId;
  }

  /**
   * Resets the simulation.
   */
  reset() {
    this.sim.reset();
    if (this.initialAgentState !== null) {
      const agent = this.sim.getAgent(this.selectedAgentId);
      agent.setState(this.initialAgentState, true);
    }
  }

  changeAgent(agentId) {
    this.selectedAgentId = agentId;
  }

  /**
   * Take one step in the simulation.
   * @param {string} action - action to take
   */
  step(action) {
    const agent = this.sim.getAgent(this.selectedAgentId);
    agent.act(action);
  }

  /**
   * Add an agent to the simulation.
   * @param {Object} config - agent config
   */
  addAgent(config) {
    return this.sim.addAgent(this.createAgentConfig(config));
  }

  /**
   * Adds an instance of the specified object mesh to the environment.
   * @param {number} objectLibIndex - index of the object's template
   * @param {number} sceneId - specifies which physical scene to add an object to
   * @returns {number} object ID or -1 if object was unable to be added
   */
  addObject(objectLibIndex) {
    // using default values for rest of the params
    return this.sim.addObject(objectLibIndex, null, "", 0);
  }

  /**
   * Remove an instanced object by ID
   * @param {number} objectID - index of the object's template
   * @param {boolean} deleteObjectNode - if true, deletes the object's scene node
   * @param {boolean} deleteVisualNode - if true, deletes the object's visual node
   * @param {number} sceneId - specifies which physical scene to remove an object from
   */
  removeObject(objectId) {
    // using default values for rest of the params
    return this.sim.removeObject(objectId, true, true, 0);
  }

  /**
   * Adds an instance of the specified object mesh to the environment.
   * @param {number} objectLibHandle - object's template config/origin handle
   * @returns {number} object ID or -1 if object was unable to be added
   */
  addObjectByHandle(objectLibHandle) {
    // using default values for rest of the params
    return this.sim.addObjectByHandle(objectLibHandle, null, "", 0);
  }

  /**
   * Add a random primitive object to the environment.
   * @returns {number} object ID or -1 if object was unable to be added
   */
  addPrimitiveObject() {
    let objId = this.addObjectByHandle(
      "cylinderSolid_rings_1_segments_12_halfLen_1_useTexCoords_false_useTangents_false_capEnds_true"
    );
    this.setTranslation([3.004, 1.5, 7.0], objId, 0);
    console.log(objId);
    return objId;
  }

  /**
   * Add a random primitive object to the environment.
   * @returns {number} object ID or -1 if object was unable to be added
   */
  removeLastObject() {
    let exsitingObjectIds = this.getExistingObjectIDs();
    this.removeObject(exsitingObjectIds.get(exsitingObjectIds.size() - 1));
  }

  /**
   * Get the observation space for a given sensorId.
   * @param {number} sensorId - id of sensor
   * @returns {ObservationSpace} observation space of sensor
   */
  getObservationSpace(sensorId) {
    return this.sim.getAgentObservationSpace(this.selectedAgentId, sensorId);
  }

  /**
   * Get an observation from the given sensorId.
   * @param {number} sensorId - id of sensor
   * @param {Observation} obs - observation is read into this object
   */
  getObservation(sensorId, obs) {
    this.sim.getAgentObservation(this.selectedAgentId, sensorId, obs);
    return obs;
  }

  /**
   * Get the PathFinder for the scene.
   * @returns {PathFinder} pathFinder of the scene
   */
  getPathFinder() {
    return this.sim.getPathFinder();
  }

  /**
   * Get the motion type of an object.
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   * @returns {MotionType} object MotionType or ERROR_MOTIONTYPE if query failed
   */
  getObjectMotionType(objectID, sceneID) {
    return this.sim.getObjectMotionType(objectID, sceneID);
  }

  /**
   * Set the motion type of an object.
   * * @param {MotionType} motionType - desired motion type of the object
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   * @returns {bool} object MotionType or ERROR_MOTIONTYPE if query failed
   */
  setObjectMotionType(motionType, objectID, sceneID) {
    return this.sim.setObjectMotionType(motionType, objectID, sceneID);
  }

  /**
   * Get the IDs of the physics objects instanced in a physical scene.
   * @param {number} sceneID - scene id
   * @returns {Array} list of existing object Ids in the scene
   */
  getExistingObjectIDs(sceneId = 0) {
    return this.sim.getExistingObjectIDs(sceneId);
  }

  /**
   * Set the 4x4 transformation matrix of an object kinematically.
   * @param {Magnum::Matrix4} transform - desired 4x4 transform of the object.
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   */
  setTransformation(transform, objectID, sceneID) {
    this.sim.setTransformation(transform, objectID, sceneID);
  }

  /**
   * Get the current 4x4 transformation matrix of an object.
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   * @returns {Magnum::Matrix4} 4x4 transform of the object
   */
  getTransformation(objectID, sceneID) {
    return this.sim.getTransformation(objectID, sceneID);
  }

  /**
   * Get the current 3D position of an object.
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   * @returns {Magnum::Vector3} 3D position of the object
   */
  getTranslation(objectID, sceneID) {
    return this.sim.getTranslation(objectID, sceneID);
  }

  /**
   * Set the 3D position of an object kinematically.
   * @param {Magnum::Vector3} translation - 3D position of the object
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   */
  setTranslation(translation, objectID, sceneID) {
    this.sim.setTranslation(translation, objectID, sceneID);
  }

  /**
   * Get the current orientation of an object.
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   * @returns {Magnum::Vector3} quaternion representation of the object's orientation
   */
  getRotation(objectID, sceneID) {
    return this.sim.getRotation(objectID, sceneID);
  }

  /**
   * Set the orientation of an object kinematically.
   * @param {Magnum::Vector3} rotation - desired orientation of the object
   * @param {number} objectID - object id identifying the object in sim.existingObjects_
   * @param {number} sceneID - scene id
   */
  setRotation(rotation, objectID, sceneID) {
    this.sim.setRotation(rotation, objectID, sceneID);
  }

  /**
   * @param {double} dt - step the physical world forward in time by a desired duration.
   * @returns {double} world time after step
   */
  stepWorld(dt = 1.0 / 60.0) {
    return this.sim.stepWorld(dt);
  }

  /**
   * Display an observation from the given sensorId
   * to canvas selected as default frame buffer.
   * @param {number} sensorId - id of sensor
   */
  displayObservation(sensorId) {
    this.sim.displayObservation(0, sensorId);
  }

  /**
   * Get the semantic scene.
   * @returns {SemanticScene} semantic scene
   */
  getSemanticScene() {
    return this.sim.getSemanticScene();
  }

  getAgentState() {
    let state = new Module.AgentState();
    const agent = this.sim.getAgent(this.selectedAgentId);
    agent.getState(state);
    return state;
  }

  /**
   * Get the distance to goal in polar coordinates.
   * @returns {Array} [magnitude, clockwise-angle (in radians)]
   */
  distanceToGoal() {
    if (Object.keys(this.episode).length === 0) {
      return [0, 0];
    }
    let dst = this.episode.goal.position;
    let state = this.getAgentState();
    let src = state.position;
    let dv = [dst[0] - src[0], dst[1] - src[1], dst[2] - src[2]];
    dv = this.applyRotation(dv, state.rotation);
    return this.cartesian_to_polar(-dv[2], dv[0]);
  }

  // PRIVATE methods.

  // Rotate vector, v, by quaternion, q.
  // Result r = q' * v * q where q' is the quaternion conjugate.
  // http://www.chrobotics.com/library/understanding-quaternions
  applyRotation(v, q) {
    let x, y, z;
    [x, y, z] = v;
    let qx, qy, qz, qw;
    [qx, qy, qz, qw] = q;

    // i = q' * v
    let ix = qw * x - qy * z + qz * y;
    let iy = qw * y - qz * x + qx * z;
    let iz = qw * z - qx * y + qy * x;
    let iw = qx * x + qy * y + qz * z;

    // r = i * q
    let r = [];
    r[0] = ix * qw + iw * qx + iy * qz - iz * qy;
    r[1] = iy * qw + iw * qy + iz * qx - ix * qz;
    r[2] = iz * qw + iw * qz + ix * qy - iy * qx;

    return r;
  }

  cartesian_to_polar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
  }

  createSensorSpec(config) {
    const converted = new Module.SensorSpec();
    for (let key in config) {
      let value = config[key];
      converted[key] = value;
    }
    return converted;
  }

  createAgentConfig(config) {
    const converted = new Module.AgentConfiguration();
    for (let key in config) {
      let value = config[key];
      if (key === "sensorSpecifications") {
        const sensorSpecs = new Module.VectorSensorSpec();
        for (let c of value) {
          sensorSpecs.push_back(this.createSensorSpec(c));
        }
        value = sensorSpecs;
      }
      converted[key] = value;
    }
    return converted;
  }

  createAgentState(state) {
    const converted = new Module.AgentState();
    for (let key in state) {
      let value = state[key];
      converted[key] = value;
    }
    return converted;
  }
}

export default SimEnv;
