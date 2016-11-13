class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private startgame: StartGame = undefined;

    private selectGame: SelectGame = undefined;

    private gameover: GameOver = undefined;

    private game: Game = undefined;

    private createGameScene(): void {
        var bg: egret.Bitmap = new egret.Bitmap();
        bg = GameData.createBitmapByName("bg_jpg");
        this.addChild(bg);

        this.startgame = new StartGame();
        this.addChild(this.startgame);
        this.startgame.addEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);
    }

    private onSelectGame() {
        if (this.gameover != undefined) {
            this.gameover.removeEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);
            this.removeChild(this.gameover);
            this.gameover = undefined;
        }
        if (this.startgame != undefined) {
            this.startgame.removeEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);
            this.removeChild(this.startgame);
            this.startgame = undefined;
        }
        if (this.game != undefined) {
            this.game.removeEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);
            this.removeChild(this.game);
            this.game = undefined;
        }
        this.selectGame = new SelectGame();
        this.addChild(this.selectGame);
        this.selectGame.addEventListener(GameEvent.GAME_START, this.onGame, this);
    }
    private onGame() {
        if (this.gameover != undefined) {
            this.gameover.removeEventListener(GameEvent.GAME_START, this.onGame, this);
            this.removeChild(this.gameover);
            this.gameover = undefined;
        }
        if (this.selectGame != undefined) {
            this.selectGame.removeEventListener(GameEvent.GAME_START, this.onGame, this);
            this.removeChild(this.selectGame);
            this.selectGame = undefined;
        }
        this.game = new Game();
        this.addChild(this.game);
        this.game.addEventListener(GameEvent.GAME_OVER, this.onGameOver, this);
        this.game.addEventListener(GameEvent.GAME_WIN, this.onGameWin, this);
        this.game.addEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);

    }
    private onGameOver() {
        if (this.game != undefined) {
            this.game.removeEventListener(GameEvent.GAME_OVER, this.onGameOver, this);
            this.removeChild(this.game);
            this.game = undefined;
        }

        this.gameover = new GameOver("die");
        this.addChild(this.gameover);
        this.gameover.addEventListener(GameEvent.GAME_START, this.onGame, this);
        this.gameover.addEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);


    }
    private onGameWin() {
        if (this.game != undefined) {
            this.game.removeEventListener(GameEvent.GAME_WIN, this.onGameOver, this);
            this.removeChild(this.game);
            this.game = undefined;
        }
        this.gameover = new GameOver("pass");
        this.addChild(this.gameover);
        this.gameover.addEventListener(GameEvent.GAME_START, this.onGame, this);
        this.gameover.addEventListener(GameEvent.GAME_LEVEL, this.onSelectGame, this);
    }


}


