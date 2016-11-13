/**
 * Created by Administrator on 2015/12/2.
 */
class LevelTwo extends egret.Sprite{
    private sound:egret.Sound;
    private loader:egret.URLLoader;
    private soundChann:egret.SoundChannel;
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
    private borderBox1:BorderBox;
    private borderBox2:BorderBox;
    private borderBox3:BorderBox;
    private borderBox4:BorderBox;
    private borderBox5:BorderBox;
    private borderBox6:BorderBox;
    private borderBox7:BorderBox;
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
    private cross:boolean;
    private charaPosArrX:number[];
    private charaPosArrY:number[];
    private doorArr:Array<Door>=[];
    private borderArr:Array<BorderBox> = [];
    private currNum:number=0;
    private enemy1:Enemy;
    private enemy2:Enemy;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event:egret.Event) {
        this.createGameScene();
    }
    private createGameScene(){
        this.addObject();
        this.addEventHd();
    }
    private addEventHd(){
        this.textTimer = new egret.Timer(1000);
        this.textTimer.addEventListener(egret.TimerEvent.TIMER, this.numTimer, this);
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
    private addObject(){
        //bgm
        this.loader=new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE,this.loadOver,this);
        this.loader.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader.load(new egret.URLRequest("resource/music/lev2.mp3"));
        this.loader3=new egret.URLLoader();
        this.loader3.addEventListener(egret.Event.COMPLETE,this.loadOver3,this);
        this.loader3.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader3.load(new egret.URLRequest("resource/music/bobo.wav"));
        this.loader4=new egret.URLLoader();
        this.loader4.addEventListener(egret.Event.COMPLETE,this.loadOver4,this);
        this.loader4.dataFormat=egret.URLLoaderDataFormat.SOUND;
        this.loader4.load(new egret.URLRequest("resource/music/hit.wav"));
        //λ��(��ͼֽ 0 - 5 ˳��)
        this.charaPosArrX = [470,735,735,200,200,470];
        this.charaPosArrY = [450,450,150,150,450,150];
        //����
        this.bg=new Background('level2');
        this.bg.x=0;
        this.bg.y=0;
        this.addChild(this.bg);
        //�յ�
        this.destination=new End('two');
        this.destination.x=300;
        this.destination.y=150;
        this.addChild(this.destination);
        //����
        this.chara=new Character();
        this.chara.x=this.charaPosArrX[0];
        this.chara.y=this.charaPosArrY[0];
        this.addChild(this.chara);
        //����
        this.enemy1=new Enemy('soul1');
        this.enemy1.x=100;
        this.enemy1.y=100;
        this.addChild(this.enemy1);
        this.enemy2=new Enemy('soul1');
        this.enemy2.x=700;
        this.enemy2.y=100;
        this.addChild(this.enemy2);
        //����
        this.borderBox1 = new BorderBox('her');
        this.borderBox2 = new BorderBox('her');
        this.borderBox3 = new BorderBox('her');
        this.borderBox4 = new BorderBox('ver');
        this.borderBox5 = new BorderBox('ver');
        this.borderBox6 = new BorderBox('ver');
        this.borderBox7 = new BorderBox('ver');
            //��������
        this.borderBox1.x = 0;
        this.borderBox1.y = this.borderBox1.height / 2+15;
        this.borderBox2.x = 0;
        this.borderBox2.y = 300 - this.borderBox2.height / 2+25;
        this.borderBox3.x = 0;
        this.borderBox3.y = 600 - this.borderBox3.height / 2+20;
            //�ĸ�����
        this.borderBox4.x = this.borderBox4.width / 2+5;
        this.borderBox4.y = 0;
        this.borderBox5.x = 265 - this.borderBox5.width / 2+25;
        this.borderBox5.y = 0;
        this.borderBox6.x = 530 - this.borderBox6.width / 2+35;
        this.borderBox6.y = 0;
        this.borderBox7.x = 800 - this.borderBox7.width / 2+30;
        this.borderBox7.y = 0;
        this.addChild(this.borderBox1);
        this.addChild(this.borderBox2);
        this.addChild(this.borderBox3);
        this.addChild(this.borderBox4);
        this.addChild(this.borderBox5);
        this.addChild(this.borderBox6);
        this.addChild(this.borderBox7);
        this.borderArr.push(this.borderBox1);
        this.borderArr.push(this.borderBox2);
        this.borderArr.push(this.borderBox3);
        this.borderArr.push(this.borderBox4);
        this.borderArr.push(this.borderBox5);
        this.borderArr.push(this.borderBox6);
        this.borderArr.push(this.borderBox7);
        //������(ǰ������ȷ�ţ�����������)
        this.door1=new Door('two');
        this.door2=new Door('two');
        this.door3=new Door('two');
        this.door4=new Door('two');
        this.door5=new Door('two');
        this.door1.x=300;
        this.door1.y=450;
        this.door2.x=645;
        this.door2.y=450;
        this.door3.x=570;
        this.door3.y=150;
        this.door4.x=40;
        this.door4.y=150;
        this.door5.x=40;
        this.door5.y=450;
        this.addChild(this.door1);
        this.addChild(this.door2);
        this.addChild(this.door3);
        this.addChild(this.door4);
        this.addChild(this.door5);
        this.doorArr.push(this.door1);
        this.doorArr.push(this.door2);
        this.doorArr.push(this.door3);
        this.doorArr.push(this.door4);
        this.doorArr.push(this.door5);
        this.door6=new Door('two');
        this.door7=new Door('two');
        this.door8=new Door('two');
        this.door9=new Door('two');
        this.door10=new Door('two');
        this.door6.x=570;
        this.door6.y=450;
        this.door7.x=645;
        this.door7.y=150;
        this.door8.x=130;
        this.door8.y=150;
        this.door9.x=130;
        this.door9.y=450;
        this.door10.x=400;
        this.door10.y=150;
        this.addChild(this.door6);
        this.addChild(this.door7);
        this.addChild(this.door8);
        this.addChild(this.door9);
        this.addChild(this.door10);
        this.doorArr.push(this.door6);
        this.doorArr.push(this.door7);
        this.doorArr.push(this.door8);
        this.doorArr.push(this.door9);
        this.doorArr.push(this.door10);
    }
    //��������
    private loadOver(e:egret.Event)
    {
        this.sound=this.loader.data;
        //this.sound.play(0,0);
        this.soundChann= this.sound.play(0,0);
    }
    private loadOver3(e:egret.Event){
        this.sound3=this.loader3.data;
    }
    private loadOver4(event:egret.Event){
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
        this.enemy1.x+=this.enemy1.vx;
        this.enemy1.y+=this.enemy1.vy;
        this.enemy2.x+=this.enemy2.vx;
        this.enemy2.y+=this.enemy2.vy;
        //���������ƶ�
        this.checkStageBorder(this.enemy1);
        this.checkStageBorder(this.enemy2);
        //�����ƶ�
        this.chara.x+=this.chara.vx;
        this.chara.y+=this.chara.vy;
        //��ȷ�ż���
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
        for(var k=0;k<5;k++) {//���Ӵ����ź�Ӧ�޸�
            if (this.chara.hitTestPoint(this.doorArr[k].x, this.doorArr[k].y) && this.cross) {
                this.soundChann3= this.sound3.play(0,1);//0s�󲥷�1��
                this.chara.x = this.charaPosArrX[k+1];
                this.chara.y = this.charaPosArrY[k+1];
            }
        }
        //����·��(�������յ�)
        for(var j= 5; j<10;j++){
            if(this.chara.hitTestPoint(this.doorArr[j].x,this.doorArr[j].y)&& this.cross){
                this.soundChann3= this.sound3.play(0,1);//0s�󲥷�1��
                this.chara.x=this.charaPosArrX[this.currNum];
                this.chara.y=this.charaPosArrY[this.currNum];
            }
        }
        //���ӱ߽�����
        this.borderChick();
        //�����յ�
        if(this.chara.hitTestPoint(this.destination.x,this.destination.y)){
            this.gameOver('next');
        }
        this.hitEnemy();
    }
    private hitEnemy(){
        //��������
        if(this.chara.hitTestPoint(this.enemy1.x,this.enemy1.y)){
            this.chara.x = this.charaPosArrX[0];
            this.chara.y = this.charaPosArrY[0];
            this.chara.life--;
            this.chara.charaDown();
            this.soundChann4= this.sound4.play(0,1);//0s�󲥷�1��
        }
        //����һֱ��ײchara.life��һֱ���١�so�ص����㣬�����ص�������������������(bug������)...�Ǿ�ֻ�ܹ��Լ���������
        if(this.chara.hitTestPoint(this.enemy2.x,this.enemy2.y)){
            this.chara.x = this.charaPosArrX[0];
            this.chara.y = this.charaPosArrY[0];
            this.chara.life--;
            this.chara.charaDown();
            this.soundChann4= this.sound4.play(0,1);//0s�󲥷�1��
        }
        if(this.chara.life<0){
            this.gameOver('over');
        }
    }
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
        this.currNum = Math.ceil(Math.random()*5-1);//-1���ǲ������յ�
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
    private createRandomNum(mon:Enemy) {
        var num:number=Math.ceil(Math.random()*4);
        if(num==1)
        {
            mon.vx=2;
        }
        if(num==2)
        {
            mon.vx=-2;
        }
        if(num==3)
        {
            mon.vy=2;
        }
        if(num==4)
        {
            mon.vy=-2;
        }
    }
    private timerHd(e:egret.TimerEvent) {
        this.createRandomNum(this.enemy1);
        this.createRandomNum(this.enemy2);
    }
    private gameOver(buff:string){
        if(buff == 'next'){
            this.dispatchEvent(new egret.Event("levelTwoComplete"));
        }
        if(buff == 'over'){
            this.dispatchEvent(new egret.Event("levelThreeComplete"));
        }
        this.textTimer.removeEventListener(egret.TimerEvent.TIMER,this.numTimer,this);
        document.removeEventListener("keydown", function onKeyDown(event:KeyboardEvent) {this.onKeyDOWN(event);});
        document.removeEventListener("keyup", function onKeyUp(event:KeyboardEvent) {this.onKeyUP(event);});
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrame, this);
        this.loader.removeEventListener(egret.Event.COMPLETE,this.loadOver,this);
        this.soundChann.stop();
        this.charaPosArrX.splice(0,this.charaPosArrX.length);
        this.charaPosArrY.splice(0,this.charaPosArrY.length);
        this.doorArr.splice(0,this.doorArr.length);
        this.borderArr.splice(0,this.borderArr.length);
    }
}