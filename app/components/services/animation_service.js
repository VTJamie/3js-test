define(['stats', 'renderer', 'scene', 'camera'], function (stats, renderer, scene, camera) {
    function AnimationHandler() {
          var that = this;
        this.registeredAnimationListeners = [];
        this.lasttime = 0;
        this.clock = new THREE.Clock();

        this.registerForUpdate = function (listener) {
            this.registeredAnimationListeners.push(listener);
        };

        this.unregisterFromUpdate = function (listener) {
            this.registeredAnimationListeners.remove(listener);
        };

        this.renderListener = function (time) {
            var idx;

            for(idx in that.registeredAnimationListeners) {
                that.registeredAnimationListeners[idx].updateFrame(that.clock.getDelta());
            }

            renderer.render(scene, camera);
            requestAnimationFrame(that.renderListener);
            stats.update();
        };
        requestAnimationFrame(this.renderListener);


    }
    return new AnimationHandler();
});