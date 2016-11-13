/**
 * 创建一个多边形
 *
 */
var CreateBlock = (function (_super) {
    __extends(CreateBlock, _super);
    function CreateBlock(str, root) {
        _super.call(this);
        this.mouseX = 0; //鼠标XY
        this.mouseY = 0;
        this.sprx = 0; //记录位置XY
        this.spry = 0;
        this.str = str;
        this._root = root;
        this.color = "pic" + this.getColor();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=CreateBlock,p=c.prototype;
    //添加到舞台响应事件
    p.addToStageHd = function () {
        this.block = this.createBlock(this.str); //创建一个多边形
        this.addChild(this.block);
        this.block.anchorOffsetX = this.block.width / 2;
        this.block.anchorOffsetY = this.block.height / 2;
        this.smallHd(); //默认变小
        this.block.touchEnabled = true;
        this.block.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
    };
    //点击开始
    p.touchBeginHd = function (e) {
        //拿起多边形 取消被覆盖的激活
        var colorNum = Number(this.getColor());
        if (this.y < 550 - this.height / 2) {
            for (var i = 0; i < this._root.containerArr.length; i++) {
                if (this.hitTestPoint(this._root.containerArr[i].x, this._root.containerArr[i].y, true)) {
                    this._root.containerArr[i].num -= colorNum;
                }
                if (this._root.containerArr[i].num > 0) {
                    this._root.activeSum += 1;
                }
            }
            this._root.conSum = this._root.activeSum;
            // console.log("取消激活总数:"+this._root.conSum);
            this._root.activeSum = 0;
        }
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
        this.bigHd();
        this._root.setChildIndex(this, -1);
        this.block.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHd, this);
        this.block.addEventListener(egret.TouchEvent.TOUCH_END, this.endHd, this);
    };
    //移动
    p.moveHd = function (e) {
        this.x += e.stageX - this.mouseX;
        this.y += e.stageY - this.mouseY;
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    //点击结束
    p.endHd = function (e) {
        this.dispatchEventWith(GameEvent.CHECKHIT);
        this.block.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHd, this);
        this.block.removeEventListener(egret.TouchEvent.TOUCH_END, this.endHd, this);
    };
    //解析某一关卡的字符串 创建一个多边形
    p.createBlock = function (str) {
        var arr = str.split('').map(Number);
        var rows = arr[0];
        var sum = str.length - 1;
        var hors = 0;
        var vers = 0;
        var spr = new egret.Sprite();
        for (var i = 1; i <= sum; i++) {
            var blockSmall = new Block("pic" + arr[i] + "");
            spr.addChild(blockSmall);
            blockSmall.x = hors * GameData.BLOCK_SIZE + blockSmall.width / 2;
            blockSmall.y = vers * GameData.BLOCK_SIZE + blockSmall.height / 2;
            hors++;
            if (i % rows == 0) {
                hors = 0;
                vers++;
            }
        }
        return spr;
    };
    //得到某一关卡中的颜色
    p.getColor = function () {
        var colorArr = this.str.split("").map(Number);
        var color = "";
        for (var i = 1; i < colorArr.length; i++) {
            if (colorArr[i] <= 0) {
                continue;
            }
            else {
                color = colorArr[i] + "";
                break;
            }
        }
        return color;
    };
    //得到多边形 列数 奇=true 偶=false
    p.getRow = function () {
        var curArr = this.str.split("").map(Number);
        if (curArr[0] % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    //得到多边形 行数 奇=true 偶=false
    p.getLine = function () {
        var curArr = this.str.split("").map(Number);
        if (((curArr.length - 1) / curArr[0]) % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    //得到多边形小方块个数
    p.getBlockNum = function () {
        var colorArr = this.str.split("").map(Number);
        var num = 0;
        for (var i = 1; i < colorArr.length; i++) {
            if (colorArr[i] == 0) {
                continue;
            }
            else {
                num++;
            }
        }
        return num;
    };
    //变小
    p.smallHd = function () {
        this.block.scaleX = 0.4;
        this.block.scaleY = 0.4;
    };
    // 变大
    p.bigHd = function () {
        this.block.scaleX = 1;
        this.block.scaleY = 1;
    };
    p.isTouchEnabled = function () {
        this.block.touchEnabled = false;
    };
    //移除舞台事件响应
    p.removeHd = function () {
        this.block.touchEnabled = false;
        this.block.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
        this.removeChild(this.block);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return CreateBlock;
}(egret.Sprite));
egret.registerClass(CreateBlock,'CreateBlock');
