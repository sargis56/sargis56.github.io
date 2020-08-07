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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(imageString, x, y, scaleX, scaleY) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            var _this = _super.call(this, imageString, x, y, scaleX, scaleY) || this;
            _this.currrentScaleX = scaleX;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.isDead = false;
            this.isPowerG = false;
            this.isGround = true;
            this.isGuarding = false;
            this.Gregen = 1;
            this.guardTime = 100;
            this.attackTime = 0;
            this.waitTime = 25;
            this.powerTime = 5;
            this.x = this.x;
            this.y = this.y;
            this.y_velocity;
            this.limit = 200; //135;
            this.last_pos = this.y;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.UpdatePlayer();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.UpdatePlayer = function () {
            this.isMoving = false;
            //console.log(this.getImageString);
            //this.paused = true;
            if (managers.Game.keyboardManager.moveLeft) {
                this.scaleX = -this.currrentScaleX;
                //this.paused = false;
                if (this.x >= 50) {
                    this.isMoving = true;
                    this.x = this.x - 5;
                }
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x = this.x + 5;
                //this.paused = false;
                this.scaleX = this.currrentScaleX;
                this.isMoving = true;
            }
            if (managers.Game.keyboardManager.moveDown) {
                if (this.y <= 420) {
                    this.y = this.y + 5;
                }
            }
            // ----- Attack
            // console.log("isAttacking: " + this.isAttacking + "\nAttach Duration: " + this.attackTime);
            if (managers.Game.keyboardManager.attack && !this.isAttacking) {
                this.isAttacking = true;
                this.attackTime = this.waitTime;
            }
            if (this.isAttacking && this.attackTime == 0) {
                this.isAttacking = false;
            }
            if (this.attackTime > 0) {
                if (this.attackTime < 0) {
                    this.attackTime = 0;
                }
                else {
                    this.attackTime -= 0.5;
                }
            }
            // ----- Attack
            // ----- Guard
            console.log("gameTime is " + this.guardTime + "\nisGaurding: " + this.isGuarding + "\nShield broke: " + this.broken
                + "\npowerUp: " + this.isPowerG + " duration: " + this.powerTime + "\nY:" + this.y + "\nX:" + this.x);
            // // When the player press f to guard
            if (managers.Game.keyboardManager.gaurd && this.broken) {
                this.isGuarding = true;
                this.Gregen = 1;
                if (this.isGuarding && this.guardTime > 0) {
                    if (!this.isPowerG) {
                        this.guardTime -= this.Gregen; // decrease the duration
                    }
                    if (this.guardTime <= 0) {
                        this.guardTime = 0;
                        this.broken = false;
                        this.isGuarding = false;
                    }
                }
            }
            if (!managers.Game.keyboardManager.gaurd && this.isGuarding) {
                this.isGuarding = false;
            }
            if (!this.isGuarding && this.guardTime >= 0 && this.guardTime <= 100) {
                // if the gaurdTime hits 0 stop player from using gaurd
                this.guardTime += this.Gregen / 2;
                if (this.guardTime >= 100) {
                    this.guardTime = 100;
                    this.Gregen = 0;
                    this.broken = true;
                }
            }
            // Power Guard Potion duration
            if (this.isPowerG && this.powerTime == 0) {
                this.powerTime = this.waitTime;
            }
            if (this.powerTime > 0) {
                if (this.powerTime < 0) {
                    this.powerTime = 0;
                }
                else {
                    this.powerTime -= 0.5;
                }
            }
            // ----- Guard
            // ----- Jump
            if ((managers.Game.keyboardManager.moveUp && this.isGround && !this.isJumping
                && this.y > (this.last_pos - this.limit))) {
                //console.log("isJumping: " + this.isJumping + " isGround: " + this.isGround + " holdKey: " 
                // + this.holdKey);
                this.holdKey = true;
                this.y -= 8;
                if (this.y <= (this.last_pos - this.limit)) {
                    this.isGround = false;
                    this.holdKey = false;
                }
                this.isJumping = true;
            }
            if (!managers.Game.keyboardManager.moveUp && this.holdKey) {
                this.holdKey = false;
                this.isGround = false;
            }
            if (!this.isGround && !this.holdKey) {
                this.y_velocity = 5.5;
            }
            // detects if player is on ground
            if (this.isGround) {
                this.y_velocity = 0; // set gravity to 0
                this.isJumping = false;
            }
            this.y += this.y_velocity; // gravity
            // console.log("Ground: " + this.isGround + "\nJumping: " + this.isJumping + "\nHoldKey: " + this.holdKey +
            // "\nKey: " + managers.Game.keyboardManager.moveUp);
        };
        return Player;
    }(objects.GameObjectAtlas));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map