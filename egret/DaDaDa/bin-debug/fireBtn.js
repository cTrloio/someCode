var fireBtn = (function (_super) {
    __extends(fireBtn, _super);
    function fireBtn() {
        _super.call(this);
        this.rotaRate = 0;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=fireBtn,p=c.prototype;
    p.addStageHd = function () {
        this.rotaTimer = new egret.Timer(500, 0);
        this.rotaTimer.addEventListener(egret.TimerEvent.TIMER, this.rotaFateHd, this);
        this.rotaEffect = GameData.CREATE_BITMAP('xz_png');
        this.rotaEffect.anchorOffsetX = this.rotaEffect.width / 2;
        this.rotaEffect.anchorOffsetY = this.rotaEffect.height / 2;
        this.firebutton = GameData.CREATE_BITMAP('fire_png');
        this.firebutton.anchorOffsetX = this.rotaEffect.width / 2;
        this.firebutton.anchorOffsetY = this.rotaEffect.height / 2;
        this.addChild(this.rotaEffect);
        this.addChild(this.firebutton);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHd, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
    };
    p.touchBeginHd = function () {
        this.rotaTimer.reset();
        this.rotaTimer.stop();
        this.rotaTimer.start();
        this.dispatchEventWith(GameEvent.FIRE);
    };
    p.touchEndHd = function () {
        this.rotaRate = 0;
        this.rotaTimer.reset();
        this.rotaTimer.stop();
        this.dispatchEventWith(GameEvent.NO_FIRE);
    };
    p.enterHd = function () {
        this.rotaEffect.rotation += this.rotaRate;
    };
    p.rotaFateHd = function () {
        if (this.rotaRate < 60) {
            this.rotaRate += 10;
        }
        else {
            this.rotaTimer.stop();
        }
    };
    p.removeHd = function () {
        this.touchEnabled = false;
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHd, this);
        this.rotaTimer.removeEventListener(egret.TimerEvent.TIMER, this.rotaFateHd, this);
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return fireBtn;
}(egret.Sprite));
egret.registerClass(fireBtn,'fireBtn');
