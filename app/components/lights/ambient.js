define([
    'scene'
], function (scene)
{
    var ambientLight = new THREE.AmbientLight(0xFFFFFF);

            scene.add(ambientLight);
            return ambientLight;
});
