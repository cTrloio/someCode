var Dire = (function (_super) {
    __extends(Dire, _super);
    function Dire() {
        _super.call(this);
        this.angle = 0;
        this.pic = GameData.CREATE_BITMAP('fx_png');
        this.pic.anchorOffsetX = this.pic.width / 2;
        this.pic.anchorOffsetY = this.pic.height / 2;
        this.addChild(this.pic);
    }
    var d = __define,c=Dire,p=c.prototype;
    return Dire;
}(egret.Sprite));
egret.registerClass(Dire,'Dire');
