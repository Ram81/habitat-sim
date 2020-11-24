# #!/usr/bin/env python3

# import numpy as np

# import habitat_sim.bindings as hsim
# from habitat_sim.agent.controls.controls import ActuationSpec, SceneNodeControl
# from habitat_sim.registry import registry
# from habitat_sim.scene import SceneNode


# def _grab_release_object_under_crosshair(
#     ref_point, sim: hsim.SimulatorBackend, distance: float
# ):
#     resolution = sim.get_resolution()
#     ray = sim.unproject(sim.get_crosshair_position())
#     nearest_object_id = sim.find_nearest_object_under_crosshair(
#         ray.direction, ref_point, resolution, distance
#     )
#     return {"nearest_object_id": nearest_object_id}


# @registry.register_move_fn(body_action=False, interact_action=True)
# class GrabOrReleaseObjectUnderCrosshair(SceneNodeControl):
#     def __call__(
#         self,
#         scene_node: SceneNode,
#         actuation_spec: ActuationSpec,
#         sim: hsim.SimulatorBackend,
#         ref_point: np.array,
#     ):
#         gripped_object_id = _grab_release_object_under_crosshair(
#             ref_point, sim, actuation_spec.amount
#         )
#         # print("Gripped Object ID: ", gripped_object_id)
#         return gripped_object_id


# registry.register_move_fn(
#     GrabOrReleaseObjectUnderCrosshair,
#     name="grab_release_object",
#     body_action=False,
#     interact_action=True,
# )
