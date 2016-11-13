var Block = (function (_super) {
    __extends(Block, _super);
    function Block(name) {
        _super.call(this);
        this.vy = 0; //记录自己的位置
        this.num = 0;
        this.str = name;
        this.bitmap = GameData.createBitmapByName(this.str);
        this.addChild(this.bitmap);
        this.bitmap.anchorOffsetX = this.bitmap.width / 2; //设置锚点
        this.bitmap.anchorOffsetY = this.bitmap.height / 2;
    }
    var d = __define,c=Block,p=c.prototype;
    return Block;
}(egret.Sprite));
egret.registerClass(Block,'Block');
