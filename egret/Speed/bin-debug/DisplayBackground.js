var DisplayBackground = (function (_super) {
    __extends(DisplayBackground, _super);
    function DisplayBackground() {
        _super.call(this);
        this.disBackground = Factory.createBitmapByName("displayBackground");
        this.addChild(this.disBackground);
    }
    var d = __define,c=DisplayBackground,p=c.prototype;
    return DisplayBackground;
}(egret.Sprite));
egret.registerClass(DisplayBackground,'DisplayBackground');
//# sourceMappingURL=DisplayBackground.js.map