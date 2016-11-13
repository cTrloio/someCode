/**
 * Created by Administrator on 2016/4/5.
 */
class SelectScene extends egret.Sprite{
    selectBg:Background;
    mouseBeginY:number=0;    //点击时鼠标y坐标
    ar:Array<Sel>=[];    //关卡数组
    backBtn:Background;
    mm:MusicManger;
    static goSceneNum:number=1;
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addTOStage,this);
    }
    sceneNum:number=OneScene.maxSceneNum;
    private addTOStage(){
        this.addObject();
        this.addEvent();
    }
    private addObject(){
        this.mm=new MusicManger();
        this.selectBg=new Background('SelectBg');
        this.addChild(this.selectBg);
        this.selectBg.y=-800;

        //返回按钮
        this.backBtn=new Background('backBtn');
        this.addChild(this.backBtn);
        this.backBtn.x=10;
        this.backBtn.y=10;
        this.backBtn.touchEnabled=true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backHd,this);

        for(var i=0;i<19;i++){
            var s:Sel=new Sel();
            this.selectBg.addChild(s);
            this.ar.push(s);
        }
        this.ar[0].x=260;this.ar[0].y=750+800;
        this.ar[1].x=370;this.ar[1].y=710+800;
        this.ar[2].x=330;this.ar[2].y=600+800;
        this.ar[3].x=260;this.ar[3].y=520+800;
        this.ar[4].x=280;this.ar[4].y=410+800;
        this.ar[5].x=310;this.ar[5].y=290+800;
        this.ar[6].x=210;this.ar[6].y=230+800;
        this.ar[7].x=160;this.ar[7].y=130+800;
        this.ar[8].x=110;this.ar[8].y=30+800;
        this.ar[9].x=60; this.ar[9].y=-70+800;
        this.ar[10].x=160;this.ar[10].y=-200+800;
        this.ar[11].x=260;this.ar[11].y=-270+800;
        this.ar[12].x=250;this.ar[12].y=-370+800;
        this.ar[13].x=160;this.ar[13].y=-430+800;
        this.ar[14].x=200;this.ar[14].y=-510+800;
        this.ar[15].x=170;this.ar[15].y=-600+800;
        this.ar[16].x=70; this.ar[16].y=-620+800;
        this.ar[17].x=100;this.ar[17].y=-725+800;
        this.ar[18].x=200;this.ar[18].y=-740+800;
    }
    private backHd(){
        this.mm.playclickM();
        this.backBtn.touchEnabled=false;
        this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.backHd,this);
        for(var i=0;i<this.ar.length;i++){
            this.ar[i].touchEnabled=false;
            this.ar[i].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHd,this);
        }
        this.dispatchEvent(new egret.Event('goStart'));
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startHd,this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addTOStage,this);
    }
    private addEvent(){
        this.touchEnabled=true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startHd,this);
        for(var i=0;i<this.sceneNum;i++){
            this.ar[i].changeHd();
            this.ar[i].touchEnabled=true;
            this.ar[i].selSceneNum=i+1;//标记自己是第几关
            this.ar[i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHd,this);
        }
    }
    private tapHd(e:egret.TouchEvent){
        SelectScene.goSceneNum=e.target.selSceneNum;//下次运行应加载的关卡
        console.log(SelectScene.goSceneNum);
        for(var i=0;i<this.ar.length;i++){
            this.ar[i].touchEnabled=false;
            this.ar[i].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tapHd,this);
        }
        this.dispatchEvent(new egret.Event('goSceneOne'));
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startHd,this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addTOStage,this);
    }

    private startHd(e:egret.TouchEvent){
        this.mouseBeginY=e.stageY;
        //setInterval(function(){
        //    this.mouseBeginY=e.stageY;
        //},this,150,[e]);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveHd,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.endHd,this);
    }
    private moveHd(e:egret.TouchEvent){
        if(this.selectBg.y>=0){
            this.selectBg.y=0;
        }
        if(this.selectBg.y<=-800){
            this.selectBg.y=-800;
        }
        if(this.mouseBeginY>e.stageY){
            this.selectBg.y+=(this.mouseBeginY-e.stageY)/10;
        }
        if(this.mouseBeginY<e.stageY){
            this.selectBg.y-=(e.stageY-this.mouseBeginY)/10;
        }
    }
    private endHd(){
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveHd,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END,this.endHd,this);
    }
}