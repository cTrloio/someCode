/**
 * Created by Administrator on 2016/4/4.
 */
var promptPic = (function (_super) {
    __extends(promptPic, _super);
    function promptPic(picName) {
        _super.call(this);
        this.te = Factory.createBitmapByName('promptPanel');
        this.addChild(this.te);
        this.pic = new egret.Bitmap();
        this.pic = Factory.createBitmapByJsonName('interpret', picName);
        this.addChild(this.pic);
        this.pic.x = this.te.x + 40;
        this.pic.y = this.te.y + 35;
    }
    var d = __define,c=promptPic,p=c.prototype;
    return promptPic;
}(egret.Sprite));
egret.registerClass(promptPic,'promptPic');
//# sourceMappingURL=promptPic.js.map