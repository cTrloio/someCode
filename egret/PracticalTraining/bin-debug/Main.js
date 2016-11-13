var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.level0 = null;
        this.level1 = null;
        this.level2 = null;
        this.level3 = null;
        this.level4 = null;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //���Լ���ʧ�ܵ���Ŀ
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    p.createGameScene = function () {
        if (this.level4 != null) {
            this.removeChild(this.level4);
        }
        this.level0 = new LevelStart();
        this.addChild(this.level0);
        this.level0.addEventListener("LevelStartComplete", this.removeStartLevel, this);
    };
    p.removeStartLevel = function (e) {
        this.removeChild(this.level0);
        this.level1 = new LevelOne();
        this.addChild(this.level1);
        this.level1.addEventListener("levelOneComplete", this.removeLevelOne, this); //����û��ʧ������
    };
    p.removeLevelOne = function (e) {
        if (this.level1 != null) {
            this.removeChild(this.level1);
        }
        this.level2 = new LevelTwo();
        this.addChild(this.level2);
        this.level2.addEventListener("levelTwoComplete", this.removeLevelTwo, this);
        this.level2.addEventListener("levelThreeComplete", this.removeLevelThree, this); //ʧ�ܵĻ�������������
    };
    p.removeLevelTwo = function (e) {
        this.level2.removeEventListener("levelThreeComplete", this.removeLevelThree, this);
        if (this.level2 != null) {
            this.removeChild(this.level2);
            this.level2 = null; //����ͨ��ֻ��2�ؾ�ʧ���� �Ͳ�����������Ҫɾ��level2
        }
        this.level3 = new LevelThree();
        this.addChild(this.level3);
        this.level3.addEventListener("levelThreeComplete", this.removeLevelThree, this);
    };
    p.removeLevelThree = function (e) {
        if (this.level3 != null) {
            this.removeChild(this.level3);
        }
        if (this.level2) {
            this.removeChild(this.level2);
        }
        this.level4 = new LevelEnd();
        this.addChild(this.level4);
        this.level4.addEventListener("levelEndComplete", this.createGameScene, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map