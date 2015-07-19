define([], function () {
    function InputController () {
        var that = this;
        this.keys = {};
        this.mouse = {};
        document.onkeydown = function (e) {
            that.keys['key' + e.keyCode] = true;
        };

        document.onkeyup = function (e) {
            that.keys['key' + e.keyCode] = false;
        };

        document.onmousedown = function (e) {
            that.mouse.left = true;
        };

        document.onmouseup = function (e) {
            that.mouse.left = false;
        };
    }

    return new InputController();
});