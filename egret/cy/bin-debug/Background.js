/**
 * Created by Administrator on 2016/4/1.
 */
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(name) {
        _super.call(this);
        this.txt = new egret.TextField();
        this.bg = Factory.createBitmapByName(name);
        this.addChild(this.bg);
        this.txt.text = 0 + '';
    }
    var d = __define,c=Background,p=c.prototype;
    return Background;
}(egret.Sprite));
egret.registerClass(Background,'Background');
//# sourceMappingURL=Background.js.map