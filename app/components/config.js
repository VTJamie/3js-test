require.config({
    baseUrl: "components",
    paths: {
        //External Libraries
        "threejs": "../libs/three.js/three.min",
        "threejspointerlock": "../libs/three.js/PointerLockControls",
        "statsjs": "../libs/stats.js/stats.min",
        "keycodes": "../libs/keys/index.min",
        "threejsfirstpersoncontrols": "../libs/three.js/controls/FirstPersonControls",
        "Physijs": "../libs/Physijs/physi",

        //Components
        "camera": "cameras/camera",
        "scene": "scenes/scene",
        "renderer": "renderers/renderer",
        "stats": "analytics/stats",
        "animation_service": "services/animation_service",
        "input": "controls/input",
        "pointerlock": "controls/pointerlock",

        //Actors
        "monkeyhead": "actors/monkeyhead",
        "user": "actors/user",

        //Objects
        "wall1": "objects/walls/wall1",
        "wall2": "objects/walls/wall2",
        "wall3": "objects/walls/wall3",
        "wall4": "objects/walls/wall4",

        "floor1": "objects/floors/floor1",

        //Settings
        "constants": "constants/constants",

        //Lights
        "ambient": "lights/ambient",

        //Physics
        "physics": "physics/physics"

    },
    shim: {
        "Physijs": {
            deps: ['threejs']
        }
    }    
});

require(['main']);
