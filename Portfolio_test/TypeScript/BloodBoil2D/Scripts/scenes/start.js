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
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructors
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.backgroundMusic = createjs.Sound.play("start_music");
            _this.backgroundMusic.loop = -1;
            _this.backgroundMusic.volume = 0.5;
            _this.backgroundMusic.stop();
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.startButtonClick = function () {
            managers.Game.currentScene = config.Scene.Tut;
        };
        // Use start function to create objects
        StartScene.prototype.Start = function () {
            //#000000
            this.titleLabel = new objects.Label("Blood Boil", "60px", "IM Fell DW Pica", "#ffffff", 320, 320, true);
            this.startButton = new objects.Button(this.assetManager, "playButton", 320, 400, 0.5, 0.5);
            this.logoSprite = new objects.GameSprite(this.assetManager, "logoSprite", 350, 170, 0.5, 0.5);
            this.teamLabel = new objects.Label("By GAME OF THORNS", "20px", "IM Fell DW Pica", "#ffffff", 320, 450, true);
            this.teamLogoSprite = new objects.GameSprite(this.assetManager, "teamLogoSprite", 190, 450, 0.15, 0.15);
            this.startBackGroundSprite = new objects.GameSprite(this.assetManager, "startBackGroundSprite", 320, 245, 1, 1.5);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.stage.regX = 0;
        };
        StartScene.prototype.Main = function () {
            this.addChild(this.startBackGroundSprite);
            this.addChild(this.titleLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
            this.addChild(this.logoSprite);
            this.addChild(this.teamLabel);
            this.addChild(this.teamLogoSprite);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map