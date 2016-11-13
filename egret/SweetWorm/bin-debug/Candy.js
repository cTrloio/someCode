var Candy = (function (_super) {
    __extends(Candy, _super);
    function Candy() {
        _super.call(this);
        this.mapX = 0;
        this.mapY = 0;
        this.candyType = ["sweet1_png", "sweet2_png", "sweet3_png", "sweet4_png", "sweet5_png", "sweet6_png"];
        var num = Math.floor(Math.random() * 6);
        this.texture = GameData.createBitmapByName(this.candyType[num]);
        this.texture.anchorOffsetX = this.texture.width / 2;
        this.texture.anchorOffsetY = this.texture.height / 2;
        this.addChild(this.texture);
    }
    var d = __define,c=Candy,p=c.prototype;
    return Candy;
}(egret.Sprite));
egret.registerClass(Candy,'Candy');
//# sourceMappingURL=Candy.js.map