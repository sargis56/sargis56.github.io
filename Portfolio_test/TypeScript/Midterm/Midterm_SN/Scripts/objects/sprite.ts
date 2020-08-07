module objects {
    export class Sprite extends createjs.Bitmap {
        // Variables
        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0, scaleX:number = 0, scaleY:number = 0) {
            super(assetManager.getResult(imageString)); 

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.scaleX = scaleX;
            this.scaleY = scaleY;

            this.x = x;
            this.y = y;

        }

        get getScaleX(): number {
            return this.scaleX;
        }

        set setScaleX(newScaleX: number) {
            this.scaleX = newScaleX;
        }

        get getScaleY(): number {
            return this.scaleY;
        }

        set setScaleY(newScaleY: number) {
            this.scaleY = newScaleY;
        }

        get getX(): number {
            return this.x;
        }

        set setX(newX: number) {
            this.x = newX;
        }

        get getY(): number {
            return this.y;
        }

        set setY(newY: number) {
            this.y = newY;
        }
    }
}