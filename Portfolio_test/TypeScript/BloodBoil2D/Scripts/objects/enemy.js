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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(imageString, x, y, scaleX, scaleY, health, moveTo) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            if (health === void 0) { health = 100; }
            if (moveTo === void 0) { moveTo = 0; }
            var _this = _super.call(this, imageString, x, y, scaleX, scaleY) || this;
            _this.speed = 2;
            _this.forword = true;
            _this.health = health;
            _this.moveTo = moveTo;
            _this.initalX = x;
            _this.currrentScaleX = scaleX;
            _this.Start();
            console.log("Enemy: " + imageString + " has loaded");
            return _this;
        }
        Enemy.prototype.Start = function () {
            this.x = this.x;
            this.y = this.y;
        };
        Enemy.prototype.Update = function () {
            if (this.x >= this.moveTo) {
                this.scaleX = this.currrentScaleX;
                this.forword = false;
            }
            if (this.x <= this.initalX) {
                this.scaleX = -this.currrentScaleX;
                this.forword = true;
            }
            if (this.forword) {
                this.x = this.x + this.speed;
            }
            else {
                this.x = this.x - this.speed;
            }
        };
        Object.defineProperty(Enemy.prototype, "getHealth", {
            get: function () {
                return this.health;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Enemy.prototype, "setHealth", {
            set: function (newHealth) {
                this.health = newHealth;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.Reset = function () { };
        return Enemy;
    }(objects.GameObjectAtlas));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map