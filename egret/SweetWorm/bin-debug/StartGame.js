var StartGame = (function (_super) {
    __extends(StartGame, _super);
    function StartGame() {
        var _this = this;
        _super.call(this);
        var bt = new egret.Bitmap();
        bt = GameData.createBitmapByName("bt_png");
        this.addChild(bt);
        bt.y = 150;
        var play = new egret.Bitmap();
        play = GameData.createBitmapByName("play_png");
        this.addChild(play);
        play.x = 172;
        play.y = 513;
        play.touchEnabled = true;
        play.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            var gd = new egret.Bitmap();
            gd = GameData.createBitmapByName("gd_png");
            gd.anchorOffsetX = gd.width / 2;
            gd.anchorOffsetY = gd.height / 2;
            gd.x = _this.stage.stageWidth / 2;
            gd.y = _this.stage.stageHeight / 2;
            gd.scaleX = 1.5;
            gd.scaleY = 1.5;
            _this.addChild(gd);
            play.touchEnabled = false;
            _this.removeChild(play);
            _this.removeChild(bt);
            var te = egret.Tween.get(gd);
            te.to({ scaleX: 0.1, scaleY: 0.1 }, 500)
                .to({ alpha: 0 }, 100).call(function () {
                _this.dispatchEventWith(GameEvent.GAME_LEVEL);
                _this.removeChild(gd);
            });
        }, this);
    }
    var d = __define,c=StartGame,p=c.prototype;
    return StartGame;
}(egret.Sprite));
egret.registerClass(StartGame,'StartGame');
//# sourceMappingURL=StartGame.js.map