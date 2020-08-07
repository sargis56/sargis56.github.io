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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(assetManager, imageString, x, y, scaleX, scaleY) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this.scaleX = scaleX;
            _this.scaleY = scaleY;
            _this.x = x;
            _this.y = y;
            _this.Init();
            return _this;
        }
        // Methods / Functions
        GameObject.prototype.Init = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            this.regX = this.halfW;
            this.regY = this.halfH;
            this.isColliding = false;
        };
        Object.defineProperty(GameObject.prototype, "getScaleX", {
            get: function () {
                return this.scaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "setScaleX", {
            set: function (newScaleX) {
                this.scaleX = newScaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "getScaleY", {
            get: function () {
                return this.scaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "setScaleY", {
            set: function (newScaleY) {
                this.scaleY = newScaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "getX", {
            get: function () {
                return this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "setX", {
            set: function (newX) {
                this.x = newX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "getY", {
            get: function () {
                return this.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "setY", {
            set: function (newY) {
                this.y = newY;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.CheckBounds = function () { };
        GameObject.prototype.Move = function () { };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map