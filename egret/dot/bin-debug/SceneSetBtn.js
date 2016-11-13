/**
 * Created by Administrator on 2016/3/19.
 */
var SceneSetBtn = (function (_super) {
    __extends(SceneSetBtn, _super);
    function SceneSetBtn(name) {
        _super.call(this);
        this.te = Factory.createBitmapByName(name);
        this.addChild(this.te);
        this.te.anchorOffsetX = this.te.width / 2;
        this.te.anchorOffsetY = this.te.height / 2;
    }
    var d = __define,c=SceneSetBtn,p=c.prototype;
    return SceneSetBtn;
}(egret.Sprite));
egret.registerClass(SceneSetBtn,'SceneSetBtn');
//# sourceMappingURL=SceneSetBtn.js.map