define([
    'threejs',
    'Physijs'
], function ()
{
    Physijs.scripts.worker = '../libs/Physijs/physijs_worker.js';
    Physijs.scripts.ammo = '../ammo.js/ammo.js';
    return new Physijs.Scene();
});
