var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        space: false
    };
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
        // Constructor
        function Player(assetManager, imageString, x, y, scaleX, scaleY) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.regX = _this.getBounds().width * 0.5;
            _this.regY = _this.getBounds().height * 0.5;
            _this.scaleX = scaleX;
            _this.scaleY = scaleY;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Player.prototype.UpdatePlayer = function () {
            document.onkeydown = this.keyHandlerDown.bind(this);
            document.onkeyup = this.keyHandlerUp.bind(this);
            if (Keys.up) {
                if (this.y >= 30) {
                    this.y = this.y - 5;
                }
            }
            else if (Keys.down) {
                if (this.y <= 450) {
                    this.y = this.y + 5;
                }
            }
            if (Keys.left) {
                if (this.x >= 30) {
                    this.x = this.x - 5;
                }
            }
            else if (Keys.right) {
                if (this.x <= 620) {
                    this.x = this.x + 5;
                }
            }
            if (Keys.space) {
            }
        };
        Player.prototype.keyHandlerDown = function (e) {
            var kc = e.keyCode;
            e.preventDefault();
            if ((kc === 37) || (kc === 65)) {
                Keys.left = true;
            }
            else if ((kc === 38) || (kc === 87)) {
                Keys.up = true;
            }
            else if ((kc === 39) || (kc === 68)) {
                Keys.right = true;
            }
            else if ((kc === 40) || (kc === 83)) {
                Keys.down = true;
            }
            else if (kc === 32) {
                Keys.space = true;
            }
        };
        Player.prototype.keyHandlerUp = function (e) {
            var kc = e.keyCode;
            e.preventDefault();
            if ((kc === 37) || (kc === 65)) {
                Keys.left = false;
            }
            else if ((kc === 38) || (kc === 87)) {
                Keys.up = false;
            }
            else if ((kc === 39) || (kc === 68)) {
                Keys.right = false;
            }
            else if ((kc === 40) || (kc === 83)) {
                Keys.down = false;
            }
            else if (kc === 32) {
                Keys.space = false;
            }
        };
        Object.defineProperty(Player.prototype, "getScaleX", {
            get: function () {
                return this.scaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "setScaleX", {
            set: function (newScaleX) {
                this.scaleX = newScaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "getScaleY", {
            get: function () {
                return this.scaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "setScaleY", {
            set: function (newScaleY) {
                this.scaleY = newScaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "getX", {
            get: function () {
                return this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "setX", {
            set: function (newX) {
                this.x = newX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "getY", {
            get: function () {
                return this.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "setY", {
            set: function (newY) {
                this.y = newY;
            },
            enumerable: true,
            configurable: true
        });
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map