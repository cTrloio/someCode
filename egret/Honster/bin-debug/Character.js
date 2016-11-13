/**
 * Created by Administrator on 2015/10/30.
 */
var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.call(this);
        var chara = Factory.createBitmapByName("character");
        this.addChild(chara);
    }
    var d = __define,c=Character,p=c.prototype;
    return Character;
}(egret.Sprite));
egret.registerClass(Character,'Character');
//# sourceMappingURL=Character.js.map