var SceneOne = (function (_super) {
    __extends(SceneOne, _super);
    function SceneOne() {
        _super.call(this);
        //box数组
        this.boxArr = [];
        //可以随机一个宽度
        this.canCreate = true;
        //随机一个宽度
        this.widthNum = 0;
        //点击数
        this.clickNum = 0;
        //可以点击一次
        this.canTouch = true;
        this.speed = 700;
        //分数
        this.scoreNum = 0;
        //创建金币条件
        this.clickCount = 0;
        //掉落金币
        this.moneyI = null;
        //是否碰撞 游戏结束条件
        this.hitObj = false;
        //碰到金币数量
        this.hitMoneyIcoNum = 0;
        this.ctrlBoxType = 0;
        this.musicBtnNum = 0;
        this.canClosePanel = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
    }
    var d = __define,c=SceneOne,p=c.prototype;
    p.addStageHd = function () {
        this.addObject();
        this.playPanel = new eui.Panel();
        this.playPanel.width = 420;
        this.playPanel.height = 200;
        this.playPanel.horizontalCenter = 0;
        this.playPanel.verticalCenter = 0;
        this.playPanel.x = 23;
        this.playPanel.y = 290;
        this.addChild(this.playPanel);
        this.playPanel.closeButton.touchEnabled = false;
        this.playPanel.closeButton.visible = false;
        //说明
        this.playerLabel = new eui.Label();
        this.playerLabel.text = "Your Name";
        this.playerLabel.x = 150;
        this.playerLabel.y = 30;
        this.playerLabel.size = 20;
        this.playerLabel.textColor = 0x000000;
        this.playPanel.addChild(this.playerLabel);
        //姓名输入框
        this.playerTxt = new egret.TextField();
        this.playerTxt.type = egret.TextFieldType.INPUT;
        this.playerTxt.border = true;
        this.playerTxt.maxChars = 5;
        this.playerTxt.size = 40;
        this.playerTxt.borderColor = 0x000000;
        this.playerTxt.textColor = 0x000000;
        this.playerTxt.width = 140;
        this.playerTxt.height = 40;
        this.playPanel.addChild(this.playerTxt);
        this.playerTxt.x = 135;
        this.playerTxt.y = 75;
        //开始按钮
        this.playNameBtn = new eui.Button();
        this.playNameBtn.label = "Play";
        this.playNameBtn.x = 160;
        this.playNameBtn.y = 130;
        this.playPanel.addChild(this.playNameBtn);
        this.playNameBtn.touchEnabled = true;
        this.playNameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nameHd, this);
    };
    p.nameHd = function () {
        SceneOne.playName = this.playerTxt.text;
        this.playNameBtn.touchEnabled = false;
        this.playNameBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nameHd, this);
        this.playPanel.removeChild(this.playerLabel);
        this.playPanel.removeChild(this.playerTxt);
        this.playPanel.removeChild(this.playNameBtn);
        this.removeChild(this.playPanel);
        this.addEvent();
    };
    p.addObject = function () {
        //获取人物类型
        this.charaType = ShopScene.charaType;
        //播放效果音乐
        this.sound = RES.getRes('through');
        this.sound2 = RES.getRes('find');
        //背景
        this.bg = new Background('bg');
        this.addChild(this.bg);
        //人物
        this.chara = new Character(this.charaType);
        this.addChild(this.chara);
        this.chara.x = 48;
        this.chara.y = 720 - this.chara.height / 2;
        //时间条
        this.progressBar = new eui.ProgressBar();
        this.addChild(this.progressBar);
        this.progressBar.maximum = 60;
        this.progressBar.minimum = 0;
        this.progressBar.x = 140;
        this.progressBar.y = 20;
        this.progressBar.width = 200;
        this.progressBar.height = 30;
        this.progressBar.direction = eui.Direction.LTR;
        this.progressBar.value = 60;
        //添加点击事件
        this.btnOne = new CtrlButton('up');
        this.btnTwo = new CtrlButton('up');
        this.btnThree = new CtrlButton('up');
        this.btnFour = new CtrlButton('up');
        this.btnFive = new CtrlButton('up');
        this.btnOne.alpha = 0;
        this.btnTwo.alpha = 0;
        this.btnThree.alpha = 0;
        this.btnFour.alpha = 0;
        this.btnFive.alpha = 0;
        this.btnOne.x = 48;
        this.btnTwo.x = 96 + 48;
        this.btnThree.x = 192 + 48;
        this.btnFour.x = 288 + 48;
        this.btnFive.x = 384 + 48;
        this.btnOne.y = 400;
        this.btnTwo.y = 400;
        this.btnThree.y = 400;
        this.btnFour.y = 400;
        this.btnFive.y = 400;
        this.addChild(this.btnOne);
        this.addChild(this.btnTwo);
        this.addChild(this.btnThree);
        this.addChild(this.btnFour);
        this.addChild(this.btnFive);
        //显示分数
        this.textScore = new egret.TextField();
        this.addChild(this.textScore);
        this.textScore.text = '0';
        this.textScore.textAlign = egret.HorizontalAlign.CENTER;
        this.textScore.size = 22;
        this.textScore.width = 480;
        this.textScore.height = 30;
        this.textScore.y = 72;
        this.textScore.textColor = 0x000000;
        //显示金币
        this.textMoney = new egret.TextField();
        this.addChild(this.textMoney);
        this.textMoney.text = '0';
        this.textMoney.textAlign = egret.HorizontalAlign.CENTER;
        this.textMoney.size = 22;
        this.textMoney.x = 40;
        this.textMoney.y = 22;
        this.textMoney.textColor = 0x000000;
        //两个功能按钮
        this.musicOn = new eui.Button();
        this.setBtn = new eui.Button();
        this.addChild(this.musicOn);
        this.addChild(this.setBtn);
        this.musicOn.skinName = 'resource/eui_skins/ButtonSkin_musicBtn.exml';
        this.setBtn.skinName = 'resource/eui_skins/ButtonSkin_setBtn.exml';
        this.musicOn.x = 375;
        this.musicOn.y = 8;
        this.setBtn.x = 425;
        this.setBtn.y = 8;
        //播放音乐
        this.sound1 = RES.getRes('bgm');
        this.soundChannel = this.sound1.play();
        this.soundChannel.volume = 1;
        //掉落的金币
        this.moneyI = new CtrlButton('moneyIco');
        this.addChild(this.moneyI);
        this.moneyI.x = -200;
        this.moneyI.visible = false;
    };
    p.addEvent = function () {
        this.btnOne.touchEnabled = true;
        this.btnTwo.touchEnabled = true;
        this.btnThree.touchEnabled = true;
        this.btnFour.touchEnabled = true;
        this.btnFive.touchEnabled = true;
        this.btnOne.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN1, this);
        this.btnOne.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnTwo.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN2, this);
        this.btnTwo.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnThree.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN3, this);
        this.btnThree.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnFour.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN4, this);
        this.btnFour.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnFive.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN5, this);
        this.btnFive.addEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        //显示倒计时
        this.timer = new egret.Timer(this.speed);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
        //功能按钮
        this.musicOn.touchEnabled = true;
        this.setBtn.touchEnabled = true;
        this.musicOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicOnHd, this);
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBtnHd, this);
        //全局计时器
        this.curnTimer = new egret.Timer(25000);
        this.curnTimer.addEventListener(egret.TimerEvent.TIMER, this.changeTimerHd, this);
        this.curnTimer.start();
    };
    p.onKeyDOWN1 = function () {
        if (this.canTouch) {
            if (this.chara.x > this.btnOne.x) {
                this.chara.x += -96;
            }
            else {
                this.chara.x = 48;
            }
            this.btnThings(this.btnOne);
        }
        //点击一次后不松开 则暂时不可以再次响应
        this.canTouch = false;
    };
    p.onKeyDOWN2 = function () {
        if (this.canTouch) {
            if (this.chara.x > this.btnTwo.x) {
                this.chara.x += -96;
            }
            else {
                this.chara.x = 96 + 48;
            }
            this.btnThings(this.btnTwo);
        }
        //点击一次后不松开 则暂时不可以再次响应
        this.canTouch = false;
    };
    p.onKeyDOWN3 = function () {
        if (this.canTouch) {
            if (this.chara.x > this.btnThree.x) {
                this.chara.x += -96;
            }
            else if (this.chara.x < this.btnThree.x) {
                this.chara.x += 96;
            }
            else {
                this.chara.x = 192 + 48;
            }
            this.btnThings(this.btnThree);
        }
        //点击一次后不松开 则暂时不可以再次响应
        this.canTouch = false;
    };
    p.onKeyDOWN4 = function () {
        if (this.canTouch) {
            if (this.chara.x < this.btnFour.x) {
                this.chara.x += 96;
            }
            else {
                this.chara.x = 288 + 48;
            }
            this.btnThings(this.btnFour);
        }
        //点击一次后不松开 则暂时不可以再次响应
        this.canTouch = false;
    };
    p.onKeyDOWN5 = function () {
        if (this.canTouch) {
            if (this.chara.x < this.btnFive.x) {
                this.chara.x += 96;
            }
            else {
                this.chara.x = 384 + 48;
            }
            this.btnThings(this.btnFive);
        }
        //点击一次后不松开 则暂时不可以再次响应
        this.canTouch = false;
    };
    p.btnThings = function (obj) {
        this.clickCount++;
        obj.alpha = 1;
        var tw1 = egret.Tween.get(obj, { loop: false });
        tw1.to({ alpha: 0 }, 500);
        this.doSomething();
    };
    p.doSomething = function () {
        //整体移动所有box
        for (var i = 0; i < this.boxArr.length; i++) {
            this.boxArr[i].y += 80;
        }
        //移动掉落的金币
        if (this.moneyI != null) {
            this.moneyI.y += 80;
        }
        //移出舞台
        if (this.moneyI.y > 800) {
            this.moneyI.visible = false;
        }
        //点击数累加
        this.clickNum++;
        //点击次数 >= 随机的宽度 +1(确保没有死路) 则可以创建
        if (this.clickNum >= this.widthNum + 1) {
            this.canCreate = true;
        }
        if (this.canCreate) {
            //随机一个box的宽度
            this.ctrlBoxType = Math.ceil(Math.random() * 8);
            if (this.ctrlBoxType == 1) {
                this.widthNum = 1;
            }
            if (this.ctrlBoxType == 2) {
                this.widthNum = 1;
            }
            if (this.ctrlBoxType == 3) {
                this.widthNum = 2;
            }
            if (this.ctrlBoxType == 4) {
                this.widthNum = 2;
            }
            if (this.ctrlBoxType == 5) {
                this.widthNum = 2;
            }
            if (this.ctrlBoxType == 6) {
                this.widthNum = 3;
            }
            if (this.ctrlBoxType == 7) {
                this.widthNum = 3;
            }
            if (this.ctrlBoxType == 8) {
                this.widthNum = 4;
            }
            var box = new Box(this.widthNum);
            box.y = box.height / 2;
            //根据box宽度 得出 box位置随机的范围 0/96/192/288/384
            if (this.widthNum == 1) {
                box.x = Math.floor(Math.random() * 5) * 96 + box.width / 2;
            }
            if (this.widthNum == 2) {
                box.x = Math.floor(Math.random() * 4) * 96 + box.width / 2;
            }
            if (this.widthNum == 3) {
                box.x = Math.floor(Math.random() * 3) * 96 + box.width / 2;
            }
            if (this.widthNum == 4) {
                box.x = Math.floor(Math.random() * 2) * 96 + box.width / 2;
            }
            this.addChild(box);
            box.rotation = Math.random() > 0.5 ? 0 : 180;
            this.boxArr.push(box);
            if (this.clickCount >= 30) {
                this.moneyI.visible = true;
                this.moneyI.x = Math.floor(Math.random() * 5) * 96 + 48;
                this.moneyI.y = box.y + 120 - box.height / 2;
                this.clickCount = 0;
            }
            //创建一个box后 点击次数归0 暂时不可再次创建
            this.clickNum = 0;
            this.canCreate = false;
        }
        this.enterFrameHd();
    };
    p.enterFrameHd = function () {
        for (var i = this.boxArr.length - 1; i >= 0; i--) {
            if (this.boxArr[i].hitTestPoint(this.chara.x, this.chara.y)) {
                this.removeChild(this.boxArr[i]);
                this.boxArr.splice(i, 1);
                if (this.charaType == 'blue') {
                    this.chara.life--;
                    if (this.chara.life < 0) {
                        this.hitObj = true;
                    }
                }
                else {
                    this.hitObj = true;
                }
            }
            if (this.boxArr[i].y >= (this.chara.y + 80)) {
                this.removeChild(this.boxArr[i]);
                this.boxArr.splice(i, 1);
                this.scoreNum += 2;
                this.progressBar.value++;
                this.textScore.text = '' + this.scoreNum;
                this.soundChannelTwo = this.sound.play(0, 1);
                this.soundChannelTwo.volume = 0.8;
            }
        }
        //碰到金币累加
        if (this.moneyI.hitTestPoint(this.chara.x, this.chara.y)) {
            this.moneyI.visible = false;
            this.moneyI.x = -200;
            this.hitMoneyIcoNum++;
            this.textMoney.text = this.hitMoneyIcoNum + "";
            this.soundChannelThree = this.sound2.play(0, 1);
        }
        //如果碰到某个❤  跳出失败界面
        if (this.hitObj) {
            SceneOne.score = this.scoreNum;
            SceneOne.playMoney = this.hitMoneyIcoNum;
            this.gameOverPanel();
            this.setBtn.touchEnabled = false;
            //以上暂时只执行一次
            this.hitObj = false;
        }
    };
    p.timerHd = function () {
        this.progressBar.value -= 1;
        if (this.progressBar.value <= 0) {
            //时间到 跳出失败界面  统计分数
            SceneOne.score = this.scoreNum;
            SceneOne.playMoney = this.hitMoneyIcoNum;
            this.gameOverPanel();
        }
    };
    p.gameOverPanel = function () {
        this.soundChannel.volume = 0;
        //失败之后界面
        this.panel = new eui.Panel();
        this.panel.width = 480;
        this.panel.height = 800;
        this.panel.skinName = 'resource/eui_skins/PanelSkin1.exml';
        this.panel.horizontalCenter = 0;
        this.panel.verticalCenter = 0;
        this.panel.x = 0;
        this.panel.y = 0;
        this.addChild(this.panel);
        this.panel.closeButton.verticalCenter = 240;
        this.panel.closeButton.skinName = "resource/eui_skins/ButtonSkin_close.exml";
        this.panel.closeButton.touchEnabled = true;
        this.panel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dotCloseHd, this);
        if (!this.canClosePanel) {
            this.panel.closeButton.visible = false;
        }
        //金币显示
        var money = new egret.TextField();
        this.panel.addChild(money);
        money.x = 180;
        money.y = 240;
        money.size = 35;
        money.textColor = 0x000000;
        money.text = '得分：' + this.scoreNum;
        //得分显示
        var money2 = new egret.TextField();
        this.panel.addChild(money2);
        money2.x = 180;
        money2.y = 410;
        money2.size = 35;
        money2.textColor = 0x000000;
        money2.text = '金币：' + this.hitMoneyIcoNum;
        //重来按钮
        this.replayBtn = new eui.Button();
        this.replayBtn.skinName = 'resource/eui_skins/ButtonSkin_replay.exml';
        this.replayBtn.horizontalCenter = -80;
        this.replayBtn.verticalCenter = 110;
        this.panel.addChild(this.replayBtn);
        //回到主界面按钮
        this.mainBtn = new eui.Button();
        this.mainBtn.skinName = 'resource/eui_skins/ButtonSkin_main.exml';
        this.mainBtn.horizontalCenter = 80;
        this.mainBtn.verticalCenter = 110;
        this.panel.addChild(this.mainBtn);
        this.replayBtn.touchEnabled = true;
        this.mainBtn.touchEnabled = true;
        //重来按钮
        this.replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickAgian, this);
        //回到主界面
        this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickOver, this);
        this.timer.stop();
        this.btnOne.touchEnabled = false;
        this.btnTwo.touchEnabled = false;
        this.btnThree.touchEnabled = false;
        this.btnFour.touchEnabled = false;
        this.btnFive.touchEnabled = false;
    };
    p.musicOnHd = function () {
        this.musicBtnNum++;
        if (this.musicBtnNum % 2 == 0) {
            this.soundChannel.volume = 1;
        }
        else {
            this.soundChannel.volume = 0;
        }
    };
    p.dotCloseHd = function () {
        this.soundChannel.volume = 1;
        this.timer.start();
        this.btnOne.touchEnabled = true;
        this.btnTwo.touchEnabled = true;
        this.btnThree.touchEnabled = true;
        this.btnFour.touchEnabled = true;
        this.btnFive.touchEnabled = true;
        this.canClosePanel = false;
    };
    p.setBtnHd = function () {
        this.canClosePanel = true;
        this.gameOverPanel();
    };
    p.Over = function () {
        this.soundChannel.stop();
        this.musicOn.touchEnabled = false;
        this.setBtn.touchEnabled = false;
        this.musicOn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.musicOnHd, this);
        this.setBtn.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.setBtnHd, this);
        this.timer.stop();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.curnTimer.stop();
        this.curnTimer.removeEventListener(egret.TimerEvent.TIMER, this.changeTimerHd, this);
        this.btnOne.touchEnabled = false;
        this.btnTwo.touchEnabled = false;
        this.btnThree.touchEnabled = false;
        this.btnFour.touchEnabled = false;
        this.btnFive.touchEnabled = false;
        this.btnOne.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN1, this);
        this.btnOne.removeEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnTwo.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN2, this);
        this.btnTwo.removeEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnThree.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN3, this);
        this.btnThree.removeEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnFour.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN4, this);
        this.btnFour.removeEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.btnFive.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onKeyDOWN5, this);
        this.btnFive.removeEventListener(egret.TouchEvent.TOUCH_END, this.onKeyUP, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
    };
    p.onButtonClickAgian = function (e) {
        this.removeChild(this.panel);
        //停止一切
        this.Over();
        e.target.touchEnabled = false;
        this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickAgian, this);
        this.mainBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickOver, this);
        this.dispatchEvent(new egret.Event('TryAgian'));
    };
    p.onButtonClickOver = function (e) {
        this.removeChild(this.panel);
        //停止一切
        this.Over();
        this.replayBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickAgian, this);
        this.mainBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClickOver, this);
        e.target.touchEnabled = false;
        this.dispatchEvent(new egret.Event('goMain'));
    };
    p.onKeyUP = function () {
        //按键抬起后可以再次响应点击
        this.canTouch = true;
    };
    p.changeTimerHd = function () {
        if (this.speed <= 300) {
            this.speed = 300;
            this.curnTimer.stop();
            this.curnTimer.removeEventListener(egret.TimerEvent.TIMER, this.changeTimerHd, this);
        }
        else {
            this.speed -= 100;
        }
        this.timer.stop();
        this.timer.reset();
        this.timer = new egret.Timer(this.speed);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    SceneOne.score = 0;
    SceneOne.playName = '';
    SceneOne.playMoney = 0;
    return SceneOne;
}(egret.Sprite));
egret.registerClass(SceneOne,'SceneOne');
//# sourceMappingURL=SceneOne.js.map