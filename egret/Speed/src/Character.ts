
class Character extends egret.Sprite{
    chara:egret.Bitmap;
    public vx:number=0;
    public vy:number=0;
    public accelerationX:number=0;//ˮƽ���ٶ�
    public accelerationY:number=0;///��ֱ���ٶ�
    public speedLim:number=7;//����ٶ�
    public friction:number=0.96;//Ħ��ϵ��
    public bounce:number=-0.3;//����ϵ��
    public gravity:number=0.3;//����
    public isOnGround:Boolean;//�Ƿ��ڵ���
    public jumpForce:number=-25;//��Ծ����
    public constructor(){
        super();
        this.chara = Factory.createBitmapByName("character");
        this.addChild(this.chara);
    }
}