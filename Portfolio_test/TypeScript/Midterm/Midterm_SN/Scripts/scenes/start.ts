module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private titleLabel: objects.Label;
        private teamLabel: objects.Label;
        private startButton: objects.Button;
        private logoSprite: objects.Sprite;
        private startBackGroundSprite: objects.Sprite

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        private startButtonClick():void {
            objects.Game.currentScene = config.Scene.GAME;
        }

        // Use start function to create objects
        public Start(): void {
            //#000000
            this.titleLabel = new objects.Label("Treasure Maze", "60px", "IM Fell DW Pica", "#ffffff", 320, 320, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 400, 0.25, 0.25);
            this.logoSprite = new objects.Sprite(this.assetManager, "logoSprite", 325, 170, 0.25, 0.25);
            this.teamLabel = new objects.Label("By Sargis Nahapetyan", "20px", "IM Fell DW Pica", "#ffffff", 320, 450, true);
            this.startBackGroundSprite = new objects.Sprite(this.assetManager, "startBackGroundSprite", 250, 225, 1.5, 1.5);
            this.Main();
        }

        public Update(): void {
            this.stage.regX = 0;
        }

        public Main(): void {
            this.addChild(this.startBackGroundSprite);

            this.addChild(this.titleLabel);

            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);

            this.addChild(this.logoSprite);

            this.addChild(this.teamLabel);
            
        }
    }
}