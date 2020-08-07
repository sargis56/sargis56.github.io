var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            var boundsWall = 50;
            if (((obj1.x > (obj2.x - boundsWall)) && (obj1.x < (obj2.x + boundsWall)))
                && ((obj1.y > (obj2.y - boundsWall)) && (obj1.y < (obj2.y + boundsWall)))) {
                switch (obj2.name) {
                    case "enemyPHSprite":
                        console.log("ded1");
                        break;
                    case "enemyPHSprite2":
                        console.log("ded2");
                        break;
                }
                obj2.isColliding = true;
                return true;
            }
            else {
                obj2.isColliding = false;
                return false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisions.js.map