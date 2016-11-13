var Yun = (function (_super) {
    __extends(Yun, _super);
    function Yun(enable, num) {
        _super.call(this);
        this.isTouchEnable = false;
        this.currNum = 0;
        this.initX = 0;
        this.initY = 0;
        this.isTouchEnable = enable;
        this.currNum = num;
        this.alpha = 0.5;
        this.once(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
    }
    var d = __define,c=Yun,p=c.prototype;
    p.stageHd = function () {
        var yun = new egret.Bitmap();
        yun = GameData.createBitmapByName('yun');
        this.addChild(yun);
        var txt = new egret.TextField();
        txt.fontFamily = "华文彩云" || "幼圆" || "微软雅黑";
        txt.text = this.currNum + "";
        txt.bold = true;
        txt.textColor = 0x000000;
        txt.size = 40;
        txt.x = 40;
        txt.y = 10;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(txt);
        if (this.isTouchEnable) {
            this.touchEnabled = true;
            this.alpha = 1;
        }
        else {
            this.touchEnabled = false;
            this.alpha = 0.5;
        }
    };
    return Yun;
}(egret.Sprite));
egret.registerClass(Yun,'Yun');
