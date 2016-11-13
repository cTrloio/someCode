
class Main extends egret.DisplayObjectContainer {

    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    startScene:StartScene;
    private createGameScene(): void {
        if(this.gs != null){
            this.gs.removeEventListener(GameEvent.GAMEOVER,this.createGameScene,this);
            this.removeChild(this.gs);
            this.gs = null;
        }
        this.startScene = new StartScene();
        this.addChild(this.startScene);
        this.startScene.addEventListener(GameEvent.GAMESTART,this.startGame,this);
    }
    gs:GameScene;//游戏主界面
    private startGame(){
        this.startScene.removeEventListener(GameEvent.GAMESTART,this.startGame,this);
        this.removeChild(this.startScene);

        this.gs = new GameScene();
        this.addChild(this.gs);
        this.gs.addEventListener(GameEvent.GAMEOVER,this.createGameScene,this);
    }

}


