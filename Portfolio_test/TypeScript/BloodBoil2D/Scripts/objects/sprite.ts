module objects {
    export class GameSprite extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0, scaleX:number = 0, scaleY:number = 0) {
            super(assetManager, imageString, x, y, scaleX, scaleY); 

            this.Start();
        }

        public Start():void {
            this.x = this.x;
            this.y = this.y;
        }
        public Update():void {
        }

        public Reset():void {}
    }
}