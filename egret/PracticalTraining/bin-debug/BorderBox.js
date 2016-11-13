/**
 * Created by Administrator on 2015/12/3.
 */
var BorderBox = (function (_super) {
    __extends(BorderBox, _super);
    function BorderBox(name) {
        _super.call(this);
        if (name == 'her') {
            this.bg = Factory.createBitmapByName("herBorder");
            this.addChild(this.bg);
        }
        if (name == 'ver') {
            this.bg = Factory.createBitmapByName("verBorder");
            this.addChild(this.bg);
        }
    }
    var d = __define,c=BorderBox,p=c.prototype;
    return BorderBox;
}(egret.Sprite));
egret.registerClass(BorderBox,'BorderBox');
//# sourceMappingURL=BorderBox.js.map