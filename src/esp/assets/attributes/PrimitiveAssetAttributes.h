// Copyright (c) Facebook, Inc. and its affiliates.
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

#ifndef ESP_ASSETS_ATTRIBUTES_PRIMITIVEASSETATTRIBUTES_H_
#define ESP_ASSETS_ATTRIBUTES_PRIMITIVEASSETATTRIBUTES_H_

#include "AttributesBase.h"

namespace esp {
namespace assets {
namespace attributes {

///////////////////////////////////
// primitive object attributes

//! attributes describing primitve render/collision objects - abstract class
//! without pure virtual methods
class AbstractPrimitiveAttributes : public AbstractAttributes {
 public:
  AbstractPrimitiveAttributes(bool isWireframe,
                              int primObjType,
                              const std::string& primObjClassName,
                              const std::string& attributesClassKey)
      : AbstractAttributes(attributesClassKey, "") {
    // clear handle that was set in base class constructor
    AbstractAttributes::setHandle("");
    setIsWireframe(isWireframe);
    setPrimObjType(primObjType);
    setPrimObjClassName(primObjClassName);
    setFileDirectory("none");

    if (!isWireframe) {  // solid
      // do not call setters since they call buildHandle, which does not
      // exist - is abstract in base class
      setBool("textureCoordinates", false);
      setBool("tangents", false);
    }

  }  // ctor

  // necessary since abstract
  virtual ~AbstractPrimitiveAttributes() = default;

  // handle is set internally based on attributes configuration
  // setting externally is prohibited
  void setHandle(const std::string&) override {}

  bool getIsWireframe() const { return getBool("isWireframe"); }

  // only solid prims can use texture coords
  void setUseTextureCoords(bool useTextureCoords) {
    if (!getIsWireframe()) {  // check if solid
      setBool("textureCoordinates", useTextureCoords);
      buildHandle();  // build handle based on config
    }
  }
  bool getUseTextureCoords() const { return getBool("textureCoordinates"); }

  // only solid prims have option to use tangents
  void setUseTangents(bool tangents) {
    if (!getIsWireframe()) {  // check if solid
      setBool("tangents", tangents);
      buildHandle();  // build handle based on config
    }
  }
  bool getUseTangents() const { return getBool("tangents"); }

  // only circular prims set number of rings - NOTE : capsule sets rings
  // separately for hemispheres and cylinder
  // set virtual so cannot be deleted in capsule attributes
  void setNumRings(int rings) {
    setInt("rings", rings);
    buildHandle();  // build handle based on config
  }
  int getNumRings() const { return getInt("rings"); }

  void setNumSegments(int segments) {
    setInt("segments", segments);
    buildHandle();  // build handle based on config
  }
  int getNumSegments() const { return getInt("segments"); }
  // capsule, cone and cylinder use halfLength
  void setHalfLength(double halfLength) {
    setDouble("halfLength", halfLength);
    buildHandle();
  }
  double getHalfLength() const { return getDouble("halfLength"); }

  std::string getPrimObjClassName() const {
    return getString("primObjClassName");
  }

  int getPrimObjType() const { return getInt("primObjType"); }
  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type.
   * AbstractPrimitiveAttributes is never valid for any primitive - should be
   * overridden in prim-specific class.
   * @return whether or not the template holds valid data for desired primitive
   * type.
   */
  virtual bool isValidTemplate() { return false; }

  /**
   * @brief Handle for primitive attribute-based templates should reflect
   * the parameters used to construct the primitive, and so should only be set
   * internally or when relevant values are set manually.
   */
  void buildHandle() {
    std::ostringstream oHndlStrm;
    oHndlStrm << getPrimObjClassName() << buildHandleDetail();
    setString("handle", oHndlStrm.str());
  }

 protected:
  /**
   * @brief Verifies that @ref val is larger than, and a multiple of, divisor
   * div
   * @param val the value to check
   * @param div the divsior (value to verify is greater than and a multiple of)
   * - will be either 2 or 4 for primitives value checking
   * @return whether check passes
   */
  bool isValueMultipleOfDivisor(int val, int div) {
    return (val >= div) && (val % div == 0);
  }

  // helper for handle construction
  std::string getBoolDispStr(bool val) const {
    return (val ? "true" : "false");
  }
  virtual std::string buildHandleDetail() = 0;

