var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.oneScene = null;
        this.sceneStart = null;
        this.sceneSelect = null;
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
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.startCreateScene();
        }
    };
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.startCreateScene = function () {
        if (this.oneScene != null) {
            this.oneScene.removeEventListener('goSelectScene', this.goSelectSceneHd, this);
            this.oneScene.removeEventListener('goStart', this.startCreateScene, this);
            this.removeChild(this.oneScene);
            this.oneScene = null;
        }
        if (this.sceneSelect != null) {
            this.sceneSelect.removeEventListener('goSceneOne', this.sceneOne, this);
            this.sceneSelect.removeEventListener('goStart', this.startCreateScene, this);
            this.removeChild(this.sceneSelect);
            this.sceneSelect = null;
        }
        this.sceneStart = new StartScene();
        this.addChild(this.sceneStart);
        this.sceneStart.addEventListener('goSelectScene', this.goSelectSceneHd, this);
    };
    p.goSelectSceneHd = function () {
        if (this.sceneStart != null) {
            this.sceneStart.removeEventListener('goSelectScene', this.goSelectSceneHd, this);
            this.removeChild(this.sceneStart);
            this.sceneStart = null;
        }
        if (this.oneScene != null) {
            this.oneScene.removeEventListener('goSelectScene', this.goSelectSceneHd, this);
            this.oneScene.removeEventListener('goStart', this.startCreateScene, this);
            this.removeChild(this.oneScene);
            this.oneScene = null;
        }
        this.sceneSelect = new SelectScene();
        this.addChild(this.sceneSelect);
        this.sceneSelect.addEventListener('goSceneOne', this.sceneOne, this);
        this.sceneSelect.addEventListener('goStart', this.startCreateScene, this);
    };
    p.sceneOne = function () {
        if (this.sceneSelect != null) {
            this.sceneSelect.removeEventListener('goSceneOne', this.sceneOne, this);
            this.sceneSelect.removeEventListener('goStart', this.startCreateScene, this);
            this.removeChild(this.sceneSelect);
            this.sceneSelect = null;
        }
        this.oneScene = new OneScene();
        this.addChild(this.oneScene);
        this.oneScene.addEventListener('goSelectScene', this.goSelectSceneHd, this);
        this.oneScene.addEventListener('goStart', this.startCreateScene, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map