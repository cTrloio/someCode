/**
 * 游戏背景面板
 * 包括 返回 暂停 等功能按钮
 */
var GamePanel = (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel(num) {
        _super.call(this);
        this.num = num;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=GamePanel,p=c.prototype;
    p.addStageHd = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        //背景
        this.bg = GameData.createBitmapByName('bg' + this.num + "") || GameData.createBitmapByName('bg1');
        this.addChild(this.bg);
        //关卡
        var txt = new egret.TextField();
        txt.fontFamily = "华文彩云" || "幼圆" || "微软雅黑";
        txt.text = "第" + GameData.sceneNumber + "关";
        txt.size = 40;
        txt.textColor = 0x000000;
        txt.x = 180;
        txt.y = 20;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(txt);
    };
    p.removeHd = function () {
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return GamePanel;
}(egret.Sprite));
egret.registerClass(GamePanel,'GamePanel');
