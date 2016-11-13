/**
 * Created by Administrator on 2015/10/30.
 */
var LevelComplete = (function (_super) {
    __extends(LevelComplete, _super);
    function LevelComplete() {
        _super.call(this);
        var lc = Factory.createBitmapByName("levelComplete");
        this.addChild(lc);
    }
    var d = __define,c=LevelComplete,p=c.prototype;
    return LevelComplete;
}(egret.Sprite));
egret.registerClass(LevelComplete,'LevelComplete');
//# sourceMappingURL=LevelComplete.js.map