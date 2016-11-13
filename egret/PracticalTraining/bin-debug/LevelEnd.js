/**
 * Created by Administrator on 2015/12/2.
 */
var LevelEnd = (function (_super) {
    __extends(LevelEnd, _super);
    function LevelEnd() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=LevelEnd,p=c.prototype;
    p.onAddToStage = function (event) {
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.addObject();
        this.addEventHd();
    };
    p.addEventHd = function () {
        this.textTimer = new egret.Timer(4500);
        this.textTimer.addEventListener(egret.TimerEvent.TIMER, this.gameOverTimer, this);
        this.textTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
    };
    p.addObject = function () {
        //����
        this.bg = new Background('level4');
        this.bg.x = 0;
        this.bg.y = 0;
        this.addChild(this.bg);
        //����
        this.gameover = new GameOver();
        this.addChild(this.gameover);
        this.gameover.x = 400;
        this.gameover.y = 600;
    };
    p.enterHd = function (e) {
        this.gameover.vy = 6;
        this.gameover.y -= this.gameover.vy;
        if (this.gameover.y < 150) {
            this.gameover.y = 150;
        }
    };
    p.gameOverTimer = function (e) {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.textTimer.removeEventListener(egret.TimerEvent.TIMER, this.gameOverTimer, this);
        this.dispatchEvent(new egret.Event("levelEndComplete"));
    };
    return LevelEnd;
}(egret.Sprite));
egret.registerClass(LevelEnd,'LevelEnd');
//# sourceMappingURL=LevelEnd.js.map