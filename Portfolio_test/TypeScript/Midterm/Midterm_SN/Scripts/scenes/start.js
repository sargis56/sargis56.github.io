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
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.startButtonClick = function () {
            objects.Game.currentScene = config.Scene.GAME;
        };
        // Use start function to create objects
        StartScene.prototype.Start = function () {
            //#000000
            this.titleLabel = new objects.Label("Treasure Maze", "60px", "IM Fell DW Pica", "#ffffff", 320, 320, true);
            this.startButton = new objects.Button(this.assetManager, "startButton", 320, 400, 0.25, 0.25);
            this.logoSprite = new objects.Sprite(this.assetManager, "logoSprite", 325, 170, 0.25, 0.25);
            this.teamLabel = new objects.Label("By Sargis Nahapetyan", "20px", "IM Fell DW Pica", "#ffffff", 320, 450, true);
            this.startBackGroundSprite = new objects.Sprite(this.assetManager, "startBackGroundSprite", 250, 225, 1.5, 1.5);
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
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map