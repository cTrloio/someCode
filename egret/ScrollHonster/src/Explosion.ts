/**
 * Created by Administrator on 2015/10/30.
 */
class Explosion extends egret.Sprite{
    ex:egret.Bitmap;
    timer:egret.Timer;
    public constructor(){
        super();
        this.ex = Factory.createBitmapByName("explosion");
        this.addChild(this.ex);
        this.timer=new egret.Timer(2000);
    }
    public showExplosion()
    {
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    private timerHd(e:egret.TimerEvent){
        this.ex.visible=false;
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
    }

}