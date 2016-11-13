/**
 * Created by Administrator on 2015/12/2.
 */
var LevelOne = (function (_super) {
    __extends(LevelOne, _super);
    function LevelOne() {
        _super.call(this);
        this.doorArr = [];
        this.borderArr = [];
        this.currNum = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LevelOne,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.addObject();
        this.addEventHd();
    };
    p.addEventHd = function () {
        this.textTimer = new egret.Timer(1000);
        this.textTimer.addEventListener(egret.TimerEvent.TIMER, this.numTimer, this);
        this.textTimer.start();
        var src = this;
        document.addEventListener("keydown", function onKeyDown(event) {
            src.onKeyDOWN(event);
        });
        document.addEventListener("keyup", function onKeyUp(event) {
            src.onKeyUP(event);
        });
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    };
    p.addObject = function () {
        //bgm
        this.loader = new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE, this.loadOver, this);
        this.loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        this.loader.load(new egret.URLRequest("resource/music/lev1.mp3"));
        this.loader3 = new egret.URLLoader();
        this.loader3.addEventListener(egret.Event.COMPLETE, this.loadOver3, this);
        this.loader3.dataFormat = egret.URLLoaderDataFormat.SOUND;
        this.loader3.load(new egret.URLRequest("resource/music/bobo.wav"));
        //ͼֽ��1234˳������
        this.charaPosArrX = [200, 600, 200, 600];
        this.charaPosArrY = [530, 530, 230, 230];
        //����ͼƬ
        this.bg = new Background('level1');
        this.bg.x = 0;
        this.bg.y = 0;
        this.addChild(this.bg);
        //�յ�
        this.destination = new End('one');
        this.destination.x = 450;
        this.destination.y = 230;
        this.addChild(this.destination);
        //��ɫ����
        this.chara = new Character();
        this.chara.x = this.charaPosArrX[0];
        this.chara.y = this.charaPosArrY[0];
        this.addChild(this.chara);
        //ǽ��ͼƬ
        this.borderBox1 = new BorderBox('her');
        this.borderBox2 = new BorderBox('her');
        this.borderBox3 = new BorderBox('her');
        this.borderBox4 = new BorderBox('ver');
        this.borderBox5 = new BorderBox('ver');
        this.borderBox6 = new BorderBox('ver');
        //��������
        this.borderBox1.x = 0;
        this.borderBox1.y = this.borderBox1.height / 2 + 25;
        this.borderBox2.x = 0;
        this.borderBox2.y = 300 - this.borderBox2.height / 2 + 25;
        this.borderBox3.x = 0;
        this.borderBox3.y = 600 - this.borderBox3.height / 2 + 20;
        //��������
        this.borderBox4.x = this.borderBox4.width / 2 + 20;
        this.borderBox4.y = 0;
        this.borderBox5.x = 400 - this.borderBox4.width / 2 + 25;
        this.borderBox5.y = 0;
        this.borderBox6.x = 800 - this.borderBox4.width / 2 + 20;
        this.borderBox6.y = 0;
        this.addChild(this.borderBox1);
        this.addChild(this.borderBox2);
        this.addChild(this.borderBox3);
        this.addChild(this.borderBox4);
        this.addChild(this.borderBox5);
        this.addChild(this.borderBox6);
        this.borderArr.push(this.borderBox1);
        this.borderArr.push(this.borderBox2);
        this.borderArr.push(this.borderBox3);
        this.borderArr.push(this.borderBox4);
        this.borderArr.push(this.borderBox5);
        this.borderArr.push(this.borderBox6);
        //��ȷ������(��ͼֽ˳������)1-2-0
        this.door1 = new Door('one');
        this.door1.x = 350;
        this.door1.y = 530;
        this.addChild(this.door1);
        this.door2 = new Door('one');
        this.door2.x = 550;
        this.door2.y = 530;
        this.addChild(this.door2);
        this.door3 = new Door('one');
        this.door3.x = 350;
        this.door3.y = 230;
        this.addChild(this.door3);
        this.doorArr.push(this.door1);
        this.doorArr.push(this.door2);
        this.doorArr.push(this.door3);
        //����������(���尴����˳�򣬸����ڵİ� ��-�£���-�� ����)
        this.door4 = new Door('one');
        this.door4.x = 450;
        this.door4.y = 530;
        this.addChild(this.door4);
        this.door5 = new Door('one');
        this.door5.x = 750;
        this.door5.y = 530;
        this.addChild(this.door5);
        this.door6 = new Door('one');
        this.door6.x = 150;
        this.door6.y = 230;
        this.addChild(this.door6);
        this.door7 = new Door('one');
        this.door7.x = 50;
        this.door7.y = 230;
        this.addChild(this.door7);
        this.door8 = new Door('one');
        this.door8.x = 750;
        this.door8.y = 230;
        this.addChild(this.door8);
        this.doorArr.push(this.door4);
        this.doorArr.push(this.door5);
        this.doorArr.push(this.door6);
        this.doorArr.push(this.door7);
        this.doorArr.push(this.door8);
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
    p.onKeyDOWN = function (event) {
        if (event.keyCode == 37) {
            this.chara.vx = -5;
        }
        //if (event.keyCode == 38) {
        //    this.chara.vy = -5;
        //}
        if (event.keyCode == 39) {
            this.chara.vx = 5;
        }
        //if (event.keyCode == 40) {
        //    this.chara.vy = 5;
        //}
        if (event.keyCode == 32) {
            this.cross = true;
        }
    };
    p.onKeyUP = function (event) {
        if (event.keyCode == 37 || event.keyCode == 39) {
            this.chara.vx = 0;
        }
        //if (event.keyCode == 38 || event.keyCode == 40) {
        //    this.chara.vy = 0;
        //}
        if (event.keyCode == 32) {
            this.cross = false;
        }
    };
    p.enterFrame = function (e) {
        //��ɫ�ƶ�
        this.chara.x += this.chara.vx;
        this.chara.y += this.chara.vy;
        //��ɫ�߿�����
        this.borderChick();
        //��ȷ�ż���
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
        //���°���������ȷ·��
        for (var j = 0; j < this.doorArr.length - 5; j++) {
            if (this.chara.hitTestPoint(this.doorArr[j].x, this.doorArr[j].y) && this.cross) {
                this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
                this.chara.x = this.charaPosArrX[j + 1];
                this.chara.y = this.charaPosArrY[j + 1];
            }
        }
        //����·��
        if (this.chara.hitTestPoint(this.doorArr[3].x, this.doorArr[3].y) && this.cross) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = this.charaPosArrX[0];
            this.chara.y = this.charaPosArrY[0];
        }
        if (this.chara.hitTestPoint(this.doorArr[4].x, this.doorArr[4].y) && this.cross) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = this.charaPosArrX[this.currNum];
            this.chara.y = this.charaPosArrY[this.currNum];
        }
        if (this.chara.hitTestPoint(this.doorArr[5].x, this.doorArr[5].y) && this.cross) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = this.charaPosArrX[1];
            this.chara.y = this.charaPosArrY[1];
        }
        if (this.chara.hitTestPoint(this.doorArr[6].x, this.doorArr[6].y) && this.cross) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = this.charaPosArrX[this.currNum];
            this.chara.y = this.charaPosArrY[this.currNum];
        }
        if (this.chara.hitTestPoint(this.doorArr[7].x, this.doorArr[7].y) && this.cross) {
            this.soundChann3 = this.sound3.play(0, 1); //0s�󲥷�1��
            this.chara.x = this.charaPosArrX[2];
            this.chara.y = this.charaPosArrY[2];
        }
        //�����յ�
        if (this.chara.hitTestPoint(this.destination.x, this.destination.y)) {
            this.gameOver();
        }
    };
    p.borderChick = function () {
        for (var i = 0; i < this.borderArr.length; i++) {
            Collision.block(this.chara, this.borderArr[i]);
            //if (Collision.collisionSide == "Bottom") {
            //    this.chara.vy = 0;
            //}
            //if (Collision.collisionSide == "Top") {
            //    this.chara.vy = 0;
            //}
            if (Collision.collisionSide == "Left") {
                this.chara.vx = 0;
            }
            if (Collision.collisionSide == "Right") {
                this.chara.vx = 0;
            }
        }
    };
    //ʵ�ִ����������ƶ��¼�
    p.numTimer = function (e) {
        this.currNum = Math.ceil(Math.random() * 3 - 1);
    };
    p.gameOver = function () {
        this.textTimer.removeEventListener(egret.TimerEvent.TIMER, this.numTimer, this);
        document.removeEventListener("keydown", function onKeyDown(event) { this.onKeyDOWN(event); });
        document.removeEventListener("keyup", function onKeyUp(event) { this.onKeyUP(event); });
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.charaPosArrX.splice(0, this.charaPosArrX.length);
        this.charaPosArrY.splice(0, this.charaPosArrY.length);
        this.doorArr.splice(0, this.doorArr.length);
        this.borderArr.splice(0, this.borderArr.length);
        this.loader.removeEventListener(egret.Event.COMPLETE, this.loadOver, this);
        this.soundChann.stop();
        this.dispatchEvent(new egret.Event("levelOneComplete"));
    };
    return LevelOne;
}(egret.Sprite));
egret.registerClass(LevelOne,'LevelOne');
//# sourceMappingURL=LevelOne.js.map