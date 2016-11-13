class GameFactory {
	//score
	static score:number = 0;

	//游戏界面宽高 顶部距离
	static sceneWidth: number = 480;
	static sceneHeight: number = 800;
	static sceneTop: number = 100;

	//砖块宽高
	static blockWidth: number = 75;
	static blockHeight: number = 40;

	//左右墙壁宽高
	static wallWidth: number = 12;
	static wallHeight: number = 800;

	//上下墙壁宽高
	static wallTopWidth: number = 480;
	static wallTopHeight: number = 12;

	//砖块颜色
	static BLOCK_BLUE: number = 0X495555;//change_width_color
	static BLOCK_ORANGE: number = 0XF5913A;//change_bounce_color
	static BLOCK_GREEN: number = 0X7DAA4A;

	//特殊砖块状态
	static BLOCK_NAME_GREEN:string = 'normal';
	static BLOCK_NAME_BLUE:string = 'blue';
	static BLOCK_NAME_ORG:string = 'org';

	//墙颜色
	static BLOCK_BLACK: number = 0X231F2D;

	//滑块颜色
	static SLIDER_1: number = 0X797EBD;
	static SLIDER_2: number = 0X495555;//change_width_color
	static SLIDER_3: number = 0XF5913A;//change_bounce_color
	static BACKGROUND: number = 0X91F397;
	static BACKGROUND2: number = 0XC1C1C1;
	
	//子弹颜色
	static BULLET_1: number = 0XF59E5E;

	//弹力
	static bounce: number = 15;

	//重力
	static gravity: number = 5;

	//砖块碰撞检测状态
	static BLOCK_TYPE_CLOSE:string = 'close';
	static BLOCK_TYPE_OPEN:string = 'open';
	static BLOCK_TYPE_OVER:string = 'over';

	//滑块宽高
	static slider_w:number = 100;
	static slider_h:number = 30;

	//一行共有砖块
	static block_Hnum:number = 6;
	
	//初始多少列
	static block_Vnum:number = 5;

	static createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
	
	static createBitmapByJsonName(jsonName: string, sheetName: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var spriteSheet: egret.SpriteSheet = RES.getRes(jsonName);
        result.texture = spriteSheet.getTexture(sheetName);
        return result;
    }

	static createShape(w: number, h: number, color: number): egret.Shape {
		var shape = new egret.Shape();
		shape.graphics.clear();
		shape.graphics.lineStyle(1, 0x000000);
		shape.graphics.beginFill(color);
		shape.graphics.drawRect(0, 0, w, h);
		shape.graphics.endFill();
		return shape;
	}
	
	static clearShape(): egret.Shape{
		var shape = new egret.Shape();
		shape.graphics.clear();
		return shape;
	}

	static randomColor():number{
		var num = Math.floor(Math.random()*10);
		switch(num){
			case 0:
				return GameFactory.BLOCK_BLUE;
			case 1:
				return GameFactory.BLOCK_ORANGE;
			default:
				return GameFactory.BLOCK_GREEN;
		}
	}
}