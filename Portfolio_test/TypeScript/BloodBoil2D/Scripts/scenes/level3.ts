module scenes {
    export class Level3Scene extends objects.Scene {
        // Variables
        private groundSprite1: objects.GameSprite;
        private groundSprite2: objects.GameSprite;
        private groundSprite3: objects.GameSprite;
        private groundSprite4: objects.GameSprite;
        private groundSprite5: objects.GameSprite;
        private groundSprite6: objects.GameSprite;
        
        private backgroundSprite1: objects.GameSprite;
        private backgroundSprite2: objects.GameSprite;
        private backgroundSprite3: objects.GameSprite;

        private exitLevelSprite: objects.GameSprite;

        private boxSprite1: objects.GameSprite;
        private boxSprite2: objects.GameSprite;
        private boxSprite3: objects.GameSprite;
        private boxSprite4: objects.GameSprite;
        
        private healthUPSprite1: objects.GameSprite;
        private healthUPSprite2: objects.GameSprite;
        private healthUPSprite3: objects.GameSprite;

        private invincUPSprite1: objects.GameSprite;
        
        private darianRightSprite: objects.Player;
        private darianSpriteRun: objects.Player;
        private darianSpriteJump: objects.Player;
        private darianSpriteAttack: objects.Player;
        private darianSpriteGuard: objects.Player;

        private lifeMeterSprite: objects.GameSprite;
        private healthBarSprite: objects.GameSprite;
        
        private enemyBoss: objects.Boss;
        private enemy1: objects.Enemy;
        private enemy2: objects.Enemy;
        private enemy3: objects.Enemy;

        private lowerHealth: number  = 1;
        private decayHealthAmount: number  = 0.00025;

        private bossLabel1: objects.Label;

        private endLevelBound: number  = 140*12;
        
        private enemyList: objects.Enemy[];

        private spriteList: objects.GameSprite[];

        private boxesList: objects.GameSprite[];

        private labalList: objects.Label[];

        private platformSprite1: objects.GameSprite;
        private platformSprite2: objects.GameSprite;
        private platformSprite3: objects.GameSprite;

        private powerupHealthList: objects.GameSprite[];
        private powerupInvincList: objects.GameSprite[];

        private darianList: objects.Player[];

        private isOnPlatform: boolean = false;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.backgroundMusic = createjs.Sound.play("level3_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.5;

            this.Start();
        }
        // Methods
        public Start(): void {
            this.bossLabel1 = new objects.Label("You have to kill the boss \nbefore you can exit", "15px", "IM Fell DW Pica", "#ffffff", 140*10, 175, true);

            this.groundSprite1 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140, 470, 1, 1);
            this.groundSprite2 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140*4, 470, 1, 1);
            this.groundSprite3 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140*7, 470, 1, 1);
            this.groundSprite4 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140*10, 470, 1, 1);
            this.groundSprite5 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140*13, 470, 1, 1);
            this.groundSprite6 = new objects.GameSprite(this.assetManager, "level3GroundSprite", 140*16, 470, 1, 1);

            this.backgroundSprite1 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340, 225, 1.5, 3.25);
            this.backgroundSprite2 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*3.25, 225, 1.5, 3.25);
            this.backgroundSprite3 = new objects.GameSprite(this.assetManager, "level2BackgroundSprite", 340*5.50, 225, 1.5, 3.25);
           
            this.exitLevelSprite = new objects.GameSprite(this.assetManager, "levelExitSprite", this.endLevelBound, 430, 0.15, 0.15);

            this.lifeMeterSprite = new objects.GameSprite(this.assetManager, "lifeMeterSprite", 150, 150, 1, 1.5);
            this.healthBarSprite = new objects.GameSprite(this.assetManager, "healthBarSprite", 150, 150, 1, 1);
           
            
            this.platformSprite1 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 1000, 300, 0.15, 0.05);
            this.platformSprite2 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 700, 300, 0.15, 0.05);
            this.platformSprite3 = new objects.GameSprite(this.assetManager, "level2PlatformSprite", 300, 300, 0.15, 0.05);
           

            this.enemyBoss = new objects.Boss("boss_run", 0, 420, 1, 1, 900, 140*10);

            this.enemy1 = new objects.Enemy("boss_axe", 380, 420, 1.5, 1.5, 220, 140*10);
            this.enemy2 = new objects.Enemy("boss_axe", 380, 220, 1.5, 1.5, 220, 140*10);
            this.enemy3 = new objects.Enemy("boss_axe", 380, 320, 1.5, 1.5, 220, 140*10);
            

            this.darianRightSprite = new objects.Player("player_stand", 100, 420, 1, 1);
            this.darianSpriteRun = new objects.Player("player_run", 100, 420, 1, 1);
            this.darianSpriteJump = new objects.Player("player_jump", 100, 420, 1, 1);
            this.darianSpriteAttack = new objects.Player("player_attack_right", 100, 420, 1, 1);
            this.darianSpriteGuard = new objects.Player("player_guard", 100, 420, 1, 1);
            
            this.healthUPSprite1 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 1000, 420, 0.05, 0.05);
            this.healthUPSprite2 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 500, 420, 0.05, 0.05);
            this.healthUPSprite3 = new objects.GameSprite(this.assetManager, "healthPowerUpSprite", 50, 420, 0.05, 0.05);
            
            this.invincUPSprite1 = new objects.GameSprite(this.assetManager, "invinsPowerUpSprite", 140*10, 250, 0.05, 0.05);

            this.boxSprite1 = new objects.GameSprite(this.assetManager, "boxSprite", 380, 420, 0.15, 0.15);
            this.boxSprite2 = new objects.GameSprite(this.assetManager, "boxSprite", 140*10, 340, 0.15, 0.15);
            this.boxSprite3 = new objects.GameSprite(this.assetManager, "boxSprite", 140*10, 420, 0.15, 0.15);
            this.boxSprite4 = new objects.GameSprite(this.assetManager, "boxSprite", 146*10, 270, 0.15, 0.15);

            this.enemyList = [
                this.enemy1,
                this.enemy2,
                this.enemy3,
            ];

            this.spriteList = [
                this.backgroundSprite1,
                this.backgroundSprite2,
                this.backgroundSprite3,
                this.groundSprite1,
                this.groundSprite2,
                this.groundSprite3,
                this.groundSprite4,
                this.groundSprite5,
                this.groundSprite6,
                this.exitLevelSprite,
                this.lifeMeterSprite,
                this.healthBarSprite,
            ];

            this.boxesList = [
                this.boxSprite1,
                this.boxSprite2,
                this.boxSprite3,
                this.boxSprite4,
                this.platformSprite1,
                this.platformSprite2,
                this.platformSprite3,
            ];

            this.labalList = [
                this.bossLabel1,
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

            this.enemyBoss.Update();
            
            if (this.darianRightSprite.isDead = managers.Collision.Check(this.darianRightSprite, this.enemyBoss))
            {
                if (this.darianRightSprite.isAttacking)
                {
                    this.enemyBoss.setHealth = this.enemyBoss.getHealth - 10;
                    if (this.enemyBoss.getHealth <= 0)
                    {
                        this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX + 0.1;
                        this.enemyBoss.setY = this.enemyBoss.setY * 10;
                        this.removeChild(this.enemyBoss);

                        this.boxSprite2.setY = this.boxSprite2.setY * 10;
                        this.boxSprite3.setY = this.boxSprite3.setY * 10;
                        this.boxSprite4.setY = this.boxSprite4.setY * 10;
                        this.removeChild(this.boxSprite2);
                        this.removeChild(this.boxSprite3);
                        this.removeChild(this.boxSprite4);

                        this.enemy1.setY = this.enemy1.setY * 10;
                        this.enemy2.setY = this.enemy2.setY * 10;
                        this.enemy3.setY = this.enemy3.setY * 10;
                        this.removeChild(this.enemy1);
                        this.removeChild(this.enemy2);
                        this.removeChild(this.enemy3);
                        this.removeChild(this.bossLabel1);
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

            for (let i in this.enemyList) {
                this.enemyList[i].Update();

                if (this.darianRightSprite.isDead = managers.Collision.Check(this.darianRightSprite, this.enemyList[i]))
                {
                    if (this.darianRightSprite.isAttacking)
                    {
                        this.enemyList[i].setHealth = this.enemyList[i].getHealth - 10;
                        if (this.enemyList[i].getHealth <= 0)
                        {
                            this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX + 0.1;
                            this.enemyList[i].setY = this.enemyList[i].setY * 10;
                            this.removeChild(this.enemyList[i]);
                        }
                    }
                    else if (this.darianRightSprite.isGuarding)
                    {
                        
                    }
                    else
                    {
                        this.lifeMeterSprite.setScaleX = this.lifeMeterSprite.getScaleX -0.01;
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
                managers.Game.currentScene = config.Scene.WIN;
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
            this.addChild(this.enemyBoss);

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