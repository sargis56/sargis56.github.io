var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        GameOverScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.Start = function () {
            this.backButton = new objects.Button(this.assetManager, "backButton", 550, 400, 0.25, 0.25);
            this.gameOverLabel = new objects.Label("Congratulations, you found the treasure!", "30px", "IM Fell DW Pica", "#ffffff", 320, 100, true);
            this.endBackGroundSprite = new objects.Sprite(this.assetManager, "endBackgroundSprite", 250, 225, 1, 1);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.endBackGroundSprite);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map