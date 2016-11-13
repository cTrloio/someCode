/**
 * Created by Administrator on 2015/12/2.
 */
class Character extends egret.Sprite{
    character:egret.Bitmap;
    character2:egret.Bitmap;
    public vx:number=0;
    public vy:number=0;
    public life:number=3;
    private timer:egret.Timer;
    public constructor(){
        super();
        this.character = Factory.createBitmapByName("character");
        this.addChild(this.character);
        this.character.anchorOffsetX=this.character.width/2;
        this.character.anchorOffsetY=this.character.height/2;
        this.character.scaleX=0.5;
        this.character.scaleY=0.5;
        this.timer=new egret.Timer(2000);
    }
    public charaDown()
    {
        this.character.visible=false;
        this.character2= Factory.createBitmapByName("character2");
        this.addChild(this.character2);
        this.character2.anchorOffsetX=this.character2.width/2;
        this.character2.anchorOffsetY=this.character2.height/2;
        this.character2.scaleX=0.5;
        this.character2.scaleY=0.5;
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    public timerHd(e:egret.TimerEvent)//×øÏÂ2s
    {
        this.character2.visible=false;
        this.character.visible =true;
        this.timer.reset();
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
    }
}