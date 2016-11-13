var BugWings = (function (_super) {
    __extends(BugWings, _super);
    function BugWings() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.bugWingDown = Factory.createBitmapByName("bugWingsDown");
        this.addChild(this.bugWingDown);
        this.bugWingUp = Factory.createBitmapByName("bugWingsUp");
        this.addChild(this.bugWingUp);
        this.timer = new egret.Timer(30);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    }
    var d = __define,c=BugWings,p=c.prototype;
    p.timerHd = function (e) {
        if (this.timer.currentCount % 2 == 0) {
            this.bugWingDown.visible = false;
            this.bugWingUp.visible = true;
        }
        else {
            this.bugWingUp.visible = false;
            this.bugWingDown.visible = true;
        }
    };
    return BugWings;
}(egret.Sprite));
egret.registerClass(BugWings,'BugWings');
//# sourceMappingURL=BugWings.js.map