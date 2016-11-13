/**
 * Created by Administrator on 2015/10/30.
 */
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        _super.call(this);
        this.direction = "left";
        this.star = Factory.createBitmapByName("star");
        this.addChild(this.star);
        this.anchorOffsetX = this.star.width / 2;
        this.anchorOffsetY = this.star.height / 2;
    }
    var d = __define,c=Star,p=c.prototype;
    return Star;
}(egret.Sprite));
egret.registerClass(Star,'Star');
//# sourceMappingURL=Star.js.map