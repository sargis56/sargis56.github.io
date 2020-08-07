module objects {
    export class Player extends objects.GameObjectAtlas {
        // Variables
        // detects the player is dead
        public isDead:boolean;
        public isMoving:boolean;
        public isPowerG:boolean;  // boolean if player got the invulable potion or something
        public powerTime:number;  // power up duration
        public holdKey:boolean;   // boolean if key is pressed
        public isJumping:boolean; // boolean if player in the air
        public isGround:boolean;  // boolean if player off the ground
        public isGuarding:boolean;// boolean if player is gaurding
        public broken:boolean;    // boolean to detect if the gaurding breaks 
        public guardTime:number;  // how long the duration of guard
        public Gregen:number;     // how much the guard regenerate
        public isAttacking:boolean; // boolean if player is attacking
        public attackTime:number;   // how long the player can attack again
        public waitTime:number;     // the duration of the attack.
        public y_velocity:number; // Gravity
        public limit:number;     // limit the player jump
        public last_pos:number;   // get the current player position
        private currrentScaleX: number;

        // Constructor
        constructor(imageString:string, x:number = 0, y:number = 0, scaleX:number = 0, scaleY:number = 0) {
            super(imageString, x, y, scaleX, scaleY); 

            this.currrentScaleX = scaleX;

            this.Start();

        }

        public Start():void {
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
        }

        public Update():void {
            this.Move();
            this.UpdatePlayer();
        }

        public Reset():void {}


        public UpdatePlayer(): void {
            this.isMoving = false;

            //console.log(this.getImageString);
            //this.paused = true;
            if( managers.Game.keyboardManager.moveLeft ) {
                this.scaleX = -this.currrentScaleX
                //this.paused = false;
                if (this.x >= 50)
                {
                    this.isMoving = true;
                    this.x = this.x - 5;
                }
            }
            if( managers.Game.keyboardManager.moveRight ) {
                this.x = this.x + 5;
                //this.paused = false;
                this.scaleX = this.currrentScaleX
                this.isMoving = true;
            }
            if( managers.Game.keyboardManager.moveDown ) {
                if (this.y <= 420)
                {
                    this.y = this.y + 5; 
                }  
            }
            // ----- Attack
            // console.log("isAttacking: " + this.isAttacking + "\nAttach Duration: " + this.attackTime);
            if (managers.Game.keyboardManager.attack && !this.isAttacking)
            {
                this.isAttacking = true;
                this.attackTime = this.waitTime;
            }
            if (this.isAttacking && this.attackTime == 0) {
                this.isAttacking = false;
            }
            if(this.attackTime > 0)
            {
                if(this.attackTime < 0) {
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
            if (managers.Game.keyboardManager.gaurd && this.broken){
                this.isGuarding = true;
                this.Gregen = 1;
                if(this.isGuarding && this.guardTime > 0){
                    if (!this.isPowerG){
                        this.guardTime -= this.Gregen; // decrease the duration
                    }
                    if(this.guardTime <= 0){
                        this.guardTime = 0;
                        this.broken = false;  
                        this.isGuarding = false;               
                    }

                }
            }

            if (!managers.Game.keyboardManager.gaurd && this.isGuarding)
            {
                this.isGuarding = false;
            }

            if (!this.isGuarding && this.guardTime >=0 && this.guardTime <= 100)
            {
                // if the gaurdTime hits 0 stop player from using gaurd
                
                    this.guardTime += this.Gregen / 2;

                if( this.guardTime >= 100){
                    this.guardTime = 100;
                    this.Gregen = 0
                    this.broken = true;
                }
            }

            // Power Guard Potion duration
            if (this.isPowerG && this.powerTime == 0){
                this.powerTime = this.waitTime;
            }
            if (this.powerTime > 0)
            {
                if(this.powerTime < 0) {
                    this.powerTime = 0;
                }
                else {
                this.powerTime -= 0.5;
                }
            }
            // ----- Guard
            // ----- Jump

           
                if( (managers.Game.keyboardManager.moveUp && this.isGround && !this.isJumping
                    && this.y > (this.last_pos - this.limit)) ) {
                    //console.log("isJumping: " + this.isJumping + " isGround: " + this.isGround + " holdKey: " 
                            // + this.holdKey);
                            this.holdKey = true;
                            this.y -= 8;  
                            if (this.y <= (this.last_pos - this.limit)){
                                this.isGround = false;
                                this.holdKey = false;
                            }   
                            this.isJumping = true;
                        }
                        if (!managers.Game.keyboardManager.moveUp && this.holdKey )         
                        {
                            this.holdKey = false;
                            this.isGround = false;
                        }   


            if(!this.isGround && !this.holdKey){
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

        }
        // ----- Jump
    }
}