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
    var WinScene = /** @class */ (function (_super) {
        __extends(WinScene, _super);
        // Constructor
        function WinScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.backgroundMusic = createjs.Sound.play("win_music");
            _this.backgroundMusic.loop = -1;
            _this.backgroundMusic.volume = 0.5;
            _this.Start();
            return _this;
        }
        // Methods
        WinScene.prototype.Start = function () {
            this.gameOverLabel = new objects.Label("You Win", "40px", "IM Fell DW Pica", "#000000", 320, 100, true);
            this.darianDeadSprite = new objects.GameSprite(this.assetManager, "darianRightSprite", 320, 340, 2, 2);
            this.deadBackGroundSprite = new objects.GameSprite(this.assetManager, "winBackGroundSprite", 320, 225, 2, 2);
            this.Main();
        };
        WinScene.prototype.Update = function () {
            this.stage.regX = 0;
            if (managers.Game.keyboardManager.restart) {
                this.backgroundMusic.stop();
                managers.Game.currentScene = config.Scene.Tut;
            }
        };
        WinScene.prototype.Main = function () {
            this.addChild(this.deadBackGroundSprite);
            this.addChild(this.gameOverLabel);
            this.addChild(this.darianDeadSprite);
        };
        return WinScene;
    }(objects.Scene));
    scenes.WinScene = WinScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map