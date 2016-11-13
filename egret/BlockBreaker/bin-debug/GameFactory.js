var GameFactory = (function () {
    function GameFactory() {
    }
    var d = __define,c=GameFactory,p=c.prototype;
    GameFactory.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    GameFactory.createBitmapByJsonName = function (jsonName, sheetName) {
        var result = new egret.Bitmap();
        var spriteSheet = RES.getRes(jsonName);
        result.texture = spriteSheet.getTexture(sheetName);
        return result;
    };
    GameFactory.createShape = function (w, h, color) {
        var shape = new egret.Shape();
        shape.graphics.clear();
        shape.graphics.lineStyle(1, 0x000000);
        shape.graphics.beginFill(color);
        shape.graphics.drawRect(0, 0, w, h);
        shape.graphics.endFill();
        return shape;
    };
    GameFactory.clearShape = function () {
        var shape = new egret.Shape();
        shape.graphics.clear();
        return shape;
    };
    GameFactory.randomColor = function () {
        var num = Math.floor(Math.random() * 10);
        switch (num) {
            case 0:
                return GameFactory.BLOCK_BLUE;
            case 1:
                return GameFactory.BLOCK_ORANGE;
            default:
                return GameFactory.BLOCK_GREEN;
        }
    };
    //score
    GameFactory.score = 0;
    //游戏界面宽高 顶部距离
    GameFactory.sceneWidth = 480;
    GameFactory.sceneHeight = 800;
    GameFactory.sceneTop = 100;
    //砖块宽高
    GameFactory.blockWidth = 75;
    GameFactory.blockHeight = 40;
    //左右墙壁宽高
    GameFactory.wallWidth = 12;
    GameFactory.wallHeight = 800;
    //上下墙壁宽高
    GameFactory.wallTopWidth = 480;
    GameFactory.wallTopHeight = 12;
    //砖块颜色
    GameFactory.BLOCK_BLUE = 0X495555; //change_width_color
    GameFactory.BLOCK_ORANGE = 0XF5913A; //change_bounce_color
    GameFactory.BLOCK_GREEN = 0X7DAA4A;
    //特殊砖块状态
    GameFactory.BLOCK_NAME_GREEN = 'normal';
    GameFactory.BLOCK_NAME_BLUE = 'blue';
    GameFactory.BLOCK_NAME_ORG = 'org';
    //墙颜色
    GameFactory.BLOCK_BLACK = 0X231F2D;
    //滑块颜色
    GameFactory.SLIDER_1 = 0X797EBD;
    GameFactory.SLIDER_2 = 0X495555; //change_width_color
    GameFactory.SLIDER_3 = 0XF5913A; //change_bounce_color
    GameFactory.BACKGROUND = 0X91F397;
    GameFactory.BACKGROUND2 = 0XC1C1C1;
    //子弹颜色
    GameFactory.BULLET_1 = 0XF59E5E;
    //弹力
    GameFactory.bounce = 15;
    //重力
    GameFactory.gravity = 5;
    //砖块碰撞检测状态
    GameFactory.BLOCK_TYPE_CLOSE = 'close';
    GameFactory.BLOCK_TYPE_OPEN = 'open';
    GameFactory.BLOCK_TYPE_OVER = 'over';
    //滑块宽高
    GameFactory.slider_w = 100;
    GameFactory.slider_h = 30;
    //一行共有砖块
    GameFactory.block_Hnum = 6;
    //初始多少列
    GameFactory.block_Vnum = 5;
    return GameFactory;
}());
egret.registerClass(GameFactory,'GameFactory');
//# sourceMappingURL=GameFactory.js.map