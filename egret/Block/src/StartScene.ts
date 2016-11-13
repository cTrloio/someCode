/**
 * 开始界面
 * 包括 开始 等等等等按钮
 */
class StartScene extends egret.Sprite{

	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE,this.addToStageHd,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}
	initYun:any
	private addToStageHd(){
		var bg = GameData.createBitmapByName("bg");
		this.addChild(bg);

		var txt:egret.TextField = new egret.TextField();
		txt.fontFamily = "华文彩云" || "幼圆" || "微软雅黑";
		txt.text = "智力方块";
		txt.size = 50;
		txt.textColor = 0x000000;
		txt.bold = true;
		txt.x = 140;
		txt.y = 670;
		txt.textAlign = egret.HorizontalAlign.CENTER;
		this.addChild(txt);

		this.touchEnabled = true;
		this.once(egret.TouchEvent.TOUCH_TAP,this.startHd,this);

		this.initYun = setTimeout(()=> {
			this.touchEnabled = false;
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.startHd,this);
			this.startHd();
		}, 2000);

	}
	sceneNum:number = GameData.sumArr.length;
	unlockNum:number = GameData.unlockNum;
	yunArr:Array<Yun> = [];
	private startHd(){
		clearTimeout(this.initYun);
		for(var i = 0;i<this.sceneNum;i++){
			if(i<this.unlockNum){
				var yun:Yun = new Yun(true,i+1);
			}else{
				var yun:Yun = new Yun(false,i+1);
			}
			this.addChild(yun);
			yun.x = Math.random()>0.5? -(Math.floor(Math.random()*5)*70)-170 : Math.floor(Math.random()*5)*70 + 480;
			yun.y = Math.floor(Math.random()*5)*60 + 170;
			yun.initX = yun.x;
			yun.initY = yun.y;
			this.yunArr.push(yun);
			yun.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
		}
		this.setXY();
	}

	private setXY(){
		var pointArr:Array<egret.Point> = [];
		var borderL:number = 50;
		var boderT:number = 170;
		for(var i = 0;i<4;i++){
			for(var j = 0;j<6;j++){
				var point:egret.Point = new egret.Point(borderL+i*100,boderT+j*70);
				pointArr.push(point);
			}
		}
		pointArr.sort(function(){
			return Math.random()-0.5;
		});
		for(var k = 0;k<this.yunArr.length;k++){
			var tw = egret.Tween.get(this.yunArr[k]);
			tw.to({x:pointArr[k].x,y:pointArr[k].y},1200,egret.Ease.sineInOut);
		}

	}

	private startGame(e:egret.TouchEvent){
		GameData.sceneNumber = e.target.currNum;
		this.touchChildren = false;
		e.target.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);

		for(var k = 0;k<this.yunArr.length;k++){
			var tw = egret.Tween.get(this.yunArr[k]);
			tw.to({x:this.yunArr[k].initX,y:this.yunArr[k].initY},1200,egret.Ease.sineIn);
		}

		setTimeout(()=> {
			this.dispatchEventWith(GameEvent.GAMESTART);
		}, 1200);
	}

	private removeHd(){
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
	}

}