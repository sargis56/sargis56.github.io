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
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        // Variables
        // Constructor
        function Sprite(assetManager, imageString, x, y, scaleX, scaleY) {
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
        Object.defineProperty(Sprite.prototype, "getScaleX", {
            get: function () {
                return this.scaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "setScaleX", {
            set: function (newScaleX) {
                this.scaleX = newScaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "getScaleY", {
            get: function () {
                return this.scaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "setScaleY", {
            set: function (newScaleY) {
                this.scaleY = newScaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "getX", {
            get: function () {
                return this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "setX", {
            set: function (newX) {
                this.x = newX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "getY", {
            get: function () {
                return this.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sprite.prototype, "setY", {
            set: function (newY) {
                this.y = newY;
            },
            enumerable: true,
            configurable: true
        });
        return Sprite;
    }(createjs.Bitmap));
    objects.Sprite = Sprite;
})(objects || (objects = {}));
//# sourceMappingURL=sprite.js.map