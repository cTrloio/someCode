/**
 * Created by Administrator on 2016/4/7.
 */
var MusicSetBtn = (function (_super) {
    __extends(MusicSetBtn, _super);
    function MusicSetBtn() {
        _super.call(this);
        this.clickNum = 2;
        this.te1 = Factory.createBitmapByName('musicOn');
        this.te2 = Factory.createBitmapByName('musicOff');
        this.addChild(this.te1);
        this.addChild(this.te2);
        this.te1.visible = true;
        this.te2.visible = false;
    }
    var d = __define,c=MusicSetBtn,p=c.prototype;
    p.changeHd = function () {
        this.te1.visible = true;
        this.te2.visible = false;
    };
    p.changeHd2 = function () {
        this.te1.visible = false;
        this.te2.visible = true;
    };
    return MusicSetBtn;
}(egret.Sprite));
egret.registerClass(MusicSetBtn,'MusicSetBtn');
//# sourceMappingURL=MusicSetBtn.js.map