// TypeScript file
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.boos = null;
        this.bulletArr = [];
        this.boosBulletArr = [];
        this.enemyArr = [];
        this.starArr = [];
        this.score = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=GameScene,p=c.prototype;
    p.stageHd = function () {
        this.addObjectd();
        this.addEventHd();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
    };
    //--------------------------添加游戏事件---------------------------------
    p.addEventHd = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.fireTimer = new egret.Timer(GameData.fireRate);
        this.fireTimer.addEventListener(egret.TimerEvent.TIMER, this.fireHd, this);
        this.boosFireTimer = new egret.Timer(800, 1);
        this.boosFireTimer.addEventListener(egret.TimerEvent.TIMER, this.boosFireHd, this);
        this.boosFireTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopFireHd, this);
        this.enemyTimer = new egret.Timer(GameData.enemyRate);
        this.enemyTimer.addEventListener(egret.TimerEvent.TIMER, this.enemyHd, this);
        this.enemyTimer.start();
        this.boosTimer = new egret.Timer(GameData.CREATEBOOSTIME);
        this.boosTimer.addEventListener(egret.TimerEvent.TIMER, this.createBossTimerHd, this);
        this.boosTimer.start();
        // var src = this;
        // document.addEventListener("keydown", function onKeyDown(event: KeyboardEvent) {
        //     src.keyDownHd(event);
        // });
        // document.addEventListener("keyup", function onKeyUp(event: KeyboardEvent) {
        //     src.keyUpHd(event);
        // });
    };
    //--------------------------添加对象到游戏场景容器---------------------------------
    p.addObjectd = function () {
        this.initSound('ynsw');
        var bg = new Background();
        this.addChild(bg);
        this.chara = new Chara();
        this.addChild(this.chara);
        this.chara.x = GameData.stageWidth / 2;
        this.chara.y = GameData.stageHeight / 2;
        this.chara.addEventListener(GameEvent.CHARARESET, this.resetCharaHd, this);
        this.scoreText = new egret.TextField();
        this.scoreText.text = this.score + "";
        this.scoreText.size = 30;
        this.scoreText.x = 390;
        this.scoreText.y = 615;
        this.addChild(this.scoreText);
        var firebut = new fireBtn();
        this.addChild(firebut);
        firebut.x = GameData.stageWidth - 160;
        firebut.y = GameData.stageHeight - 100;
        firebut.addEventListener(GameEvent.FIRE, this.canFireHd, this);
        firebut.addEventListener(GameEvent.NO_FIRE, this.noFireHd, this);
        this.dire = new Dire();
        this.dire.x = 160;
        this.dire.y = GameData.stageHeight - 100;
        this.addChild(this.dire);
        var sqp = new egret.Sprite();
        sqp.graphics.clear();
        sqp.graphics.beginFill(0x000, 0);
        sqp.graphics.drawRect(0, 0, GameData.stageWidth / 3 * 2, GameData.stageHeight);
        sqp.graphics.endFill();
        this.addChild(sqp);
        sqp.touchEnabled = true;
        sqp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
    };
    p.resetCharaHd = function () {
        this.chara.resetTimer.reset();
        this.chara.resetTimer.stop();
        this.fireTimer.delay = GameData.fireRate;
    };
    //--------------------------人物操作---------------------------------
    p.canFireHd = function () {
        this.fireTimer.start();
    };
    p.noFireHd = function () {
        this.fireTimer.stop();
    };
    // private keyDownHd(e: KeyboardEvent) {
    //     if (e.keyCode == 37) {
    //         this.chara.accelerationX = -0.8;
    //     }
    //     if (e.keyCode == 38) {
    //         this.chara.accelerationY = -0.8;
    //     }
    //     if (e.keyCode == 39) {
    //         this.chara.accelerationX = 0.8;
    //     }
    //     if (e.keyCode == 40) {
    //         this.chara.accelerationY = 0.8;
    //     }
    // }
    // private keyUpHd(e: KeyboardEvent) {
    //     if (e.keyCode == 37 || e.keyCode == 39) {
    //         this.chara.accelerationX = 0;
    //     }
    //     if (e.keyCode == 38 || e.keyCode == 40) {
    //         this.chara.accelerationY = 0;
    //     }
    // }
    p.touchBeginHd = function (e) {
        // this.fireTimer.start();
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
        this.chara.vx = Math.cos(this.dire.angle) * this.chara.speedLim;
        this.chara.vy = Math.sin(this.dire.angle) * this.chara.speedLim;
        e.target.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHd, this);
        e.target.addEventListener(egret.TouchEvent.TOUCH_END, this.endHd, this);
    };
    p.moveHd = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
        this.chara.vx = Math.cos(this.dire.angle) * this.chara.speedLim;
        this.chara.vy = Math.sin(this.dire.angle) * this.chara.speedLim;
    };
    p.endHd = function (e) {
        // this.fireTimer.stop();
        // this.mouseX = GameData.stageWidth / 2;
        // this.mouseY = GameData.stageHeight / 2;
        this.chara.vx = 0;
        this.chara.vy = 0;
        e.target.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHd, this);
        e.target.removeEventListener(egret.TouchEvent.TOUCH_END, this.endHd, this);
    };
    //--------------------------怪物---------------------------------
    p.enemyHd = function () {
        var type = GameData.getRandomNum() > 0.33 ? GameData.getRandomNum() > 0.33 ? GameData.enemyType1 : GameData.enemyType2 : GameData.enemyType3;
        this.createEnemy(type);
    };
    p.createEnemy = function (who) {
        var enemy = new Enemy(who, this);
        this.addChild(enemy);
        this.enemyArr.push(enemy);
        this.setXY(enemy);
    };
    p.setXY = function (enemy) {
        var randomNum = GameData.getRandomNum();
        var num = Math.floor(randomNum * 4);
        var angle = 0;
        switch (num) {
            case 0:
                enemy.x = Math.floor(randomNum * 9) * 100;
                enemy.y = 0;
                break;
            case 1:
                enemy.x = Math.floor(randomNum * 9) * 100;
                enemy.y = GameData.stageHeight;
                break;
            case 2:
                enemy.x = 0;
                enemy.y = Math.floor(randomNum * 7) * 100;
                break;
            case 3:
                enemy.x = GameData.stageWidth;
                enemy.y = Math.floor(randomNum * 7) * 100;
                break;
            default:
                enemy.x = 0;
                enemy.y = 0;
        }
        angle = Math.atan2(this.chara.y - enemy.y, this.chara.x - enemy.x);
        enemy.vx = Math.cos(angle) * enemy.speed;
        enemy.vy = Math.sin(angle) * enemy.speed;
        enemy.rotation = angle * 180 / Math.PI + 90;
    };
    //--------------------------子弹---------------------------------
    p.fireHd = function () {
        this.createBullet('chara', this.chara.bulletNum, this.chara, this.bulletArr);
    };
    p.boosFireHd = function () {
        this.createBullet(this.boos.type, this.boos.bulletNum, this.boos, this.boosBulletArr);
    };
    p.stopFireHd = function () {
        this.boosFireTimer.delay = Math.ceil(Math.random() * 5) * 100 + this.boos.bulletRate;
        this.boosFireTimer.start();
    };
    p.createBullet = function (type, num, obj, arr) {
        for (var i = 0; i < num; i++) {
            var bull = new Bullet(type);
            this.addChild(bull);
            arr.push(bull);
            if (obj == this.chara) {
                bull.x = obj.x;
                bull.y = obj.y;
            }
            else {
                bull.x = obj._bitMap.x;
                bull.y = obj._bitMap.y + bull.height / 2 + bull.height / 2;
            }
            bull.vx = (Math.cos(obj.angle + ((i * 25) - 25)) * bull.bullSpeed);
            bull.vy = (Math.sin(obj.angle + ((i * 25) - 25)) * bull.bullSpeed);
        }
    };
    //--------------------------BOOS---------------------------------------
    p.createBossTimerHd = function () {
        // =>产生BOOS=>绘制BOOS 血条
        this.createBoos(this.getBoosType());
        // =>BOOS产生器停止
        this.boosTimer.reset();
        this.boosTimer.stop();
        // =>BOOS子弹发射计时器开始
        this.boosFireTimer.delay = this.boos.bulletRate;
        this.boosFireTimer.start();
        // =>停止产生怪物/关闭怪物产生器
        this.enemyTimer.stop();
        // =>背景音效改变
        this.soundStop();
        this.initSound('spac');
    };
    p.getBoosType = function () {
        var boostype = Math.ceil(GameData.getRandomNum() * 3);
        var type;
        switch (boostype) {
            case 1:
                type = GameData.boosType1;
                break;
            case 2:
                type = GameData.boosType2;
                break;
            case 3:
                type = GameData.boosType3;
                break;
        }
        return type;
    };
    p.createBoos = function (type) {
        this.boos = new Boos(type, this);
        this.boos._bitMap.x = GameData.stageWidth / 2;
        this.boos._bitMap.y = 60 + this.boos._bitMap.height / 2;
        this.boos.angle = 1.5;
        this.boos._boosLife.x = 50;
        this.boos._boosLife.y = 30;
        this.addChild(this.boos);
        this.boos.addEventListener(GameEvent.BOOSOVER, this.boosOverHd, this);
    };
    p.boosOverHd = function () {
        //BOOS子弹发射器停止
        this.boosFireTimer.reset();
        this.boosFireTimer.stop();
        //音效还原
        this.soundStop();
        this.initSound('ynsw');
        //怪物开始产生
        this.enemyTimer.start();
        //难度加大
        this.boos.addHealth();
        //BOOS可以产生 
        this.boosTimer.delay += GameData.createBoosRate;
        this.boosTimer.start();
        //移除BOOS
        this.boos.removeEventListener(GameEvent.BOOSOVER, this.boosOverHd, this);
        this.removeChild(this.boos);
        this.boos = null;
    };
    //--------------------------帧事件---------------------------------
    p.enterHd = function (e) {
        //人物行为
        // this.chara.vx += this.chara.accelerationX;
        // this.chara.vy += this.chara.accelerationY;
        // this.chara.vx *= this.chara.friction;
        // this.chara.vy *= this.chara.friction;
        this.chara.x += this.chara.vx;
        this.chara.y += this.chara.vy;
        this.dire.angle = Math.atan2(this.mouseY - this.dire.y, this.mouseX - this.dire.x);
        this.dire.rotation = this.dire.angle * 180 / Math.PI + 90;
        this.chara.angle = this.dire.angle;
        this.chara.rotation = this.chara.angle * 180 / Math.PI + 90;
        //行为检测
        GameData.checkBourder(this.chara);
        this.check();
        //子弹移动&移出舞台
        this.checkBullet(this.bulletArr);
        this.checkBullet(this.boosBulletArr);
    };
    p.checkBullet = function (obj) {
        if (obj.length != 0) {
            for (var i = 0; i < obj.length; i++) {
                obj[i].x += obj[i].vx;
                obj[i].y += obj[i].vy;
                if (obj[i].x < 0 || obj[i].x > GameData.stageWidth ||
                    obj[i].y < 0 || obj[i].y > GameData.stageHeight + obj[i].height) {
                    this.removeChild(obj[i]);
                    obj.splice(i, 1);
                }
            }
        }
    };
    p.check = function () {
        //怪物存在
        if (this.enemyArr.length != 0) {
            for (var i = 0; i < this.enemyArr.length; i++) {
                this.enemyArr[i].x += this.enemyArr[i].vx;
                this.enemyArr[i].y += this.enemyArr[i].vy;
                //怪物碰撞人物0
                if (this.enemyArr[i].hitTestPoint(this.chara.x, this.chara.y)) {
                    this.gameOver();
                    return;
                }
                //怪物消失逻辑
                if (this.enemyArr[i].x < -100 || this.enemyArr[i].x > GameData.stageWidth + 100 ||
                    this.enemyArr[i].y < -100 || this.enemyArr[i].y > GameData.stageHeight + 100) {
                    this.removeChild(this.enemyArr[i]);
                    this.enemyArr.splice(i, 1);
                    return;
                }
                //道具产生逻辑
                if (this.enemyArr[i].life < 1) {
                    this.enemyArr[i].createStar();
                    this.removeChild(this.enemyArr[i]);
                    this.enemyArr.splice(i, 1);
                    return;
                }
            }
        }
        //人物和子弹碰撞
        if (this.boosBulletArr.length != 0) {
            for (var j = 0; j < this.boosBulletArr.length; j++) {
                if (this.boosBulletArr[j].hitTestPoint(this.chara.x, this.chara.y)) {
                    this.removeChild(this.boosBulletArr[j]);
                    this.boosBulletArr.splice(j, 1);
                    this.gameOver();
                    return;
                }
            }
        }
        //怪物和子弹碰撞
        if (this.enemyArr.length != 0 && this.bulletArr.length != 0) {
            for (var i = 0; i < this.enemyArr.length; i++) {
                for (var j = 0; j < this.bulletArr.length; j++) {
                    if (this.enemyArr[i].hitTestPoint(this.bulletArr[j].x, this.bulletArr[j].y)) {
                        this.removeChild(this.bulletArr[j]);
                        this.bulletArr.splice(j, 1);
                        this.enemyArr[i].life--;
                        //特效
                        this.enemyArr[i].showWord();
                        this.score++;
                        this.scoreText.text = this.score + "";
                    }
                }
            }
        }
        //道具与人物碰撞
        if (this.starArr.length != 0) {
            for (var i = 0; i < this.starArr.length; i++) {
                if (this.starArr[i].x < 100 || this.starArr[i].x > 700 || this.starArr[i].y < 100 || this.starArr[i].y > 580) {
                    this.removeChild(this.starArr[i]);
                    this.starArr.splice(i, 1);
                    return;
                }
                if (this.starArr[i].hitTestPoint(this.chara.x, this.chara.y)) {
                    if (this.starArr[i].type == GameData.starType1) {
                        this.chara.bulletNum = 3;
                    }
                    else {
                        GameData.fireRate = 200;
                        this.fireTimer.delay = GameData.fireRate;
                    }
                    this.chara.resetTimer.reset();
                    this.chara.resetTimer.start();
                    this.removeChild(this.starArr[i]);
                    this.starArr.splice(i, 1);
                }
            }
        }
    };
    //----------------------------声音管理------------------------------------
    p.initSound = function (name) {
        if (this.soundChannel) {
            this.soundChannel.stop();
            // this.soundPosition = 0;
            this.soundChannel = null;
        }
        this.sound = RES.getRes(name);
        this.soundChannel = this.sound.play(0, -1);
    };
    // public soundPause() {
    // if (this.soundChannel) {
    // this.soundPosition = this.soundChannel.position;
    // console.log(this.soundPosition);
    // this.soundChannel.stop();
    // this.soundChannel = null;
    // }
    // }
    p.soundStop = function () {
        if (this.soundChannel) {
            this.soundChannel.stop();
            // this.soundPosition = 0;
            this.soundChannel = null;
        }
    };
    //--------------------------游戏结束-----------------------------------
    p.gameOver = function () {
        this.soundStop();
        GameData.fireRate = 350;
        this.touchEnabled = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.boosFireTimer.stop();
        this.enemyTimer.stop();
        this.fireTimer.stop();
        this.boosTimer.stop();
        this.bulletArr = [];
        this.enemyArr = [];
        this.starArr = [];
        this.boosBulletArr = [];
        this.chara.resetTimer.reset();
        this.chara.resetTimer.stop();
        this.chara.removeEventListener(GameEvent.CHARARESET, this.resetCharaHd, this);
        this.enemyTimer.removeEventListener(egret.TimerEvent.TIMER, this.enemyHd, this);
        this.fireTimer.removeEventListener(egret.TimerEvent.TIMER, this.fireHd, this);
        this.boosTimer.removeEventListener(egret.TimerEvent.TIMER, this.createBossTimerHd, this);
        this.boosFireTimer.removeEventListener(egret.TimerEvent.TIMER, this.boosFireHd, this);
        this.boosFireTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.stopFireHd, this);
        this.removeChild(this.chara);
        this.removeChild(this.scoreText);
        if (this.boos != null) {
            this.boos.removeEventListener(GameEvent.BOOSOVER, this.boosOverHd, this);
            this.removeChild(this.boos);
            this.boos = null;
        }
        var maxSocre = Number(GameData.MAXSCORE);
        if (this.score > maxSocre) {
            egret.localStorage.clear();
            egret.localStorage.setItem("score", this.score + "");
            egret.localStorage.setItem("name", GameData.first_name);
            GameData.MAXNAME = egret.localStorage.getItem("name");
            GameData.MAXSCORE = egret.localStorage.getItem("score");
        }
        this.dispatchEventWith(GameEvent.GAMEOVER);
    };
    //--------------------------移除场景-----------------------------------
    p.removeHd = function () {
        // var src = this;
        // document.removeEventListener("keydown", function onKeyDown(event: KeyboardEvent) {
        //     src.keyDownHd(event);
        // });
        // document.removeEventListener("keyup", function onKeyUp(event: KeyboardEvent) {
        //     src.keyUpHd(event);
        // });
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return GameScene;
}(egret.Sprite));
egret.registerClass(GameScene,'GameScene');
