define(['stats', 'renderer', 'scene', 'camera'], function (stats, renderer, scene, camera) {
    function AnimationHandler() {
          var that = this;
        this.registeredAnimationListeners = [];
        this.lasttime = 0;

        this.registerForRender = function (listener) {
            this.registeredAnimationListeners.push(listener);
        };

        this.unregisterFromRender = function (listener) {
            this.registeredAnimationListeners.remove(listener);
        };

        this.renderListener = function (time) {
            var idx,
            currenttimediff = time - that.lasttime,
            ratioofsecond = currenttimediff / 1000.0;
            that.lasttime = time;

            requestAnimationFrame(that.renderListener);

            for(idx in that.registeredAnimationListeners) {
                that.registeredAnimationListeners[idx].render(currenttimediff, ratioofsecond);
            }

            renderer.render(scene, camera);
            stats.update();
        };
        requestAnimationFrame(this.renderListener);


    }
    return new AnimationHandler();
});