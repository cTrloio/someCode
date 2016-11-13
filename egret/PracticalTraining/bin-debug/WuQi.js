/**
 * Created by Administrator on 2015/12/9.
 */
var WuQi = (function (_super) {
    __extends(WuQi, _super);
    function WuQi() {
        _super.call(this);
        this.wuqi = Factory.createBitmapByName('Wuqi');
        this.addChild(this.wuqi);
        this.wuqi.anchorOffsetX = this.wuqi.width / 2;
        this.wuqi.anchorOffsetY = this.wuqi.height / 2;
    }
    var d = __define,c=WuQi,p=c.prototype;
    return WuQi;
}(egret.Sprite));
egret.registerClass(WuQi,'WuQi');
//# sourceMappingURL=WuQi.js.map