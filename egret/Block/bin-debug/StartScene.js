/**
 * 开始界面
 * 包括 开始 等等等等按钮
 */
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        _super.call(this);
        this.sceneNum = GameData.sumArr.length;
        this.unlockNum = GameData.unlockNum;
        this.yunArr = [];
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=StartScene,p=c.prototype;
    p.addToStageHd = function () {
        var _this = this;
        var bg = GameData.createBitmapByName("bg");
        this.addChild(bg);
        var txt = new egret.TextField();
        txt.fontFamily = "华文彩云" || "幼圆" || "微软雅黑";
        txt.text = "智力方块";
        txt.size = 50;
        txt.textColor = 0x000000;
        txt.bold = true;
        txt.x = 140;
        txt.y = 670;
        txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(txt);
        this.touchEnabled = true;
        this.once(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.initYun = setTimeout(function () {
            _this.touchEnabled = false;
            _this.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.startHd, _this);
            _this.startHd();
        }, 2000);
    };
    p.startHd = function () {
        clearTimeout(this.initYun);
        for (var i = 0; i < this.sceneNum; i++) {
            if (i < this.unlockNum) {
                var yun = new Yun(true, i + 1);
            }
            else {
                var yun = new Yun(false, i + 1);
            }
            this.addChild(yun);
            yun.x = Math.random() > 0.5 ? -(Math.floor(Math.random() * 5) * 70) - 170 : Math.floor(Math.random() * 5) * 70 + 480;
            yun.y = Math.floor(Math.random() * 5) * 60 + 170;
            yun.initX = yun.x;
            yun.initY = yun.y;
            this.yunArr.push(yun);
            yun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        }
        this.setXY();
    };
    p.setXY = function () {
        var pointArr = [];
        var borderL = 50;
        var boderT = 170;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 6; j++) {
                var point = new egret.Point(borderL + i * 100, boderT + j * 70);
                pointArr.push(point);
            }
        }
        pointArr.sort(function () {
            return Math.random() - 0.5;
        });
        for (var k = 0; k < this.yunArr.length; k++) {
            var tw = egret.Tween.get(this.yunArr[k]);
            tw.to({ x: pointArr[k].x, y: pointArr[k].y }, 1200, egret.Ease.sineInOut);
        }
    };
    p.startGame = function (e) {
        var _this = this;
        GameData.sceneNumber = e.target.currNum;
        this.touchChildren = false;
        e.target.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        for (var k = 0; k < this.yunArr.length; k++) {
            var tw = egret.Tween.get(this.yunArr[k]);
            tw.to({ x: this.yunArr[k].initX, y: this.yunArr[k].initY }, 1200, egret.Ease.sineIn);
        }
        setTimeout(function () {
            _this.dispatchEventWith(GameEvent.GAMESTART);
        }, 1200);
    };
    p.removeHd = function () {
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return StartScene;
}(egret.Sprite));
egret.registerClass(StartScene,'StartScene');
