var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        _super.call(this);
        this.mapX = 0;
        this.mapY = 0;
        this.enemyType = ["xj1_png", "xj2_png", "xj3_png"];
        this.teArr = [1, -1];
        this.moveSpeed = 1000;
        var num = Math.floor(Math.random() * 3);
        this.texture = GameData.createBitmapByName(this.enemyType[num]);
        this.moveSpeed = 1000 + num * 500;
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
        var rand = this.teArr[Math.floor(Math.random() * 2)];
        var te = egret.Tween.get(this.texture, { loop: true });
        te.to({ rotation: 360 * rand }, 5000);
        this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Enemy,p=c.prototype;
    p.addStageHd = function () {
        this.enemyTimer = new egret.Timer(2000);
        this.enemyTimer.addEventListener(egret.TimerEvent.TIMER, this.moveHd, this);
        this.enemyTimer.start();
    };
    p.moveHd = function () {
        this.dispatchEventWith(GameEvent.MOVE_ENEMY);
    };
    p.enemyMoveHd = function () {
        this.enemyTimer.stop();
        this.enemyTimer.reset();
        this.enemyTimer.start();
    };
    p.removeHd = function () {
        this.enemyTimer.stop();
        this.enemyTimer.removeEventListener(egret.TimerEvent.TIMER, this.moveHd, this);
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    p.setTouchEnable = function (bool) {
    };
    return Enemy;
}(egret.Sprite));
egret.registerClass(Enemy,'Enemy');
//# sourceMappingURL=Enemy.js.map