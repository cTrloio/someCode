var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        _super.call(this);
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = GameFactory.gravity;
        this.canLunch = false;
        this._bullet = this.createBullet();
        this.addChild(this._bullet);
    }
    var d = __define,c=Bullet,p=c.prototype;
    p.createBullet = function () {
        var sha = new egret.Shape();
        sha.graphics.lineStyle(1, 0x000000);
        sha.graphics.beginFill(GameFactory.BULLET_1);
        // sha.graphics.drawCircle(0,0,12);
        sha.graphics.drawRect(0, 0, 15, 15);
        sha.graphics.endFill();
        return sha;
    };
    return Bullet;
}(egret.Sprite));
egret.registerClass(Bullet,'Bullet');
//# sourceMappingURL=Bullet.js.map