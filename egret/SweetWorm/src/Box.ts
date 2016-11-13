class Box extends egret.Sprite{

	private texture:egret.Bitmap;
	public mapX:number = 0;
	public mapY:number = 0;
	
	public constructor(type) {
		super();
		
		if(type === "fixedBox"){
			this.texture = GameData.createBitmapByName("blockb_png");
		}
		if(type === "charaBox"){
			this.texture = GameData.createBitmapByName("blocka_png");
		}
		this.texture.anchorOffsetX = this.texture.width/2;
		this.texture.anchorOffsetY = this.texture.height/2;
		this.addChild(this.texture);
		
	}

}