class Block extends egret.Sprite {
	
	private _shape: egret.Shape;
	public collisioned:string = GameFactory.BLOCK_TYPE_CLOSE; //open开启碰撞 ,close关闭碰撞,over碰撞完毕
	public name:string = GameFactory.BLOCK_NAME_GREEN; //特殊砖块 normal=>GREEN,  blue=>BLUE (width), org=>ORG(bounce)

	public constructor(color: number = GameFactory.BLOCK_GREEN, w?: number, h?: number) {
		super();
		
		if (w && h) {
			this._shape = GameFactory.createShape(w, h, color);
		}
		else {
			this._shape = GameFactory.createShape(GameFactory.blockWidth, GameFactory.blockHeight, color);
		}
		this.addChild(this._shape);
	}

}