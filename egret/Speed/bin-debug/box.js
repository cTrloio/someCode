/**
 * Created by Administrator on 2015/11/18.
 */
var Box = (function (_super) {
    __extends(Box, _super);
    function Box() {
        _super.call(this);
        this.box = Factory.createBitmapByName("box");
        this.addChild(this.box);
    }
    var d = __define,c=Box,p=c.prototype;
    return Box;
}(egret.Sprite));
egret.registerClass(Box,'Box');
//# sourceMappingURL=box.js.map