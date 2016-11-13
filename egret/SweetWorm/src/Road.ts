/**
 * 空地类
 * 供人物点击空地时寻路使用
 * 
 */
class Road extends egret.Sprite{

	public mapX:number = 0;
	public mapY:number = 0;
	private color:number = 0x3DED41; //测试颜色
	private size :number = 0;	//尺寸

	public constructor() {
		super();
		this.size = GameData.SIZE;

		this.graphics.clear();
		this.graphics.beginFill(this.color,0);
		this.graphics.drawRect(0,0,this.size,this.size);
		this.graphics.endFill();

		this.anchorOffsetX = this.width/2;
		this.anchorOffsetY = this.height/2;

		this.once(egret.Event.ADDED_TO_STAGE,this.addStageHd,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);

	}

	private addStageHd(){
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHd,this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.clickHd,this);
	}

	private clickHd(){
		this.touchEnabled = false;
		this.dispatchEventWith(GameEvent.MOVE_CHARA);
		this.roadEffect();
	}

	private roadEffect(){
		var tw = egret.Tween.get( this, { onChange:()=>{
			this.graphics.clear();
			this.graphics.beginFill(this.color);
			this.graphics.drawRect(0,0,this.size,this.size);
			this.graphics.endFill();
		}, onChangeObj:this } );
		tw.to({alpha:1},100).to({alpha:0},100).call(()=>{
			this.touchEnabled = true;
		});
	}

	private removeHd(){
		this.graphics.clear();
		this.touchEnabled = false;
		this.removeChildren();
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHd,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.clickHd,this);
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

}