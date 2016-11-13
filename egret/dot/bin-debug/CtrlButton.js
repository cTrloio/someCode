/**
 * Created by Administrator on 2016/3/17.
 */
var CtrlButton = (function (_super) {
    __extends(CtrlButton, _super);
    function CtrlButton(name) {
        _super.call(this);
        this.btn1 = Factory.createBitmapByName(name);
        this.addChild(this.btn1);
        this.btn1.anchorOffsetX = this.btn1.width / 2;
        this.btn1.anchorOffsetY = this.btn1.height / 2;
    }
    var d = __define,c=CtrlButton,p=c.prototype;
    return CtrlButton;
}(egret.Sprite));
egret.registerClass(CtrlButton,'CtrlButton');
//# sourceMappingURL=CtrlButton.js.map