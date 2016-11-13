var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        /**
         * 创建游戏场景
         * Create a game scene
         */
        this.gameScene = null;
        this.txt = new egret.TextField();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            var bg = GameFactory.createShape(GameFactory.sceneWidth, GameFactory.sceneHeight, GameFactory.BACKGROUND);
            this.addChild(bg);
            this.txt.size = 60;
            this.txt.bold = true;
            this.txt.y = GameFactory.sceneHeight / 8 * 1;
            this.txt.x = GameFactory.sceneWidth / 2 - this.txt.width / 2;
            this.txt.textAlign = egret.HorizontalAlign.LEFT;
            this.addChild(this.txt);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        this.txt.text = "" + GameFactory.score;
        this.startBtn = this.createBtn("start", GameFactory.sceneHeight / 8 * 2, this.startHd, 200, 80);
        this.addChild(this.startBtn);
        this.modelBtn = this.createBtn('pattern', GameFactory.sceneHeight / 8 * 4, this.modelHd, 200, 80);
        this.addChild(this.modelBtn);
    };
    p.startHd = function () {
        this.removeHd();
        this.gameScene = new GameScene();
        this.addChild(this.gameScene);
        this.gameScene.addEventListener('gameover', this.gameoverHd, this);
    };
    p.modelHd = function () {
        this.modelPanel = this.createPanel();
        this.addChild(this.modelPanel);
    };
    p.easyHd = function () {
        //弹力
        GameFactory.bounce = 15;
        //重力
        GameFactory.gravity = 5;
        //滑块宽
        GameFactory.slider_w = 100;
        this.removeChild(this.modelPanel);
        this.removeHd();
        this.createGameScene();
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.modelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.modelHd, this);
    };
    p.hardHd = function () {
        //弹力
        GameFactory.bounce = 20;
        //重力
        GameFactory.gravity = 10;
        //滑块宽
        GameFactory.slider_w = 60;
        this.removeChild(this.modelPanel);
        this.removeHd();
        this.createGameScene();
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.modelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.modelHd, this);
    };
    p.gameoverHd = function () {
        this.gameScene.removeEventListener('gameover', this.gameoverHd, this);
        this.removeChild(this.gameScene);
        this.gameScene = null;
        this.createGameScene();
    };
    p.removeHd = function () {
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.modelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.modelHd, this);
        this.removeChild(this.startBtn);
        this.removeChild(this.modelBtn);
    };
    p.createBtn = function (txt, move_y, fn, w, h) {
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0X608BEF);
        btn.graphics.drawRoundRect(0, 0, w, h, 15);
        btn.graphics.endFill();
        btn.x = GameFactory.sceneWidth / 2 - btn.width / 2;
        btn.y = -80;
        var text = new egret.TextField();
        btn.addChild(text);
        text.size = h / 2;
        text.textColor = 0xc1c1c1;
        text.text = txt;
        text.bold = true;
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        text.x = btn.width / 2 - text.width / 2;
        text.y = btn.height / 2 - text.height / 2;
        var tw = egret.Tween.get(btn, { loop: false });
        tw.to({ y: move_y }, 1000, egret.Ease.bounceOut);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, fn, this);
        return btn;
    };
    p.createPanel = function () {
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startHd, this);
        this.modelBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.modelHd, this);
        var mp = new egret.Sprite();
        mp.graphics.beginFill(0X91F397);
        mp.graphics.drawRoundRect(0, 0, 220, 280, 15);
        mp.graphics.endFill();
        mp.x = 130;
        mp.y = 200;
        var easy = this.createBtn('easy', 50, this.easyHd, 150, 60);
        var hard = this.createBtn('hard', 150, this.hardHd, 150, 60);
        mp.addChild(easy);
        mp.addChild(hard);
        easy.x = mp.width / 2 - easy.width / 4 * 3;
        hard.x = mp.width / 2 - hard.width / 4 * 3;
        return mp;
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map