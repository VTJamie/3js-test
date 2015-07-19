define(['animation_service', 'scene', 'input'], function (animation_service, scene, input) {

    var MonkeyHead = function () {
        var loader = new THREE.JSONLoader(), that = this;
        this.updateFrame = function (time, persecond) {
        };
        this.curscale = 10.0;
        this.curscalepersecond = 2;

        loader.load("assets/models/monkeyhead.json", function(model, material) {
            that.mesh = new THREE.Mesh(model, new THREE.MeshNormalMaterial());
            that.mesh.scale = new THREE.Vector3();
            that.mesh.scale.x = that.curscale;
            that.mesh.scale.y = that.curscale;
            that.mesh.scale.z = that.curscale;
            scene.add(that.mesh);
        //    animation_service.registerForUpdate(that);
        });
     };

    return new MonkeyHead();
});