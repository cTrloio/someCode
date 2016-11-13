class BoosLife extends egret.Sprite {

	public health: egret.Bitmap;
	
	public sumHeadth:number;

	public constructor(type: string) {
		super();
		if (type == GameData.boosType1) {
			this.health = GameData.CREATE_BITMAP('life1');
		}
		else if (type == GameData.boosType2) {
			this.health = GameData.CREATE_BITMAP('life2');
		}
		else {
			this.health = GameData.CREATE_BITMAP('life3');
		}
		this.graphics.clear();
		this.graphics.beginFill(0x000000);
		this.graphics.drawRoundRect(0,0,this.health.width-4,this.health.height,50);
		this.graphics.endFill();

		this.addChild(this.health);
	}

}