// TypeScript file
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        _super.call(this);
        var bg = GameData.CREATE_BITMAP("bg_png");
        this.addChild(bg);
    }
    var d = __define,c=Background,p=c.prototype;
    return Background;
}(egret.Sprite));
egret.registerClass(Background,'Background');
