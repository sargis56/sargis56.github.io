module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private titleLabel: objects.Label;
        private teamLabel: objects.Label;
        private startButton: objects.Button;
        private logoSprite: objects.GameSprite;
        private teamLogoSprite: objects.GameSprite;
        private startBackGroundSprite: objects.GameSprite

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.backgroundMusic.stop();

            this.Start();
        }
        // Methods
        public startButtonClick():void {
            managers.Game.currentScene = config.Scene.Tut;
        }

        // Use start function to create objects
        public Start(): void {
            //#000000
            this.titleLabel = new objects.Label("Blood Boil", "60px", "IM Fell DW Pica", "#ffffff", 320, 320, true);
            this.startButton = new objects.Button(this.assetManager, "playButton", 320, 400, 0.5, 0.5);
            this.logoSprite = new objects.GameSprite(this.assetManager, "logoSprite", 350, 170, 0.5, 0.5);
            this.teamLabel = new objects.Label("By GAME OF THORNS", "20px", "IM Fell DW Pica", "#ffffff", 320, 450, true);
            this.teamLogoSprite = new objects.GameSprite(this.assetManager, "teamLogoSprite", 190, 450, 0.15, 0.15);
            this.startBackGroundSprite = new objects.GameSprite(this.assetManager, "startBackGroundSprite", 320, 245, 1, 1.5);
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
            this.addChild(this.teamLogoSprite);
            
        }
    }
}