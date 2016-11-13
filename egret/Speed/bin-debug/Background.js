/**
 * Created by Administrator on 2015/11/18.
 */
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        _super.call(this);
        this.background = Factory.createBitmapByName("background");
        this.addChild(this.background);
    }
    var d = __define,c=Background,p=c.prototype;
    return Background;
}(egret.Sprite));
egret.registerClass(Background,'Background');
//# sourceMappingURL=Background.js.map