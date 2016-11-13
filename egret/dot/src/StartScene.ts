/**
 * Created by Administrator on 2016/3/17.
 */
class StartScene extends egret.Sprite {

    playBtn:egret.Bitmap;   //开始按钮
    shopBtn:egret.Bitmap;   //商店按钮
    itdBtn:egret.Bitmap;    //说明按钮
    rank:egret.Bitmap;      //排行按钮

    startBg:egret.Bitmap;   //开始背景
    itd:egret.Bitmap;
    tw:egret.Tween;

    sound:egret.Sound;
    soundChannel:egret.SoundChannel;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage() {
        this.addObject();
        this.addEvent();
    }

    private addObject() {
        this.playBtn = Factory.createBitmapByName('play');
        this.startBg = Factory.createBitmapByName('startBg');
        this.shopBtn = Factory.createBitmapByName('shop');
        this.itdBtn = Factory.createBitmapByName('introduce');
        //this.cloud=Factory.createBitmapByName('cloud');
        this.rank = Factory.createBitmapByName('rank');

        this.playBtn.anchorOffsetX = this.playBtn.width / 2;
        this.playBtn.anchorOffsetY = this.playBtn.height / 2;
        this.shopBtn.anchorOffsetX = this.shopBtn.width / 2;
        this.shopBtn.anchorOffsetY = this.shopBtn.height / 2;
        this.itdBtn.anchorOffsetX = this.itdBtn.width / 2;
        this.itdBtn.anchorOffsetY = this.itdBtn.height / 2;
        this.rank.anchorOffsetX = this.rank.width / 2;
        this.rank.anchorOffsetY = this.rank.height / 2;
        this.playBtn.x = 240;
        this.playBtn.y = 400;
        this.shopBtn.x = 240;
        this.shopBtn.y = 480;
        this.itdBtn.x = 240;
        this.itdBtn.y = 560;
        this.rank.x = 240;
        this.rank.y = 640;
        this.addChild(this.startBg);
        this.addChild(this.shopBtn);
        this.addChild(this.rank);
        this.addChild(this.playBtn);
        this.addChild(this.itdBtn);
        this.itd = Factory.createBitmapByName('introduce_itd');
        this.addChild(this.itd);
        this.itd.x = this.stage.stageWidth / 2 - this.itd.width / 2;
        this.itd.y = this.stage.stageHeight / 2 - this.itd.height / 2;
        this.itd.visible = false;
        this.itd.touchEnabled = true;
        this.itd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showItdHd, this);

        //播放音乐
        this.sound = RES.getRes('bgm');
        this.soundChannel = this.sound.play();
        this.soundChannel.volume = 0.75;
    }

    private addEvent() {
        this.playBtn.touchEnabled = true;
        this.shopBtn.touchEnabled = true;
        this.itdBtn.touchEnabled = true;
        this.rank.touchEnabled = true;
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playHd, this);
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopHd, this);
        this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rankHd, this);
        this.itdBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.itdHd, this);
    }

    private playHd() {
        this.dispatchEvent(new egret.Event('goSceneOne'));
        this.GameOver();
    }

    private shopHd() {
        //商店按钮
        this.dispatchEvent(new egret.Event('goSceneShop'));
        this.GameOver();
    }

    private rankHd() {
        //排行榜按钮
        this.dispatchEvent(new egret.Event('goSceneRank'));
        this.GameOver();
    }

    private itdHd() {
        this.itd.visible = true;
    }
    private showItdHd() {
        this.itd.visible = false;
    }

    private GameOver() {
        this.soundChannel.stop();
        this.itd.touchEnabled = false;
        this.itd.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.showItdHd, this);
        this.playBtn.touchEnabled = false;
        this.shopBtn.touchEnabled = false;
        this.itdBtn.touchEnabled = false;
        this.playBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.playHd, this);
        this.shopBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.shopHd, this);
        this.itdBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.itdHd, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
}