// TypeScript file
class Chara extends egret.Sprite {

    public _bitMap: egret.Bitmap;
    vx: number = 0;
    vy: number = 0;
    public accelerationX: number = 0;
    public accelerationY: number = 0;
    public speedLim: number = 7;
    public friction: number = 0.98; 
    public angle:number = 0;
    public bulletNum:number = 1;
    public resetTimer:egret.Timer;

    public constructor() {
        super();
        this._bitMap = GameData.CREATE_BITMAP('chara_png');
        this.anchorOffsetX = this._bitMap.width / 2;
        this.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);

        this.resetTimer = new egret.Timer(10000,1);
        this.resetTimer.addEventListener(egret.TimerEvent.TIMER,this.resetHd,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
    }

    private resetHd(){
        this.bulletNum = 1;
        GameData.fireRate = 350;
        this.dispatchEventWith(GameEvent.CHARARESET);
    }
    
    private removeHd(){
        this.resetTimer.stop();
        this.removeChild(this._bitMap);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeHd,this);
    }
}