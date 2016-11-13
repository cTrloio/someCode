var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=LoadingUI,p=c.prototype;
    p.createView = function () {
        this.loadf = GameData.CREATE_BITMAP('loading_f');
        this.loadb = GameData.CREATE_BITMAP('loading_b');
        this.loadLogo = GameData.CREATE_BITMAP('loadlogo');
        this.addChild(this.loadb);
        this.addChild(this.loadf);
        this.addChild(this.loadLogo);
        this.loadLogo.anchorOffsetX = this.loadLogo.width / 2;
        this.loadLogo.anchorOffsetY = this.loadLogo.height / 2;
        this.loadLogo.x = egret.MainContext.instance.stage.stageWidth / 2;
        this.loadLogo.y = 260;
        this.loadb.x = egret.MainContext.instance.stage.stageWidth / 2 - this.loadb.width / 2;
        this.loadb.y = 460;
        this.loadf.x = egret.MainContext.instance.stage.stageWidth / 2 - this.loadf.width / 2;
        this.loadf.y = 498;
        this.loadf.scaleX = 0;
        this.time = new egret.Timer(200);
        this.time.addEventListener(egret.TimerEvent.TIMER, this.rotaHd, this);
        this.time.start();
    };
    p.rotaHd = function () {
        this.loadLogo.rotation += 30;
    };
    p.setProgress = function (current, total) {
        this.loadf.scaleX = current / total;
        if (current == total) {
            this.time.reset();
            this.time.stop();
            this.time.removeEventListener(egret.TimerEvent.TIMER, this.rotaHd, this);
            this.removeChild(this.loadb);
            this.removeChild(this.loadf);
            this.removeChild(this.loadLogo);
        }
    };
    return LoadingUI;
}(egret.Sprite));
egret.registerClass(LoadingUI,'LoadingUI');
