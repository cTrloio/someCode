/**
 * Created by Administrator on 2016/3/17.
 */
var ShopScene = (function (_super) {
    __extends(ShopScene, _super);
    function ShopScene() {
        _super.call(this);
        this.scoreNum = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ShopScene,p=c.prototype;
    p.onAddToStage = function () {
        this.addObject();
        this.addEvent();
    };
    p.addObject = function () {
        this.scoreNum = SceneOne.playMoney;
        this.sel = Factory.createBitmapByName('sel');
        this.addChild(this.sel);
        this.buyBtn2 = Factory.createBitmapByName('buy');
        this.playBtn = Factory.createBitmapByName('play');
        this.buysucc = Factory.createBitmapByName('buySucc');
        this.buyfild = Factory.createBitmapByName('buyFild');
        this.addChild(this.buysucc);
        this.addChild(this.buyfild);
        this.buysucc.anchorOffsetX = this.buysucc.width / 2;
        this.buysucc.anchorOffsetY = this.buysucc.height / 2;
        this.buyfild.anchorOffsetX = this.buyfild.width / 2;
        this.buyfild.anchorOffsetY = this.buyfild.height / 2;
        this.buysucc.x = 45 + this.buysucc.width / 2;
        this.buysucc.y = 350 + this.buysucc.height / 2;
        this.buyfild.x = 45 + this.buyfild.width / 2;
        this.buyfild.y = 350 + this.buyfild.height / 2;
        this.buysucc.visible = false;
        this.buyfild.visible = false;
        this.buyBtn2.anchorOffsetX = this.buyBtn2.width / 2;
        this.buyBtn2.anchorOffsetY = this.buyBtn2.height / 2;
        this.playBtn.anchorOffsetX = this.playBtn.width / 2;
        this.playBtn.anchorOffsetY = this.playBtn.height / 2;
        this.addChild(this.buyBtn2);
        this.addChild(this.playBtn);
        this.buyBtn2.x = 360;
        this.buyBtn2.y = 600;
        this.playBtn.x = 240;
        this.playBtn.y = 700;
        this.changesus = Factory.createBitmapByName('changesus');
        this.addChild(this.changesus);
        this.changesus.visible = false;
        this.changesus.x = 45 + this.changesus.width / 2;
        this.changesus.y = 350 + this.changesus.height / 2;
        this.changesus.anchorOffsetX = this.changesus.width / 2;
        this.changesus.anchorOffsetY = this.changesus.height / 2;
        this.seleBtn1 = Factory.createBitmapByName('change');
        this.seleBtn2 = Factory.createBitmapByName('change');
        this.addChild(this.seleBtn1);
        this.addChild(this.seleBtn2);
        this.seleBtn1.anchorOffsetX = this.seleBtn1.width / 2;
        this.seleBtn1.anchorOffsetY = this.seleBtn1.height / 2;
        this.seleBtn2.anchorOffsetX = this.seleBtn2.width / 2;
        this.seleBtn2.anchorOffsetY = this.seleBtn2.height / 2;
        this.seleBtn1.x = 125;
        this.seleBtn1.y = 600;
        this.seleBtn2.x = 360;
        this.seleBtn2.y = 600;
        //现在的金币
        var monSmall = Factory.createBitmapByName('moneyIcoSmall');
        this.addChild(monSmall);
        monSmall.x = 10;
        monSmall.y = 725;
        this.textScore = new egret.TextField();
        this.addChild(this.textScore);
        this.textScore.text = '' + this.scoreNum;
        this.textScore.size = 45;
        this.textScore.textColor = 0x000000;
        this.textScore.x = 90;
        this.textScore.y = 746;
        this.buyBtn2.scaleX = 1;
        this.seleBtn1.scaleX = 1;
        this.seleBtn2.scaleX = 1;
        if (ShopScene.buied) {
            this.seleBtn1.visible = true;
            this.seleBtn2.visible = true;
            this.seleBtn1.touchEnabled = true;
            this.seleBtn2.touchEnabled = true;
            this.buyBtn2.visible = false;
            this.buyBtn2.touchEnabled = false;
        }
        else {
            this.seleBtn1.visible = true;
            this.seleBtn2.visible = false;
            this.seleBtn1.touchEnabled = true;
            this.seleBtn2.touchEnabled = false;
            this.buyBtn2.touchEnabled = true;
        }
        this.playBtn.touchEnabled = true;
    };
    p.addEvent = function () {
        this.buyBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn2Hd, this);
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.play2Hd, this);
        this.seleBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sele1Hd, this);
        this.seleBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sele2Hd, this);
    };
    p.btn2Hd = function () {
        this.tw = egret.Tween.get(this.buyBtn2, { loop: false });
        this.tw.to({ scaleX: 0.8 }, 200).to({ scaleX: 1 }, 70);
        if (this.scoreNum >= 10) {
            this.buysucc.scaleX = 1;
            this.buyBtn2.visible = false;
            ShopScene.buied = true;
            this.seleBtn2.visible = true;
            this.seleBtn2.touchEnabled = true;
            this.textScore.text = '' + (this.scoreNum - 10);
            this.buysucc.visible = true;
            this.tw = egret.Tween.get(this.buysucc, { loop: false });
            this.tw.wait(700).to({ scaleX: 0 }, 300);
        }
        else {
            this.buyfild.scaleX = 1;
            this.buyfild.visible = true;
            this.tw = egret.Tween.get(this.buyfild, { loop: false });
            this.tw.wait(700).to({ scaleX: 0 }, 300);
        }
    };
    p.sele1Hd = function () {
        this.tw = egret.Tween.get(this.seleBtn1, { loop: false });
        this.tw.to({ scaleX: 0.8 }, 200).to({ scaleX: 1 }, 70);
        this.changesus.scaleX = 1;
        this.changesus.visible = true;
        this.tw1 = egret.Tween.get(this.changesus, { loop: false });
        this.tw1.wait(700).to({ scaleX: 0 }, 300);
        ShopScene.charaType = 'black';
    };
    p.sele2Hd = function () {
        this.tw = egret.Tween.get(this.seleBtn2, { loop: false });
        this.tw.to({ scaleX: 0.8 }, 200).to({ scaleX: 1 }, 70);
        this.changesus.scaleX = 1;
        this.changesus.visible = true;
        this.tw1 = egret.Tween.get(this.changesus, { loop: false });
        this.tw1.wait(700).to({ scaleX: 0 }, 300);
        ShopScene.charaType = 'blue';
    };
    p.play2Hd = function () {
        this.dispatchEvent(new egret.Event('goSceneOne'));
        this.seleBtn1.touchEnabled = false;
        this.seleBtn2.touchEnabled = false;
        this.buyBtn2.touchEnabled = false;
        this.playBtn.touchEnabled = false;
        this.seleBtn1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sele1Hd, this);
        this.seleBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.sele2Hd, this);
        this.buyBtn2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btn2Hd, this);
        this.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.play2Hd, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    };
    ShopScene.charaType = 'black';
    return ShopScene;
}(egret.Sprite));
egret.registerClass(ShopScene,'ShopScene');
//# sourceMappingURL=ShopScene.js.map