define(['animation_service', 'input', 'camera', 'scene', 'threejsfirstpersoncontrols'], function (animation_service, input, camera, scene, threejsfirstpersoncontrols) {
    function User() {
        var that = this;
        this.speedpersecond = 4;
        this.controls = new THREE.FirstPersonControls(camera);
        this.raycaster = new THREE.Raycaster();
        this.controls.movementSpeed = 100;
        this.controls.lookSpeed = 0.1;

        this.updateFrame = function (timedelta) {
            var intersects;
            this.controls.update(timedelta);
            this.raycaster.set( this.controls.object.position, new THREE.Vector3( 0, -1, 0 ) );

            // calculate objects intersecting the picking ray
            intersects = this.raycaster.intersectObjects( scene.children );

            if (intersects.length > 0) {
                this.controls.object.position.y = intersects[0].object.position.y + 35;
            }
        };

        animation_service.registerForUpdate(this);

        console.log(scene);
    }

    return new User();
});