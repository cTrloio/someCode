/**
 * Created by Administrator on 2015/12/4.
 */
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name) {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        if (name == 'soul1') {
            this.enemy1 = Factory.createBitmapByName("enemySoul");
            this.addChild(this.enemy1);
            this.enemy1.anchorOffsetX = this.enemy1.width / 2;
            this.enemy1.anchorOffsetY = this.enemy1.height / 2;
            this.enemy1.scaleX = 0.7;
            this.enemy1.scaleY = 0.7;
        }
        if (name == 'soul2') {
            this.enemy1 = Factory.createBitmapByName("enemyTwo");
            this.addChild(this.enemy1);
            this.enemy1.anchorOffsetX = this.enemy1.width / 2;
            this.enemy1.anchorOffsetY = this.enemy1.height / 2;
            this.enemy1.scaleX = 0.7;
            this.enemy1.scaleY = 0.7;
        }
    }
    var d = __define,c=Enemy,p=c.prototype;
    return Enemy;
}(egret.Sprite));
egret.registerClass(Enemy,'Enemy');
//# sourceMappingURL=Enemy.js.map