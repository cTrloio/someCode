var Box = (function (_super) {
    __extends(Box, _super);
    function Box(type) {
        _super.call(this);
        this.mapX = 0;
        this.mapY = 0;
        if (type === "fixedBox") {
            this.texture = GameData.createBitmapByName("blockb_png");
        }
        if (type === "charaBox") {
            this.texture = GameData.createBitmapByName("blocka_png");
        }
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
    }
    var d = __define,c=Box,p=c.prototype;
    return Box;
}(egret.Sprite));
egret.registerClass(Box,'Box');
//# sourceMappingURL=Box.js.map