/**
 * Created by Administrator on 2016/4/5.
 */
var Btn = (function (_super) {
    __extends(Btn, _super);
    function Btn() {
        _super.call(this);
        this.startBtn = Factory.createBitmapByName('StartBtn');
        this.addChild(this.startBtn);
        this.startBtn.anchorOffsetX = this.startBtn.width / 2;
        this.startBtn.anchorOffsetY = this.startBtn.height / 2;
        this.startBtn.scaleY = 0.9;
    }
    var d = __define,c=Btn,p=c.prototype;
    return Btn;
}(egret.Sprite));
egret.registerClass(Btn,'Btn');
//# sourceMappingURL=Btn.js.map