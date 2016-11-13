// TypeScript file
class Boos extends egret.Sprite {

    public _bitMap: egret.Bitmap;
    private _moveTimer: egret.Timer; //BOOS AI
    private _root: any;  //游戏舞台控制权
    public _boosLife:BoosLife; //BOOS血条
    public bulletRate:number = 1000;//BOOS子弹发射频率
    public bulletNum:number = 1;//子弹数量
    public angle:number

    public type: string = GameData.boosType1;
    public life: number;

    private speedLim: number = 5; //最大移动速度
    private vx: number = 0;
    private vy: number = 0;   //暂无(BOOS添加纵向移动范围时启用)
    private accelerationX: number = 0;
    private accelerationY: number = 0; //暂无
    private friction: number = 0.97;

    public constructor(type: string, root) {
        super();
        this._root = root;
        if (type == GameData.boosType1) {
            this._bitMap = GameData.CREATE_BITMAP('boos1');//蜜蜂
            this.life = GameData.maxlife1;
            this.speedLim = 10;
            this.bulletRate = 1000;
            this.bulletNum = 3;
        }
        else if (type == GameData.boosType2) {
            this._bitMap = GameData.CREATE_BITMAP('boos2');//蜘蛛
            this.life = GameData.maxlife2;
            this.speedLim = 6;
            this.bulletRate = 800;
            this.bulletNum = 1;
        }
        else {
            this._bitMap = GameData.CREATE_BITMAP('boos3');//海龟
            this.life = GameData.maxlife3;
            this.speedLim = 4;
            this.bulletRate = 1600;
            this.bulletNum = 1;
        }

        this._bitMap.anchorOffsetX = this._bitMap.width / 2;
        this._bitMap.anchorOffsetY = this._bitMap.height / 2;
        this.addChild(this._bitMap);

        this.type = type;

        this._boosLife = new BoosLife(this.type);
        this.addChild(this._boosLife);
        this._boosLife.sumHeadth = this.life;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addstageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }

    private addstageHd() {
        this._moveTimer = new egret.Timer(700);
        this._moveTimer.addEventListener(egret.TimerEvent.TIMER, this.setMoveRate, this);
        this._moveTimer.start();

        this.addEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
    }

    private setMoveRate(e: egret.TimerEvent) {
        if (Math.random() > 0.5) {
            this.accelerationX = Math.random() > 0.3 ? 0.8 : 0;
        } else {
            this.accelerationX = Math.random() > 0.3 ? -0.8 : 0;
        }
        this._moveTimer.delay = Math.ceil(Math.random() * 5 + 5) * 100;
    }

    private enterHd() {
        //BOOS行为
        this.vx += this.accelerationX;
        // this.vy += this.accelerationY;//暂无
        this.vx *= this.friction;
        // this.vy *= this.friction;//暂无
        this._bitMap.x += this.vx;
        // this._bitMap.y += this.vy;//暂无
        //行为检测
        GameData.checkBourder(this._bitMap);
        //与人物碰撞
        if (this._root.chara && this._bitMap.hitTestPoint(this._root.chara.x, this._root.chara.y)) {
            this._root.gameOver();
            return;
        }
        //boos死亡
        if (this.life <= 0) {
            this.dispatchEventWith(GameEvent.BOOSOVER);
            return;
        }
        //被击中
        if (this._root.bulletArr.length != 0) {
            for (var i = 0; i < this._root.bulletArr.length; i++) {
                if (this._bitMap.hitTestPoint(this._root.bulletArr[i].x, this._root.bulletArr[i].y)) {
                    this._root.removeChild(this._root.bulletArr[i]);
                    this._root.bulletArr.splice(i, 1);
                    this._root.score += 1;
                    this._root.scoreText.text = this._root.score + "";
                    this.life -= 1;
                    this._boosLife.health.scaleX = this.life / this._boosLife.sumHeadth;
                }
            }
        }

    }

    public addHealth(){
        GameData.maxlife1 += 10;
        GameData.maxlife2 += 15;
        GameData.maxlife3 += 20;
    }

    private removeHd() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.removeChild(this._bitMap);
        this.removeChild(this._boosLife);
        this._moveTimer.reset();
        this._moveTimer.stop();
        this._moveTimer.removeEventListener(egret.TimerEvent.TIMER, this.setMoveRate, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addstageHd, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }

}