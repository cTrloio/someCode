
class Character extends egret.Sprite{
    chara:egret.Bitmap;
    public vx:number=0;
    public vy:number=0;
    public accelerationX:number=0;//水平加速度
    public accelerationY:number=0;///竖直加速度
    public speedLim:number=7;//最大速度
    public friction:number=0.96;//摩擦系数
    public bounce:number=-0.3;//弹跳系数
    public gravity:number=0.3;//重力
    public isOnGround:Boolean;//是否在地面
    public jumpForce:number=-25;//跳跃分量
    public constructor(){
        super();
        this.chara = Factory.createBitmapByName("character");
        this.addChild(this.chara);
    }
}