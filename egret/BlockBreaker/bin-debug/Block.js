var Block = (function (_super) {
    __extends(Block, _super);
    function Block(color, w, h) {
        if (color === void 0) { color = GameFactory.BLOCK_GREEN; }
        _super.call(this);
        this.collisioned = GameFactory.BLOCK_TYPE_CLOSE; //open开启碰撞 ,close关闭碰撞,over碰撞完毕
        this.name = GameFactory.BLOCK_NAME_GREEN; //特殊砖块 normal=>GREEN,  blue=>BLUE (width), org=>ORG(bounce)
        if (w && h) {
            this._shape = GameFactory.createShape(w, h, color);
        }
        else {
            this._shape = GameFactory.createShape(GameFactory.blockWidth, GameFactory.blockHeight, color);
        }
        this.addChild(this._shape);
    }
    var d = __define,c=Block,p=c.prototype;
    return Block;
}(egret.Sprite));
egret.registerClass(Block,'Block');
//# sourceMappingURL=Block.js.map