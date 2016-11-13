/**
 * Created by Administrator on 2016/4/1.
 */
/**
 * Created by Administrator on 2016/4/1.
 */
var resultPanel = (function (_super) {
    __extends(resultPanel, _super);
    function resultPanel() {
        _super.call(this);
        this.te = Factory.createBitmapByName('resPanel');
        this.addChild(this.te);
        //�������ͣ�
        this.textInterpret = new egret.TextField();
        this.textInterpret.width = 300;
        this.textInterpret.height = 50;
        this.textInterpret.textAlign = egret.HorizontalAlign.LEFT; //ˮƽ����
        this.textInterpret.verticalAlign = egret.VerticalAlign.MIDDLE; //��ֱ����
        this.textInterpret.textColor = 0x000000;
        this.textInterpret.x = this.te.x + 25;
        this.textInterpret.y = this.te.y + 70;
        this.textInterpret.size = 20;
        this.textInterpret.bold = true;
        this.textInterpret.fontFamily = '΢���ź�';
        this.addChild(this.textInterpret);
        //����������
        this.textDerive = new egret.TextField();
        this.textDerive.width = 300;
        this.textDerive.height = 50;
        this.textDerive.textAlign = egret.HorizontalAlign.CENTER; //ˮƽ����
        this.textDerive.verticalAlign = egret.VerticalAlign.MIDDLE; //��ֱ����
        this.textDerive.textColor = 0x000000;
        this.textDerive.x = this.te.x + 25;
        this.textDerive.y = this.te.y + 140;
        this.textDerive.size = 20;
        this.textDerive.bold = true;
        this.textDerive.fontFamily = '΢���ź�';
        this.addChild(this.textDerive);
        this.nextBtn = Factory.createBitmapByName('nextBtn');
        this.addChild(this.nextBtn);
        this.nextBtn.scaleX = 0.7;
        this.nextBtn.scaleY = 0.7;
        this.nextBtn.x = 120;
        this.nextBtn.y = 215;
    }
    var d = __define,c=resultPanel,p=c.prototype;
    return resultPanel;
}(egret.Sprite));
egret.registerClass(resultPanel,'resultPanel');
//# sourceMappingURL=resultPanel.js.map