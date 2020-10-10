#!/usr/bin/env bash
# Propagate failures properly
set -e
set -x
BULLET=false
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --bullet) BULLET=true ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done
git submodule update --init --recursive
mkdir -p build_corrade-rc
pushd build_corrade-rc
cmake ../src \
    -DBUILD_GUI_VIEWERS=OFF \
    -DBUILD_PYTHON_BINDINGS=OFF \
    -DBUILD_ASSIMP_SUPPORT=OFF \
    -DBUILD_DATATOOL=OFF \
    -DBUILD_PTEX_SUPPORT=OFF
cmake --build . --target corrade-rc
popd
mkdir -p build_js
if ${BULLET}; then
    git clone https://github.com/bulletphysics/bullet3 --depth 1 || true
    cd bullet3
    mkdir -p build_emscriptem && cd build_emscriptem
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_CXX_FLAGS_RELEASE="-DNDEBUG -O2" \
        -DCMAKE_CXX_FLAGS="-s ALLOW_MEMORY_GROWTH=1 -s MAXIMUM_MEMORY=4GB -flto" \
        -DCMAKE_EXE_LINKER_FLAGS_RELEASE="-O2" \
        -DCMAKE_INSTALL_PREFIX=$(pwd)/../../build_js \
        -DCMAKE_PREFIX_PATH="$EMSCRIPTEN" \
        -DCMAKE_TOOLCHAIN_FILE="../../src/deps/corrade/toolchains/generic/Emscripten-wasm.cmake" \
        -DBUILD_BULLET2_DEMOS=OFF \
        -DBUILD_BULLET3=OFF \
        -DBUILD_CLSOCKET=OFF \
        -DBUILD_CPU_DEMOS=OFF \
        -DBUILD_ENET=OFF \
        -DBUILD_EXTRAS=OFF \
        -DBUILD_OPENGL3_DEMOS=OFF \
        -DBUILD_PYBULLET=OFF \
        -DBUILD_UNIT_TESTS=OFF \
        -DINSTALL_LIBS=ON \
        -DINSTALL_CMAKE_FILES=ON \
        -DUSE_GLUT=OFF \
        -DUSE_GRAPHICAL_BENCHMARK=OFF
    cmake --build . --target install -- -j 4
    cd ../../.
    #mkdir -p Release/lib/
    #cp -r lib/* Release/lib/.
    #cp -r include/bullet/* include/.
fi
cd build_js
#cmake --target install -- -j 4
EXE_LINKER_FLAGS="-flto -s USE_WEBGL2=1"
if ${BULLET};
    then EXE_LINKER_FLAGS="${EXE_LINKER_FLAGS} -s USE_BULLET=1"
fi
cmake ../src \
    -DCORRADE_RC_EXECUTABLE=../build_corrade-rc/RelWithDebInfo/bin/corrade-rc \
    -DBUILD_GUI_VIEWERS=ON \
    -DBUILD_PYTHON_BINDINGS=OFF \
    -DBUILD_ASSIMP_SUPPORT=OFF \
    -DBUILD_DATATOOL=OFF \
    -DBUILD_PTEX_SUPPORT=OFF \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_PREFIX_PATH="$EMSCRIPTEN" \
    -DCMAKE_TOOLCHAIN_FILE="../src/deps/corrade/toolchains/generic/Emscripten-wasm.cmake" \
    -DCMAKE_INSTALL_PREFIX=. \
    -DCMAKE_CXX_FLAGS="-flto -s FORCE_FILESYSTEM=1 -s ALLOW_MEMORY_GROWTH=1 -s MAXIMUM_MEMORY=4GB" \
    -DCMAKE_EXE_LINKER_FLAGS="${EXE_LINKER_FLAGS}" \
    -DBUILD_WITH_BULLET="$( if ${BULLET} ; then echo ON ; else echo OFF; fi )" \
    -DUSE_EMSCRIPTEN_PORTS_BULLET=OFF  \
    -DCMAKE_CXX_FLAGS_RELEASE="-DNDEBUG -O2" \
    -DCMAKE_EXE_LINKER_FLAGS_RELEASE="-O2" \
    -DCMAKE_FIND_ROOT_PATH=$(pwd)
    #-DBULLET_ROOT=$(pwd)
    #-DCMAKE_CXX_FLAGS=-I\ $(pwd)/include/\ -L\ $(pwd)
#"$( if ${BULLET} ; then echo ON ; else echo OFF; fi )"
#cmake --build . -- -j 80
cmake --build . --target install -- -j 8
echo "Done building."
echo "Run:"
echo "python2 -m SimpleHTTPServer 8000"
echo "Or:"
echo "python3 -m http.server"
echo "Then open in browser:"
echo "http://0.0.0.0:8000/build_js/utils/viewer/viewer.html?scene=skokloster-castle.glb"
echo "Or:"
echo "http://0.0.0.0:8000/build_js/esp/bindings_js/bindings.html?scene=skokloster-castle.glb"