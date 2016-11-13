class fireBtn extends egret.Sprite{

	public constructor() {
		super();
		this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;
		this.once(egret.Event.ADDED_TO_STAGE,this.addStageHd,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}
	rotaEffect:egret.Bitmap;
	firebutton:egret.Bitmap;
	rotaRate:number = 0;
	rotaTimer:egret.Timer;
	private addStageHd(){
		this.rotaTimer = new egret.Timer(500,0);
		this.rotaTimer.addEventListener(egret.TimerEvent.TIMER,this.rotaFateHd,this);

		this.rotaEffect = GameData.CREATE_BITMAP('xz_png');
		this.rotaEffect.anchorOffsetX = this.rotaEffect.width/2;
		this.rotaEffect.anchorOffsetY = this.rotaEffect.height/2;
		this.firebutton = GameData.CREATE_BITMAP('fire_png');
		this.firebutton.anchorOffsetX = this.rotaEffect.width/2;
		this.firebutton.anchorOffsetY = this.rotaEffect.height/2;
		this.addChild(this.rotaEffect);
		this.addChild(this.firebutton);
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBeginHd,this);
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEndHd,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.enterHd,this);
	}

	private touchBeginHd(){
		this.rotaTimer.reset();
		this.rotaTimer.stop();
		this.rotaTimer.start();
		this.dispatchEventWith(GameEvent.FIRE);
	}

	private touchEndHd(){
		this.rotaRate = 0;
		this.rotaTimer.reset();
		this.rotaTimer.stop();
		this.dispatchEventWith(GameEvent.NO_FIRE);
	}

	private enterHd(){
		this.rotaEffect.rotation += this.rotaRate;
	}

	private rotaFateHd(){
		if(this.rotaRate<60){
			this.rotaRate+=10;
		}
		else{
			this.rotaTimer.stop();
		}
	}

	private removeHd(){
		this.touchEnabled = false;
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBeginHd,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchEndHd,this);
		this.rotaTimer.removeEventListener(egret.TimerEvent.TIMER,this.rotaFateHd,this);
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

}