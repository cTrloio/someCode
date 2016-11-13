class Bullet extends egret.Sprite {

    public speedX: number = 0;
    public speedY: number = 0;
	public gravity: number = GameFactory.gravity;
	public canLunch: boolean = false;
	private _bullet: egret.Shape;
	
	public constructor() {
		super();
		this._bullet = this.createBullet();
		this.addChild(this._bullet);
	}
	
	private createBullet():egret.Shape{
		var sha:egret.Shape = new egret.Shape();
		sha.graphics.lineStyle(1,0x000000);
		sha.graphics.beginFill(GameFactory.BULLET_1);
		// sha.graphics.drawCircle(0,0,12);
		sha.graphics.drawRect(0,0,15,15);
		sha.graphics.endFill();
		return sha;
	}

}