/**
 * Created by Administrator on 2015/12/4.
 */
var End = (function (_super) {
    __extends(End, _super);
    function End(name) {
        _super.call(this);
        if (name == 'one') {
            this.end = Factory.createBitmapByName("endPlace1");
            this.addChild(this.end);
            this.end.scaleX = 0.5;
            this.end.scaleY = 0.5;
            this.end.anchorOffsetX = this.end.width / 2;
            this.end.anchorOffsetY = this.end.height / 2;
        }
        if (name == 'two') {
            this.end = Factory.createBitmapByName("endPlace2");
            this.addChild(this.end);
            this.end.scaleX = 0.3;
            this.end.scaleY = 0.3;
            this.end.anchorOffsetX = this.end.width / 2;
            this.end.anchorOffsetY = this.end.height / 2;
        }
        if (name == 'three') {
            this.end = Factory.createBitmapByName("endPlace3");
            this.addChild(this.end);
            this.end.scaleX = 0.3;
            this.end.scaleY = 0.3;
            this.end.anchorOffsetX = this.end.width / 2;
            this.end.anchorOffsetY = this.end.height / 2;
        }
    }
    var d = __define,c=End,p=c.prototype;
    return End;
}(egret.Sprite));
egret.registerClass(End,'End');
//# sourceMappingURL=End.js.map