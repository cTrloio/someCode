/**
 * Created by Administrator on 2015/10/30.
 */
var Explosion = (function (_super) {
    __extends(Explosion, _super);
    function Explosion() {
        _super.call(this);
        this.ex = Factory.createBitmapByName("explosion");
        this.addChild(this.ex);
        this.timer = new egret.Timer(2000);
    }
    var d = __define,c=Explosion,p=c.prototype;
    p.showExplosion = function () {
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    p.timerHd = function (e) {
        this.ex.visible = false;
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
    };
    return Explosion;
}(egret.Sprite));
egret.registerClass(Explosion,'Explosion');
//# sourceMappingURL=Explosion.js.map