var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.boxArr = new Array();
        this.bugArr = [];
        //private boxxarr:number[][];
        //private arr:Array<Number>=[[2,1],[3,5],[4,5]];
        this.timer = new egret.Timer(1000, 0);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    p.onResourceLoadError = function (event) {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    p.createGameScene = function () {
        this.addObjectHd();
        this.addListenerHd();
    };
    p.addObjectHd = function () {
        //添加背景
        this.background = new Background();
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = 0;
        //添加草地
        this.grass = new Grass();
        this.addChild(this.grass);
        this.grass.x = 0;
        this.grass.y = 370;
        //添加箱子
        this.box1 = new Box();
        this.addChild(this.box1);
        this.box1.x = 0;
        this.box1.y = 200;
        this.box2 = new Box();
        this.addChild(this.box2);
        this.box2.x = 0;
        this.box2.y = 350;
        this.box3 = new Box();
        this.addChild(this.box3);
        this.box3.x = 100;
        this.box3.y = 100;
        this.box4 = new Box();
        this.addChild(this.box4);
        this.box4.x = 100;
        this.box4.y = 250;
        this.box5 = new Box();
        this.addChild(this.box5);
        this.box5.x = 500;
        this.box5.y = 250;
        this.box6 = new Box();
        this.addChild(this.box6);
        this.box6.x = 150;
        this.box6.y = 50;
        this.box7 = new Box();
        this.addChild(this.box7);
        this.box7.x = 150;
        this.box7.y = 250;
        this.box8 = new Box();
        this.addChild(this.box8);
        this.box8.x = 200;
        this.box8.y = 50;
        this.box9 = new Box();
        this.addChild(this.box9);
        this.box9.x = 250;
        this.box9.y = 150;
        this.box10 = new Box();
        this.addChild(this.box10);
        this.box10.x = 300;
        this.box10.y = 200;
        this.box11 = new Box();
        this.addChild(this.box11);
        this.box11.x = 350;
        this.box11.y = 150;
        this.box12 = new Box();
        this.addChild(this.box12);
        this.box12.x = 400;
        this.box12.y = 150;
        this.box13 = new Box();
        this.addChild(this.box13);
        this.box13.x = 450;
        this.box13.y = 150;
        this.box14 = new Box();
        this.addChild(this.box14);
        this.box14.x = 400;
        this.box14.y = 300;
        this.box15 = new Box();
        this.addChild(this.box15);
        this.box15.x = 450;
        this.box15.y = 300;
        this.boxArr.push(this.box1);
        this.boxArr.push(this.box2);
        this.boxArr.push(this.box3);
        this.boxArr.push(this.box4);
        this.boxArr.push(this.box5);
        this.boxArr.push(this.box6);
        this.boxArr.push(this.box7);
        this.boxArr.push(this.box8);
        this.boxArr.push(this.box9);
        this.boxArr.push(this.box10);
        this.boxArr.push(this.box11);
        this.boxArr.push(this.box12);
        this.boxArr.push(this.box13);
        this.boxArr.push(this.box14);
        this.boxArr.push(this.box15);
        //this.makingBox();
        //添加怪物蜘蛛
        this.spider = new Spider();
        this.addChild(this.spider);
        this.spider.x = 315;
        this.spider.y = 165;
        //添加怪物蚊子
        this.bugWing1 = new BugWings();
        this.addChild(this.bugWing1);
        this.bugWing1.x = 150;
        this.bugWing1.y = 200;
        this.bugWing2 = new BugWings();
        this.addChild(this.bugWing2);
        this.bugWing2.x = 250;
        this.bugWing2.y = 100;
        this.bugWing3 = new BugWings();
        this.addChild(this.bugWing3);
        this.bugWing3.x = 400;
        this.bugWing3.y = 250;
        this.bugArr.push(this.bugWing1);
        this.bugArr.push(this.bugWing2);
        this.bugArr.push(this.bugWing3);
        //添加角色
        this.chara = new Character();
        this.addChild(this.chara);
        this.chara.x = 150;
        this.chara.y = 350;
    };
    p.addListenerHd = function () {
        var src = this;
        document.addEventListener("keydown", function onKeyDown(event) { src.onKeyDOWN(event); });
        document.addEventListener("keyup", function onKeyUp(event) { src.onKeyUP(event); });
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    //public makingBox()
    //{
    //    this.boxPosition=[[0,200],[100,100],[100,250],[150,50],[150,250],[200,50],[300,200],[350,150],[400,150],[400,300],[450,150],[450,300],[500,250]];
    //    for(var i:number=0;i<this.boxPosition.length;i++)
    //    {
    //        var box:Box=new Box();
    //        this.addChild(box);
    //        box.x=this.boxPosition[i][0];
    //        box.y=this.boxPosition[i][1];
    //        this.boxCreate.push(box);
    //    }
    //}
    p.onKeyDOWN = function (e) {
        if (e.keyCode == 37) {
            this.chara.accelerationX = -0.2;
        }
        else if (e.keyCode == 38 || e.keyCode == 32) {
            //this.chara.accelerationY=-0.4;
            //向上键时重力为0
            //this.chara.gravity=0;
            if (this.chara.isOnGround) {
                this.chara.vy = this.chara.jumpForce;
                this.chara.isOnGround = false;
            }
        }
        else if (e.keyCode == 39) {
            this.chara.accelerationX = 0.2;
        }
        /*else if(e.keyCode==40)
        {
            this.chara.accelerationY=0.2;
        }*/
    };
    p.onKeyUP = function (e) {
        if (e.keyCode == 37 || e.keyCode == 39) {
            this.chara.accelerationX = 0;
        }
        /*else if(e.keyCode==38||e.keyCode==40||e.keyCode==32)
        {
            this.chara.accelerationY=0;
        }*/
        //松开时，添加重力
        this.chara.gravity = 0.3;
    };
    p.enterFrame = function (e) {
        //蚊子移动
        this.bugWing1.x += this.bugWing1.vx;
        this.bugWing1.y += this.bugWing1.vy;
        this.bugWing2.x += this.bugWing2.vx;
        this.bugWing2.y += this.bugWing2.vy;
        this.bugWing3.x += this.bugWing3.vx;
        this.bugWing3.y += this.bugWing3.vy;
        //蚊子不能移出舞台
        this.checkStageBouder(this.bugWing3);
        this.checkStageBouder(this.bugWing1);
        this.checkStageBouder(this.bugWing2);
        //设置加速度
        this.chara.vx += this.chara.accelerationX;
        //this.chara.vy += this.chara.accelerationY;
        //乘以摩擦系数0.96 =.=不按方向键时逐渐减小加速度
        this.chara.vx *= this.chara.friction;
        //this.chara.vy *=this.chara.friction;//受上下方向的2D摩擦力
        this.chara.vy += this.chara.gravity; //受2D重力
        //移动距离小于0.1，停止移动，
        if (Math.abs(this.chara.vx) < 0.1) {
            this.chara.vx = 0;
        }
        if (Math.abs(this.chara.vy) < 0.1) {
            this.chara.vy = 0;
        }
        //人物移动
        this.chara.x += this.chara.vx;
        this.chara.y += this.chara.vy;
        //达到最大数值固定速度
        if (this.chara.vx > this.chara.speedLim) {
            this.chara.vx = this.chara.speedLim;
        }
        if (this.chara.vx < -this.chara.speedLim) {
            this.chara.vx = -this.chara.speedLim;
        }
        if (this.chara.vy > this.chara.speedLim * 2) {
            this.chara.vy = this.chara.speedLim * 2;
        }
        if (this.chara.vy < -this.chara.speedLim) {
            this.chara.vy = -this.chara.speedLim;
        }
        //角色与舞台边界检测
        if (this.chara.x < 0) {
            this.chara.vx = 0;
            this.chara.x = 0; //不能移出边界
        }
        if (this.chara.y < 0) {
            this.chara.vy = 0;
            this.chara.y = 0; //不能移出边界
        }
        if (this.chara.x > this.stage.stageWidth - this.chara.width) {
            this.chara.vx = 0;
            this.chara.x = this.stage.stageWidth - this.chara.width; //不能移出边界
        }
        if (this.chara.y > this.stage.stageHeight - this.chara.height) {
            this.chara.vy = 0;
            this.chara.y = this.stage.stageHeight - this.chara.height; //不能移出边界
            this.chara.isOnGround = true;
        }
        //人物与蚊子碰撞
        this.charaHitBug(this.bugWing1);
        this.charaHitBug(this.bugWing2);
        this.charaHitBug(this.bugWing3);
        //人物与墙壁碰撞
        for (var i = 0; i < this.boxArr.length; i++) {
            Collision.block(this.chara, this.boxArr[i]);
            if (Collision.collisionSide == "Bottom") {
                this.chara.isOnGround = true;
                this.chara.vy = -this.chara.gravity;
            }
            if (Collision.collisionSide == "Top") {
                this.chara.vy = 0;
            }
            if (Collision.collisionSide == "Left" || Collision.collisionSide == "Right") {
                this.chara.vx = 0;
            }
        }
        //蚊子箱子碰撞
        for (var i = 0; i < this.boxArr.length; i++) {
            for (var j = 0; j < this.bugArr.length; j++) {
                Collision.block(this.bugArr[j], this.boxArr[i]);
                if (Collision.collisionSide == "Bottom") {
                    this.bugArr[j].vy = 0;
                }
                if (Collision.collisionSide == "Top") {
                    this.bugArr[j].vy = 0;
                }
                if (Collision.collisionSide == "Left" || Collision.collisionSide == "Right") {
                    this.bugArr[j].vx = 0;
                }
            }
        }
        //人物蜘蛛碰撞
        if (this.chara.hitTestPoint(this.spider.x, this.spider.y)) {
            this.spider.visible = false;
        }
        //游戏结束
        this.gameOver();
    };
    //蚊子人物碰撞
    p.charaHitBug = function (bug) {
        if (this.chara.hitTestPoint(bug.x, bug.y)) {
            bug.visible = false;
        }
    };
    //创建随机数
    p.createRandomNum = function (mon) {
        var num = Math.ceil(Math.random() * 4);
        if (num == 1) {
            mon.vx = 1;
        }
        if (num == 2) {
            mon.vx = -1;
        }
        if (num == 3) {
            mon.vy = 1;
        }
        if (num == 4) {
            mon.vy = -1;
        }
    };
    //控制蚊子移动计时器开始
    p.timerHd = function (e) {
        this.createRandomNum(this.bugWing1);
        this.createRandomNum(this.bugWing2);
        this.createRandomNum(this.bugWing3);
    };
    //边界限制
    p.checkStageBouder = function (obj) {
        if (obj.x < 50 + this.chara.width / 2) {
            obj.x = 50 + this.chara.width / 2;
        }
        if (obj.y < 50 + this.chara.height / 2) {
            obj.y = 50 + this.chara.height / 2;
        }
        if (obj.x + obj.width > 500 + this.chara.width / 2) {
            obj.x = 500 - obj.width + this.chara.width / 2;
        }
        if (obj.y + obj.height > 350 + this.chara.height / 2) {
            obj.y = 350 - obj.height + this.chara.height / 2;
        }
    };
    //游戏结束
    p.gameOver = function () {
        if (this.spider.visible == false) {
            var gameObjectBitMap = new DisplayBackground();
            this.addChild(gameObjectBitMap);
            gameObjectBitMap.x = 150;
            gameObjectBitMap.y = 150;
            var test = new egret.TextField(); //自适应宽高
            test.text = "游戏结束！";
            test.width = 100; //文本内容宽度大于test.width时自动换行
            test.height = 51;
            test.textAlign = egret.HorizontalAlign.CENTER; //水平对齐
            test.verticalAlign = egret.VerticalAlign.MIDDLE; //竖直对齐
            test.textFlow = [
                {
                    text: "游戏结束", style: { "textColor": 0xff0000, "size": 20, "bold": true }
                }
            ];
            gameObjectBitMap.addChild(test);
            test.x = 44;
            test.y = 20;
            document.removeEventListener("keydown", function onKeyDown(event) { this.onKeyDOWN(event); });
            document.removeEventListener("keyup", function onKeyUp(event) { this.onKeyUP(event); });
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        }
        if (this.bugWing1.visible == false && this.bugWing2.visible == false && this.bugWing3.visible == false) {
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0x00ff00);
            spr.graphics.drawRect(0, 300, 50, 50);
            spr.graphics.endFill();
            this.addChild(spr);
            document.removeEventListener("keydown", function onKeyDown(event) { this.onKeyDOWN(event); });
            document.removeEventListener("keyup", function onKeyUp(event) { this.onKeyUP(event); });
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map