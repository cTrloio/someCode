class BugWings extends egret.Sprite{
    public vx:number=0;
    public vy:number=0;
    bugWingDown:egret.Bitmap;
    bugWingUp:egret.Bitmap;
    timer:egret.Timer;
    public constructor(){
        super();
        this.bugWingDown = Factory.createBitmapByName("bugWingsDown");
        this.addChild(this.bugWingDown);

        this.bugWingUp  = Factory.createBitmapByName("bugWingsUp");
        this.addChild(this.bugWingUp);

        this.timer=new egret.Timer(30);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    public timerHd(e:egret.TimerEvent)
    {
        if(this.timer.currentCount%2 == 0)
        {
            this.bugWingDown.visible=false;
            this.bugWingUp.visible=true;
        }
        else{
            this.bugWingUp.visible=false;
            this.bugWingDown.visible=true;
        }
    }
}