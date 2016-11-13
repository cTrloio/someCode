/**
 * Created by Administrator on 2015/12/7.
 */
var TextPORTAL = (function (_super) {
    __extends(TextPORTAL, _super);
    function TextPORTAL(name) {
        _super.call(this);
        this.vy = 0;
        if (name == 'p') {
            this.p = Factory.createBitmapByName('TextP');
            this.addChild(this.p);
        }
        if (name == 'o') {
            this.p = Factory.createBitmapByName('TextO');
            this.addChild(this.p);
        }
        if (name == 'r') {
            this.p = Factory.createBitmapByName('TextR');
            this.addChild(this.p);
        }
        if (name == 't') {
            this.p = Factory.createBitmapByName('TextT');
            this.addChild(this.p);
        }
        if (name == 'a') {
            this.p = Factory.createBitmapByName('TextA');
            this.addChild(this.p);
        }
        if (name == 'l') {
            this.p = Factory.createBitmapByName('TextL');
            this.addChild(this.p);
        }
    }
    var d = __define,c=TextPORTAL,p=c.prototype;
    return TextPORTAL;
}(egret.Sprite));
egret.registerClass(TextPORTAL,'TextPORTAL');
//# sourceMappingURL=TextPORTAL.js.map