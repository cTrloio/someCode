var Spider = (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        _super.call(this);
        this.spider = Factory.createBitmapByName("spider");
        this.addChild(this.spider);
    }
    var d = __define,c=Spider,p=c.prototype;
    return Spider;
}(egret.Sprite));
egret.registerClass(Spider,'Spider');
//# sourceMappingURL=Spider.js.map