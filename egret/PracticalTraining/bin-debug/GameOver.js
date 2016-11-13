/**
 * Created by Administrator on 2015/12/8.
 */
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        _super.call(this);
        this.vy = 0;
        this.gameover = Factory.createBitmapByName('gameOver');
        this.addChild(this.gameover);
        this.gameover.anchorOffsetX = this.gameover.width / 2;
    }
    var d = __define,c=GameOver,p=c.prototype;
    return GameOver;
}(egret.Sprite));
egret.registerClass(GameOver,'GameOver');
//# sourceMappingURL=GameOver.js.map