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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // Variables
        // Constructor
        function Button(assetManager, imageString, x, y, scaleX, scaleY) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            var _this = 
            // super(imageString);
            _super.call(this, assetManager, imageString, x, y, scaleX, scaleY) || this;
            _this.x = x;
            _this.y = y;
            // Setup event handlers
            _this.on("mouseover", _this.mouseOver);
            _this.on("mouseout", _this.mouseOut);
            return _this;
            // this.on("mouseclick", this.mouseClick);
        }
        // Methods
        Button.prototype.mouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.mouseOut = function () {
            this.alpha = 1.0;
        };
        return Button;
    }(objects.GameObject));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map