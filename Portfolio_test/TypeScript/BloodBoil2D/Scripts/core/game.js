/// <reference path="_references.ts"/>
// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest; // Basically a "struct". Placeholder for now.\
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [""],
        "frames": [
            [1, 1, 44, 118, 0, 0, 0],
            [47, 1, 56, 62, 0, 0, 0],
            [47, 65, 57, 61, 0, 0, 0],
            [105, 1, 44, 61, 0, 0, 0],
            [106, 64, 44, 61, 0, 0, 0],
            [151, 1, 36, 61, 0, 0, 0],
            [152, 64, 34, 61, 0, 0, 0],
            [188, 64, 34, 61, 0, 0, 0],
            [189, 1, 34, 61, 0, 0, 0],
            [224, 64, 64, 60, 0, 0, 0],
            [225, 1, 52, 60, 0, 0, 0],
            [279, 1, 52, 60, 0, 0, 0],
            [290, 63, 48, 60, 0, 0, 0],
            [333, 1, 46, 60, 0, 0, 0],
            [340, 63, 36, 60, 0, 0, 0],
            [378, 63, 34, 60, 0, 0, 0],
            [381, 1, 32, 60, 0, 0, 0],
            [414, 63, 104, 58, 0, 0, 0],
            [415, 1, 50, 58, 0, 0, 0],
            [467, 1, 46, 58, 0, 0, 0],
            [515, 1, 44, 58, 0, 0, 0],
            [520, 61, 44, 58, 0, 0, 0],
            [561, 1, 44, 58, 0, 0, 0],
            [566, 61, 42, 58, 0, 0, 0],
            [607, 1, 40, 58, 0, 0, 0],
            [610, 61, 40, 58, 0, 0, 0],
            [649, 1, 38, 58, 0, 0, 0],
            [652, 61, 38, 58, 0, 0, 0],
            [689, 1, 38, 58, 0, 0, 0],
            [692, 61, 36, 58, 0, 0, 0],
            [729, 1, 32, 58, 0, 0, 0],
            [730, 61, 32, 58, 0, 0, 0],
            [763, 1, 32, 58, 0, 0, 0],
            [764, 61, 30, 58, 0, 0, 0],
            [796, 61, 30, 58, 0, 0, 0],
            [797, 1, 28, 58, 0, 0, 0],
            [827, 1, 57, 57, 0, 0, 0],
            [828, 60, 53, 57, 0, 0, 0],
            [828, 119, 180, 8, 0, 0, 0],
            [883, 60, 36, 57, 0, 0, 0],
            [886, 1, 52, 56, 0, 0, 0],
            [921, 59, 62, 54, 0, 0, 0],
            [940, 1, 57, 49, 0, 0, 0],
            [985, 52, 40, 49, 0, 0, 0],
            [1010, 103, 30, 24, 0, 0, 0],
            [985, 103, 16, 14, 0, 0, 0],
            [999, 1, 38, 49, 0, 0, 0],
            [1027, 52, 36, 49, 0, 0, 0],
            [1042, 103, 30, 24, 0, 0, 0],
            [1039, 1, 40, 47, 0, 0, 0],
            [1065, 50, 33, 47, 0, 0, 0],
            [1081, 1, 29, 47, 0, 0, 0],
            [1074, 99, 36, 27, 0, 0, 0],
            [1100, 50, 86, 46, 0, 0, 0],
            [1112, 1, 48, 46, 0, 0, 0],
            [1162, 1, 34, 46, 0, 0, 0],
            [1112, 98, 16, 14, 0, 0, 0],
            [1130, 98, 16, 14, 0, 0, 0],
            [1148, 98, 16, 14, 0, 0, 0],
            [1166, 98, 16, 14, 0, 0, 0],
            [1184, 98, 16, 14, 0, 0, 0],
            [1188, 49, 33, 46, 0, 0, 0],
            [1198, 1, 32, 46, 0, 0, 0],
            [1202, 97, 16, 14, 0, 0, 0],
            [1202, 113, 16, 14, 0, 0, 0],
            [1223, 49, 30, 46, 0, 0, 0],
            [1232, 1, 30, 46, 0, 0, 0],
            [1255, 49, 27, 46, 0, 0, 0],
            [1264, 1, 25, 46, 0, 0, 0],
            [1284, 49, 44, 45, 0, 0, 0],
            [1284, 96, 23, 31, 0, 0, 0],
            [1291, 1, 39, 45, 0, 0, 0],
            [1330, 48, 38, 45, 0, 0, 0],
            [1330, 95, 62, 32, 0, 0, 0],
            [1332, 1, 36, 45, 0, 0, 0],
            [1370, 1, 35, 45, 0, 0, 0],
            [1370, 48, 40, 41, 0, 0, 0],
            [1394, 91, 188, 36, 0, 0, 0],
            [1407, 1, 106, 40, 0, 0, 0],
            [1412, 43, 44, 39, 0, 0, 0],
            [1458, 43, 40, 39, 0, 0, 0],
            [1500, 43, 25, 39, 0, 0, 0],
            [1515, 1, 28, 38, 0, 0, 0],
            [1527, 41, 28, 38, 0, 0, 0],
            [1545, 1, 28, 38, 0, 0, 0],
            [1557, 41, 27, 38, 0, 0, 0],
            [1575, 1, 26, 38, 0, 0, 0],
            [1584, 81, 25, 38, 0, 0, 0],
            [1586, 41, 25, 38, 0, 0, 0],
            [1603, 1, 22, 38, 0, 0, 0],
            [1611, 81, 21, 38, 0, 0, 0],
            [1613, 41, 33, 37, 0, 0, 0],
            [1627, 1, 33, 37, 0, 0, 0],
            [1634, 80, 32, 37, 0, 0, 0],
            [1648, 40, 53, 36, 0, 0, 0],
            [1662, 1, 36, 36, 0, 0, 0],
            [1700, 1, 35, 36, 0, 0, 0],
            [1668, 78, 33, 36, 0, 0, 0],
            [1703, 39, 33, 36, 0, 0, 0],
            [1737, 1, 39, 34, 0, 0, 0],
            [1703, 77, 39, 34, 0, 0, 0],
            [1738, 37, 34, 34, 0, 0, 0],
            [1744, 73, 64, 33, 0, 0, 0],
            [1774, 37, 36, 33, 0, 0, 0],
            [1778, 1, 34, 33, 0, 0, 0],
            [1810, 72, 34, 33, 0, 0, 0],
            [1812, 36, 34, 33, 0, 0, 0],
            [1814, 1, 30, 33, 0, 0, 0],
            [1846, 1, 28, 33, 0, 0, 0]
        ],
        "animations": {
            "player_jump": { "frames": [0] },
            "player_damaged": { "frames": [1, 69, 102] },
            "boss_jump": { "frames": [3, 4, 2] },
            "player_stand": { "frames": [6, 7, 8, 5], "speed": 0.05 },
            "player_run": { "frames": [41, 9], "speed": 0.15 },
            "player_attack_towards": { "frames": [10] },
            "player_slide": { "frames": [11] },
            "player_casting": { "frames": [29, 19, 12] },
            "player_walkaway": { "frames": [13] },
            "player_talkaway": { "frames": [16, 14, 15] },
            "player_attack_right": { "frames": [17] },
            "boss_run": { "frames": [37, 18], "speed": 0.15 },
            "player_talk": { "frames": [30, 25, 31, 20] },
            "player_walk_towards": { "frames": [21] },
            "boss_standtalk": { "frames": [34, 28, 22, 35, 32] },
            "boss_walk": { "frames": [23] },
            "player_guard": { "frames": [24] },
            "boss_attack": { "frames": [26, 27, 36] },
            "boss_standback": { "frames": [33] },
            "lifebar_meter": { "frames": [38] },
            "boss_damage": { "frames": [39, 72] },
            "player_walk_right": { "frames": [40] },
            "boss_duckattack": { "frames": [47, 43, 46, 42] },
            "boss_axe": { "frames": [44, 48], "speed": 0.15 },
            "token": { "frames": [45, 56, 57, 58, 59, 60, 63, 64] },
            "villager_jump": { "frames": [49] },
            "villager_talk": { "frames": [65, 55, 68, 67, 62, 66, 50], "speed": 0.05 },
            "villager_damage": { "frames": [51, 93] },
            "bunny": { "frames": [108, 104, 105, 103, 107, 106, 52, 101], "speed": 0.05 },
            "boss_whip": { "frames": [78, 73, 53] },
            "villager_magic": { "frames": [61, 54] },
            "mallicia_damaged": { "frames": [70] },
            "villager_magic1": { "frames": [71] },
            "villager_walk": { "frames": [74] },
            "villager_guard": { "frames": [75] },
            "villager_run": { "frames": [74, 76, 49], "speed": 0.15 },
            "lifebar_frame": { "frames": [77] },
            "mallicia_shield": { "frames": [92, 100, 79], "speed": 0.15 },
            "mallicia_walk": { "frames": [91, 99, 80], "speed": 0.15 },
            "mallicia_armsopened": { "frames": [81] },
            "mallicia_standshield": { "frames": [88, 82, 83, 84] },
            "mallicia_stand": { "frames": [87, 85, 90, 89, 86] },
            "mallicia_effect": { "frames": [94] },
            "mallicia_attack": { "frames": [95] },
            "mallicia_attack_armour": { "frames": [96] },
            "mallicia_guard_armour": { "frames": [97] },
            "mallicia_guard_shield": { "frames": [98] }
        }
    };
    assetManifest = [
        { id: "bloodboil_sprite", src: "./Assets/Sprites/bloodboil_sprite.png" },
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "playButton", src: "./Assets/Images/Play.png" },
        { id: "nextButton", src: "./Assets/Images/nextButton.png" },
        { id: "backButton", src: "./Assets/Images/backButton.png" },
        { id: "logoSprite", src: "./Assets/Images/logo_4.png" },
        { id: "teamLogoSprite", src: "./Assets/Images/TeamLogo.png" },
        { id: "darianDeadSprite", src: "./Assets/Images/darianDead.png" },
        { id: "darianRightSprite", src: "./Assets/Images/darianRight.png" },
        { id: "lifeMeterSprite", src: "./Assets/Images/lifeMeter.png" },
        { id: "healthBarSprite", src: "./Assets/Images/healthBar.png" },
        { id: "levelExitSprite", src: "./Assets/Images/exit_sighn.png" },
        { id: "levelExitSprite2", src: "./Assets/Images/door.png" },
        { id: "boxSprite", src: "./Assets/Images/box.png" },
        { id: "healthPowerUpSprite", src: "./Assets/Images/healthPU.png" },
        { id: "invinsPowerUpSprite", src: "./Assets/Images/invinsPU.png" },
        { id: "winBackGroundSprite", src: "./Assets/Images/winBackground.jpg" },
        { id: "start_music", src: "./Assets/Audio/startBM.mp3" },
        { id: "gameover_music", src: "./Assets/Audio/overBM.mp3" },
        { id: "win_music", src: "./Assets/Audio/winBM.mp3" },
        //Tut level
        { id: "tutBackgroundSprite", src: "./Assets/Images/castleBackground.png" },
        { id: "tutGroundSprite", src: "./Assets/Images/castleGround.png" },
        { id: "tut_music", src: "./Assets/Audio/TutBM.mp3" },
        //Level 1
        { id: "level1BackgroundSprite", src: "./Assets/Images/houseBackground.png" },
        { id: "level1GroundSprite", src: "./Assets/Images/house1Ground.png" },
        { id: "level1_music", src: "./Assets/Audio/Level1BM.mp3" },
        { id: "level1BoxSprite", src: "./Assets/Images/boxLevel1.png" },
        { id: "level1PlatformSprite", src: "./Assets/Images/level1Platform2.png" },
        //Level 2
        { id: "level2BackgroundSprite", src: "./Assets/Images/feildsBackground.png" },
        { id: "level2GroundSprite", src: "./Assets/Images/feildsGround.png" },
        { id: "level2_music", src: "./Assets/Audio/Level2BM.mp3" },
        { id: "level2PlatformSprite", src: "./Assets/Images/level2Platform.png" },
        { id: "level2house1Sprite", src: "./Assets/Images/house1.png" },
        { id: "level2house2Sprite", src: "./Assets/Images/house2.png" },
        { id: "level2house3Sprite", src: "./Assets/Images/house3.png" },
        //Level 3
        { id: "level3GroundSprite", src: "./Assets/Images/villageGrass1.png" },
        { id: "level3_music", src: "./Assets/Audio/Level3BM.mp3" },
        { id: "startBackGroundSprite", src: "./Assets/Images/newBackgroundScreen.jpg" },
        { id: "deadBackGroundSprite", src: "./Assets/Images/newGameOverBackground.jpg" },
        { id: "enemyPHSprite", src: "./Assets/Images/millita.png" },
        { id: "enemyPHSprite2", src: "./Assets/Images/rabbit1.png" },
        { id: "enemyPHSprite3", src: "./Assets/Images/squire1.png" },
        { id: "enemyPHSprite4", src: "./Assets/Images/knight1.png" },
        { id: "enemyPHSprite5", src: "./Assets/Images/vampireHunter.png" }
    ];
    function Init() {
        console.log("Initialization start");
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue.
        assetManager.installPlugin(createjs.Sound); // Necessary to use sounds in our game. 
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this); // Calls the start function when the assetManager is loaded
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        textureAtlasData.images = [assetManager.getResult("bloodboil_sprite")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive function. Checks every frame for every image. In menu, turn on. In game, turn off.
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        if (currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.Tut:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.Level1:
                stage.removeAllChildren();
                currentScene = new scenes.Level1Scene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.Level2:
                stage.removeAllChildren();
                currentScene = new scenes.Level2Scene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.Level3:
                stage.removeAllChildren();
                currentScene = new scenes.Level3Scene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.WIN:
                stage.removeAllChildren();
                currentScene = new scenes.WinScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map