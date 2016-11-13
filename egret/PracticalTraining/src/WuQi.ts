/**
 * Created by Administrator on 2015/12/9.
 */
class WuQi extends egret.Sprite{
    wuqi:egret.Bitmap;
    public constructor(){
        super();
        this.wuqi = Factory.createBitmapByName('Wuqi');
        this.addChild(this.wuqi);
        this.wuqi.anchorOffsetX = this.wuqi.width/2;
        this.wuqi.anchorOffsetY = this.wuqi.height/2;
    }
}