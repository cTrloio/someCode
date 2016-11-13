var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm() {
        _super.call(this);
        this.mapX = 0;
        this.mapY = 0;
        this.moveSpeed = 1200;
        this.findNum = 0;
        this.texture = GameData.createBitmapByName("worm1_png");
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
        this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Worm,p=c.prototype;
    p.addStageHd = function () {
        this.moveTimer = new egret.Timer(500, 0);
        this.moveTimer.addEventListener(egret.TimerEvent.TIMER, this.wormMoveEffect, this);
        this.moveTimer.start();
        this.wormmoveTimer = new egret.Timer(150, 1);
        this.wormmoveTimer.addEventListener(egret.TimerEvent.TIMER, this.moveHd, this);
        this.wormmoveTimer.start();
    };
    p.moveHd = function () {
        this.dispatchEventWith(GameEvent.MOVE_WORM);
    };
    p.wormMoveHd = function () {
        this.wormmoveTimer.stop();
        this.wormmoveTimer.reset();
        this.wormmoveTimer.start();
    };
    p.setTouchEnable = function (bool) {
    };
    p.wormMoveEffect = function (e) {
        this.removeChild(this.texture);
        if (e.target.currentCount % 2 === 0) {
            this.texture = GameData.createBitmapByName("worm1_png");
        }
        else {
            this.texture = GameData.createBitmapByName("worm2_png");
        }
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
    };
    p.removeHd = function () {
        this.moveTimer.stop();
        this.moveTimer.removeEventListener(egret.TimerEvent.TIMER, this.wormMoveEffect, this);
        this.wormmoveTimer.stop();
        this.wormmoveTimer.removeEventListener(egret.TimerEvent.TIMER, this.moveHd, this);
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return Worm;
}(egret.Sprite));
egret.registerClass(Worm,'Worm');
//# sourceMappingURL=Worm.js.map