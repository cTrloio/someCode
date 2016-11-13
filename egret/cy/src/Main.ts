class Main extends egret.DisplayObjectContainer {
    private loadingView: LoadingUI;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.startCreateScene();
        }
    }
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    }
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    oneScene:OneScene=null;
    sceneStart:StartScene=null;
    sceneSelect:SelectScene=null;

    protected startCreateScene(): void {
        if(this.oneScene!=null){
            this.oneScene.removeEventListener('goSelectScene',this.goSelectSceneHd,this);
            this.oneScene.removeEventListener('goStart',this.startCreateScene,this);
            this.removeChild(this.oneScene);
            this.oneScene=null;
        }
        if(this.sceneSelect!=null){
            this.sceneSelect.removeEventListener('goSceneOne',this.sceneOne,this);
            this.sceneSelect.removeEventListener('goStart',this.startCreateScene,this);
            this.removeChild(this.sceneSelect);
            this.sceneSelect=null;
        }
        this.sceneStart=new StartScene();
        this.addChild(this.sceneStart);
        this.sceneStart.addEventListener('goSelectScene',this.goSelectSceneHd,this);
    }
    private goSelectSceneHd(){
        if(this.sceneStart!=null){
            this.sceneStart.removeEventListener('goSelectScene',this.goSelectSceneHd,this);
            this.removeChild(this.sceneStart);
            this.sceneStart=null;
        }
        if(this.oneScene!=null){
            this.oneScene.removeEventListener('goSelectScene',this.goSelectSceneHd,this);
            this.oneScene.removeEventListener('goStart',this.startCreateScene,this);
            this.removeChild(this.oneScene);
            this.oneScene=null;
        }
        this.sceneSelect=new SelectScene();
        this.addChild(this.sceneSelect);
        this.sceneSelect.addEventListener('goSceneOne',this.sceneOne,this);
        this.sceneSelect.addEventListener('goStart',this.startCreateScene,this);
    }
    private sceneOne(){
        if(this.sceneSelect!=null){
            this.sceneSelect.removeEventListener('goSceneOne',this.sceneOne,this);
            this.sceneSelect.removeEventListener('goStart',this.startCreateScene,this);
            this.removeChild(this.sceneSelect);
            this.sceneSelect=null;
        }
        this.oneScene=new OneScene();
        this.addChild(this.oneScene);
        this.oneScene.addEventListener('goSelectScene',this.goSelectSceneHd,this);
        this.oneScene.addEventListener('goStart',this.startCreateScene,this);
    }

}