 private:
  // Should never change, only set by ctor
  void setPrimObjClassName(std::string primObjClassName) {
    setString("primObjClassName", primObjClassName);
  }

  // Should never change, only set by ctor
  void setPrimObjType(int primObjType) { setInt("primObjType", primObjType); }

  // not used to construct prim mesh, so setting this does not require
  // modification to handle.  Should never change, only set by ctor
  void setIsWireframe(bool isWireframe) { setBool("isWireframe", isWireframe); }

 public:
  ESP_SMART_POINTERS(AbstractPrimitiveAttributes)
};  // class AbstractPrimitiveAttributes

//! attributes describing primitive capsule objects
class CapsulePrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  CapsulePrimitiveAttributes(bool isWireframe,
                             int primObjType,
                             const std::string& primObjClassName);

  void setHemisphereRings(int hemisphereRings) {
    setInt("hemisphereRings", hemisphereRings);
    buildHandle();  // build handle based on config
  }
  int getHemisphereRings() const { return getInt("hemisphereRings"); }

  void setCylinderRings(int cylinderRings) {
    setInt("cylinderRings", cylinderRings);
    buildHandle();  // build handle based on config
  }
  int getCylinderRings() const { return getInt("cylinderRings"); }

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override {
    bool wfCheck =
        ((getIsWireframe() && isValueMultipleOfDivisor(getNumSegments(), 4)) ||
         (!getIsWireframe() && getNumSegments() > 2));

    return (getCylinderRings() > 0 && getHemisphereRings() > 0 && wfCheck &&
            getHalfLength() > 0);
  }

 protected:
  std::string buildHandleDetail() override {
    std::ostringstream oHndlStrm;
    oHndlStrm << "_hemiRings_" << getHemisphereRings() << "_cylRings_"
              << getCylinderRings() << "_segments_" << getNumSegments()
              << "_halfLen_" << getHalfLength();
    if (!getIsWireframe()) {
      oHndlStrm << "_useTexCoords_" << getBoolDispStr(getUseTextureCoords())
                << "_useTangents_" << getBoolDispStr(getUseTangents());
    }
    return oHndlStrm.str();
  }  // buildHandleDetail

 public:
  ESP_SMART_POINTERS(CapsulePrimitiveAttributes)
};  // class CapsulePrimitiveAttributes

class ConePrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  ConePrimitiveAttributes(bool isWireframe,
                          int primObjType,
                          const std::string& primObjClassName);

  // only solid cones can have end capped
  void setCapEnd(bool capEnd) {
    setBool("capEnd", capEnd);
    buildHandle();  // build handle based on config
  }
  bool getCapEnd() const { return getBool("capEnd"); }

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override {
    bool wfCheck =
        ((getIsWireframe() && isValueMultipleOfDivisor(getNumSegments(), 4)) ||
         (!getIsWireframe() && getNumSegments() > 2 && getNumRings() > 0));

    return (getHalfLength() > 0 && wfCheck);
  }

 protected:
  std::string buildHandleDetail() override {
    std::ostringstream oHndlStrm;
    oHndlStrm << "_segments_" << getNumSegments() << "_halfLen_"
              << getHalfLength();
    if (!getIsWireframe()) {
      oHndlStrm << "_rings_" << getNumRings() << "_useTexCoords_"
                << getBoolDispStr(getUseTextureCoords()) << "_useTangents_"
                << getBoolDispStr(getUseTangents()) << "_capEnd_"
                << getBoolDispStr(getCapEnd());
    }
    return oHndlStrm.str();
  }  // buildHandleDetail

 public:
  ESP_SMART_POINTERS(ConePrimitiveAttributes)
};  // class ConePrimitiveAttributes

class CubePrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  CubePrimitiveAttributes(bool isWireframe,
                          int primObjType,
                          const std::string& primObjClassName)
      : AbstractPrimitiveAttributes(isWireframe,
                                    primObjType,
                                    primObjClassName,
                                    "CubePrimitiveAttributes") {
    buildHandle();  // build handle based on config
  }

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type. Cube
   * primitives require no values and so this attributes is always valid.
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override { return true; }

 protected:
  std::string buildHandleDetail() override { return ""; }

 public:
  ESP_SMART_POINTERS(CubePrimitiveAttributes)
};  // class CubePrimitiveAttributes

class CylinderPrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  CylinderPrimitiveAttributes(bool isWireframe,
                              int primObjType,
                              const std::string& primObjClassName);

  // only solid culinders can have ends capped
  void setCapEnds(bool capEnds) {
    setBool("capEnds", capEnds);
    buildHandle();  // build handle based on config
  }
  bool getCapEnds() const { return getBool("capEnds"); }

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override {
    bool wfCheck =
        ((getIsWireframe() && isValueMultipleOfDivisor(getNumSegments(), 4)) ||
         (!getIsWireframe() && getNumSegments() > 2));
    return getNumRings() > 0 && getHalfLength() > 0 && wfCheck;
  }

 protected:
  std::string buildHandleDetail() override {
    std::ostringstream oHndlStrm;
    oHndlStrm << "_rings_" << getNumRings() << "_segments_" << getNumSegments()
              << "_halfLen_" << getHalfLength();
    if (!getIsWireframe()) {
      oHndlStrm << "_useTexCoords_" << getBoolDispStr(getUseTextureCoords())
                << "_useTangents_" << getBoolDispStr(getUseTangents())
                << "_capEnds_" << getBoolDispStr(getCapEnds());
    }
    return oHndlStrm.str();
  }  // buildHandleDetail

 public:
  ESP_SMART_POINTERS(CylinderPrimitiveAttributes)
};  // class CylinderPrimitiveAttributes

class IcospherePrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  // note there is no magnum primitive implementation of a wireframe icosphere
  IcospherePrimitiveAttributes(bool isWireframe,
                               int primObjType,
                               const std::string& primObjClassName)
      : AbstractPrimitiveAttributes(isWireframe,
                                    primObjType,
                                    primObjClassName,
                                    "IcospherePrimitiveAttributes") {
    // setting manually because wireframe icosphere does not currently support
    // subdiv > 1 and setSubdivisions checks for wireframe
    setInt("subdivisions", 1);
    buildHandle();  // build handle based on config
  }
  // only solid icospheres will support subdivision - wireframes default to 1
  void setSubdivisions(int subdivisions) {
    if (!getIsWireframe()) {
      setInt("subdivisions", subdivisions);
      buildHandle();  // build handle based on config
    }
  }
  int getSubdivisions() const { return getInt("subdivisions"); }

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override {
    return (getIsWireframe() || (!getIsWireframe() && getSubdivisions() >= 0));
  }

 protected:
  std::string buildHandleDetail() override {
    std::ostringstream oHndlStrm;
    // wireframe subdivision currently does not change
    // but think about the possibilities.
    oHndlStrm << "_subdivs_" << getSubdivisions();
    return oHndlStrm.str();
  }  // buildHandleDetail

 public:
  ESP_SMART_POINTERS(IcospherePrimitiveAttributes)
};  // class IcospherePrimitiveAttributes

class UVSpherePrimitiveAttributes : public AbstractPrimitiveAttributes {
 public:
  UVSpherePrimitiveAttributes(bool isWireframe,
                              int primObjType,
                              const std::string& primObjClassName);

  /**
   * @brief This will determine if the stated template has the required
   * quantities needed to instantiate a primitive properly of desired type
   * @return whether or not the template holds valid data for desired primitive
   * type
   */
  bool isValidTemplate() override {
    return ((getIsWireframe() &&
             isValueMultipleOfDivisor(getNumSegments(), 4) &&
             isValueMultipleOfDivisor(getNumRings(), 2)) ||
            (!getIsWireframe() && getNumRings() > 1 && getNumSegments() > 2));
  }

 protected:
  std::string buildHandleDetail() override {
    std::ostringstream oHndlStrm;
    oHndlStrm << "_rings_" << getNumRings() << "_segments_" << getNumSegments();
    if (!getIsWireframe()) {
      oHndlStrm << "_useTexCoords_" << getBoolDispStr(getUseTextureCoords())
                << "_useTangents_" << getBoolDispStr(getUseTangents());
    }
    return oHndlStrm.str();
  }  // buildHandleDetail

 public:
  ESP_SMART_POINTERS(UVSpherePrimitiveAttributes)
};  // class UVSpherePrimitiveAttributes

///////////////////////////////////////
// end primitive object attributes

}  // namespace attributes
}  // namespace assets
}  // namespace esp

#endif  // ESP_ASSETS_ATTRIBUTES_PRIMITIVEASSETATTRIBUTES_H_
