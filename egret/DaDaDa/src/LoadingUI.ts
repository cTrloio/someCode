class LoadingUI extends egret.Sprite {

    public constructor() {
        super();
        this.createView();
    }
    loadf:egret.Bitmap;
    loadb:egret.Bitmap;
    loadLogo:egret.Bitmap;
    time:egret.Timer;

    private createView():void {
        this.loadf = GameData.CREATE_BITMAP('loading_f');
        this.loadb = GameData.CREATE_BITMAP('loading_b');
        this.loadLogo = GameData.CREATE_BITMAP('loadlogo');
        this.addChild(this.loadb);
        this.addChild(this.loadf);
        this.addChild(this.loadLogo);
        
        this.loadLogo.anchorOffsetX = this.loadLogo.width/2;
        this.loadLogo.anchorOffsetY = this.loadLogo.height/2;
        this.loadLogo.x = egret.MainContext.instance.stage.stageWidth/2;
        this.loadLogo.y = 260;

        this.loadb.x = egret.MainContext.instance.stage.stageWidth/2 - this.loadb.width/2;
        this.loadb.y = 460;

        this.loadf.x = egret.MainContext.instance.stage.stageWidth/2 - this.loadf.width/2;
        this.loadf.y = 498;
        this.loadf.scaleX = 0;

        this.time = new egret.Timer(200);
        this.time.addEventListener(egret.TimerEvent.TIMER,this.rotaHd,this);
        this.time.start();
    }

    private rotaHd(){
        this.loadLogo.rotation += 30;
    }

    public setProgress(current:number, total:number):void {
        this.loadf.scaleX = current/total ;
        if(current == total){
            this.time.reset();
            this.time.stop();
            this.time.removeEventListener(egret.TimerEvent.TIMER,this.rotaHd,this);

            this.removeChild(this.loadb);
            this.removeChild(this.loadf);
            this.removeChild(this.loadLogo);
        }   
    }
}
