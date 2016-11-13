class SelectGame extends egret.Sprite {

	private levelt: Levelt;
	private level: egret.Bitmap;
	public constructor() {
		super();
		for (var i: number = 1; i < 10; i++) {

			this.levelt = new Levelt();
			this.addChild(this.levelt);
			// this.levelt.anchorOffsetX = this.levelt.width/2;
			// this.levelt.anchorOffsetY = this.levelt.height/2;
			if (i < 4) {
				this.levelt.x = 55 + (i - 1) * 140;
				this.levelt.y = 181;
			} else if (i < 7) {
				this.levelt.x = 55 + (i - 4) * 140;
				this.levelt.y = 2 * 181;
			} else {
				this.levelt.x = 55 + (i - 7) * 140;
				this.levelt.y = 3 * 181;
			}

			if (i <= GameData.LOCK_LEVEL) {
				this.level = GameData.createBitmapByName("levely_01_png");
				this.levelt.addChild(this.level);


				this.levelt.num = i;
				this.levelt.touchEnabled = true;
				this.levelt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
					GameData.LEVEL = e.target.num;
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
					te.to({ scaleX: 1.5, scaleY: 1.5 }, 500).call(()=>{
						var bg: egret.Bitmap = new egret.Bitmap();
						bg = GameData.createBitmapByName("bg_jpg");
						this.addChild(bg);
					}).to({ alpha: 0 }, 100).call(() => {
						this.dispatchEventWith(GameEvent.GAME_START);
						this.removeChild(gd);
					});

				}, this);
			} else {
				this.level = GameData.createBitmapByName("levely_02_png");
				this.levelt.addChild(this.level);
				this.levelt.touchEnabled = false;
			}
			var biaoti:egret.Bitmap = new egret.Bitmap();
			biaoti = GameData.createBitmapByName("biaot_png");
			this.addChild(biaoti);

			var ltext: egret.TextField = new egret.TextField;
			ltext.text = (i) + "";
			ltext.size = 20;
			ltext.textColor = 0x000000;
			this.levelt.addChild(ltext);
			ltext.x = this.levelt.width / 2 - 8;
			ltext.y = this.levelt.height / 2 - 15;

		}
	}
}

class Levelt extends egret.Sprite {
	public num: number = 0;
}