module scenes {

    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private endBackGroundSprite: objects.Sprite;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }

        public Start():void {
            this.backButton = new objects.Button(this.assetManager, "backButton", 550, 400, 0.25, 0.25);
            this.gameOverLabel = new objects.Label("Congratulations, you found the treasure!", "30px", "IM Fell DW Pica", "#ffffff", 320, 100, true);
            this.endBackGroundSprite = new objects.Sprite(this.assetManager, "endBackgroundSprite", 250, 225, 1, 1);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {
            this.addChild(this.endBackGroundSprite);
            this.addChild(this.gameOverLabel);

            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}