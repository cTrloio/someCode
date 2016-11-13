class Character extends egret.Sprite {

	private texture: egret.Bitmap;	//纹理
	public canMove: boolean = true;	//可以移动(寻路)
	public mapX: number = 0;
	public mapY: number = 0;
	public moveSpeed: number = 300;
	public isSetBox: boolean = false;
	public isActive: boolean = true;

	public constructor() {
		super();
		this.texture = GameData.createBitmapByName("niao_png");
		this.texture.anchorOffsetX = this.texture.width / 2;
		this.texture.anchorOffsetY = this.texture.height / 2;
		this.addChild(this.texture);
		this.once(egret.Event.ADDED_TO_STAGE, this.stageHd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}

	private stageHd() {
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setBoxHd, this)
	}
	//放置或拿起箱子
	private setBoxHd() {
		this.dispatchEventWith(GameEvent.SET_BOX);
	}

	resetTimer: egret.Timer = undefined;
	isActiveTimer: egret.Timer = undefined;

	private removeHd() {
		if (this.resetTimer != undefined) {
			this.resetTimer.stop();
			this.resetTimer.removeEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
		}
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.setBoxHd, this)
		this.touchEnabled = false;
		this.canMove = true;
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}

	//碰到怪物被冰冻

	public changeNiaoD() {
		if (this.isActive) {
			this.touchEnabled = false;
			this.canMove = false;
			if (this.texture) {
				this.removeChild(this.texture);
			}
			this.texture = GameData.createBitmapByName("niaoD_png");
			this.texture.anchorOffsetX = this.texture.width / 2;
			this.texture.anchorOffsetY = this.texture.height / 2;
			this.addChild(this.texture);

			//冰冻时间控制器
			this.resetTimer = new egret.Timer(2000, 1);
			this.resetTimer.addEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
			this.resetTimer.start();

			this.isActiveTimer = new egret.Timer(3000, 1);
			this.isActiveTimer.addEventListener(egret.TimerEvent.TIMER, () => {
				this.isActive = true;
			}, this);

		}
	}
	//冰冻恢复
	private resetHd() {
		if (this.texture) {
			this.removeChild(this.texture);
		}
		this.texture = GameData.createBitmapByName("niao_png");
		this.texture.anchorOffsetX = this.texture.width / 2;
		this.texture.anchorOffsetY = this.texture.height / 2;
		this.addChild(this.texture);
		//this.isActive = true;
		this.isActiveTimer.start();
		this.canMove = true;
		this.touchEnabled = true;
		this.resetTimer.stop();
		this.resetTimer.removeEventListener(egret.TimerEvent.TIMER, this.resetHd, this);
	}

	//设置touch
	public setTouchEnable(bool: boolean) {
		this.touchEnabled = bool;
	}


}