// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

#ifndef ESP_PHYSICS_BULLET_BULLETBASE_H_
#define ESP_PHYSICS_BULLET_BULLETBASE_H_

#include <Magnum/BulletIntegration/MotionState.h>
#include <btBulletDynamicsCommon.h>

#include "BulletDynamics/Featherstone/btMultiBodyDynamicsWorld.h"
#include "esp/assets/Asset.h"
#include "esp/assets/BaseMesh.h"
#include "esp/assets/MeshMetaData.h"
#include "esp/core/esp.h"
#include "esp/scene/SceneNode.h"

namespace esp {
namespace physics {

/**
@brief Implements Bullet physics @ref btCollisionWorld::ContactResultCallback
interface.

Stores the results of a collision check within the world.
*/
struct SimulationContactResultCallback
    : public btCollisionWorld::ContactResultCallback {
  /**
   * @brief Set when a contact is detected.
   */
  bool bCollision;

  /**
   * @brief Constructor.
   */
  SimulationContactResultCallback() { bCollision = false; }

  /**
   * @brief Called when a contact is detected.
   *
   * Sets a collision flag on every detected collision. Can be updated to do
   * more.
   * @param cp Contains detailed information about the contact point being
   * added.
   */
  btScalar addSingleResult(
      CORRADE_UNUSED btManifoldPoint& cp,
      CORRADE_UNUSED const btCollisionObjectWrapper* colObj0Wrap,
      CORRADE_UNUSED int partId0,
      CORRADE_UNUSED int index0,
      CORRADE_UNUSED const btCollisionObjectWrapper* colObj1Wrap,
      CORRADE_UNUSED int partId1,
      CORRADE_UNUSED int index1) override {
    bCollision = true;
    return 0;  // not used
  }
};

struct PreAddSimulationContactResultCallback
    : public btCollisionWorld::ContactResultCallback {
  /**
   * @brief Set when a contact is detected.
   */
  bool bCollision;
  std::map<const btCollisionObject*, const btCollisionObject*> collisionObjMap;

  /**
   * @brief Constructor.
   */
  PreAddSimulationContactResultCallback() { bCollision = false; }

  /**
   * @brief Called when a contact is detected.
   *
   * Sets a collision flag on every detected collision. Can be updated to do
   * more.
   * @param cp Contains detailed information about the contact point being
   * added.
   */
  btScalar addSingleResult(
      CORRADE_UNUSED btManifoldPoint& cp,
      CORRADE_UNUSED const btCollisionObjectWrapper* colObj0Wrap,
      CORRADE_UNUSED int partId0,
      CORRADE_UNUSED int index0,
      CORRADE_UNUSED const btCollisionObjectWrapper* colObj1Wrap,
      CORRADE_UNUSED int partId1,
      CORRADE_UNUSED int index1) override {
    collisionObjMap.emplace(colObj0Wrap->getCollisionObject(),
                            colObj1Wrap->getCollisionObject());
    collisionObjMap.emplace(colObj1Wrap->getCollisionObject(),
                            colObj0Wrap->getCollisionObject());
    bCollision = true;
    return 0;  // not used
  }
};

/**
 * @brief This class is intended to implement bullet-specific
 */

class BulletBase {
 public:
  BulletBase(std::shared_ptr<btMultiBodyDynamicsWorld> bWorld,
             std::shared_ptr<std::map<const btCollisionObject*, int>>
                 collisionObjToObjIds)
      : bWorld_(bWorld), collisionObjToObjIds_(collisionObjToObjIds) {}

  /**
   * @brief Destructor cleans up simulation structures for the object.
   */
  virtual ~BulletBase() { bWorld_.reset(); }

  /** @brief Get the scalar collision margin of an object. Retun 0.0 for a @ref
   * RigidObjectType::SCENE. See @ref btCompoundShape::getMargin.
   * @return The scalar collision margin of the object.
   */
  virtual double getMargin() const { return 0.0; };

  /** @brief Set the scalar collision margin of an object. Does not affect @ref
   * RigidObjectType::SCENE. See @ref btCompoundShape::setMargin.
   * @param margin The new scalar collision margin of the object.
   */
  virtual void setMargin(CORRADE_UNUSED const double margin) {}

  /**
   * @brief Query the Aabb from bullet physics for the root compound shape of
   * the rigid body in its local space. See @ref btCompoundShape::getAabb.
   * @return The Aabb.
   */
  virtual const Magnum::Range3D getCollisionShapeAabb() const = 0;

 protected:
  /** @brief A pointer to the Bullet world to which this object belongs. See
   * @ref btMultiBodyDynamicsWorld.*/
  std::shared_ptr<btMultiBodyDynamicsWorld> bWorld_;

  /** @brief Static data: All components of a @ref RigidObjectType::SCENE are
   * stored here. Also, all objects set to STATIC are stored here.
   */
  std::vector<std::unique_ptr<btRigidBody>> bStaticCollisionObjects_;

  //! keep a map of collision objects to object ids for quick lookups from
  //! Bullet collision checking.
  std::shared_ptr<std::map<const btCollisionObject*, int>>
      collisionObjToObjIds_;

 public:
  ESP_SMART_POINTERS(BulletBase)
};  // class BulletBase

}  // namespace physics
}  // namespace esp

#endif  // ESP_PHYSICS_BULLET_BULLETBASE_H_
