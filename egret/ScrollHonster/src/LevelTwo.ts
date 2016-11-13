
class LevelTwo extends egret.Sprite{
    private vx:number=0;
    private vy:number=0;
    private chara:Character;
    private mmc:Monster;
    private mmc2:Monster;
    private mmc3:Monster;
    private mmc4:Monster;
    private star:Star;
    private timer:egret.Timer=new egret.Timer(1000,0);
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    //���ӵ���̨
    private onAddToStage(event:egret.Event) {
        this.addListenerHd();
        this.addObject();
    }
    //������Ϸ����
    private addListenerHd()
    {
        var src=this;
        document.addEventListener("keydown",function onKeyDown(event:KeyboardEvent){src.onKeyDOWN(event);});
        document.addEventListener("keyup",function onKeyUp(event:KeyboardEvent){src.onKeyUP(event);});
        this.addEventListener(egret.Event.ENTER_FRAME,this.enterFrame,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
    }
    //������Ϸ����
    private addObject()
    {
        //����ͼƬ
        var background:Background=new Background();
        this.addChild(background);
        //���� 1\2��3��4
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
        this.mmc.anchorOffsetX=this.mmc.width/2;//�޸�
        this.mmc.anchorOffsetY=this.mmc.height/2;//�޸�
        this.mmc2.anchorOffsetX=this.mmc2.width/2;//�޸�
        this.mmc2.anchorOffsetY=this.mmc2.height/2;//�޸�
        this.mmc3.anchorOffsetX=this.mmc3.width/2;//�޸�
        this.mmc3.anchorOffsetY=this.mmc3.height/2;//�޸�
        this.mmc4.anchorOffsetX=this.mmc4.width/2;//�޸�
        this.mmc4.anchorOffsetY=this.mmc4.height/2;//�޸�
        //��ɫ����
        this.chara=new Character();
        this.addChild(this.chara);
        this.chara.x=270;
        this.chara.y=300;
        this.chara.anchorOffsetX=this.chara.width/2;//�޸�
        this.chara.anchorOffsetY=this.chara.height/2;//�޸�
        //�ӵ�����
        this.star=new Star();
        this.addChild(this.star);
        this.star.visible=false;

    }
    //��������
    private onKeyDOWN(event:KeyboardEvent)
    {
        if(event.keyCode==37)//��
        {
            this.vx=-5;
            this.chara.rotation=270;//�޸�
            if(!this.star.launched){//��û�д��ڷ���״̬ʱ
                this.star.direction="left";
            }
        }
        else if(event.keyCode==38)//��
        {
            this.vy=-5;
            this.chara.rotation=0;//�޸�
            if(!this.star.launched){//��û�д��ڷ���״̬ʱ
                this.star.direction="up";
            }
        }
        else if(event.keyCode==39)//��
        {
            this.vx=5;
            this.chara.rotation=90;//�޸�
            if(!this.star.launched){//��û�д��ڷ���״̬ʱ
                this.star.direction="right";
            }
        }
        else if(event.keyCode==40)//��
        {
            this.vy=5;
            this.chara.rotation=180;//�޸�
            if(!this.star.launched){//��û�д��ڷ���״̬ʱ
                this.star.direction="down";
            }
        }
        if(event.keyCode==32)//space
        {
            if(!this.star.launched)
            {
                this.star.launched=true;
                this.star.x=this.chara.x;//+this.chara.width/2;//�޸�
                this.star.y=this.chara.y;//+this.chara.height/2//�޸�
            }
        }
    }
    //����̧��
    private onKeyUP(event:KeyboardEvent)
    {
        if(event.keyCode==37||event.keyCode==39)
        {
            this.vx=0;
        }
        if(event.keyCode==38||event.keyCode==40)
        {
            this.vy=0;
        }
    }
    //֡�¼�
    private enterFrame(e:egret.Event)
    {
        //�����ƶ�
        this.chara.x+=this.vx;
        this.chara.y+=this.vy;
        //�����ƶ�
        this.mmc.x+=this.mmc.vx;
        this.mmc.y+=this.mmc.vy;
        this.mmc2.x+=this.mmc2.vx;
        this.mmc2.y+=this.mmc2.vy;
        this.mmc3.x+=this.mmc3.vx;
        this.mmc3.y+=this.mmc3.vy;
        this.mmc4.x+=this.mmc4.vx;
        this.mmc4.y+=this.mmc4.vy;
        //���Է����ӵ�
        if(this.star.launched)
        {
            this.star.visible=true;
            //this.star.y-=3;//�޸�
            if(this.star.direction=="left")//�޸�
            {
                this.star.x-=3;
            }
            if(this.star.direction=="up")//�޸�
            {
                this.star.y-=3;
            }
            if(this.star.direction=="right")//�޸�
            {
                this.star.x+=3;
            }
            if(this.star.direction=="down")//�޸�
            {
                this.star.y+=3;
            }
            this.star.rotation+=5;
            this.checkStarBouder(this.star);
            //������ײ�ӵ�
            this.checkEnemyStar(this.star,this.mmc);
            this.checkEnemyStar(this.star,this.mmc2);
            this.checkEnemyStar(this.star,this.mmc3);
            this.checkEnemyStar(this.star,this.mmc4);
        }
        else{
            this.star.visible=false;
        }
        //�߽�����
        this.checkStageBouder(this.mmc);
        this.checkStageBouder(this.mmc2);
        this.checkStageBouder(this.mmc3);
        this.checkStageBouder(this.mmc4);
        this.checkStageBouder(this.chara);

        //������ײ����
        this.chackEnemyPlayer(this.chara,this.mmc);
        this.chackEnemyPlayer(this.chara,this.mmc2);
        this.chackEnemyPlayer(this.chara,this.mmc3);
        this.chackEnemyPlayer(this.chara,this.mmc4);
    }
    //����������
    private createRandomNum(mon:Monster)
    {
        var num:number=Math.ceil(Math.random()*4);
        if(num==1)
        {
            mon.vx=1;
        }
        if(num==2)
        {
            mon.vx=-1;
        }
        if(num==3)
        {
            mon.vy=1;
        }
        if(num==4)
        {
            mon.vy=-1;
        }
    }
    //�����ƶ�
    private checkStageBouder(obj:egret.Sprite)
    {
        if(obj.x<50+this.chara.width/2)
        {
            obj.x=50+this.chara.width/2;
        }
        if(obj.y<50+this.chara.height/2)
        {
            obj.y=50+this.chara.height/2;
        }
        if(obj.x+obj.width>500+this.chara.width/2)
        {
            obj.x=500-obj.width+this.chara.width/2;
        }
        if(obj.y+obj.height>350+this.chara.height/2)
        {
            obj.y=350-obj.height+this.chara.height/2;
        }
    }
    //������������ײ
    private  chackEnemyPlayer(chara:Character,mon:Monster) {
        if(mon.visible && chara.hitTestPoint(mon.x+mon.width/2,mon.y+mon.height/2)){
            this.gameOver("character");
        }
    }
    //�������ӵ���ײ
    private checkEnemyStar(star:Star,mon:Monster) {
        if(mon.visible && star.hitTestPoint(mon.x,mon.y)){//+mon.width/2,,,+mon.height/2//�޸�
            star.launched=false;
            mon.checkEnemyOpen();
            mon.hitCount++;
            if(mon.hitCount==3){
                this.killEnemy(mon);
                this.gameOver("enemy");
            }
        }
    }
    //�ӵ��Ƴ���̨
    private checkStarBouder(star:Star) {
        if(star.y<50+19 || star.y>350+19 || star.x<50+19 || star.x>500+19)//�޸�
        {
            star.launched=false;
        }
    }
    //��ʱ����ʼ
    private timerHd(e:egret.TimerEvent)
    {
        this.createRandomNum(this.mmc);
        this.createRandomNum(this.mmc2);
        this.createRandomNum(this.mmc3);
        this.createRandomNum(this.mmc4);
    }
    //ɱ������
    private killEnemy(mon:Monster)
    {
        mon.visible=false;
        var exp:Explosion=new Explosion();
        this.addChild(exp);
        exp.x=mon.x-21;
        exp.y=mon.y-18;
        exp.showExplosion();
    }
    //��Ϸ����
    private gameOver(str:string){
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