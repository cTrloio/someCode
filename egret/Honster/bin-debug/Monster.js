/**
 * Created by Administrator on 2015/10/30.
 */
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.hitCount = 0;
        this.mmc = Factory.createBitmapByName("monsterMouthClosed");
        this.addChild(this.mmc);
        this.timer = new egret.Timer(2000);
    }
    var d = __define,c=Monster,p=c.prototype;
    p.checkEnemyOpen = function () {
        this.mmc = Factory.createBitmapByName("monsterMouthOpen");
        this.addChild(this.mmc);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    p.timerHd = function (e) {
        this.mmc = Factory.createBitmapByName("monsterMouthClosed");
        this.addChild(this.mmc);
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
    };
    return Monster;
}(egret.Sprite));
egret.registerClass(Monster,'Monster');
//# sourceMappingURL=Monster.js.map