module scenes {
    export class WinScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private darianDeadSprite: objects.GameSprite;
        private deadBackGroundSprite: objects.GameSprite;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.backgroundMusic = createjs.Sound.play("win_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.Start();
        }
        // Methods

        public Start():void {
            this.gameOverLabel = new objects.Label("You Win", "40px", "IM Fell DW Pica", "#000000", 320, 100, true);
            this.darianDeadSprite = new objects.GameSprite(this.assetManager, "darianRightSprite", 320, 340, 2, 2);
            this.deadBackGroundSprite = new objects.GameSprite(this.assetManager, "winBackGroundSprite", 320, 225, 2, 2);
            this.Main();
        }

        public Update(): void {
            this.stage.regX = 0;

            if ( managers.Game.keyboardManager.restart ) {
                this.backgroundMusic.stop();
                managers.Game.currentScene = config.Scene.Tut;
            }
        }

        public Main(): void {
            this.addChild(this.deadBackGroundSprite);

            this.addChild(this.gameOverLabel);

            this.addChild(this.darianDeadSprite);
        }
    }
}