var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.rk = null;
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
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("loading");
    };
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "loading") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.setStage();
        }
    };
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.setStage = function () {
        var _this = this;
        var bg = new Background();
        this.addChild(bg);
        var panel = new egret.Sprite();
        panel.graphics.beginFill(0xff6600, 0);
        panel.graphics.drawRoundRect(0, 0, 400, 230, 50);
        panel.graphics.endFill();
        this.addChild(panel);
        var name = new egret.TextField();
        panel.addChild(name);
        name.x = 140;
        name.y = 50;
        name.text = "尊姓大名";
        var nameTxt = new egret.TextField();
        panel.addChild(nameTxt);
        nameTxt.border = true;
        nameTxt.borderColor = 0xc1c1c1;
        nameTxt.x = 150;
        nameTxt.y = 100;
        nameTxt.type = egret.TextFieldType.INPUT;
        nameTxt.restrict = "A-Za-z";
        nameTxt.text = "name";
        nameTxt.maxChars = 5;
        nameTxt.textAlign = egret.HorizontalAlign.CENTER;
        nameTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        GameData.first_name = nameTxt.text;
        var btn = new egret.TextField();
        btn.background = true;
        btn.backgroundColor = 0x4ecedc;
        btn.text = "开始";
        btn.textAlign = egret.HorizontalAlign.CENTER;
        btn.verticalAlign = egret.VerticalAlign.MIDDLE;
        btn.width = 100;
        btn.height = 30;
        btn.x = 150;
        btn.y = 150;
        panel.addChild(btn);
        panel.x = GameData.stageWidth / 2 - panel.width / 2;
        panel.y = GameData.stageHeight / 2 - panel.height / 2;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeChild(panel);
            _this.startGame();
        }, this);
    };
    p.startGame = function () {
        if (this.rk != null) {
            this.removeChild(this.rk);
            this.rk.removeEventListener(GameEvent.STARTGAME, this.startGame, this);
            this.rk = null;
        }
        this.gs = new GameScene();
        this.addChild(this.gs);
        this.gs.addEventListener(GameEvent.GAMEOVER, this.gameOverHd, this);
    };
    p.gameOverHd = function () {
        this.gs.removeEventListener(GameEvent.GAMEOVER, this.gameOverHd, this);
        this.removeChild(this.gs);
        this.rk = new Rank();
        this.addChild(this.rk);
        this.rk.x = GameData.stageWidth / 2 - this.rk.width / 2;
        this.rk.y = GameData.stageHeight / 2 - this.rk.height / 2;
        this.rk.addEventListener(GameEvent.STARTGAME, this.startGame, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
