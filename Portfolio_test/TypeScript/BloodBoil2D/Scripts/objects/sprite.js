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
    var GameSprite = /** @class */ (function (_super) {
        __extends(GameSprite, _super);
        // Variables
        // Constructor
        function GameSprite(assetManager, imageString, x, y, scaleX, scaleY) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            var _this = _super.call(this, assetManager, imageString, x, y, scaleX, scaleY) || this;
            _this.Start();
            return _this;
        }
        GameSprite.prototype.Start = function () {
            this.x = this.x;
            this.y = this.y;
        };
        GameSprite.prototype.Update = function () {
        };
        GameSprite.prototype.Reset = function () { };
        return GameSprite;
    }(objects.GameObject));
    objects.GameSprite = GameSprite;
})(objects || (objects = {}));
//# sourceMappingURL=sprite.js.map