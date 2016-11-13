/**
 * 游戏背景面板
 * 包括 返回 暂停 等功能按钮
 */
class GamePanel extends egret.Sprite {

	bg: egret.Bitmap;
	num: number;
	public constructor(num: number) {
		super();
		this.num = num;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}

	private addStageHd() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
		//背景
		this.bg = GameData.createBitmapByName('bg' + this.num + "") || GameData.createBitmapByName('bg1');
		this.addChild(this.bg);
		//关卡
		var txt: egret.TextField = new egret.TextField();
		txt.fontFamily = "华文彩云" || "幼圆" || "微软雅黑";
		txt.text = "第" + GameData.sceneNumber + "关";
		txt.size = 40;
		txt.textColor = 0x000000;
		txt.x = 180;
		txt.y = 20;
		txt.textAlign = egret.HorizontalAlign.CENTER;
		this.addChild(txt);
	}

	private removeHd() {
		this.removeChildren();
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
	}

}