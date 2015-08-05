define(['keycodes'], function (keycodes) {
    function InputController () {
        var that = this;

        this.keys = {};
        this.mouse = {};
        this.mouseMoveListeners = [];

        this.registerForMouseMove = function (listener) {
            this.mouseMoveListeners.push(listener);
        };

        this.unregisterForMouseMove = function (listener) {
            this.mouseMoveListeners.remove(listener);
        };

        document.onkeydown = function (e) {
            that.keys['key' + e.keyCode] = true;
            that.keys[keycodes.getName(e.keyCode)] = true;
        };

        document.onkeyup = function (e) {
            that.keys['key' + e.keyCode] = false;
            that.keys[keycodes.getName(e.keyCode)] = false;
        };

        document.onmousedown = function (e) {
            that.mouse.left = true;
        };

        document.onmouseup = function (e) {
            that.mouse.left = false;
        };

        document.onmousemove = function (e) {
            var idx, xdelta = e.movementX, ydelta = e.movementY;
            for(idx in that.mouseMoveListeners) {
                that.mouseMoveListeners[idx].mouseMoved(xdelta, ydelta);
            }

        };
    }

    return new InputController();
});


// 8       8       8       8       8      Backspace
//  9       9       9       9       9      Tab
// 13      13      13      13      13      Enter
// 16      16      16      16      16      Shift
// 17      17      17      17      17      Ctrl
// 18      18      18      18      18      Alt
// 19      19      19      19      19      Pause, Break
// 20      20      20      20      20      CapsLock
// 27      27      27      27      27      Esc
// 32      32      32      32      32      Space
// 33      33      33      33      33      Page Up
// 34      34      34      34      34      Page Down
// 35      35      35      35      35      End
// 36      36      36      36      36      Home
// 37      37      37      37      37      Left arrow
// 38      38      38      38      38      Up arrow
// 39      39      39      39      39      Right arrow
// 40      40      40      40      40      Down arrow
//         44      44      44      44      PrntScrn (see below†)
// 45      45      45      45      45      Insert
// 46      46      46      46      46      Delete
// 48-57   48-57   48-57   48-57   48-57   0 to 9
// 65-90   65-90   65-90   65-90   65-90   A to Z
// 91      91      91      91      91      WIN Key (Start)
// 93      93      93      93      93      WIN Menu
//112-123 112-123 112-123 112-123 112-123  F1 to F12
//144     144     144     144     144      NumLock
//145     145     145     145     145      ScrollLock
//
//188     188     188     188     188      , <
//190     190     190     190     190      . >
//191     191     191     191     191      / ?
//192     192     192     192     192      ` ~
//219     219     219     219     219      [ { (see below‡)
//220     220     220     220     220      \ |
//221     221     221     221     221      ] }
//222     222     222     222     222      ' "