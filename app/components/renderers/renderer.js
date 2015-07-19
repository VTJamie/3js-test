define([
    'threejs'
], function (threejs)
{
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    window.onresize = function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    document.body.appendChild(renderer.domElement);
    return renderer;
});
