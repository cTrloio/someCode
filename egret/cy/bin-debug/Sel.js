/**
 * Created by Administrator on 2016/4/5.
 */
var Sel = (function (_super) {
    __extends(Sel, _super);
    function Sel() {
        _super.call(this);
        this.selSceneNum = 0;
        this.sel = Factory.createBitmapByName('sel');
        this.addChild(this.sel);
        this.sel.anchorOffsetX = this.sel.width / 2;
        this.sel.anchorOffsetY = this.sel.height / 2;
        this.sel.visible = true;
        this.se2 = Factory.createBitmapByName('selLight');
        this.addChild(this.se2);
        this.se2.anchorOffsetX = this.se2.width / 2;
        this.se2.anchorOffsetY = this.se2.height / 2;
        this.se2.visible = false;
    }
    var d = __define,c=Sel,p=c.prototype;
    p.changeHd = function () {
        this.sel.visible = false;
        this.se2.visible = true;
    };
    return Sel;
}(egret.Sprite));
egret.registerClass(Sel,'Sel');
//# sourceMappingURL=Sel.js.map