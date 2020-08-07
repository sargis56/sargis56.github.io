module scenes {
    export class Level2Scene extends objects.Scene {
        // Variables
        private groundSprite1: objects.GameSprite;
        private groundSprite2: objects.GameSprite;
        private groundSprite3: objects.GameSprite;
        private groundSprite4: objects.GameSprite;
        private groundSprite5: objects.GameSprite;
        private groundSprite6: objects.GameSprite;
        private groundSprite7: objects.GameSprite;
        private groundSprite8: objects.GameSprite;
        private groundSprite9: objects.GameSprite;
        private groundSprite10: objects.GameSprite;

        private backgroundSprite1: objects.GameSprite;
        private backgroundSprite2: objects.GameSprite;
        private backgroundSprite3: objects.GameSprite;
        private backgroundSprite4: objects.GameSprite;
        private backgroundSprite5: objects.GameSprite;

        private exitLevelSprite: objects.GameSprite;

        private boxSprite1: objects.GameSprite;
        private boxSprite2: objects.GameSprite;
        private boxSprite3: objects.GameSprite;
        private boxSprite4: objects.GameSprite;
        private boxSprite5: objects.GameSprite;

        private invincUPSprite1: objects.GameSprite;
        
        private darianRightSprite: objects.Player;
        private darianSpriteRun: objects.Player;
        private darianSpriteJump: objects.Player;
        private darianSpriteAttack: objects.Player;
        private darianSpriteGuard: objects.Player;

        private lifeMeterSprite: objects.GameSprite;
        private healthBarSprite: objects.GameSprite;
        private enemy1: objects.Enemy;
        private enemy2: objects.Enemy;
        private enemy3: objects.Enemy;
        private enemy4: objects.Enemy;
        private enemy5: objects.Enemy;
        private enemy6: objects.Enemy;
        private enemy7: objects.Enemy;
        private enemy8: objects.Enemy;
        private enemy9: objects.Enemy;
        private enemy10: objects.Enemy;

        private enemy11: objects.Enemy;
        private enemy12: objects.Enemy;
        private enemy13: objects.Enemy;
        private enemy14: objects.Enemy;
        private enemy15: objects.Enemy;
        private enemy16: objects.Enemy;
        private enemy17: objects.Enemy;
        private enemy18: objects.Enemy;
        private enemy19: objects.Enemy;
        private enemy20: objects.Enemy;

        private lowerHealth: number  = 1;
        private decayHealthAmount: number  = 0.00075 //5;

        private platformSprite1: objects.GameSprite;
        private platformSprite2: objects.GameSprite;
        private platformSprite3: objects.GameSprite;
        private platformSprite4: objects.GameSprite;
        private platformSprite5: objects.GameSprite;
        private platformSprite6: objects.GameSprite;

        private house1Sprite: objects.GameSprite;
        private house2Sprite: objects.GameSprite;
        private house3Sprite: objects.GameSprite;

        private healthUPSprite1: objects.GameSprite;
        private healthUPSprite2: objects.GameSprite;
        private healthUPSprite3: objects.GameSprite;

        private endLevelBound: number  = 140*22;
        
        private enemyList: objects.Enemy[];

        private spriteList: objects.GameSprite[];

        private boxesList: objects.GameSprite[];

        private labalList: objects.Label[];

        private powerupHealthList: objects.GameSprite[];
        private powerupInvincList: objects.GameSprite[];

        private darianList: objects.Player[];

        private isOnPlatform: boolean = false;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.backgroundMusic = createjs.Sound.play("level2_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.Start();
        }
        // Methods  
        public Start(): void {
            this.groundSprite1 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140, 470, 1, 1);
            this.groundSprite2 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*4, 470, 1, 1);
            this.groundSprite3 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*7, 470, 1, 1);
            this.groundSprite4 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*10, 470, 1, 1);
            this.groundSprite5 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*13, 470, 1, 1);
            this.groundSprite6 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*16, 470, 1, 1);
            this.groundSprite7 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*19, 470, 1, 1);
            this.groundSprite8 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*22, 470, 1, 1);
            this.groundSprite9 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*25, 470, 1, 1);
            this.groundSprite10 = new objects.GameSprite(this.assetManager, "level2GroundSprite", 140*28, 470, 1, 1);

            this.backgroundSprite1 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340, 225, 1.5, 3.25);
            this.backgroundSprite2 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*3.25, 225, 1.5, 3.25);
            this.backgroundSprite3 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*5.50, 225, 1.5, 3.25);
            this.backgroundSprite4 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*7.75, 225, 1.5, 3.25);
            this.backgroundSprite5 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*10, 225, 1.5, 3.25);

            this.exitLevelSprite = new objects.GameSprite(this.assetManager, "levelExitSprite", this.endLevelBound, 430, 0.15, 0.15);

            this.lifeMeterSprite = new objects.GameSprite(this.assetManager, "lifeMeterSprite", 150, 150, 1, 1.5);
            this.healthBarSprite = new objects.GameSprite(this.assetManager, "healthBarSprite", 150, 150, 1, 1);

            this.enemy1 = new objects.Enemy("mallicia_walk", 380, 420, 1.5, 1.5, 120, 500);
            this.enemy2 = new objects.Enemy("villager_run", 500, 420, 1.25, 1.25, 100, 520);
            this.enemy3 = new objects.Enemy("villager_run", 600, 420, 1.25, 1.25, 100, 700);
            this.enemy4 = new objects.Enemy("villager_run", 1200, 420, 1.25, 1.25, 100, 1200+200);
            this.enemy5 = new objects.Enemy("villager_run", 1420, 420, 1.25, 1.25, 100, 1420+500);
            this.enemy6 = new objects.Enemy("villager_run", 1800, 420, 1.25, 1.25, 100, 1800+200);
            this.enemy7 = new objects.Enemy("villager_run", 2200, 420, 1.25, 1.25, 100, 2200+400);
            this.enemy8 = new objects.Enemy("villager_run", 2600, 420, 1.25, 1.25, 100, 2600+200);
            this.enemy9 = new objects.Enemy("villager_run", 2700, 420, 1.25, 1.25, 100, 2700+400);
            this.enemy10 = new objects.Enemy("villager_run", 2900, 420, 1.25, 1.25, 100, 2900+200);

            this.enemy11 = new objects.Enemy("mallicia_walk", 380, 420, 1.5, 1.5, 120, 500);
            this.enemy12 = new objects.Enemy("mallicia_shield", 1234, 420, 1.5, 1.5, 120, 1234+500);
            this.enemy13 = new objects.Enemy("mallicia_walk", 1420, 420, 1.5, 1.5, 120, 1420+600);
            this.enemy14 = new objects.Enemy("mallicia_shield", 1800, 420, 1.5, 1.5, 120, 1800+700);
            this.enemy15 = new objects.Enemy("mallicia_walk", 2000, 420, 1.5, 1.5, 120, 2000+500);
            this.enemy16 = new objects.Enemy("mallicia_shield", 2200, 420, 1.5, 1.5, 120, 2200+400);
            this.enemy17 = new objects.Enemy("mallicia_walk", 2300, 420, 1.5, 1.5, 120, 2300+500);
            this.enemy18 = new objects.Enemy("mallicia_shield", 2700, 420, 1.5, 1.5, 120, 2700+700);
            this.enemy19 = new objects.Enemy("mallicia_walk", 2400, 420, 1.5, 1.5, 120, 2400+500);
            this.enemy20 = new objects.Enemy("mallicia_shield", 2900, 420, 1.5, 1.5, 120, 2900+500);

            this.darianRightSprite = new objects.Player("player_stand", 100, 420, 1, 1);
            this.darianSpriteRun = new objects.Player("player_run", 100, 420, 1, 1);
            this.darianSpriteJump = new objects.Player("player_jump", 100, 420, 1, 1);
            this.darianSpriteAttack = new objects.Player("player_attack_right", 100, 420, 1, 1);
            this.darianSpriteGuard = new objects.Player("player_guard", 100, 420, 1, 1);
            
            this.invincUPSprite1 = new objects.GameSprite(this.assetManager, "invinsPowerUpSprite", 2000, 220, 0.05, 0.05);

            this.healthUPSprite1 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 1150, 220, 0.05, 0.05);
            this.healthUPSprite2 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 2200, 220, 0.05, 0.05);
            this.healthUPSprite3 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 2750, 420, 0.05, 0.05);
           

            this.boxSprite1 = new objects.GameSprite(this.assetManager, "boxSprite", 380, 420, 0.15, 0.15);
            this.boxSprite2 = new objects.GameSprite(this.assetManager, "boxSprite", 680, 420, 0.15, 0.15);
            this.boxSprite3 = new objects.GameSprite(this.assetManager, "boxSprite", 1680, 420, 0.15, 0.15);
            this.boxSprite4 = new objects.GameSprite(this.assetManager, "boxSprite", 2080, 420, 0.15, 0.15);
            this.boxSprite5 = new objects.GameSprite(this.assetManager, "boxSprite", 2580, 420, 0.15, 0.15);

            this.platformSprite1 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 880, 300, 0.15, 0.05);
            this.platformSprite2 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 1080, 300, 0.15, 0.05);
            this.platformSprite3 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 1680, 300, 0.15, 0.05);
            this.platformSprite4 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 1880, 300, 0.15, 0.05);
            this.platformSprite5 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 2280, 300, 0.15, 0.05);
            this.platformSprite6 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 2600, 300, 0.15, 0.05);

            this.house1Sprite = new objects.GameSprite(this.assetManager, "level2house1Sprite", 880, 260, 1, 1);
            this.house2Sprite = new objects.GameSprite(this.assetManager, "level2house2Sprite", 1680, 330, 1, 1);
            this.house3Sprite = new objects.GameSprite(this.assetManager, "level2house3Sprite", 2380, 335, 1, 1);

            this.enemyList = [
                this.enemy1,
                this.enemy2,
                this.enemy3,
                this.enemy4,
                this.enemy5,
                this.enemy6,
                this.enemy7,
                this.enemy8,
                this.enemy9,
                this.enemy10,
                this.enemy11,
                this.enemy12,
                this.enemy13,
                this.enemy14,
                this.enemy15,
                this.enemy16,
                this.enemy17,
                this.enemy18,
                this.enemy19,
                this.enemy20,
            ];

            this.spriteList = [
                this.backgroundSprite5,
                this.backgroundSprite4,
                this.backgroundSprite3,
                this.backgroundSprite2,
                this.backgroundSprite1,
                this.house1Sprite,
                this.house2Sprite,
                this.house3Sprite,
                this.groundSprite10,
                this.groundSprite9,
                this.groundSprite8,
                this.groundSprite7,
                this.groundSprite6,
                this.groundSprite5,
                this.groundSprite4,
                this.groundSprite3,
                this.groundSprite2,
                this.groundSprite1,
                this.exitLevelSprite,
                this.lifeMeterSprite,
                this.healthBarSprite,
            ];

            this.boxesList = [
                this.boxSprite1,
                this.boxSprite2,
                this.boxSprite3,
                this.boxSprite4,
                this.boxSprite5,
                this.platformSprite1,
                this.platformSprite2,
                this.platformSprite3,
                this.platformSprite4,
                this.platformSprite5,
                this.platformSprite6,
            ];

            this.labalList = [
            ];

            this.powerupHealthList = [
                this.healthUPSprite1,
                this.healthUPSprite2,
                this.healthUPSprite3,
            ];
            
            this.powerupInvincList = [
                this.invincUPSprite1,
            ];

            this.darianList = [
                this.darianSpriteRun,
                this.darianSpriteJump,
                this.darianSpriteAttack,
                this.darianSpriteGuard,
            ];

            this.Main();
        }

        public Update(): void {

            for (let i in this.powerupHealthList) {
                if (((this.darianRightSprite.getX > (this.powerupHealthList[i].getX - 50) ) && (this.darianRightSprite.getX < (this.powerupHealthList[i].getX + 50) )) 
                && ((this.darianRightSprite.getY > (this.powerupHealthList[i].getY - 50) ) && (this.darianRightSprite.getY < (this.powerupHealthList[i].getY + 50) )))
                {
                    this.lifeMeterSprite.setScaleX = 1;
                    this.powerupHealthList[i].setY = this.powerupHealthList[i].setY * 10;
                    this.removeChild(this.powerupHealthList[i]);
                }
            };

            for (let i in this.powerupInvincList) {
                if (((this.darianRightSprite.getX > (this.powerupInvincList[i].getX - 50) ) && (this.darianRightSprite.getX < (this.powerupInvincList[i].getX + 50) )) 
                && ((this.darianRightSprite.getY > (this.powerupInvincList[i].getY - 50) ) && (this.darianRightSprite.getY < (this.powerupInvincList[i].getY + 50) )))
                {
                    this.darianRightSprite.isPowerG = true;
                    this.powerupInvincList[i].setY = this.powerupInvincList[i].setY * 10;
                    this.removeChild(this.powerupInvincList[i]);
                }
            };

            for (let i in this.boxesList) {
                if (((this.darianRightSprite.getX > (this.boxesList[i].getX - 50) ) && (this.darianRightSprite.getX < (this.boxesList[i].getX) )) 
                && ((this.darianRightSprite.getY  > (this.boxesList[i].getY - 25) ) && (this.darianRightSprite.getY  < (this.boxesList[i].getY + 25) )))
                {
                    this.darianRightSprite.setX = this.boxesList[i].getX - 50;
                }
                if (((this.darianRightSprite.getX > (this.boxesList[i].getX) ) && (this.darianRightSprite.getX < (this.boxesList[i].getX + 50) )) 
                && ((this.darianRightSprite.getY  > (this.boxesList[i].getY - 25) ) && (this.darianRightSprite.getY  < (this.boxesList[i].getY + 25) )))
                {
                    this.darianRightSprite.setX = this.boxesList[i].getX + 50;
                }
                if ((this.darianRightSprite.getY  > (this.boxesList[i].getY - 75) ) && (this.darianRightSprite.getY  < (this.boxesList[i].getY + 75) )
                && ((this.darianRightSprite.getX > (this.boxesList[i].getX - 50) ) && (this.darianRightSprite.getX < (this.boxesList[i].getX + 50) )) )
                {
                    this.darianRightSprite.setY = this.boxesList[i].getY - 50;
                    this.isOnPlatform = true;
                    this.darianRightSprite.isJumping = false;
                }
                else
                {
                    this.isOnPlatform = false;
                }
            };


            
            for (let i in this.enemyList) {
                this.enemyList[i].Update();

                if (this.darianRightSprite.isDead = managers.Collision.Check(this.darianRightSprite, this.enemyList[i]))
                {
                    if (this.darianRightSprite.isAttacking)
                    {
                        this.enemyList[i].setHealth = this.enemyList[i].getHealth - 10;
                        if (this.enemyList[i].getHealth <= 0)
                        {
                            this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX + 0.01;
                            this.enemyList[i].setY = this.enemyList[i].setY * 10;
                            this.removeChild(this.enemyList[i]);
                        }
                    }
                    else if (this.darianRightSprite.isGuarding)
                    {
                        
                    }
                    else
                    {
                        this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX -0.005;
                    }
                }
            };
            
            if (this.lifeMeterSprite.getScaleX > 1)
            {
                this.lifeMeterSprite.setScaleX = 1;
            }

            if (this.lowerHealth = 10)
            {
                if (this.lifeMeterSprite.getScaleX >= 0)
                {
                    this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX - this.decayHealthAmount;
                    //this.lifeMeterSprite.setX = (this.lifeMeterSprite.getX - this.decayHealthAmount - 0.09);
                    this.lifeMeterSprite.setX = (this.darianRightSprite.getX + 50);
                    this.healthBarSprite.setX = (this.darianRightSprite.getX + 50); 
                }

                this.lowerHealth = 0;
            }

            if (this.lifeMeterSprite.getScaleX <= 0)
            {
                //this.stage.regX = 0;
                this.backgroundMusic.stop();
                managers.Game.currentScene = config.Scene.OVER;
            }
            else
            {
                this.darianRightSprite.UpdatePlayer();
                this.stage.regX = (this.darianRightSprite.getX - 50);

                for (let i in this.darianList) {
                    this.darianList[i].setX = this.darianRightSprite.getX;
                    this.darianList[i].setY = this.darianRightSprite.getY;
                    this.darianList[i].UpdatePlayer();
                };

            }

            if (this.darianRightSprite.isGuarding)
            {
                this.darianRightSprite.visible = false;
                this.darianSpriteRun.visible = false;
                this.darianSpriteJump.visible = false;
                this.darianSpriteAttack.visible = false;
                this.darianSpriteGuard.visible = true;
            }
            else if (this.darianRightSprite.isJumping)
            {
                this.darianRightSprite.visible = false;
                this.darianSpriteRun.visible = false;
                this.darianSpriteJump.visible = true;
                this.darianSpriteAttack.visible = false;
                this.darianSpriteGuard.visible = false;
            }
            else if (this.darianRightSprite.isMoving)
            {
                this.darianRightSprite.visible = false;
                this.darianSpriteRun.visible = true;
                this.darianSpriteJump.visible = false;
                this.darianSpriteAttack.visible = false;
                this.darianSpriteGuard.visible = false;
            }
            else
            {
                this.darianRightSprite.visible = true;
                this.darianSpriteRun.visible = false;
                this.darianSpriteJump.visible = false;
                this.darianSpriteAttack.visible = false;
                this.darianSpriteGuard.visible = false;
            }
            
            if (this.darianRightSprite.isAttacking)
            {
                this.darianRightSprite.visible = false;
                this.darianSpriteRun.visible = false;
                this.darianSpriteJump.visible = false;
                this.darianSpriteAttack.visible = true;
                this.darianSpriteGuard.visible = false;
            }

            if (this.darianRightSprite.getX >= this.endLevelBound)
            {
                this.backgroundMusic.stop();
                managers.Game.currentScene = config.Scene.Level3;
            }
            
            if ((this.darianRightSprite.y > 420))
            {
                this.darianRightSprite.isGround = true;
            }

        }

        public Main(): void {
            for (let i in this.spriteList) {
                this.addChild(this.spriteList[i]);
            };

            for (let i in this.darianList) {
                this.addChild(this.darianList[i]);
            };

            this.addChild(this.darianRightSprite);

            for (let i in this.enemyList) {
                this.addChild(this.enemyList[i]);
            };
            
            for (let i in this.boxesList) {
                this.addChild(this.boxesList[i]);
            };

            for (let i in this.labalList) {
                this.addChild(this.labalList[i]);
            };

            for (let i in this.powerupHealthList) {
                this.addChild(this.powerupHealthList[i]);
            };

            for (let i in this.powerupInvincList) {
                this.addChild(this.powerupInvincList[i]);
            };

        }
    }
}