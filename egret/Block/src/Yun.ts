class Yun extends egret.Sprite {

	isTouchEnable: boolean = false;

	public constructor(enable: boolean, num: number) {
		super();
		this.isTouchEnable = enable;
		this.currNum = num;
		this.alpha = 0.5;
		this.once(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
	}
	currNum: number = 0;
	initX:number = 0;
	initY:number = 0;
	
	private stageHd() {

		var yun: egret.Bitmap = new egret.Bitmap();
		yun = GameData.createBitmapByName('yun');
		this.addChild(yun);

		var txt: egret.TextField = new egret.TextField();

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
		} else {
			this.touchEnabled = false;
			this.alpha = 0.5;
		}
	}

}