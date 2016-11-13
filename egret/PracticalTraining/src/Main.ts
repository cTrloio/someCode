
class Main extends egret.DisplayObjectContainer {
    private level0:LevelStart=null;
    private level1:LevelOne=null;
    private level2:LevelTwo=null;
    private level3:LevelThree=null;
    private level4:LevelEnd=null;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //���Լ���ʧ�ܵ���Ŀ
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
        }
    }
    private createGameScene():void {
        if(this.level4 != null){
            this.removeChild(this.level4);
        }
        this.level0=new LevelStart();
        this.addChild(this.level0);
        this.level0.addEventListener("LevelStartComplete",this.removeStartLevel,this);
    }
    private removeStartLevel(e:egret.Event)
    {
        this.removeChild(this.level0);
        this.level1=new LevelOne();
        this.addChild(this.level1);
        this.level1.addEventListener("levelOneComplete",this.removeLevelOne,this);//���û��ʧ������
    }
    private removeLevelOne(e:egret.Event){
        if(this.level1!=null){
            this.removeChild(this.level1);
        }
        this.level2=new LevelTwo();
        this.addChild(this.level2);
        this.level2.addEventListener("levelTwoComplete",this.removeLevelTwo,this);
        this.level2.addEventListener("levelThreeComplete",this.removeLevelThree,this);//ʧ�ܵĻ�������������
    }
    private removeLevelTwo(e:egret.Event){
        this.level2.removeEventListener("levelThreeComplete",this.removeLevelThree,this);
        if(this.level2 != null){
            this.removeChild(this.level2);
            this.level2=null;//����ͨ��ֻ��2�ؾ�ʧ���� �Ͳ���������Ҫɾ��level2
        }
        this.level3=new LevelThree();
        this.addChild(this.level3);
        this.level3.addEventListener("levelThreeComplete",this.removeLevelThree,this);
    }
    private removeLevelThree(e:egret.Event){
        if(this.level3!= null){
            this.removeChild(this.level3);
        }
        if(this.level2){
            this.removeChild(this.level2);
        }
        this.level4=new LevelEnd();
        this.addChild(this.level4);
        this.level4.addEventListener("levelEndComplete",this.createGameScene,this);
    }
}


