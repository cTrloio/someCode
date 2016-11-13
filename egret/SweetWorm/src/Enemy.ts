class Enemy extends egret.Sprite{

	private texture:egret.Bitmap;
	public mapX:number = 0;
	public mapY:number = 0;

	private enemyType = ["xj1_png","xj2_png","xj3_png"];
	private teArr = [1,-1];

	moveSpeed:number = 1000;

	public constructor() {
		super();
		var num:number = Math.floor(Math.random()*3);
		this.texture = GameData.createBitmapByName(this.enemyType[num]);
		this.moveSpeed = 1000 + num*500;
		this.texture.anchorOffsetX = this.texture.width/2;
		this.texture.anchorOffsetY = this.texture.height/2;
		this.addChild(this.texture);
	    var rand:number = this.teArr[Math.floor(Math.random()*2)];
		var te = egret.Tween.get(this.texture,{loop:true});
		te.to({rotation:360*rand},5000);
		this.once(egret.Event.ADDED_TO_STAGE,this.addStageHd,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);

	}

	enemyTimer:egret.Timer;

	private addStageHd(){
		this.enemyTimer = new egret.Timer(2000);
		this.enemyTimer.addEventListener(egret.TimerEvent.TIMER,this.moveHd,this);
		this.enemyTimer.start();
	}

	private moveHd(){
		this.dispatchEventWith(GameEvent.MOVE_ENEMY);
	}

	public enemyMoveHd(){
		this.enemyTimer.stop();
		this.enemyTimer.reset();
		this.enemyTimer.start();
	}

	private removeHd(){
		this.enemyTimer.stop();
		this.enemyTimer.removeEventListener(egret.TimerEvent.TIMER,this.moveHd,this);
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

	public setTouchEnable(bool:boolean){
		
	}

}