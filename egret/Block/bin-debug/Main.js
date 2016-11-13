var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        if (this.gs != null) {
            this.gs.removeEventListener(GameEvent.GAMEOVER, this.createGameScene, this);
            this.removeChild(this.gs);
            this.gs = null;
        }
        this.startScene = new StartScene();
        this.addChild(this.startScene);
        this.startScene.addEventListener(GameEvent.GAMESTART, this.startGame, this);
    };
    p.startGame = function () {
        this.startScene.removeEventListener(GameEvent.GAMESTART, this.startGame, this);
        this.removeChild(this.startScene);
        this.gs = new GameScene();
        this.addChild(this.gs);
        this.gs.addEventListener(GameEvent.GAMEOVER, this.createGameScene, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
