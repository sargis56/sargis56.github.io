module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private playerSprite: objects.Player;
        private backgroundSprite: objects.Sprite;
        private endSprite: objects.Sprite;
        private startSprite: objects.Sprite;

        private startingX: number = 30;
        private startingY: number = 450;

        private boundsWall: number = 30;
        
        private backgroundMusic:createjs.AbstractSoundInstance;

        private wallRock: objects.Sprite;
        private wallRock2: objects.Sprite;
        private wallRock3: objects.Sprite;
        private wallRock4: objects.Sprite;
        private wallRock5: objects.Sprite;
        private wallRock6: objects.Sprite;
        private wallRock7: objects.Sprite;
        private wallRock8: objects.Sprite;
        private wallRock9: objects.Sprite;
        private wallRock10: objects.Sprite;
        private wallRock11: objects.Sprite;
        private wallRock12: objects.Sprite;
        private wallRock13: objects.Sprite;
        private wallRock14: objects.Sprite;
        private wallRock15: objects.Sprite;
        private wallRock16: objects.Sprite;
        private wallRock17: objects.Sprite;
        private wallRock18: objects.Sprite;
        private wallRock19: objects.Sprite;
        private wallRock20: objects.Sprite;
        private wallRock21: objects.Sprite;
        private wallRock22: objects.Sprite;
        private wallRock23: objects.Sprite;
        private wallRock24: objects.Sprite;
        private wallRock25: objects.Sprite;
        private wallRock26: objects.Sprite;
        private wallRock27: objects.Sprite;
        private wallRock28: objects.Sprite;
        private wallRock29: objects.Sprite;
        private wallRock30: objects.Sprite;
        private wallRock31: objects.Sprite;
        private wallRock32: objects.Sprite;
        private wallRock33: objects.Sprite;
        private wallRock34: objects.Sprite;
        private wallRock35: objects.Sprite;

        private wallList: objects.Sprite[];

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.Start();
        }
        // Methods
        public Start(): void {
            this.playerSprite = new objects.Player(this.assetManager, "playerSprite", this.startingX, this.startingY, 0.05, 0.05);
            this.backgroundSprite = new objects.Sprite(this.assetManager, "backgroundSprite", 250, 225, 1.5, 1);
            this.startSprite = new objects.Player(this.assetManager, "startSprite", this.startingX, this.startingY, 0.1, 0.1); 
            this.endSprite = new objects.Player(this.assetManager, "endSprite", 600, 25, 0.05, 0.05); 
           
            this.wallRock = new objects.Sprite(this.assetManager, "rockSprite", 150, 225, 0.05, 0.05);
            this.wallRock2 = new objects.Sprite(this.assetManager, "rockSprite", 50, 250, 0.05, 0.05);
            this.wallRock3 = new objects.Sprite(this.assetManager, "rockSprite", 50, 400, 0.05, 0.05);
            this.wallRock4 = new objects.Sprite(this.assetManager, "rockSprite", 90, 400, 0.05, 0.05);
            this.wallRock5 = new objects.Sprite(this.assetManager, "rockSprite", 220, 450, 0.05, 0.05);
            this.wallRock6 = new objects.Sprite(this.assetManager, "rockSprite", 200, 225, 0.05, 0.05);
            this.wallRock7 = new objects.Sprite(this.assetManager, "rockSprite", 400, 225, 0.05, 0.05);
            this.wallRock8 = new objects.Sprite(this.assetManager, "rockSprite", 450, 450, 0.05, 0.05);
            this.wallRock9 = new objects.Sprite(this.assetManager, "rockSprite", 225, 400, 0.05, 0.05);
            this.wallRock10 = new objects.Sprite(this.assetManager, "rockSprite", 150, 300, 0.05, 0.05);
            this.wallRock11 = new objects.Sprite(this.assetManager, "rockSprite", 400, 50, 0.05, 0.05);
            this.wallRock12 = new objects.Sprite(this.assetManager, "rockSprite", 225, 50, 0.05, 0.05);
            this.wallRock13 = new objects.Sprite(this.assetManager, "rockSprite", 300, 150, 0.05, 0.05);
            this.wallRock14 = new objects.Sprite(this.assetManager, "rockSprite", 450, 500, 0.05, 0.05);
            this.wallRock15 = new objects.Sprite(this.assetManager, "rockSprite", 600, 150, 0.05, 0.05);
            this.wallRock16 = new objects.Sprite(this.assetManager, "rockSprite", 225, 250, 0.05, 0.05);
            this.wallRock17 = new objects.Sprite(this.assetManager, "rockSprite", 400, 150, 0.05, 0.05);
            this.wallRock18 = new objects.Sprite(this.assetManager, "rockSprite", 550, 50, 0.05, 0.05);
            this.wallRock19 = new objects.Sprite(this.assetManager, "rockSprite", 500, 150, 0.05, 0.05);
            this.wallRock20 = new objects.Sprite(this.assetManager, "rockSprite", 550, 400, 0.05, 0.05);
            this.wallRock21 = new objects.Sprite(this.assetManager, "rockSprite", 600, 350, 0.05, 0.05);
            this.wallRock22 = new objects.Sprite(this.assetManager, "rockSprite", 220, 600, 0.05, 0.05);
            this.wallRock23 = new objects.Sprite(this.assetManager, "rockSprite", 150, 50, 0.05, 0.05);
            this.wallRock24 = new objects.Sprite(this.assetManager, "rockSprite", 150, 300, 0.05, 0.05);
            this.wallRock25 = new objects.Sprite(this.assetManager, "rockSprite", 50, 100, 0.05, 0.05);
            this.wallRock26 = new objects.Sprite(this.assetManager, "rockSprite", 200, 100, 0.05, 0.05);
            this.wallRock27 = new objects.Sprite(this.assetManager, "rockSprite", 450, 100, 0.05, 0.05);
            this.wallRock28 = new objects.Sprite(this.assetManager, "rockSprite", 500, 250, 0.05, 0.05);
            this.wallRock29 = new objects.Sprite(this.assetManager, "rockSprite", 300, 300, 0.05, 0.05);
            this.wallRock30 = new objects.Sprite(this.assetManager, "rockSprite", 250, 350, 0.05, 0.05);
            this.wallRock31 = new objects.Sprite(this.assetManager, "rockSprite", 400, 350, 0.05, 0.05);
            this.wallRock32 = new objects.Sprite(this.assetManager, "rockSprite", 400, 300, 0.05, 0.05);
            this.wallRock33 = new objects.Sprite(this.assetManager, "rockSprite", 600, 300, 0.05, 0.05);
            this.wallRock34 = new objects.Sprite(this.assetManager, "rockSprite", 400, 250, 0.05, 0.05);
            this.wallRock35 = new objects.Sprite(this.assetManager, "rockSprite", 500, 200, 0.05, 0.05);

            //this.wallList = new Array<objects.Sprite>();

            this.Main();
        }

        public Update(): void {
            this.playerSprite.UpdatePlayer();
            //this.stage.regX = (this.darianRightSprite.getX - 50);

            this.wallList = [
                this.wallRock,
                this.wallRock2,
                this.wallRock3,
                this.wallRock4,
                this.wallRock5,
                this.wallRock6,
                this.wallRock7,
                this.wallRock8,
                this.wallRock9,
                this.wallRock10,
                this.wallRock11,
                this.wallRock12,
                this.wallRock13,
                this.wallRock14,
                this.wallRock15,
                this.wallRock16,
                this.wallRock17,
                this.wallRock18,
                this.wallRock19,
                this.wallRock20,
                this.wallRock21,
                this.wallRock22,
                this.wallRock23,
                this.wallRock24,
                this.wallRock25,
                this.wallRock26,
                this.wallRock27,
                this.wallRock28,
                this.wallRock29,
                this.wallRock30,
                this.wallRock31,
                this.wallRock32,
                this.wallRock33,
                this.wallRock34,
                this.wallRock35
            ];

            // > <
            // v ^
            // ^ v
            // < >

            for (let i in this.wallList) {
                if (((this.playerSprite.x > (this.wallList[i].x - this.boundsWall) ) && (this.playerSprite.x < (this.wallList[i].x + this.boundsWall) )) 
                && ((this.playerSprite.y > (this.wallList[i].y - this.boundsWall) ) && (this.playerSprite.y < (this.wallList[i].y + this.boundsWall) )))
                {
                    this.playerSprite.x = this.startingX;
                    this.playerSprite.y = this.startingY;
                }
             }

             if (((this.playerSprite.x > (this.endSprite.x - this.boundsWall) ) && (this.playerSprite.x < (this.endSprite.x + this.boundsWall) )) 
             && ((this.playerSprite.y > (this.endSprite.y - this.boundsWall) ) && (this.playerSprite.y < (this.endSprite.y + this.boundsWall) )))
             {
                this.backgroundMusic.stop();
                objects.Game.currentScene = config.Scene.OVER;
             }

        }

        public Main(): void {
            this.addChild(this.backgroundSprite);
            this.addChild(this.playerSprite);
            this.addChild(this.startSprite);
            this.addChild(this.endSprite);

            this.addChild(this.wallRock);
            this.addChild(this.wallRock2);
            this.addChild(this.wallRock3);
            this.addChild(this.wallRock4);
            this.addChild(this.wallRock5);
            this.addChild(this.wallRock6);
            this.addChild(this.wallRock7);
            this.addChild(this.wallRock8);
            this.addChild(this.wallRock9);
            this.addChild(this.wallRock10);
            this.addChild(this.wallRock11);
            this.addChild(this.wallRock12);
            this.addChild(this.wallRock13);
            this.addChild(this.wallRock14);
            this.addChild(this.wallRock15);
            this.addChild(this.wallRock16);
            this.addChild(this.wallRock17);
            this.addChild(this.wallRock18);
            this.addChild(this.wallRock19);
            this.addChild(this.wallRock20);
            this.addChild(this.wallRock21);
            this.addChild(this.wallRock22);
            this.addChild(this.wallRock23);
            this.addChild(this.wallRock24);
            this.addChild(this.wallRock25);
            this.addChild(this.wallRock26);
            this.addChild(this.wallRock27);
            this.addChild(this.wallRock28);
            this.addChild(this.wallRock29);
            this.addChild(this.wallRock30);
            this.addChild(this.wallRock31);
            this.addChild(this.wallRock32);
            this.addChild(this.wallRock33);
            this.addChild(this.wallRock34);
            this.addChild(this.wallRock35);
        }
    }
}