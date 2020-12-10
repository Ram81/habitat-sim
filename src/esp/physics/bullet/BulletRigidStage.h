// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

#ifndef ESP_PHYSICS_BULLET_BULLETRIGIDSTAGE_H_
#define ESP_PHYSICS_BULLET_BULLETRIGIDSTAGE_H_

#include "esp/physics/RigidStage.h"
#include "esp/physics/bullet/BulletBase.h"

/** @file
 * @brief Class @ref esp::physics::BulletRigidStage
 */
namespace esp {
namespace physics {

/**
 * @brief An individual rigid stage instance implementing an interface with
 * Bullet physics to enable dynamics. See @ref btCollisionObject
 */

class BulletRigidStage : public BulletBase, public RigidStage {
 public:
  BulletRigidStage(scene::SceneNode* rigidBodyNode,
                   const assets::ResourceManager& resMgr,
                   std::shared_ptr<btMultiBodyDynamicsWorld> bWorld,
                   std::shared_ptr<std::map<const btCollisionObject*, int>>
                       collisionObjToObjIds);

  /**
   * @brief Destructor cleans up simulation structures for the stage object.
   */
  virtual ~BulletRigidStage();

 private:
  /**
   * @brief Finalize the initialization of this @ref RigidScene
   * geometry.  This holds bullet-specific functionality for stages.
   * @param resMgr Reference to resource manager, to access relevant components
   * pertaining to the stage object
   * @return true if initialized successfully, false otherwise.
   */
  bool initialization_LibSpecific() override;

  /**
   * @brief Recursively construct the static collision mesh objects from
   * imported assets.
   * @param transformFromParentToWorld The cumulative parent-to-world
   * transformation matrix constructed by composition down the @ref
   * MeshTransformNode tree to the current node.
   * @param meshGroup Access structure for collision mesh data.
   * @param node The current @ref MeshTransformNode in the recursion.
   */
  void constructBulletSceneFromMeshes(
      const Magnum::Matrix4& transformFromParentToWorld,
      const std::vector<assets::CollisionMeshData>& meshGroup,
      const assets::MeshTransformNode& node);

  /**
   * @brief Adds static stage collision objects to the simulation world after
   * contructing them if necessary.
   */
  void constructAndAddCollisionObjects();

  /**
   * @brief Set the stage to collidable or not by adding/removing the static
   * collision shapes from the simulation world.
   */
  bool setCollidable(bool collidable) override;

 public:
  /**
   * @brief Query the Aabb from bullet physics for the root compound shape of
   * the rigid body in its local space. See @ref btCompoundShape::getAabb.
   * @return The Aabb.
   */
  virtual const Magnum::Range3D getCollisionShapeAabb() const override;

  /** @brief Get the scalar friction coefficient of the stage object. Only
   * used for dervied dynamic implementations of @ref RigidStage.
   * @return The scalar friction coefficient of the stage object.
   */
  virtual double getFrictionCoefficient() const override;

  /** @brief Get the scalar coefficient of restitution  of the stage object.
   * Only used for dervied dynamic implementations of @ref RigidStage.
   * @return The scalar coefficient of restitution  of the stage object.
   */
  virtual double getRestitutionCoefficient() const override;

  /** @brief Set the scalar friction coefficient of the stage object.
   * See @ref btCollisionObject::setFriction.
   * @param frictionCoefficient The new scalar friction coefficient of the
   * stage object.
   */
  void setFrictionCoefficient(const double frictionCoefficient) override;

  /** @brief Set the scalar coefficient of restitution of the stage object.
   * See @ref btCollisionObject::setRestitution.
   * @param restitutionCoefficient The new scalar coefficient of restitution of
   * the stage object.
   */
  void setRestitutionCoefficient(const double restitutionCoefficient) override;

  std::string getCollisionDebugName(int subpartId);

 private:
  // === Physical stage ===

  //! Stage data: Bullet triangular mesh vertices
  std::vector<std::unique_ptr<btTriangleIndexVertexArray>> bStageArrays_;

  //! Stage data: Bullet triangular mesh shape
  std::vector<std::unique_ptr<btBvhTriangleMeshShape>> bStageShapes_;

 public:
  ESP_SMART_POINTERS(BulletRigidStage)

};  // class BulletRigidStage

}  // namespace physics
}  // namespace esp
#endif  // ESP_PHYSICS_BULLET_BULLETRIGIDSTAGE_H_
