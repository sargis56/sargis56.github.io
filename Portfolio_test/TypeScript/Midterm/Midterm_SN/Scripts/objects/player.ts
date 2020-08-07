module objects {
    var Keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        space: false
    };
    
    export class Player extends createjs.Bitmap {
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


        public UpdatePlayer(): void {
            document.onkeydown = this.keyHandlerDown.bind(this);
            document.onkeyup = this.keyHandlerUp.bind(this);

            if (Keys.up) {
                if (this.y >= 30)
                {
                    this.y = this.y - 5;
                }       
            }
            else if (Keys.down) {
                if (this.y <= 450)
                {
                    this.y = this.y + 5; 
                }     
            }
            
            if (Keys.left) {
                if (this.x >= 30)
                {
                    this.x = this.x - 5;
                }              
            }
            else if (Keys.right) {
                if (this.x <= 620)
                {
                    this.x = this.x + 5;
                }
            }

            if (Keys.space) {
                
            }

        }

        public keyHandlerDown(e) {
            var kc = e.keyCode;
            e.preventDefault();

            if  ((kc === 37) || (kc === 65))
            {
                Keys.left = true;
            }
            else if ((kc === 38) || (kc === 87))
            {
                Keys.up = true;
            }
            else if ((kc === 39) || (kc === 68))
            {
                Keys.right = true;
            }
            else if ((kc === 40) || (kc === 83))
            {
                Keys.down = true;
            }
            else if (kc === 32)
            {
                Keys.space = true;
            }
        }

        public keyHandlerUp(e) {
            var kc = e.keyCode;
            e.preventDefault();
        
            if ((kc === 37) || (kc === 65))
            {
                Keys.left = false;
            }
            else if ((kc === 38) || (kc === 87))
            {
                Keys.up = false;
            }
            else if ((kc === 39) || (kc === 68)) 
            {
                Keys.right = false;
            }
            else if ((kc === 40) || (kc === 83)) 
            {
                Keys.down = false;
            }
            else if (kc === 32)
            {
                Keys.space = false;
            }
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