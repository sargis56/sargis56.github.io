module objects {
    export class GameObject extends createjs.Bitmap {
        // Variables
        protected speedX: number;
        protected speedY: number;

        public width:number;
        public height:number;
        public halfW:number;
        public halfH:number;

        public scaleX: number;
        public scaleY: number;

        public isColliding:boolean;

        // Constructor
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0, scaleX:number = 0, scaleY:number = 0) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.scaleX = scaleX;
            this.scaleY = scaleY;

            this.x = x;
            this.y = y;

            this.Init();
        }
        // Methods / Functions
        private Init():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            
            this.regX = this.halfW;
            this.regY = this.halfH;

            this.isColliding = false;
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

        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public CheckBounds():void {}
        public Move():void {}
    }
}