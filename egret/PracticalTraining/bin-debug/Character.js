/**
 * Created by Administrator on 2015/12/2.
 */
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.life = 3;
        this.character = Factory.createBitmapByName("character");
        this.addChild(this.character);
        this.character.anchorOffsetX = this.character.width / 2;
        this.character.anchorOffsetY = this.character.height / 2;
        this.character.scaleX = 0.5;
        this.character.scaleY = 0.5;
        this.timer = new egret.Timer(2000);
    }
    var d = __define,c=Character,p=c.prototype;
    p.charaDown = function () {
        this.character.visible = false;
        this.character2 = Factory.createBitmapByName("character2");
        this.addChild(this.character2);
        this.character2.anchorOffsetX = this.character2.width / 2;
        this.character2.anchorOffsetY = this.character2.height / 2;
        this.character2.scaleX = 0.5;
        this.character2.scaleY = 0.5;
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
        this.timer.start();
    };
    p.timerHd = function (e) {
        this.character2.visible = false;
        this.character.visible = true;
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerHd, this);
    };
    return Character;
}(egret.Sprite));
egret.registerClass(Character,'Character');
//# sourceMappingURL=Character.js.map