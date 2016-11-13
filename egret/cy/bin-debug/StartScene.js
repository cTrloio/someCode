/**
 * Created by Administrator on 2016/4/5.
 */
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addTOStage, this);
    }
    var d = __define,c=StartScene,p=c.prototype;
    p.addTOStage = function () {
        this.addObject();
        this.addEvent();
    };
    p.addObject = function () {
        this.mm = new MusicManger();
        this.mm.playBgm();
        this.startBg = new Background('StartBg');
        this.addChild(this.startBg);
        this.startBtn = new Btn();
        this.addChild(this.startBtn);
        this.startBtn.x = 240;
        this.startBtn.y = 745;
    };
    p.addEvent = function () {
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
    };
    p.startHd = function (e) {
        this.mm.playclickM();
        this.mm.stopBgm();
        this.startBtn.touchEnabled = false;
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addTOStage, this);
        this.dispatchEvent(new egret.Event('goSelectScene'));
    };
    return StartScene;
}(egret.Sprite));
egret.registerClass(StartScene,'StartScene');
//# sourceMappingURL=StartScene.js.map