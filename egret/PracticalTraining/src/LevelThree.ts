/**
 * Created by Administrator on 2015/12/8.
 */
class LevelThree extends egret.Sprite{
    //����
    private sound:egret.Sound;
    private loader:egret.URLLoader;
    private soundChann:egret.SoundChannel;
    //�õ�����
    private sound2:egret.Sound;
    private loader2:egret.URLLoader;
    private soundChann2:egret.SoundChannel;
    //����
    private sound3:egret.Sound;
    private loader3:egret.URLLoader;
    private soundChann3:egret.SoundChannel;
    //����
    private sound4:egret.Sound;
    private loader4:egret.URLLoader;
    private soundChann4:egret.SoundChannel;

    private bg:Background;
    private textTimer:egret.Timer;
    private timer:egret.Timer;
    private chara:Character;
    private destination:End;
    private desIstrue:boolean = false;
    private wuqi:WuQi;
    private canFight:boolean = false;
    private borderBox1:BorderBox;
    private borderBox2:BorderBox;
    private borderBox3:BorderBox;
    private borderBox4:BorderBox;
    private borderBox5:BorderBox;
    private borderBox6:BorderBox;
    private borderBox7:BorderBox;
    private borderBox8:BorderBox;
    private door1:Door;
    private door2:Door;
    private door3:Door;
    private door4:Door;
    private door5:Door;
    private door6:Door;
    private door7:Door;
    private door8:Door;
    private door9:Door;
    private door10:Door;
    private door11:Door;
    private door12:Door;
    private door13:Door;
    private door14:Door;
    private door15:Door;
    private door16:Door;
    private door17:Door;
    private cross:boolean;
    private charaPosArrX:number[];
    private charaPosArrY:number[];
    private doorArr:Array<Door>=[];
    private borderArr:Array<BorderBox> = [];
    private currNum:number=0;
    private enemy1:Enemy;
    private enemy2:Enemy;
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        this.createGameScene();
    }
    private addObject(){
        //bgm
        this.loader=new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE,this.loadOver,this);
        this.loader.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader.load(new egret.URLRequest("resource/music/lev3.mp3"));
        //��Ч
        this.loader2=new egret.URLLoader();
        this.loader2.addEventListener(egret.Event.COMPLETE,this.loadOver2,this);
        this.loader2.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader2.load(new egret.URLRequest("resource/music/mofabang.mp3"));

        this.loader3=new egret.URLLoader();
        this.loader3.addEventListener(egret.Event.COMPLETE,this.loadOver3,this);
        this.loader3.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader3.load(new egret.URLRequest("resource/music/bobo.wav"));

        this.loader4=new egret.URLLoader();
        this.loader4.addEventListener(egret.Event.COMPLETE,this.loadOver4,this);
        this.loader4.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader4.load(new egret.URLRequest("resource/music/hit.wav"));
        //����
        this.charaPosArrX=[400,400,662,662,662,400,132,132,132];
        this.charaPosArrY=[300,500,500,300,100,100,100,300,500];
        //����
        this.bg=new Background('level3');
        this.bg.x=0;
        this.bg.y=0;
        this.addChild(this.bg);
        //�յ�
        this.destination = new End('three');
        this.destination.x = 335;
        this.destination.y = 300;
        this.addChild(this.destination);
        this.destination.visible = false;
        //����
        this.borderBox1=new BorderBox('her');
        this.borderBox2=new BorderBox('her');
        this.borderBox3=new BorderBox('her');
        this.borderBox4=new BorderBox('her');
        this.borderBox5=new BorderBox('ver');
        this.borderBox6=new BorderBox('ver');
        this.borderBox7=new BorderBox('ver');
        this.borderBox8=new BorderBox('ver');
        this.addChild(this.borderBox1);
        this.addChild(this.borderBox2);
        this.addChild(this.borderBox3);
        this.addChild(this.borderBox4);
        this.addChild(this.borderBox5);
        this.addChild(this.borderBox6);
        this.addChild(this.borderBox7);
        this.addChild(this.borderBox8);
        this.borderBox1.scaleY=0.7;
        this.borderBox2.scaleY=0.7;
        this.borderBox3.scaleY=0.7;
        this.borderBox4.scaleY=0.7;
        this.borderBox5.scaleX=0.7;
        this.borderBox6.scaleX=0.7;
        this.borderBox7.scaleX=0.7;
        this.borderBox8.scaleX=0.7;
            //�ĸ�����
        this.borderBox1.x = 0;
        this.borderBox1.y = 20;
        this.borderBox2.x = 0;
        this.borderBox2.y = 215;
        this.borderBox3.x = 0;
        this.borderBox3.y = 425;
        this.borderBox4.x = 0;
        this.borderBox4.y = 620;
            //�ĸ�����
        this.borderBox5.x = 20;
        this.borderBox5.y = 0;
        this.borderBox6.x = 285;
        this.borderBox6.y = 0;
        this.borderBox7.x = 555;
        this.borderBox7.y = 0;
        this.borderBox8.x = 815;
        this.borderBox8.y = 0;
        this.borderArr.push(this.borderBox1);
        this.borderArr.push(this.borderBox2);
        this.borderArr.push(this.borderBox3);
        this.borderArr.push(this.borderBox4);
        this.borderArr.push(this.borderBox5);
        this.borderArr.push(this.borderBox6);
        this.borderArr.push(this.borderBox7);
        this.borderArr.push(this.borderBox8);
        //������(ǰ8����ȷ�ţ�����������)
        this.door1=new Door('three');
        this.door2=new Door('three');
        this.door3=new Door('three');
        this.door4=new Door('three');
        this.door5=new Door('three');
        this.door6=new Door('three');
        this.door7=new Door('three');
        this.door8=new Door('three');
        this.door9=new Door('three');
        this.door1.x=465;
        this.door1.y=300;

        this.door2.x=465;
        this.door2.y=500;

        this.door3.x=595;
        this.door3.y=500;

        this.door4.x=729;
        this.door4.y=300;

        this.door5.x=729;
        this.door5.y=100;

        this.door6.x=335;
        this.door6.y=100;

        this.door7.x=197;
        this.door7.y=100;

        this.door8.x=66;
        this.door8.y=300;

        this.door9.x=197;
        this.door9.y=500;
        this.addChild(this.door1);
        this.addChild(this.door2);
        this.addChild(this.door3);
        this.addChild(this.door4);
        this.addChild(this.door5);
        this.addChild(this.door6);
        this.addChild(this.door7);
        this.addChild(this.door8);
        this.addChild(this.door9);
        this.doorArr.push(this.door1);
        this.doorArr.push(this.door2);
        this.doorArr.push(this.door3);
        this.doorArr.push(this.door4);
        this.doorArr.push(this.door5);
        this.doorArr.push(this.door6);
        this.doorArr.push(this.door7);
        this.doorArr.push(this.door8);
        this.doorArr.push(this.door9);

        this.door10=new Door('three');
        this.door11=new Door('three');
        this.door12=new Door('three');
        this.door13=new Door('three');
        this.door14=new Door('three');
        this.door15=new Door('three');
        this.door16=new Door('three');
        this.door17=new Door('three');

        this.door10.x=335;
        this.door10.y=500;

        this.door11.x=729;
        this.door11.y=500;

        this.door12.x=595;
        this.door12.y=300;

        this.door13.x=595;
        this.door13.y=100;

        this.door14.x=465;
        this.door14.y=100;

        this.door15.x=66;
        this.door15.y=100;

        this.door16.x=197;
        this.door16.y=300;

        this.door17.x=66;
        this.door17.y=500;

        this.addChild(this.door10);
        this.addChild(this.door11);
        this.addChild(this.door12);
        this.addChild(this.door13);
        this.addChild(this.door14);
        this.addChild(this.door15);
        this.addChild(this.door16);
        this.addChild(this.door17);

        this.doorArr.push(this.door10);
        this.doorArr.push(this.door11);
        this.doorArr.push(this.door12);
        this.doorArr.push(this.door13);
        this.doorArr.push(this.door14);
        this.doorArr.push(this.door15);
        this.doorArr.push(this.door16);
        this.doorArr.push(this.door17);

        //����
        this.chara=new Character();
        this.addChild(this.chara);
        this.chara.x=this.charaPosArrX[0];
        this.chara.y=this.charaPosArrY[0];
        this.chara.life = 3; //�����ظ���3����

        //����
        this.enemy1=new Enemy('soul1');
        this.addChild(this.enemy1);
        this.enemy1.x = this.charaPosArrX[5];
        this.enemy1.y = this.charaPosArrY[5];

        this.enemy2=new Enemy('soul2');
        this.addChild(this.enemy2);
        this.enemy2.x = this.charaPosArrX[6];
        this.enemy2.y = this.charaPosArrY[6];

        //����
        this.wuqi = new WuQi();
        this.wuqi.x = 465;
        this.wuqi.y = 50;
        this.addChild(this.wuqi);
    }

    private addEventHd(){
        this.textTimer=new egret.Timer(1000);
        this.textTimer.addEventListener(egret.TimerEvent.TIMER,this.numTimer,this);
        this.textTimer.start();
        this.timer=new egret.Timer(1000,0);
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        this.timer.start();
        var src = this;
        document.addEventListener("keydown", function onKeyDown(event:KeyboardEvent) {
            src.onKeyDOWN(event);
        });
        document.addEventListener("keyup", function onKeyUp(event:KeyboardEvent) {
            src.onKeyUP(event);
        });
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
    }
    private createGameScene(){
        this.addObject();
        this.addEventHd();
    }
    //��������
    private loadOver(e:egret.Event)
    {
        this.sound=this.loader.data;
        this.soundChann= this.sound.play(0,0);
    }
    private loadOver2(e:egret.Event){
        this.sound2=this.loader2.data;
    }
    private loadOver3(e:egret.Event){
        this.sound3=this.loader3.data;
    }
    private loadOver4(e:egret.Event){
        this.sound4=this.loader4.data;
    }
    private onKeyDOWN(event:KeyboardEvent) {
        if (event.keyCode == 37) {
            this.chara.vx = -5;
        }
        if (event.keyCode == 39) {
            this.chara.vx = 5;
        }
        if (event.keyCode == 38) {
            this.chara.vy = -5;
        }
        if (event.keyCode == 40) {
            this.chara.vy = 5;
        }
        if (event.keyCode == 32) {
            this.cross=true;
        }
    }
    private onKeyUP(event:KeyboardEvent) {
        if (event.keyCode == 37 || event.keyCode == 39) {
            this.chara.vx = 0;
        }
        if (event.keyCode == 38 || event.keyCode == 40) {
            this.chara.vy = 0;
        }
        if (event.keyCode == 32) {
            this.cross=false;
        }
    }
    private enterFrame(e:egret.Event) {
        //�����ƶ�
        this.chara.x+=this.chara.vx;
        this.chara.y+=this.chara.vy;

        //�����ƶ�
        this.enemy1.x += this.enemy1.vx;
        this.enemy1.y += this.enemy1.vy;
        this.enemy2.x += this.enemy2.vx;
        this.enemy2.y += this.enemy2.vy;
        //���Ӽ���
        this.borderChick();
        //�ŷ���
        for(var i=0;i<this.doorArr.length;i++){
            if(this.chara.hitTestPoint(this.doorArr[i].x,this.doorArr[i].y)){
                this.doorArr[i].doorIsOpen = true;
                this.doorArr[i].checkOpen();
            }
            else{
                this.doorArr[i].doorIsOpen = false;
                this.doorArr[i].checkOpen();
            }
        }
        //��ȷ·��
        for(var k=0;k<8;k++) {//���Ӵ����ź�Ӧ�޸�
            if (this.chara.hitTestPoint(this.doorArr[k].x, this.doorArr[k].y) && this.cross) {
                this.soundChann3= this.sound3.play(0,1);//0s�󲥷�1��
                this.chara.x = this.charaPosArrX[k+1];
                this.chara.y = this.charaPosArrY[k+1];
            }
        }
        //����·��
        for(var j= 8; j<17;j++){
            if(this.chara.hitTestPoint(this.doorArr[j].x,this.doorArr[j].y)&& this.cross){
                this.soundChann3= this.sound3.play(0,1);//0s�󲥷�1��
                this.chara.x=this.charaPosArrX[this.currNum];
                this.chara.y=this.charaPosArrY[this.currNum];
            }
        }
        ///�����߽�
        this.checkStageBorder(this.enemy1);
        this.checkStageBorder(this.enemy2);

        //�õ�����
        if(this.chara.hitTestPoint(this.wuqi.x,this.wuqi.y)){
            this.soundChann2= this.sound2.play(0,1);//0s�󲥷�1��
            this.removeChild(this.wuqi);
            this.chara.addChild(this.wuqi);
            this.wuqi.x = 10;
            this.wuqi.y = -5;
            this.canFight=true;
        }
        //��ײ����
        this.hitEnemy(this.enemy1);
        this.hitEnemy(this.enemy2);
        //ʧ��
        if(this.chara.life<0){
            this.gameOver2();
        }
        //ʤ��
        if(this.desIstrue){
            this.destination.visible = true;
        }
        if(this.chara.hitTestPoint(this.destination.x,this.destination.y) && this.destination.visible ==true){
            this.gameOver2();
        }
    }
    //��ײ����
    private hitEnemy(enemy:Enemy){
        if(this.chara.hitTestPoint(enemy.x,enemy.y) && enemy.visible){
            if(this.canFight){
                enemy.visible = false;
                this.canFight = false;
                this.wuqi.visible = false;
                this.desIstrue = true;
            }
            else{
                this.soundChann4= this.sound4.play(0,1);//0s�󲥷�1��
                this.chara.x = this.charaPosArrX[0];
                this.chara.y = this.charaPosArrY[0];
                this.chara.life --;
                this.chara.charaDown();
            }
        }
    }
    //���Ӽ���
    private borderChick() {
        for (var i = 0; i < this.borderArr.length; i++) {
            Collision.block(this.chara, this.borderArr[i]);
            if (Collision.collisionSide == "Bottom") {
                this.chara.vy = 0;
            }
            if (Collision.collisionSide == "Top") {
                this.chara.vy = 0;
            }
            if (Collision.collisionSide == "Left") {
                this.chara.vx = 0;
            }
            if (Collision.collisionSide == "Right") {
                this.chara.vx = 0;
            }
        }
    }
    //ʵ�ִ����������ƶ��¼�
    private numTimer(e:egret.TimerEvent){
        this.currNum = Math.ceil(Math.random()*5-1);
    }
    //���ƹ����ƶ�
    private checkStageBorder(obj:egret.Sprite) {
        if(obj.x<50)
        {
            obj.x=50;
        }
        if(obj.y<50)
        {
            obj.y=50;
        }
        if(obj.x+obj.width/2>800)
        {
            obj.x=800-obj.width/2;
        }
        if(obj.y+obj.height/2>600)
        {
            obj.y=600-obj.height/2;
        }
    }
    //���������ƶ�����
    private createRandomNum1(mon:Enemy) {
        var num:number=Math.ceil(Math.random()*4);
        if(num==1)
        {
            mon.vx=4;
        }
        if(num==2)
        {
            mon.vx=-4;
        }
        if(num==3)
        {
            mon.vy=4;
        }
        if(num==4)
        {
            mon.vy=-4;
        }
    }
    //����׷�����ҹ���
    private createRandomNum2(mon:Enemy) {
        var num:number=Math.ceil(Math.random()*2);
        if(num==1)//ͨ���������������Ҿ����жϣ����������ҷ����ƶ�
        {
            if(this.chara.x>mon.x)
            {
                mon.vx=3;
                mon.vy=0;
            }
            if(this.chara.x<mon.x)
            {
                mon.vx=-3;
                mon.vy=0;
            }
        }
        if(num==2)//ͨ���������������¾����жϣ����������ҷ����ƶ�
        {
            if(this.chara.y>mon.y)
            {
                mon.vx=0;
                mon.vy=3;
            }
            if(this.chara.y<mon.y)
            {
                mon.vx=0;
                mon.vy=-3;
            }
        }
    }
    //����ʱ��
    private timerHd(e:egret.TimerEvent) {
        this.createRandomNum1(this.enemy1);
        this.createRandomNum2(this.enemy2);
    }

    private gameOver2(){
        this.textTimer.removeEventListener(egret.TimerEvent.TIMER,this.numTimer,this);
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerHd,this);
        var src = this;
        document.removeEventListener("keydown", function onKeyDown(event:KeyboardEvent) {
            src.onKeyDOWN(event);
        });
        document.removeEventListener("keyup", function onKeyUp(event:KeyboardEvent) {
            src.onKeyUP(event);
        });
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.charaPosArrX.splice(0,this.charaPosArrX.length);
        this.charaPosArrY.splice(0,this.charaPosArrY.length);
        this.doorArr.splice(0,this.doorArr.length);
        this.borderArr.splice(0,this.borderArr.length);
        this.loader.removeEventListener(egret.Event.COMPLETE,this.loadOver,this);
        this.soundChann.stop();
        this.dispatchEvent(new egret.Event("levelThreeComplete"));
    }
}