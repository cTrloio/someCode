var LevelStart = (function (_super) {
    __extends(LevelStart, _super);
    function LevelStart() {
        _super.call(this);
        this.doorArr = [];
        this.textArr = [];
        this.num = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LevelStart,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.addObject();
        this.addEventHd();
    };
    p.addEventHd = function () {
        var src = this;
        document.addEventListener("keydown", function onKeyDown(event) { src.onKeyDOWN(event); });
        document.addEventListener("keyup", function onKeyUp(event) { src.onKeyUP(event); });
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.timer = new egret.Timer(500, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    p.addObject = function () {
        //bgm
        this.loader = new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE, this.loadOver, this);
        this.loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        this.loader.load(new egret.URLRequest("resource/music/lev0.mp3"));
        this.loader3 = new egret.URLLoader();
        this.loader3.addEventListener(egret.Event.COMPLETE, this.loadOver3, this);
        this.loader3.dataFormat = egret.URLLoaderDataFormat.SOUND;
        this.loader3.load(new egret.URLRequest("resource/music/bobo.wav"));
        //����ͼƬ
        this.bg = new Background('level0');
        this.bg.x = 0;
        this.bg.y = 0;
        this.addChild(this.bg);
        this.chara = new Character();
        this.chara.x = 400;
        this.chara.y = 100;
        this.addChild(this.chara);
        //��
        this.door1 = new Door('sta');
        this.door1.x = 200;
        this.door1.y = 530;
        this.addChild(this.door1);
        this.door2 = new Door('sta');
        this.door2.x = 600;
        this.door2.y = 530;
        this.addChild(this.door2);
        this.doorArr.push(this.door1);
        this.doorArr.push(this.door2);
        //��
        this.text1 = new TextPORTAL('p');
        this.text2 = new TextPORTAL('o');
        this.text3 = new TextPORTAL('r');
        this.text4 = new TextPORTAL('t');
        this.text5 = new TextPORTAL('a');
        this.text6 = new TextPORTAL('l');
        this.addChild(this.text1);
        this.addChild(this.text2);
        this.addChild(this.text3);
        this.addChild(this.text4);
        this.addChild(this.text5);
        this.addChild(this.text6);
        this.textArr.push(this.text6);
        this.textArr.push(this.text1);
        this.textArr.push(this.text2);
        this.textArr.push(this.text4);
        this.textArr.push(this.text3);
        this.textArr.push(this.text5);
        for (var i = 0; i < this.textArr.length; i++) {
            this.textArr[i].y = 600;
            this.textArr[i].x = 150 + i * 80;
        }
    };
    p.onKeyDOWN = function (event) {
        if (event.keyCode == 37) {
            this.chara.vx = -5;
        }
        if (event.keyCode == 38) {
            this.chara.vy = -5;
        }
        if (event.keyCode == 39) {
            this.chara.vx = 5;
        }
        if (event.keyCode == 40) {
            this.chara.vy = 5;
        }
        if (event.keyCode == 32) {
            this.cross = true;
        }
    };
    p.onKeyUP = function (event) {
        if (event.keyCode == 37 || event.keyCode == 39) {
            this.chara.vx = 0;
        }
        if (event.keyCode == 38 || event.keyCode == 40) {
            this.chara.vy = 0;
        }
        if (event.keyCode == 32) {
            this.cross = false;
        }
    };
    //��������
    p.loadOver = function (e) {
        this.sound = this.loader.data;
        //this.sound.play(0,0);
        this.soundChann = this.sound.play(0, 0);
    };
    p.loadOver3 = function (e) {
        this.sound3 = this.loader3.data;
    };
    p.enterFrame = function (e) {
        //��ɫ�ƶ�
        this.chara.x += this.chara.vx;
        this.chara.y += this.chara.vy;
        //��ʼ�����ƶ�
        this.textArr[this.num].vy = 7;
        for (var i = 0; i < this.textArr.length; i++) {
            this.textArr[i].y -= this.textArr[i].vy;
            if (this.textArr[i].y < 150) {
                this.textArr[i].y = 150;
            }
        }
        //�߿�����
        this.borderChick();
        //��ײ����
        for (var i = 0; i < this.doorArr.length; i++) {
            if (this.chara.hitTestPoint(this.doorArr[i].x, this.doorArr[i].y)) {
                this.doorArr[i].doorIsOpen = true;
                this.doorArr[i].checkOpen();
            }
            else {
                this.doorArr[i].doorIsOpen = false;
                this.doorArr[i].checkOpen();
            }
        }
        if (this.chara.hitTestPoint(this.door1.x, this.door1.y) && this.cross == true) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.gameOver();
        }
        if (this.chara.hitTestPoint(this.door2.x, this.door2.y) && this.cross == true) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = 400;
            this.chara.x = 100;
        }
    };
    p.timerHd = function (e) {
        this.num++;
        if (this.num > 5) {
            this.num = 5;
        }
    };
    p.borderChick = function () {
        if (this.chara.x < 25) {
            this.chara.x = 25;
        }
        if (this.chara.y < 25) {
            this.chara.y = 25;
        }
        if (this.chara.x + this.chara.width / 2 > 800) {
            this.chara.x = 800 - this.chara.width / 2;
        }
        if (this.chara.y + this.chara.height / 2 > 600) {
            this.chara.y = 600 - this.chara.height / 2;
        }
    };
    p.gameOver = function () {
        document.removeEventListener("keydown", function onKeyDown(event) { this.onKeyDOWN(event); });
        document.removeEventListener("keyup", function onKeyUp(event) { this.onKeyUP(event); });
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.loader.removeEventListener(egret.Event.COMPLETE, this.loadOver, this);
        this.soundChann.stop();
        this.dispatchEvent(new egret.Event("LevelStartComplete"));
    };
    return LevelStart;
}(egret.Sprite));
egret.registerClass(LevelStart,'LevelStart');
//# sourceMappingURL=LevelStart.js.map