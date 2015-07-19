define(['animation_service', 'input', 'camera'], function (animation_service, input, camera) {
    function User() {
        var that = this;
        this.speedpersecond = 4;
        this.updateFrame = function (timedelta, persecondmultiplier) {
            if(input.keys.up) {
                camera.position.x += that.speedpersecond * persecondmultiplier;
            }
            if(input.keys.down) {
                camera.position.x -= that.speedpersecond * persecondmultiplier;
            }
            if(input.keys.left) {
                camera.position.y += that.speedpersecond * persecondmultiplier;
            }
            if(input.keys.right) {
                camera.position.y -= that.speedpersecond * persecondmultiplier;
            }
        };
        animation_service.registerForUpdate(this);
    }

    return new User();
});