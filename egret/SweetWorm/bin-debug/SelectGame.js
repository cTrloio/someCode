var SelectGame = (function (_super) {
    __extends(SelectGame, _super);
    function SelectGame() {
        var _this = this;
        _super.call(this);
        for (var i = 1; i < 10; i++) {
            this.levelt = new Levelt();
            this.addChild(this.levelt);
            // this.levelt.anchorOffsetX = this.levelt.width/2;
            // this.levelt.anchorOffsetY = this.levelt.height/2;
            if (i < 4) {
                this.levelt.x = 55 + (i - 1) * 140;
                this.levelt.y = 181;
            }
            else if (i < 7) {
                this.levelt.x = 55 + (i - 4) * 140;
                this.levelt.y = 2 * 181;
            }
            else {
                this.levelt.x = 55 + (i - 7) * 140;
                this.levelt.y = 3 * 181;
            }
            if (i <= GameData.LOCK_LEVEL) {
                this.level = GameData.createBitmapByName("levely_01_png");
                this.levelt.addChild(this.level);
                this.levelt.num = i;
                this.levelt.touchEnabled = true;
                this.levelt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                    GameData.LEVEL = e.target.num;
                    var gd = new egret.Bitmap();
                    gd = GameData.createBitmapByName("gd_png");
                    gd.anchorOffsetX = gd.width / 2;
                    gd.anchorOffsetY = gd.height / 2;
                    gd.x = _this.stage.stageWidth / 2;
                    gd.y = _this.stage.stageHeight / 2;
                    gd.scaleX = 0.1;
                    gd.scaleY = 0.1;
                    _this.addChild(gd);
                    var te = egret.Tween.get(gd);
                    te.to({ scaleX: 1.5, scaleY: 1.5 }, 500).call(function () {
                        var bg = new egret.Bitmap();
                        bg = GameData.createBitmapByName("bg_jpg");
                        _this.addChild(bg);
                    }).to({ alpha: 0 }, 100).call(function () {
                        _this.dispatchEventWith(GameEvent.GAME_START);
                        _this.removeChild(gd);
                    });
                }, this);
            }
            else {
                this.level = GameData.createBitmapByName("levely_02_png");
                this.levelt.addChild(this.level);
                this.levelt.touchEnabled = false;
            }
            var biaoti = new egret.Bitmap();
            biaoti = GameData.createBitmapByName("biaot_png");
            this.addChild(biaoti);
            var ltext = new egret.TextField;
            ltext.text = (i) + "";
            ltext.size = 20;
            ltext.textColor = 0x000000;
            this.levelt.addChild(ltext);
            ltext.x = this.levelt.width / 2 - 8;
            ltext.y = this.levelt.height / 2 - 15;
        }
    }
    var d = __define,c=SelectGame,p=c.prototype;
    return SelectGame;
}(egret.Sprite));
egret.registerClass(SelectGame,'SelectGame');
var Levelt = (function (_super) {
    __extends(Levelt, _super);
    function Levelt() {
        _super.apply(this, arguments);
        this.num = 0;
    }
    var d = __define,c=Levelt,p=c.prototype;
    return Levelt;
}(egret.Sprite));
egret.registerClass(Levelt,'Levelt');
//# sourceMappingURL=SelectGame.js.map