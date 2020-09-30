## Object rearrangement replay

### Steps

1. Run python http server using
    ```
    python -m http.server
    ```

2. Run task replay with following query parameters:
    - `flythroughFile`    - flythrough file name, file should be located at `data/replays/`
    - `runFlythrough`     - sets flythrough flag and runs `flythroughFile` or default flythrough replay
    - `enablePhysics`     - enable physics by setting it to true to init physics manager
    - `defaultPhysConfig` - name of the physics config file

   Usage example:
   ```
   http://0.0.0.0:8000/build_js/esp/bindings_js/bindings.html?scene=skokloster-castle.glb&enablePhysics=true&defaultPhysConfig=default.phys_scene_config.json&runFlythrough=true&flythroughFile=demo_2.csv
   ```
