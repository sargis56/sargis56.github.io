module objects {
    export class Enemy extends objects.GameObjectAtlas {
        // Variables
        private moveTo: number;
        private initalX: number;
        private speed: number = 2;
        private forword: boolean = true;
        private health: number;
        private currrentScaleX: number;

        // Constructor
        constructor(imageString:string, x:number = 0, 
            y:number = 0, scaleX:number = 0, scaleY:number = 0, health:number = 100, moveTo:number = 0) {
            super(imageString, x, y, scaleX, scaleY); 
            
            this.health = health;
            this.moveTo = moveTo;
            this.initalX = x;
            this.currrentScaleX = scaleX;
            this.Start();

            console.log("Enemy: " + imageString + " has loaded");
        }

        public Start():void {
            this.x = this.x;
            this.y = this.y;
        }

        public Update():void {


            if (this.x >= this.moveTo)
            {
                this.scaleX = this.currrentScaleX;
                this.forword = false;
            }
            
            if (this.x <= this.initalX)
            {
                this.scaleX = -this.currrentScaleX;
                this.forword = true;
            }

            if (this.forword)
            {
                this.x = this.x + this.speed;
            }
            else
            {
                this.x = this.x - this.speed;
            }

        }

        get getHealth(): number {
            return this.health;
        }

        set setHealth(newHealth: number) {
            this.health = newHealth;
        }

        public Reset():void {}
    }
}