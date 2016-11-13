class StartGame extends egret.Sprite {
    public constructor() {
        super();

        var bt: egret.Bitmap = new egret.Bitmap();
        bt = GameData.createBitmapByName("bt_png");
        this.addChild(bt);
        bt.y = 150;

        var play: egret.Bitmap = new egret.Bitmap();
        play = GameData.createBitmapByName("play_png");
        this.addChild(play);
        play.x = 172;
        play.y = 513;
        play.touchEnabled = true;
        play.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
            var gd: egret.Bitmap = new egret.Bitmap();
            gd = GameData.createBitmapByName("gd_png");
            gd.anchorOffsetX = gd.width / 2;
            gd.anchorOffsetY = gd.height / 2;
            gd.x = this.stage.stageWidth / 2;
            gd.y = this.stage.stageHeight / 2;
            gd.scaleX = 1.5;
            gd.scaleY = 1.5;
            this.addChild(gd);
            play.touchEnabled = false;
            this.removeChild(play);
            this.removeChild(bt);

            var te = egret.Tween.get(gd);
            te.to({ scaleX: 0.1, scaleY: 0.1 }, 500)
              .to({ alpha: 0 }, 100).call(() => {
                this.dispatchEventWith(GameEvent.GAME_LEVEL);
                this.removeChild(gd);
            });


        }, this)

    }

}