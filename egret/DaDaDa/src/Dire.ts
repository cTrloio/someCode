class Dire extends egret.Sprite{
	pic:egret.Bitmap;
	angle:number = 0;
	public constructor() {
		super();
		this.pic = GameData.CREATE_BITMAP('fx_png');
		this.pic.anchorOffsetX = this.pic.width/2;
		this.pic.anchorOffsetY = this.pic.height/2;
		this.addChild(this.pic);
	}

}