var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.call(this);
        this.vx = 0;
        this.vy = 0;
        this.accelerationX = 0; //ˮƽ���ٶ�
        this.accelerationY = 0; ///��ֱ���ٶ�
        this.speedLim = 7; //�����ٶ�
        this.friction = 0.96; //Ħ��ϵ��
        this.bounce = -0.3; //����ϵ��
        this.gravity = 0.3; //����
        this.jumpForce = -25; //��Ծ����
        this.chara = Factory.createBitmapByName("character");
        this.addChild(this.chara);
    }
    var d = __define,c=Character,p=c.prototype;
    return Character;
}(egret.Sprite));
egret.registerClass(Character,'Character');
//# sourceMappingURL=Character.js.map