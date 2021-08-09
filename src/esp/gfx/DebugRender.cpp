// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

#include "DebugRender.h"

#include <Corrade/Containers/GrowableArray.h>
#include <Magnum/GL/Renderer.h>
#include <Magnum/Math/Color.h>

namespace Cr = Corrade;
namespace Mn = Magnum;

namespace esp {
namespace gfx {

DebugRender::DebugRender(const std::size_t initialBufferCapacity)
    : _mesh{Mn::GL::MeshPrimitive::Lines} {
  _mesh.addVertexBuffer(_buffer, 0, Mn::Shaders::VertexColor3D::Position{},
                        Mn::Shaders::VertexColor3D::Color4{});
  arrayReserve(_bufferData, initialBufferCapacity * 2);  // todo: what is this?
}

void DebugRender::drawLine(const Mn::Vector3& from,
                           const Mn::Vector3& to,
                           const Mn::Color4& color) {
  drawLine(from, to, color, color);
}

void DebugRender::drawLine(const Mn::Vector3& from,
                           const Mn::Vector3& to,
                           const Mn::Color4& fromColor,
                           const Mn::Color4& toColor) {
  VertexRecord v1{from, fromColor};
  VertexRecord v2{to, toColor};
  arrayAppend(_bufferData, {v1, v2});
}

void DebugRender::flushLines() {
  bool doToggleBlend = !glIsEnabled(GL_BLEND);

  if (doToggleBlend) {
    Mn::GL::Renderer::enable(Mn::GL::Renderer::Feature::Blending);
  }

  // Update buffer with new data
  _buffer.setData(_bufferData, Mn::GL::BufferUsage::DynamicDraw);

  // Update shader
  _mesh.setCount(_bufferData.size());

  static bool enableSmooth = false;
  if (enableSmooth) {
    glEnable(GL_LINE_SMOOTH);
  } else {
    glDisable(GL_LINE_SMOOTH);
  }
  static float lineWidth = 20.5f;
  glLineWidth(lineWidth);

#if 0
  _shader.setTransformationProjectionMatrix(_transformationProjectionMatrix);

  // draw normal
  _shader.draw(_mesh);
#endif

#if 1
  static float x = 0.0015;
  for (const auto& offset : {Mn::Vector3(x, x, 0), Mn::Vector3(-x, x, 0),
                             Mn::Vector3(x, -x, 0), Mn::Vector3(-x, -x, 0)}) {
    // static Mn::Vector3 offset0(0.0025, 0.0025, 0);
    Magnum::Matrix4 offset0mat = Mn::Matrix4::translation(offset);
    _shader.setTransformationProjectionMatrix(offset0mat *
                                              _transformationProjectionMatrix);
    _shader.draw(_mesh);
  }
#endif

  // modify all colors to be semi-transparent
  // perf todo: do a custom shader constant for opacity instead so we don't have
  // to touch all the verts
  static float opacity = 0.1;
  for (int v = 0; v < _bufferData.size(); v++) {
    _bufferData[v].color.w() *= opacity;
  }
  _buffer.setData(_bufferData, Mn::GL::BufferUsage::DynamicDraw);

  Mn::GL::Renderer::setDepthFunction(Mn::GL::Renderer::DepthFunction::Greater);

#if 0
  _shader.draw(_mesh);
#endif
#if 1
  for (const auto& offset : {Mn::Vector3(x, x, 0), Mn::Vector3(-x, x, 0),
                             Mn::Vector3(x, -x, 0), Mn::Vector3(-x, -x, 0)}) {
    // static Mn::Vector3 offset0(0.0025, 0.0025, 0);
    Magnum::Matrix4 offset0mat = Mn::Matrix4::translation(offset);
    _shader.setTransformationProjectionMatrix(offset0mat *
                                              _transformationProjectionMatrix);
    _shader.draw(_mesh);
  }
#endif

  Mn::GL::Renderer::setDepthFunction(Mn::GL::Renderer::DepthFunction::Less);

  /* Clear buffer to receive new data */
  arrayResize(_bufferData, 0);

  if (doToggleBlend) {
    Mn::GL::Renderer::disable(Mn::GL::Renderer::Feature::Blending);
  }
}

void DebugRender::pushInputTransform(const Magnum::Matrix4& transform) {
  _inputTransformStack.push_back(transform);
  updateCachedInputTransform();
}

void DebugRender::popInputTransform() {
  CORRADE_INTERNAL_ASSERT(!_inputTransformStack.empty());
  _inputTransformStack.pop_back();
  updateCachedInputTransform();
}

void DebugRender::drawTransformedLine(const Magnum::Vector3& from,
                                      const Magnum::Vector3& to,
                                      const Magnum::Color4& color) {
  drawTransformedLine(from, to, color, color);
}

void DebugRender::drawTransformedLine(const Magnum::Vector3& from,
                                      const Magnum::Vector3& to,
                                      const Magnum::Color4& fromColor,
                                      const Magnum::Color4& toColor) {
  Mn::Vector3 fromTransformed = _cachedInputTransform.transformPoint(from);
  Mn::Vector3 toTransformed = _cachedInputTransform.transformPoint(to);
  drawLine(fromTransformed, toTransformed, fromColor, toColor);
}

void DebugRender::drawBox(const Magnum::Vector3& min,
                          const Magnum::Vector3& max,
                          const Magnum::Color4& color) {
  // 4 lines along x axis
  drawTransformedLine(Mn::Vector3(min.x(), min.y(), min.z()),
                      Mn::Vector3(max.x(), min.y(), min.z()), color);
  drawTransformedLine(Mn::Vector3(min.x(), min.y(), max.z()),
                      Mn::Vector3(max.x(), min.y(), max.z()), color);
  drawTransformedLine(Mn::Vector3(min.x(), max.y(), min.z()),
                      Mn::Vector3(max.x(), max.y(), min.z()), color);
  drawTransformedLine(Mn::Vector3(min.x(), max.y(), max.z()),
                      Mn::Vector3(max.x(), max.y(), max.z()), color);

  // 4 lines along y axis
  drawTransformedLine(Mn::Vector3(min.x(), min.y(), min.z()),
                      Mn::Vector3(min.x(), max.y(), min.z()), color);
  drawTransformedLine(Mn::Vector3(max.x(), min.y(), min.z()),
                      Mn::Vector3(max.x(), max.y(), min.z()), color);
  drawTransformedLine(Mn::Vector3(min.x(), min.y(), max.z()),
                      Mn::Vector3(min.x(), max.y(), max.z()), color);
  drawTransformedLine(Mn::Vector3(max.x(), min.y(), max.z()),
                      Mn::Vector3(max.x(), max.y(), max.z()), color);

  // 4 lines along z axis
  drawTransformedLine(Mn::Vector3(min.x(), min.y(), min.z()),
                      Mn::Vector3(min.x(), min.y(), max.z()), color);
  drawTransformedLine(Mn::Vector3(max.x(), min.y(), min.z()),
                      Mn::Vector3(max.x(), min.y(), max.z()), color);
  drawTransformedLine(Mn::Vector3(min.x(), max.y(), min.z()),
                      Mn::Vector3(min.x(), max.y(), max.z()), color);
  drawTransformedLine(Mn::Vector3(max.x(), max.y(), min.z()),
                      Mn::Vector3(max.x(), max.y(), max.z()), color);
}

void DebugRender::drawCircle(const Magnum::Vector3& pos,
                             const Magnum::Vector3& normal,
                             float radius,
                             int numSegments,
                             const Magnum::Color4& color) {
  // https://stackoverflow.com/questions/11132681/what-is-a-formula-to-get-a-vector-perpendicular-to-another-vector
  auto randomPerpVec = normal.z() < normal.x()
                           ? Mn::Vector3(normal.y(), -normal.x(), 0)
                           : Mn::Vector3(0, -normal.z(), normal.y());

  pushInputTransform(Mn::Matrix4::lookAt(pos, pos + normal, randomPerpVec) *
                     Mn::Matrix4::scaling(Mn::Vector3(radius, radius, 0.f)));

  Mn::Vector3 prevPt;
  for (int seg = 0; seg <= numSegments; seg++) {
    Mn::Deg angle = Mn::Deg(360.f * float(seg) / numSegments);
    Mn::Vector3 pt(Mn::Math::cos(angle), Mn::Math::sin(angle), 0.f);
    if (seg > 0) {
      drawTransformedLine(prevPt, pt, color);
    }
    prevPt = pt;
  }

  popInputTransform();
}

void DebugRender::updateCachedInputTransform() {
  _cachedInputTransform = Mn::Matrix4{Magnum::Math::IdentityInit};
  for (const auto& item : _inputTransformStack) {
    _cachedInputTransform = _cachedInputTransform * item;
  }
}

}  // namespace gfx
}  // namespace esp
