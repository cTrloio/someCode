/**
 * Created by Administrator on 2016/4/1.
 */
/**
 * Created by Administrator on 2016/4/1.
 */
class resultPanel extends egret.Sprite{
    te:egret.Bitmap;
    public textInterpret:egret.TextField;
    public textDerive:egret.TextField;
    public nextBtn:egret.Bitmap;
    public constructor(){
        super();
        this.te=Factory.createBitmapByName('resPanel');
        this.addChild(this.te);
        //成语解释：
        this.textInterpret=new egret.TextField();
        this.textInterpret.width=300;
        this.textInterpret.height=50;
        this.textInterpret.textAlign=egret.HorizontalAlign.LEFT;        //水平对齐
        this.textInterpret.verticalAlign=egret.VerticalAlign.MIDDLE;      //竖直对齐
        this.textInterpret.textColor=0x000000;
        this.textInterpret.x=this.te.x+25;
        this.textInterpret.y=this.te.y+70;
        this.textInterpret.size=20;
        this.textInterpret.bold=true;
        this.textInterpret.fontFamily='微软雅黑';
        this.addChild(this.textInterpret);
        //成语出处：
        this.textDerive=new egret.TextField();
        this.textDerive.width=300;
        this.textDerive.height=50;
        this.textDerive.textAlign=egret.HorizontalAlign.CENTER;        //水平对齐
        this.textDerive.verticalAlign=egret.VerticalAlign.MIDDLE;      //竖直对齐
        this.textDerive.textColor=0x000000;
        this.textDerive.x=this.te.x+25;
        this.textDerive.y=this.te.y+140;
        this.textDerive.size=20;
        this.textDerive.bold=true;
        this.textDerive.fontFamily='微软雅黑';
        this.addChild(this.textDerive);

        this.nextBtn=Factory.createBitmapByName('nextBtn');
        this.addChild(this.nextBtn);
        this.nextBtn.scaleX=0.7;
        this.nextBtn.scaleY=0.7;
        this.nextBtn.x=120;
        this.nextBtn.y=215;
    }
}