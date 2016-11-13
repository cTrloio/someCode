/**
 * Created by Administrator on 2015/10/30.
 */
class Monster extends egret.Sprite{
    mmc:egret.Bitmap;
    public vx:number=0;
    public vy:number=0;
    public hitCount:number=0;
    private timer:egret.Timer;
    public constructor(){
        super();
        this.mmc= Factory.createBitmapByName("monsterMouthClosed");
        this.addChild(this.mmc);
        this.timer=new egret.Timer(2000);
    }
    public checkEnemyOpen()
    {
        this.mmc= Factory.createBitmapByName("monsterMouthOpen");
        this.addChild(this.mmc);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    public timerHd(e:egret.TimerEvent)//ÕÅ×ì2s
    {
        this.mmc= Factory.createBitmapByName("monsterMouthClosed");
        this.addChild(this.mmc);
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
    }
}