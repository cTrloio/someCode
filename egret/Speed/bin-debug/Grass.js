var Grass = (function (_super) {
    __extends(Grass, _super);
    function Grass() {
        _super.call(this);
        this.grass = Factory.createBitmapByName("grass");
        this.addChild(this.grass);
    }
    var d = __define,c=Grass,p=c.prototype;
    return Grass;
}(egret.Sprite));
egret.registerClass(Grass,'Grass');
//# sourceMappingURL=Grass.js.map