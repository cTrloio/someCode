class Candy extends egret.Sprite{

	private texture:egret.Bitmap;
	public mapX:number = 0;
	public mapY:number = 0;
	private candyType = ["sweet1_png","sweet2_png","sweet3_png","sweet4_png","sweet5_png","sweet6_png"];

	public constructor() {
		super();

		var num:number = Math.floor(Math.random()*6);
		this.texture = GameData.createBitmapByName(this.candyType[num]);
		this.texture.anchorOffsetX = this.texture.width/2;
		this.texture.anchorOffsetY = this.texture.height/2;
		this.addChild(this.texture);
		
	}
}