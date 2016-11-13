/**
 * Created by Administrator on 2015/10/30.
 */
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        _super.call(this);
        var bg = Factory.createBitmapByName("bigBackground");
        this.addChild(bg);
    }
    var d = __define,c=Background,p=c.prototype;
    return Background;
}(egret.Sprite));
egret.registerClass(Background,'Background');
//# sourceMappingURL=Background.js.map