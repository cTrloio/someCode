/**
 * 游戏主场景
 * 包括	容纳多边形的容器
 * 		 某一关卡对应得多边形
 * 		 下方选择多边形的按钮
 */
class GameScene extends egret.Sprite {

	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}
	private addStageHd() {
		this.addObjectHd();
	}
	//当前关卡数
	currSceneNum: number = GameData.sceneNumber;
	//过关条件
	conSum: number = 0;
	//被激活数量
	activeSum: number = 0;

	gp: GamePanel;
	private addObjectHd() {
		this.gp = new GamePanel(this.currSceneNum);
		this.addChild(this.gp);
		this.addBtn();
		this.addContainer();
		this.addBlock();
		this.addSelePanel();
	}
	private addBtn(){
		//重来 返回
		var replay = this.createBtn("repaly");
		var exit = this.createBtn("exit");
		replay.x = 410 + replay.width/2;
		exit.x = 10 + exit.width/2;
		replay.y = 10 + replay.height/2;
		exit.y = 10 + exit.height/2;
		this.addChild(replay);
		this.addChild(exit);
		replay.touchEnabled = true;
		exit.touchEnabled = true;
		replay.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.replayHd,this);
		exit.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.exitHd,this);
	}

	private replayHd(e:egret.TouchEvent){
		e.target.scaleX = 0.8;
		e.target.scaleY = 0.8;
		e.target.once(egret.TouchEvent.TOUCH_END,this.replayEndHd,this);
	}
	private exitHd(e:egret.TouchEvent){
		e.target.scaleX = 0.8;
		e.target.scaleY = 0.8;
		e.target.once(egret.TouchEvent.TOUCH_END,this.exitEndHd,this);
	}
	private replayEndHd(e:egret.TouchEvent){
		e.target.scaleX = 1;
		e.target.scaleY = 1;
		setTimeout(()=> {
			this.removeChildren();
			this.containerArr.length = 0;
			this.currStrArr.length = 0;
			this.blockArr.length = 0;
			this.currSceneNum = GameData.sceneNumber;
			this.conSum = 0;
			this.addObjectHd();
		}, 200);
		
	}
	private exitEndHd(e:egret.TouchEvent){
		e.target.scaleX = 1;
		e.target.scaleY = 1;
		setTimeout(()=> {
			this.dispatchEventWith(GameEvent.GAMEOVER);
		}, 200);
	}
	//容器
	containerArr: Array<Block> = [];
	private addContainer() {
		var hor: number = 0;
		var ver: number = 0;
		for (var i = 0; i < GameData.ConSizeX * GameData.ConSizeY; i++) {
			var con = new Block("pic888");
			con.x = hor * GameData.BLOCK_SIZE + GameData.SCENE_BORDER + con.width / 2;
			con.y = ver * GameData.BLOCK_SIZE + 100 + con.height / 2;
			hor++;
			if (hor >= GameData.ConSizeX) {
				hor = 0;
				ver++;
			}
			this.containerArr.push(con);
			this.addChild(con);
		}
	}

	//某关卡方块描述信息
	currStrArr: Array<string> = [];
	//某关卡方块对象数组
	blockArr: Array<CreateBlock> = [];
	private addBlock() {
		this.currStrArr = GameData.sumArr[this.currSceneNum - 1].split('|');
		for (var i = 0; i < this.currStrArr.length; i++) {
			var block = new CreateBlock(this.currStrArr[i], this);
			this.blockArr.push(block);
			this.addChild(block);
			block.x = i * GameData.BLOCK_SIZE * 2 / 3 + GameData.SCENE_BORDER + (GameData.sumArr.length+1 - this.currSceneNum) * 30;
			block.y = 550 + block.height / 2;
			block.sprx = block.x;
			block.spry = block.y;
			block.addEventListener(GameEvent.CHECKHIT, this.checkHitHd, this);
		}
	}
	private checkHitHd(e: egret.Event) {
		var sqr: CreateBlock = e.target;
		var rowBool: boolean = sqr.getRow();
		var lineBool: boolean = sqr.getLine();
		//吸附
		for (var i = 0; i < this.containerArr.length; i++) {
			if (this.getDistance(sqr, this.containerArr[i]) <= 49) {
				if (rowBool && lineBool) { //都是奇数
					sqr.x = this.containerArr[i].x + this.containerArr[i].width / 2;
					sqr.y = this.containerArr[i].y + this.containerArr[i].height / 2;
				} else if (!rowBool && lineBool) { //列奇行偶
					sqr.x = this.containerArr[i].x;
					sqr.y = this.containerArr[i].y + this.containerArr[i].height / 2;
				} else if (rowBool && !lineBool) { //行奇列偶
					sqr.x = this.containerArr[i].x + this.containerArr[i].width / 2;
					sqr.y = this.containerArr[i].y;
				} else {	//都是偶数
					sqr.x = this.containerArr[i].x;
					sqr.y = this.containerArr[i].y;
				}
				break;
			}
		}
		//越界归位
		if (sqr.y > 550 - sqr.height / 2 || sqr.y < 70 + sqr.height / 2 || sqr.x < sqr.width / 2 || sqr.x > GameData.stageW - sqr.width / 2) {
			sqr.x = sqr.sprx;
			sqr.y = sqr.spry;
			sqr.smallHd();
			return;
		}
		//被多边形覆盖的容器子集变为激活状态
		var sqrColor = Number(sqr.getColor());
		for (var i = 0; i < this.containerArr.length; i++) {
			if (sqr.hitTestPoint(this.containerArr[i].x, this.containerArr[i].y, true)) {
				this.containerArr[i].num += sqrColor;
			}
			if (this.containerArr[i].num > 0) {
				this.activeSum += 1;
			}
		}
		this.conSum = this.activeSum;
		this.activeSum = 0;
		// console.log("覆盖后被激活总数:"+this.conSum);
		setTimeout(()=>{this.gameOverHd();},300);
	}

	//获取两对象之间的距离
	private getDistance(obj1, obj2): number {
		var dis = Math.sqrt(
			Math.abs(obj1.x - obj2.x) * Math.abs(obj1.x - obj2.x) +
			Math.abs(obj1.y - obj2.y) * Math.abs(obj1.y - obj2.y));
		return dis;
	}

	//下方滑块
	private addSelePanel() {
		var selBtnNum: number = this.blockArr.length || 6; //本关方块数量
		var colorArr: Array<string> = []; //本关方块颜色
		var curCor: Array<string> = [];	//某个方块颜色字符串拆分开的数组
		var cor: number = 0;				//拆分开的数组里的某个数字
		var corStr: string = "";			//有颜色的数字
		/** 得到本关所有方块颜色*/
		for (var i = 0; i < this.currStrArr.length; i++) {
			curCor = this.currStrArr[i].split("");
			for (var j = 1; j < curCor.length; j++) { //0下标数字为列数
				cor = Number(curCor[j]);
				if (cor <= 0) {
					continue;
				}
				else {
					corStr = cor + "";
					colorArr.push(corStr);
					break;
				}
			}
		}
		//创建相应个数滑块
		var selBtn: egret.Sprite = new egret.Sprite();
		for (var i = 0; i < selBtnNum; i++) {
			var block: Block = new Block("pic" + colorArr[i] + "");
			selBtn.addChild(block);
			block.x = i * GameData.BLOCK_SIZE + block.width / 2;
			block.y = block.height / 2;
			block.vy = block.y;
			block.touchEnabled = true;
			block.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHd, this);
		}
		//滚动滑块
        var myScroller = new egret.ScrollView();
        myScroller.width = 420;
        myScroller.height = 80;
        myScroller.x = 30;
        myScroller.y = 727;
        myScroller.setContent(selBtn);
        this.addChild(myScroller);
		myScroller.bounces = true;
		myScroller.verticalScrollPolicy = "off";
		myScroller.horizontalScrollPolicy = "auto";
	}
	//点击滑块相应颜色方块显示在最上面
	private btnTouchHd(e: egret.TouchEvent) {

		var tw = egret.Tween.get(e.target, { loop: false });
		tw.to({ y: e.target.y - 5 }).wait(300).to({ y: e.target.vy });

		var curBtn: string = e.target.str;
		var block: number;
		for (var i = 0; i < this.blockArr.length; i++) {
			if (this.blockArr[i].color === curBtn) {
				block = i;
				break;
			}
		}
		this.setChildIndex(this.blockArr[block], -1);
	}

	private createBtn(type:string):egret.Bitmap{
		var btn:egret.Bitmap = new egret.Bitmap();
		btn = GameData.createBitmapByName(type);
		btn.anchorOffsetX = btn.width/2;
		btn.anchorOffsetY = btn.height/2;
		return btn;
	}

	//游戏结束
	private gameOverHd() {
		var sceneNum: number = GameData.sumArr.length - 1;
		if (this.conSum >= GameData.ConSizeX * GameData.ConSizeY) {
			for (var i = 0; i < this.blockArr.length; i++) {
				this.blockArr[i].isTouchEnabled();
			}
			this.setChildIndex(this.gp, -1);

			if (GameData.sceneNumber <= sceneNum) {
				GameData.sceneNumber++;
				if(GameData.unlockNum < GameData.sumArr.length){
					GameData.unlockNum++;
				}else{
					GameData.unlockNum = GameData.sumArr.length;
				}
			}
			else {
				GameData.sceneNumber = 1;
				//通关~ 目前效果回到开始
				this.dispatchEventWith(GameEvent.GAMEOVER);
			}
			setTimeout(() => {
				this.removeChildren();
				this.containerArr.length = 0;
				this.currStrArr.length = 0;
				this.blockArr.length = 0;
				this.currSceneNum = GameData.sceneNumber;
				this.conSum = 0;
				this.addObjectHd();
			}, 1500);
		}
	}
	
	//移除舞台事件
	private removeHd() {
		this.removeChildren();
		this.containerArr.length = 0;
		this.currStrArr.length = 0;
		this.blockArr.length = 0;
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}

}