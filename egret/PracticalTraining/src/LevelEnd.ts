/**
 * Created by Administrator on 2015/12/2.
 */

class LevelEnd extends egret.Sprite{
    private gameover:GameOver;
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private bg:Background;
    private onAddToStage(event:egret.Event) {
        this.createGameScene();
    }
    private createGameScene(){
        this.addObject();
        this.addEventHd();
    }
    private textTimer:egret.Timer;
    private addEventHd(){
        this.textTimer=new egret.Timer(4500);
        this.textTimer.addEventListener(egret.TimerEvent.TIMER,this.gameOverTimer,this);
        this.textTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME,this.enterHd,this);
    }
    private addObject(){
        //±³¾°
        this.bg=new Background('level4');
        this.bg.x=0;
        this.bg.y=0;
        this.addChild(this.bg);
        //ÎÄ×Ö
        this.gameover=new GameOver();
        this.addChild(this.gameover);
        this.gameover.x=400;
        this.gameover.y=600;
    }
    private enterHd(e:egret.Event){
        this.gameover.vy =6;
        this.gameover.y -= this.gameover.vy;
        if(this.gameover.y < 150){
            this.gameover.y=150;
        }
    }
    private gameOverTimer(e:egret.TimerEvent){
        this.removeEventListener(egret.Event.ENTER_FRAME,this.enterHd,this);
        this.textTimer.removeEventListener(egret.TimerEvent.TIMER,this.gameOverTimer,this);
        this.dispatchEvent(new egret.Event("levelEndComplete"));
    }
}