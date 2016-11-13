// TypeScript file
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(who) {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.bullSpeed = 10; //移动速度
        if (who == GameData.boosType1) {
            this._bitMap = GameData.CREATE_BITMAP('bullet_e1');
            this.bullSpeed = 8;
        }
        else if (who == GameData.boosType2) {
            this._bitMap = GameData.CREATE_BITMAP('bullet_e2');
            this.bullSpeed = 9;
        }
        else if (who == GameData.boosType3) {
            this._bitMap = GameData.CREATE_BITMAP('bullet_e3');
            this._bitMap.scaleY = 0.6;
            this.bullSpeed = 7;
        }
        else {
            this._bitMap = GameData.CREATE_BITMAP('bullet_png');
            this.bullSpeed = 10;
        }
        this.anchorOffsetX = this._bitMap.width / 2;
        this.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);
    }
    var d = __define,c=Bullet,p=c.prototype;
    return Bullet;
}(egret.Sprite));
egret.registerClass(Bullet,'Bullet');
