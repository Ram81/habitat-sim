// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

#ifndef ESP_GFX_DEBUGRENDER_H_
#define ESP_GFX_DEBUGRENDER_H_

/** @file
 * Utility for on-the-fly rendering of lines (e.g. every frame). This is
 * intended for debugging. The API prioritizes ease-of-use over maximum runtime
 * performance.
 */

#include <Corrade/Containers/Array.h>
#include <Corrade/Utility/Macros.h>
#include <Magnum/GL/Buffer.h>
#include <Magnum/GL/Mesh.h>
#include <Magnum/Math/Color.h>
#include <Magnum/Math/Matrix4.h>
#include <Magnum/Shaders/VertexColor.h>

#include <vector>
namespace esp {
namespace gfx {

/**
@brief todo
*/
class DebugRender {
 public:
  /**
   * @brief Constructor
   * @param initialBufferCapacity     Amount of lines for which to
   *      reserve memory in the buffer vector.
   *
   * Sets up @ref Shaders::VertexColor4D, @ref GL::Buffer and
   * @ref GL::Mesh for physics debug rendering.
   */
  explicit DebugRender(std::size_t initialBufferCapacity = 0);

  /** @brief Copying is not allowed */
  DebugRender(const DebugRender&) = delete;

  /** @brief Copying is not allowed */
  DebugRender& operator=(const DebugRender&) = delete;

  /** @brief Set transformation projection matrix used for rendering */
  DebugRender& setTransformationProjectionMatrix(
      const Magnum::Matrix4& matrix) {
    _transformationProjectionMatrix = matrix;
    return *this;
  }

  void drawLine(const Magnum::Vector3& from,
                const Magnum::Vector3& to,
                const Magnum::Color4& color);
  void drawLine(const Magnum::Vector3& from,
                const Magnum::Vector3& to,
                const Magnum::Color4& fromColor,
                const Magnum::Color4& toColor);
  void flushLines();

  void pushInputTransform(const Magnum::Matrix4& transform);
  void popInputTransform();
  void drawTransformedLine(const Magnum::Vector3& from,
                           const Magnum::Vector3& to,
                           const Magnum::Color4& color);
  void drawTransformedLine(const Magnum::Vector3& from,
                           const Magnum::Vector3& to,
                           const Magnum::Color4& fromColor,
                           const Magnum::Color4& toColor);

  void drawBox(const Magnum::Vector3& min,
               const Magnum::Vector3& max,
               const Magnum::Color4& color);

  void drawCircle(const Magnum::Vector3& pos,
                  const Magnum::Vector3& normal,
                  float radius,
                  int numSegments,
                  const Magnum::Color4& color);

 private:
  void updateCachedInputTransform();

  struct VertexRecord {
    Magnum::Vector3 pos;
    Magnum::Color4 color;
  };

  std::vector<Magnum::Matrix4> _inputTransformStack;
  Magnum::Matrix4 _cachedInputTransform{Magnum::Math::IdentityInit};
  Magnum::Matrix4 _transformationProjectionMatrix{Magnum::Math::IdentityInit};
  Magnum::Shaders::VertexColor3D _shader;
  Magnum::GL::Buffer _buffer;
  Magnum::GL::Mesh _mesh;
  Magnum::Containers::Array<VertexRecord> _bufferData;
};

}  // namespace gfx
}  // namespace esp

#endif
