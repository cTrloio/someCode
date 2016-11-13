class Main extends egret.DisplayObjectContainer {
    private vx:number=0;
    private vy:number=0;
    private chara:Character;
    private mmc:Monster;
    private mmc2:Monster;
    private mmc3:Monster;
    private mmc4:Monster;
    private star:Star;
    private background:Background;
    private leftBorder:number;
    private rightBorder:number;
    private topBorder:number;
    private bottomBorder:number;
    private timer:egret.Timer=new egret.Timer(1000,0);
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
        }
    }
    //创建游戏场景
    private createGameScene():void {
        this.addListenerHd();
        this.addObject();
        this.setBorder();
    }
    //添加事件
    private addListenerHd()
    {
        var src=this;
        document.addEventListener("keydown",function onKeyDown(event:KeyboardEvent){src.onKeyDOWN(event);});
        document.addEventListener("keyup",function onKeyUp(event:KeyboardEvent){src.onKeyUP(event);});
        this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrame,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    //初始化大背景边界
    private setBorder()
    {
        this.leftBorder=this.stage.stageWidth/2-this.stage.stageWidth/4;
        this.rightBorder=this.stage.stageWidth/2+this.stage.stageWidth/4;
        this.topBorder=this.stage.stageHeight/2-this.stage.stageHeight/4;
        this.bottomBorder=this.stage.stageHeight/2+this.stage.stageHeight/4;
    }
    //添加游戏对象
    private addObject()
    {
        //背景图片
        this.background=new Background();
        this.addChild(this.background);
        this.background.x=(this.stage.stageWidth-this.background.width)/2;
        this.background.y=(this.stage.stageHeight-this.background.height)/2;
        //怪物 1\2、3、4
        this.mmc=new Monster();
        this.addChild(this.mmc);
        this.mmc.x=150;
        this.mmc.y=100;
        this.mmc2=new Monster();
        this.addChild(this.mmc2);
        this.mmc2.x=300;
        this.mmc2.y=150;
        this.mmc3=new Monster();
        this.addChild(this.mmc3);
        this.mmc3.x=400;
        this.mmc3.y=250;
        this.mmc4=new Monster();
        this.addChild(this.mmc4);
        this.mmc4.x=150;
        this.mmc4.y=250;
        this.mmc.anchorOffsetX=this.mmc.width/2;//修改
        this.mmc.anchorOffsetY=this.mmc.height/2;//修改
        this.mmc2.anchorOffsetX=this.mmc2.width/2;//修改
        this.mmc2.anchorOffsetY=this.mmc2.height/2;//修改
        this.mmc3.anchorOffsetX=this.mmc3.width/2;//修改
        this.mmc3.anchorOffsetY=this.mmc3.height/2;//修改
        this.mmc4.anchorOffsetX=this.mmc4.width/2;//修改
        this.mmc4.anchorOffsetY=this.mmc4.height/2;//修改
        //角色对象
        this.chara=new Character();
        this.addChild(this.chara);
        this.chara.x=270;
        this.chara.y=300;
        this.chara.anchorOffsetX=this.chara.width/2;//修改
        this.chara.anchorOffsetY=this.chara.height/2;//修改
        //子弹对象
        this.star=new Star();
        this.addChild(this.star);
        this.star.visible=false;

    }
    //按键按下
    private onKeyDOWN(e:KeyboardEvent)
    {
        if(e.keyCode==37)//左
        {
            this.vx=-5;
            this.chara.rotation=270;//修改
            if(!this.star.launched){//当没有处于发射状态时
                this.star.direction="left";
            }
        }
        else if(e.keyCode==38)//上
        {
            this.vy=-5;
            this.chara.rotation=0;//修改
            if(!this.star.launched){//当没有处于发射状态时
                this.star.direction="up";
            }
        }
        else if(e.keyCode==39)//右
        {
            this.vx=5;
            this.chara.rotation=90;//修改
            if(!this.star.launched){//当没有处于发射状态时
                this.star.direction="right";
            }
        }
        else if(e.keyCode==40)//下
        {
            this.vy=5;
            this.chara.rotation=180;//修改
            if(!this.star.launched){//当没有处于发射状态时
                this.star.direction="down";
            }
        }
        if(e.keyCode==32)//space
        {
            if(!this.star.launched)
            {
                this.star.launched=true;
                this.star.x=this.chara.x;//+this.chara.width/2;//修改
                this.star.y=this.chara.y;//+this.chara.height/2//修改
            }
        }
    }
    //按键抬起
    private onKeyUP(e:KeyboardEvent)
    {
        if(e.keyCode==37||e.keyCode==39)
        {
            this.vx=0;
        }
        if(e.keyCode==38||e.keyCode==40)
        {
            this.vy=0;
        }
    }
    //帧事件
    private enterFrame(e:egret.Event)
    {
        //人物移动
        this.chara.x+=this.vx;
        this.chara.y+=this.vy;
        //怪物移动
        this.mmc.x+=this.mmc.vx;
        this.mmc.y+=this.mmc.vy;
        this.mmc2.x+=this.mmc2.vx;
        this.mmc2.y+=this.mmc2.vy;
        this.mmc3.x+=this.mmc3.vx;
        this.mmc3.y+=this.mmc3.vy;
        this.mmc4.x+=this.mmc4.vx;
        this.mmc4.y+=this.mmc4.vy;
        //可以发射子弹
        if(this.star.launched)
        {
            this.star.visible=true;
            //this.star.y-=3;//修改
            if(this.star.direction=="left")//修改
            {
                this.star.x-=3;
            }
            if(this.star.direction=="up")//修改
            {
                this.star.y-=3;
            }
            if(this.star.direction=="right")//修改
            {
                this.star.x+=3;
            }
            if(this.star.direction=="down")//修改
            {
                this.star.y+=3;
            }
            this.star.rotation+=5;
            this.checkStarBouder(this.star);
            //怪物碰撞子弹
            this.checkEnemyStar(this.star,this.mmc);
            this.checkEnemyStar(this.star,this.mmc2);
            this.checkEnemyStar(this.star,this.mmc3);
            this.checkEnemyStar(this.star,this.mmc4);
        }
        else{
            this.star.visible=false;
        }
        //边界检测
        this.checkStageBouder(this.mmc);
        this.checkStageBouder(this.mmc2);
        this.checkStageBouder(this.mmc3);
        this.checkStageBouder(this.mmc4);
        this.checkStageBouder(this.chara);
        //怪物碰撞人物
        this.chackEnemyPlayer(this.chara,this.mmc);
        this.chackEnemyPlayer(this.chara,this.mmc2);
        this.chackEnemyPlayer(this.chara,this.mmc3);
        this.chackEnemyPlayer(this.chara,this.mmc4);
        //内部边界判断与背景滚动
        if(this.chara.x<this.leftBorder)
        {
            this.chara.x=this.leftBorder;
            this.rightBorder=this.stage.stageWidth/2+this.stage.stageWidth/4;//与边界不重合时 重新设置内部边界
            this.background.x-=this.vx;//背景滚动
        }
        else if(this.chara.x+this.chara.width>this.rightBorder)
        {
            this.chara.x=this.rightBorder-this.chara.width;
            this.leftBorder=this.stage.stageWidth/2-this.stage.stageWidth/4;//与边界不重合时 重新设置内部边界
            this.background.x-=this.vx;//背景滚动
        }
        else if(this.chara.y<this.topBorder)
        {
            this.chara.y=this.topBorder;
            this.bottomBorder=this.stage.stageHeight/2+this.stage.stageHeight/4;//与边界不重合时 重新设置内部边界
            this.background.y-=this.vy;//背景滚动
        }
        else if(this.chara.y+this.chara.height>this.bottomBorder)
        {
            this.chara.y=this.bottomBorder-this.chara.height;
            this.topBorder=this.stage.stageHeight/2-this.stage.stageHeight/4;//与边界不重合时 重新设置内部边界
            this.background.y-=this.vy;//背景滚动
        }
        //检测大背景边缘
        if(this.background.x>0)
        {
            this.background.x=0;
            this.leftBorder=0;
        }
        if(this.background.y>0)
        {
            this.background.y=0;
            this.topBorder=0;
        }
        if(this.background.x<this.stage.stageWidth-this.background.width)
        {
            this.background.x=this.stage.stageWidth-this.background.width;
            this.rightBorder=this.stage.stageWidth;
        }
        if(this.background.y<this.stage.stageHeight-this.background.height)
        {
            this.background.y=this.stage.stageHeight-this.background.height;
            this.bottomBorder=this.stage.stageHeight;
        }
    }
    //限制移动
    private checkStageBouder(obj:egret.Sprite)
    {
        if(obj.x<50+obj.width/2)
        {
            obj.x=50+obj.width/2;
        }
        if(obj.y<50+obj.height/2)
        {
            obj.y=50+obj.height/2;
        }
        if(obj.x+obj.width>500+obj.width/2)
        {
            obj.x=500-obj.width+obj.width/2;
        }
        if(obj.y+obj.height>350+obj.height/2)
        {
            obj.y=350-obj.height+obj.height/2;
        }
    }
    //怪物和人物碰撞
    private  chackEnemyPlayer(chara:Character,mon:Monster)
    {
        if(mon.visible && chara.hitTestPoint(mon.x+mon.width/2,mon.y+mon.height/2)){
            this.gameOver("character");
        }
    }
    //怪物和子弹碰撞
    private checkEnemyStar(star:Star,mon:Monster)
    {
        if(mon.visible && star.hitTestPoint(mon.x,mon.y)){//+mon.width/2,,,+mon.height/2//修改
            star.launched=false;
            mon.checkEnemyOpen();
            mon.hitCount++;
            if(mon.hitCount==3){
                this.killEnemy(mon);
                this.gameOver("enemy");
            }
        }
    }
    //子弹移出舞台
    private checkStarBouder(star:Star)
    {
        if(star.y<50+19 || star.y>350+19 || star.x<50+19 || star.x>500+19)//修改
        {
            star.launched=false;
        }
    }
    //创建随机数/怪物AL
    private createRandomNum(mon:Monster)
    {
        var num:number=Math.ceil(Math.random()*2);
        if(num==1)//通过人物与怪物左右距离判断，怪物向玩家方向移动
        {
            if(this.chara.x>mon.x)
            {
                mon.vx=1;
                mon.vy=0;
            }
            if(this.chara.x<mon.x)
            {
                mon.vx=-1;
                mon.vy=0;
            }
        }
        if(num==2)//通过人物与怪物上下距离判断，怪物向玩家方向移动
        {
            if(this.chara.y>mon.y)
            {
                mon.vx=0;
                mon.vy=1;
            }
            if(this.chara.y<mon.y)
            {
                mon.vx=0;
                mon.vy=-1;
            }
        }
    }
    //计时器开始
    private timerHd(e:egret.TimerEvent)
    {
        this.createRandomNum(this.mmc);
        this.createRandomNum(this.mmc2);
        this.createRandomNum(this.mmc3);
        this.createRandomNum(this.mmc4);
    }
    //杀死怪物
    private killEnemy(mon:Monster)
    {
        mon.visible=false;
        var exp:Explosion=new Explosion();
        this.addChild(exp);
        exp.x=mon.x-21;
        exp.y=mon.y-18;
        exp.showExplosion();
    }
    //游戏结束
    private gameOver(str:string)
    {
        if(str=="character"){
            var lostGame:YouLost=new YouLost();
            this.addChild(lostGame);
            lostGame.x=(this.stage.stageWidth-lostGame.width)/2;
            lostGame.y=(this.stage.stageHeight-lostGame.height)/2;

            this.removeEventListener(egret.TimerEvent.TIMER,this.enterFrame,this);
            this.timer.reset();
        }
        else if(str=="enemy") {
            if (this.mmc.hitCount == 3 && this.mmc2.hitCount == 3 && this.mmc3.hitCount == 3 && this.mmc4.hitCount == 3) {
                var lc:LevelComplete = new LevelComplete();
                this.addChild(lc);
                lc.x = (this.stage.stageWidth - lc.width) / 2;
                lc.y = (this.stage.stageHeight - lc.height) / 2;
                this.removeEventListener(egret.TimerEvent.TIMER,this.enterFrame,this);
                this.timer.reset();
            }
        }
    }

}


