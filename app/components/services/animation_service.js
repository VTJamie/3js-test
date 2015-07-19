define(['stats', 'renderer', 'scene', 'camera'], function (stats, renderer, scene, camera) {
    function AnimationHandler() {
          var that = this;
        this.registeredAnimationListeners = [];
        this.lasttime = 0;

        this.registerForUpdate = function (listener) {
            this.registeredAnimationListeners.push(listener);
        };

        this.unregisterFromUpdate = function (listener) {
            this.registeredAnimationListeners.remove(listener);
        };

        this.renderListener = function (time) {
            var idx,
            timedelta = time - that.lasttime,
            persecondmultiplier = timedelta / 1000.0;
            that.lasttime = time;

            requestAnimationFrame(that.renderListener);

            for(idx in that.registeredAnimationListeners) {
                that.registeredAnimationListeners[idx].updateFrame(timedelta, persecondmultiplier);
            }

            renderer.render(scene, camera);
            stats.update();
        };
        requestAnimationFrame(this.renderListener);


    }
    return new AnimationHandler();
});