// TypeScript file
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver(name) {
        var _this = this;
        _super.call(this);
        this.ga = new egret.Bitmap();
        if (name == "die") {
            this.ga = GameData.createBitmapByName("die_png");
        }
        if (name == "pass") {
            this.ga = GameData.createBitmapByName("pass_png");
        }
        var gd = new egret.Bitmap();
        gd = GameData.createBitmapByName("gd_png");
        gd.anchorOffsetX = gd.width / 2;
        gd.anchorOffsetY = gd.height / 2;
        gd.x = 480 / 2;
        gd.y = 800 / 2;
        gd.scaleX = 0.1;
        gd.scaleY = 0.1;
        this.addChild(gd);
        var te = egret.Tween.get(gd);
        te.to({ scaleX: 1.5, scaleY: 1.5 }, 500)
            .to({ alpha: 0 }, 100).call(function () {
            _this.createRoad();
            _this.removeChild(gd);
        });
    }
    var d = __define,c=GameOver,p=c.prototype;
    p.createRoad = function () {
        var _this = this;
        this.addChild(this.ga);
        this.ga.y = 177;
        this.ga.touchEnabled = true;
        this.ga.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
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
            te.to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ alpha: 0 }, 100).call(function () {
                _this.dispatchEventWith(GameEvent.GAME_START);
                _this.removeChild(gd);
            });
        }, this);
        var home = new egret.Bitmap();
        home = GameData.createBitmapByName("home_png");
        this.addChild(home);
        home.x = 364;
        home.y = 430;
        home.touchEnabled = true;
        home.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.dispatchEventWith(GameEvent.GAME_LEVEL);
        }, this);
    };
    return GameOver;
}(egret.Sprite));
egret.registerClass(GameOver,'GameOver');
//# sourceMappingURL=GameOver.js.map