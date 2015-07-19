require.config({
    baseUrl: "components",
    paths: {
        //External Libraries
        "threejs": "../libs/three.js/three.min",
        "statsjs": "../libs/stats.js/stats.min",

        //Components
        "camera": "cameras/camera",
        "scene": "scenes/scene",
        "renderer": "renderers/renderer",
        "stats": "analytics/stats",
        "animation_service": "services/animation_service",
        "input": "controls/input",

        //Actors
        "monkeyhead": "actors/monkeyhead"
    },
    shim: {

    }    
});

require(['main']);
