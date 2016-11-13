// TypeScript file
class GameOver extends egret.Sprite {
    private ga: egret.Bitmap;
    public constructor(name: string) {
        super();
        this.ga = new egret.Bitmap();
        if (name == "die") {
            this.ga = GameData.createBitmapByName("die_png");
        }
        if (name == "pass") {
            this.ga = GameData.createBitmapByName("pass_png");
        }
        var gd: egret.Bitmap = new egret.Bitmap();
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
            .to({ alpha: 0 }, 100).call(() => {
                this.createRoad();
                this.removeChild(gd);
            });
    }
    private createRoad() {
        
        this.addChild(this.ga);
        this.ga.y = 177;
        this.ga.touchEnabled = true;
        this.ga.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
            var gd: egret.Bitmap = new egret.Bitmap();
            gd = GameData.createBitmapByName("gd_png");
            gd.anchorOffsetX = gd.width / 2;
            gd.anchorOffsetY = gd.height / 2;
            gd.x = this.stage.stageWidth / 2;
            gd.y = this.stage.stageHeight / 2;
            gd.scaleX = 0.1;
            gd.scaleY = 0.1;
            this.addChild(gd);

            var te = egret.Tween.get(gd);
            te.to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ alpha: 0 }, 100).call(() => {
                    this.dispatchEventWith(GameEvent.GAME_START);
                    this.removeChild(gd);
                });
        }, this);


        var home: egret.Bitmap = new egret.Bitmap();
        home = GameData.createBitmapByName("home_png");
        this.addChild(home);
        home.x = 364;
        home.y = 430;
        home.touchEnabled = true;
        home.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
            this.dispatchEventWith(GameEvent.GAME_LEVEL);
        }, this);
    }

}