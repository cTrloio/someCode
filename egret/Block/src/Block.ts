
class Block extends egret.Sprite{

	bitmap:egret.Bitmap;
	// grba=0-----0 red--------1 yellow-----2 blue-------3
	// gray-------4 green------5 aqua-------6 brown------7
	public str:string;//标记自己是什么颜色
	public vy:number = 0;//记录自己的位置
	public num:number = 0;
	
	public constructor(name:string) {
		super();
		this.str = name;
		this.bitmap = GameData.createBitmapByName(this.str);
		this.addChild(this.bitmap);
		this.bitmap.anchorOffsetX = this.bitmap.width/2;//设置锚点
		this.bitmap.anchorOffsetY = this.bitmap.height/2;
	}
}