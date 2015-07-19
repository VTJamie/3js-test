define(['animation_service', 'scene', 'input'], function (animation_service, scene, input) {

    var MonkeyHead = function () {
        var loader = new THREE.JSONLoader(), that = this;
        this.render = function (time, persecond) {
            if (input.keys.key38) {
                this.curscale += persecond * this.curscalepersecond;
            }
            if(input.keys.key40) {
                this.curscale -= persecond * this.curscalepersecond;
            }

            this.mesh.scale.x = this.curscale;
            this.mesh.scale.y = this.curscale;
            this.mesh.scale.z = this.curscale;
        };
        this.curscale = 10.0;
        this.curscalepersecond = 1;

        loader.load("assets/models/monkeyhead.json", function(model, material) {
            that.mesh = new THREE.Mesh(model, new THREE.MeshNormalMaterial());
            that.mesh.scale = new THREE.Vector3();
            that.mesh.scale.x = that.curscale;
            that.mesh.scale.y = that.curscale;
            that.mesh.scale.z = that.curscale;
            scene.add(that.mesh);
            animation_service.registerForRender(that);
        });
     };

    return new MonkeyHead();
});