var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox(name) {
        _super.call(this);
        this.proX = 0;
        this.proY = 0;
        this.clickNum = 0;
        this.onNum = 0;
        this.onBottom = false;
        this.tb = Factory.createBitmapByName(name);
        this.addChild(this.tb);
        this.tbText = new egret.TextField();
        this.tbText.width = 45;
        this.tbText.height = 45;
        this.tbText.textAlign = egret.HorizontalAlign.CENTER; //ˮƽ����
        this.tbText.verticalAlign = egret.VerticalAlign.MIDDLE; //��ֱ����
        this.tbText.textColor = 0x000000;
        this.tbText.x = this.tb.x;
        this.tbText.y = this.tb.y;
        this.tbText.text = '';
        this.tbText.bold = true;
        this.tbText.fontFamily = '΢���ź�';
        this.addChild(this.tbText);
    }
    var d = __define,c=TextBox,p=c.prototype;
    return TextBox;
}(egret.Sprite));
egret.registerClass(TextBox,'TextBox');
//# sourceMappingURL=TextBox.js.map