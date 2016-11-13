/**
 * Created by Administrator on 2015/12/2.
 */
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(name) {
        _super.call(this);
        if (name == 'level0') {
            this.bg = Factory.createBitmapByName("levelStart");
            this.addChild(this.bg);
        }
        if (name == 'level1') {
            this.bg = Factory.createBitmapByName("levelOne");
            this.addChild(this.bg);
        }
        if (name == 'level2') {
            this.bg = Factory.createBitmapByName("levelTwo");
            this.addChild(this.bg);
        }
        if (name == 'level3') {
            this.bg = Factory.createBitmapByName("levelThree");
            this.addChild(this.bg);
        }
        if (name == 'level4') {
            this.bg = Factory.createBitmapByName("levelEnd");
            this.addChild(this.bg);
        }
    }
    var d = __define,c=Background,p=c.prototype;
    return Background;
}(egret.Sprite));
egret.registerClass(Background,'Background');
//# sourceMappingURL=BackGround.js.map