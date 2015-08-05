define(['animation_service', 'scene', 'input', 'constants'], function (animation_service, scene, input, constants) {

    var Room = function () {
        var loader = new THREE.JSONLoader(), that = this;
        this.updateFrame = function (time, persecond) {
        };


        loader.load("assets/models/wall3.json", function(model, material) {
            that.mesh = new THREE.Mesh(model, material[0]);

            that.mesh.scale = new THREE.Vector3();
            that.mesh.scale.x = constants.scale;
                        that.mesh.scale.y = constants.scale;
                        that.mesh.scale.z = constants.scale;
            scene.add(that.mesh);

        });
     };

    return new Room();
});