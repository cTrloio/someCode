var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        _super.call(this);
        this.level = 1;
        this.currBoxNum = 0;
        this.level = GameData.LEVEL;
        this.currBoxNum = GameData.getLevelBoxNum();
        this.once(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    p.stageHd = function () {
        var _this = this;
        var pt = new egret.Bitmap();
        pt = GameData.createBitmapByName("pt_png");
        this.addChild(pt);
        var back = new egret.Bitmap();
        back = GameData.createBitmapByName("back_png");
        this.addChild(back);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.dispatchEventWith(GameEvent.GAME_LEVEL);
        }, this);
        var levelText = new egret.TextField();
        levelText.text = "第" + this.level + "关";
        levelText.textColor = 0x000000;
        levelText.size = 30;
        levelText.fontFamily = "微软雅黑" || "华文行楷";
        this.addChild(levelText);
        levelText.x = pt.width / 2;
        levelText.y = pt.height / 2;
        levelText.anchorOffsetX = levelText.width / 2;
        levelText.anchorOffsetY = levelText.height / 2;
        this.countText = new egret.TextField();
        this.countText.text = this.currBoxNum + "\\" + this.currBoxNum;
        this.countText.textColor = 0x000000;
        this.countText.size = 30;
        this.countText.fontFamily = "微软雅黑" || "华文行楷";
        this.addChild(this.countText);
        this.countText.x = pt.width - this.countText.width;
        this.countText.y = pt.height / 2;
        this.countText.anchorOffsetX = this.countText.width / 2;
        this.countText.anchorOffsetY = this.countText.height / 2;
    };
    p.upDate = function () {
        this.countText.text = this.currBoxNum + "\\" + GameData.getLevelBoxNum();
    };
    p.removeHd = function () {
        this.touchChildren = false;
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return GamePanel;
}(egret.Sprite));
egret.registerClass(GamePanel,'GamePanel');
//# sourceMappingURL=GamePanel.js.map