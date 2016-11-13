class Main extends eui.UILayer {
    //private loadingView: LoadingUI;
    protected createChildren(): void {
        super.createChildren();
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter",assetAdapter);
        this.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //this.loadingView = new LoadingUI();
        //this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            //this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
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
            //this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    sceneOne:SceneOne=null;
    sceneStart:StartScene=null;
    sceneShop:ShopScene=null;
    sceneRank:RankScene=null;
    protected startCreateScene(): void {
        if(this.sceneOne!=null){
            this.sceneOne.removeEventListener('TryAgian',this.goSceneOneHd,this);
            this.sceneOne.removeEventListener('goMain',this.startCreateScene,this);
            this.removeChild(this.sceneOne);
            this.sceneOne=null;
        }
        if(this.sceneShop!=null){
            this.sceneShop.removeEventListener('goSceneOne',this.goSceneOneHd,this);
            this.removeChild(this.sceneShop);
            this.sceneShop=null;
        }
        if(this.sceneRank!=null){
            this.sceneRank.removeEventListener('goMain',this.startCreateScene,this);
            this.removeChild(this.sceneRank);
            this.sceneRank=null;
        }
        this.sceneStart=new StartScene();
        this.addChild(this.sceneStart);
        this.sceneStart.addEventListener('goSceneOne',this.goSceneOneHd,this);
        this.sceneStart.addEventListener('goSceneShop',this.goShopSceneHd,this);
        this.sceneStart.addEventListener('goSceneRank',this.goSceneRankHd,this);
    }
    private goSceneOneHd(e:egret.TimerEvent){
        if(this.sceneStart!=null){
            this.sceneStart.removeEventListener('goSceneOne',this.goSceneOneHd,this);
            this.sceneStart.removeEventListener('goSceneShop',this.goShopSceneHd,this);
            this.sceneStart.removeEventListener('goSceneRank',this.goSceneRankHd,this);
            this.removeChild(this.sceneStart);
            this.sceneStart=null;
        }
        if(this.sceneOne!=null){
            this.sceneOne.removeEventListener('TryAgian',this.goSceneOneHd,this);
            this.sceneOne.removeEventListener('goMain',this.startCreateScene,this);
            this.removeChild(this.sceneOne);
            this.sceneOne=null;
        }
        this.sceneOne=new SceneOne();
        this.addChild(this.sceneOne);
        this.sceneOne.addEventListener('TryAgian',this.goSceneOneHd,this);
        this.sceneOne.addEventListener('goMain',this.startCreateScene,this);
    }
    private goShopSceneHd(e:egret.TimerEvent){
        if(this.sceneStart!=null){
            this.sceneStart.removeEventListener('goSceneOne',this.goSceneOneHd,this);
            this.sceneStart.removeEventListener('goSceneShop',this.goShopSceneHd,this);
            this.removeChild(this.sceneStart);
            this.sceneStart=null;
        }
        this.sceneShop=new ShopScene();
        this.addChild(this.sceneShop);
        this.sceneShop.addEventListener('goSceneOne',this.goSceneOneHd,this);
    }
    private  goSceneRankHd(e:egret.TimerEvent){
        if(this.sceneStart!=null){
            this.sceneStart.removeEventListener('goSceneOne',this.goSceneOneHd,this);
            this.sceneStart.removeEventListener('goSceneShop',this.goShopSceneHd,this);
            this.sceneStart.removeEventListener('goSceneRank',this.goSceneRankHd,this);
            this.removeChild(this.sceneStart);
            this.sceneStart=null;
        }
        this.sceneRank=new RankScene();
        this.addChild(this.sceneRank);
        this.sceneRank.addEventListener('goMain',this.startCreateScene,this);
    }
}
