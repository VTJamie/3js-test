define([
    'scene'
], function (scene, animation_service)
{
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 50;
    camera.position.z = 50;
    camera.lookAt(scene.position);


    return camera;
});
