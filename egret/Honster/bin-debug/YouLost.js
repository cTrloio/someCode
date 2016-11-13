/**
 * Created by Administrator on 2015/10/30.
 */
var YouLost = (function (_super) {
    __extends(YouLost, _super);
    function YouLost() {
        _super.call(this);
        var yl = Factory.createBitmapByName("youLost");
        this.addChild(yl);
    }
    var d = __define,c=YouLost,p=c.prototype;
    return YouLost;
}(egret.Sprite));
egret.registerClass(YouLost,'YouLost');
//# sourceMappingURL=YouLost.js.map