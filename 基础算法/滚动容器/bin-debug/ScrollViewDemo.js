var ScrollViewDemo = (function (_super) {
    __extends(ScrollViewDemo, _super);
    function ScrollViewDemo() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=ScrollViewDemo,p=c.prototype;
    p.onAddToStage = function () {
        //创建内容，边长为50 * 50 的格子 9 * 9个。
        var content = this.createGird(50, 50, 9, 9);
        //创建ScrollView
        var myscrollView = new egret.ScrollView();
        myscrollView.setContent(content);
        myscrollView.width = 200;
        myscrollView.height = 300;
        myscrollView.x = this.stage.stageWidth / 2;
        myscrollView.y = this.stage.stageHeight / 2;
        myscrollView.anchorOffsetX = myscrollView.width / 2;
        myscrollView.anchorOffsetY = myscrollView.height / 2;
        this.addChild(myscrollView);
        myscrollView.bounces = false; //启用弹回
        //背景图，用来展现ScrollView 的边界
        var background = new egret.Shape();
        background.graphics.lineStyle(1, 0x1102cc);
        background.graphics.drawRect(0, 0, 200, 300);
        background.graphics.endFill();
        background.x = this.stage.stageWidth / 2;
        background.y = this.stage.stageHeight / 2;
        background.anchorOffsetX = background.width / 2;
        background.anchorOffsetY = background.height / 2;
        this.addChild(background);
    };
    //创建格子函数，根据输入的宽和高来创建一个 row * line的格子图。并返回Shape对象。
    p.createGird = function (w, h, row, line) {
        var shape = new egret.Shape();
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < line; j++) {
                if ((j + row * i) % 2 === 0) {
                    shape.graphics.beginFill(0xF9C20B);
                    shape.graphics.drawRect(j * w, i * h, w, h);
                    shape.graphics.endFill();
                }
                else {
                    shape.graphics.beginFill(0x2A9FFF);
                    shape.graphics.drawRect(j * w, i * h, w, h);
                    shape.graphics.endFill();
                }
            }
        }
        return shape;
    };
    return ScrollViewDemo;
}(egret.DisplayObjectContainer));
egret.registerClass(ScrollViewDemo,'ScrollViewDemo');
