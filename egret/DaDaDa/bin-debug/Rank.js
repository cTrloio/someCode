// TypeScript file
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.removeTostageHd, this);
    }
    var d = __define,c=Rank,p=c.prototype;
    p.addToStageHd = function () {
        var panel = new egret.Sprite();
        panel.graphics.beginFill(0xff6600, 0);
        panel.graphics.drawRect(0, 0, 400, 230);
        panel.graphics.endFill();
        this.addChild(panel);
        var txt_score = this.createData("最高分:" + GameData.MAXSCORE, 30);
        var txt_name = this.createData("大侠:" + GameData.MAXNAME, 30);
        panel.addChild(txt_name);
        panel.addChild(txt_score);
        txt_name.x = 100;
        txt_score.x = 100;
        txt_name.y = 50;
        txt_score.y = 100;
        var btnText = this.createData("再玩一次", 30);
        btnText.backgroundColor = 0x4ecedc;
        panel.addChild(btnText);
        btnText.x = 100;
        btnText.y = 150;
        btnText.touchEnabled = true;
        btnText.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnHd, this);
    };
    p.btnHd = function () {
        this.dispatchEventWith(GameEvent.STARTGAME);
    };
    p.createData = function (str, size) {
        var txt = new egret.TextField();
        txt.text = str;
        txt.backgroundColor = 0xc1c1c1;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        txt.verticalAlign = egret.VerticalAlign.MIDDLE;
        txt.size = size;
        return txt;
    };
    p.removeTostageHd = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.removeTostageHd, this);
    };
    return Rank;
}(egret.Sprite));
egret.registerClass(Rank,'Rank');
