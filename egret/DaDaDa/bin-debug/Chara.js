// TypeScript file
var Chara = (function (_super) {
    __extends(Chara, _super);
    function Chara() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.speedLim = 7;
        this.friction = 0.98;
        this.angle = 0;
        this.bulletNum = 1;
        this._bitMap = GameData.CREATE_BITMAP('chara_png');
        this.anchorOffsetX = this._bitMap.width / 2;
        this.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);
        this.resetTimer = new egret.Timer(10000, 1);
        this.resetTimer.addEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Chara,p=c.prototype;
    p.resetHd = function () {
        this.bulletNum = 1;
        GameData.fireRate = 350;
        this.dispatchEventWith(GameEvent.CHARARESET);
    };
    p.removeHd = function () {
        this.resetTimer.stop();
        this.removeChild(this._bitMap);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return Chara;
}(egret.Sprite));
egret.registerClass(Chara,'Chara');
