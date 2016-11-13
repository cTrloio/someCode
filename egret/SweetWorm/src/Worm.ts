class Worm extends egret.Sprite{
	
	private texture:egret.Bitmap;
	public mapX:number = 0;
	public mapY:number = 0;
	public moveSpeed:number = 1200;
	
	public constructor() {
		super();
		this.texture = GameData.createBitmapByName("worm1_png");
		this.texture.anchorOffsetX = this.texture.width/2;
		this.texture.anchorOffsetY = this.texture.height/2;
		this.addChild(this.texture);

		this.once(egret.Event.ADDED_TO_STAGE,this.addStageHd,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

	moveTimer:egret.Timer;
	wormmoveTimer:egret.Timer;
	findNum:number = 0;
	
	private addStageHd(){
		this.moveTimer = new egret.Timer(500,0);
		this.moveTimer.addEventListener(egret.TimerEvent.TIMER,this.wormMoveEffect,this);
		this.moveTimer.start();
		this.wormmoveTimer = new egret.Timer(150,1);
		this.wormmoveTimer.addEventListener(egret.TimerEvent.TIMER,this.moveHd,this);
		this.wormmoveTimer.start();
	}

	public moveHd(){
		this.dispatchEventWith(GameEvent.MOVE_WORM);
	}

	public wormMoveHd(){
		this.wormmoveTimer.stop();
		this.wormmoveTimer.reset();
		this.wormmoveTimer.start();
	}

	public setTouchEnable(bool:boolean){
		
	}

	public wormMoveEffect(e:egret.TimerEvent){
		this.removeChild(this.texture);
		if(e.target.currentCount % 2 === 0){
			this.texture = GameData.createBitmapByName("worm1_png");
		}else{
			this.texture = GameData.createBitmapByName("worm2_png");
		}
		this.texture.anchorOffsetX = this.texture.width/2;
		this.texture.anchorOffsetY = this.texture.height/2;
		this.addChild(this.texture);
	}

	private removeHd(){
		this.moveTimer.stop();
		this.moveTimer.removeEventListener(egret.TimerEvent.TIMER,this.wormMoveEffect,this);
		this.wormmoveTimer.stop();
		this.wormmoveTimer.removeEventListener(egret.TimerEvent.TIMER,this.moveHd,this);
		
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

}