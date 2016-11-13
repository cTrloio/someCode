/**
 * Created by Administrator on 2016/4/5.
 */
class StartScene extends egret.Sprite{
    startBg:Background;
    startBtn:Btn;
    mm:MusicManger;
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addTOStage,this);
    }
    private addTOStage(){
        this.addObject();
        this.addEvent();
    }
    private addObject(){
        this.mm=new MusicManger();
        this.mm.playBgm();
        this.startBg=new Background('StartBg');
        this.addChild(this.startBg);
        this.startBtn=new Btn();
        this.addChild(this.startBtn);
        this.startBtn.x=240;
        this.startBtn.y=745;
    }
    private addEvent(){
        this.startBtn.touchEnabled=true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startHd,this);
    }
    private startHd(e:egret.TouchEvent){
        this.mm.playclickM();
        this.mm.stopBgm();
        this.startBtn.touchEnabled=false;
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.startHd,this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addTOStage,this);
        this.dispatchEvent(new egret.Event('goSelectScene'));
    }
}