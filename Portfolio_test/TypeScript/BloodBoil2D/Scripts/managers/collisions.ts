module managers {
    export class Collision {
        public static Check(obj1: objects.GameObjectAtlas, obj2: objects.GameObjectAtlas):boolean {
            let boundsWall: number = 50;
           if (((obj1.x > (obj2.x - boundsWall) ) && (obj1.x < (obj2.x + boundsWall) )) 
           && ((obj1.y > (obj2.y - boundsWall) ) && (obj1.y < (obj2.y + boundsWall) )))
           {
            switch(obj2.name) {
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
        }
    }
}