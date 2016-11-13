class GamePanel extends egret.Sprite{

    level:number = 1;
    currBoxNum:number = 0;

    public constructor(){
        super();
        this.level = GameData.LEVEL;
        this.currBoxNum = GameData.getLevelBoxNum();

        this.once(egret.Event.ADDED_TO_STAGE,this.stageHd,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
    }

    countText:egret.TextField;
    
    private stageHd(){

        var pt:egret.Bitmap = new egret.Bitmap();
        pt = GameData.createBitmapByName("pt_png");
        this.addChild(pt);

        var back:egret.Bitmap = new egret.Bitmap();
        back = GameData.createBitmapByName("back_png");
        this.addChild(back);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
            this.dispatchEventWith(GameEvent.GAME_LEVEL);
        },this);
        
        var levelText:egret.TextField = new egret.TextField();
        levelText.text = "第"+this.level+"关";
        levelText.textColor = 0x000000;
        levelText.size = 30;
        levelText.fontFamily = "微软雅黑" || "华文行楷";
        this.addChild(levelText);
        levelText.x = pt.width/2;
        levelText.y = pt.height/2;
        levelText.anchorOffsetX = levelText.width/2;
        levelText.anchorOffsetY = levelText.height/2;

        this.countText = new egret.TextField();
        this.countText.text = this.currBoxNum +"\\"+ this.currBoxNum;
        this.countText.textColor = 0x000000;
        this.countText.size = 30;
        this.countText.fontFamily = "微软雅黑" || "华文行楷";
        this.addChild(this.countText);
        this.countText.x = pt.width-this.countText.width;
        this.countText.y = pt.height/2;
        this.countText.anchorOffsetX = this.countText.width/2;
        this.countText.anchorOffsetY = this.countText.height/2;
    }

    public upDate(){
        this.countText.text = this.currBoxNum +"\\"+ GameData.getLevelBoxNum();
    }

    private removeHd(){
        this.touchChildren = false;
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
    }

}