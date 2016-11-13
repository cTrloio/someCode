class TextBox extends egret.Sprite{
    public proX:number=0;
    public proY:number=0;
    public clickNum:number=0;
    public onNum:number=0;
    public onBottom:boolean=false;
    tb:egret.Bitmap;
    public tbText:egret.TextField;
    public constructor(name:string){
        super();
        this.tb=Factory.createBitmapByName(name);
        this.addChild(this.tb);
        this.tbText=new egret.TextField();
        this.tbText.width=45;
        this.tbText.height=45;
        this.tbText.textAlign=egret.HorizontalAlign.CENTER;        //水平对齐
        this.tbText.verticalAlign=egret.VerticalAlign.MIDDLE;      //竖直对齐
        this.tbText.textColor=0x000000;
        this.tbText.x=this.tb.x;
        this.tbText.y=this.tb.y;
        this.tbText.text='';
        this.tbText.bold=true;
        this.tbText.fontFamily='微软雅黑';
        this.addChild(this.tbText);
    }
}