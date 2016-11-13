/**
 * 游戏主场景
 * 包括	容纳多边形的容器
 * 		 某一关卡对应得多边形
 * 		 下方选择多边形的按钮
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        //当前关卡数
        this.currSceneNum = GameData.sceneNumber;
        //过关条件
        this.conSum = 0;
        //被激活数量
        this.activeSum = 0;
        //容器
        this.containerArr = [];
        //某关卡方块描述信息
        this.currStrArr = [];
        //某关卡方块对象数组
        this.blockArr = [];
        this.once(egret.Event.ADDED_TO_STAGE, this.addStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=GameScene,p=c.prototype;
    p.addStageHd = function () {
        this.addObjectHd();
    };
    p.addObjectHd = function () {
        this.gp = new GamePanel(this.currSceneNum);
        this.addChild(this.gp);
        this.addBtn();
        this.addContainer();
        this.addBlock();
        this.addSelePanel();
    };
    p.addBtn = function () {
        //重来 返回
        var replay = this.createBtn("repaly");
        var exit = this.createBtn("exit");
        replay.x = 410 + replay.width / 2;
        exit.x = 10 + exit.width / 2;
        replay.y = 10 + replay.height / 2;
        exit.y = 10 + exit.height / 2;
        this.addChild(replay);
        this.addChild(exit);
        replay.touchEnabled = true;
        exit.touchEnabled = true;
        replay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.replayHd, this);
        exit.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.exitHd, this);
    };
    p.replayHd = function (e) {
        e.target.scaleX = 0.8;
        e.target.scaleY = 0.8;
        e.target.once(egret.TouchEvent.TOUCH_END, this.replayEndHd, this);
    };
    p.exitHd = function (e) {
        e.target.scaleX = 0.8;
        e.target.scaleY = 0.8;
        e.target.once(egret.TouchEvent.TOUCH_END, this.exitEndHd, this);
    };
    p.replayEndHd = function (e) {
        var _this = this;
        e.target.scaleX = 1;
        e.target.scaleY = 1;
        setTimeout(function () {
            _this.removeChildren();
            _this.containerArr.length = 0;
            _this.currStrArr.length = 0;
            _this.blockArr.length = 0;
            _this.currSceneNum = GameData.sceneNumber;
            _this.conSum = 0;
            _this.addObjectHd();
        }, 200);
    };
    p.exitEndHd = function (e) {
        var _this = this;
        e.target.scaleX = 1;
        e.target.scaleY = 1;
        setTimeout(function () {
            _this.dispatchEventWith(GameEvent.GAMEOVER);
        }, 200);
    };
    p.addContainer = function () {
        var hor = 0;
        var ver = 0;
        for (var i = 0; i < GameData.ConSizeX * GameData.ConSizeY; i++) {
            var con = new Block("pic888");
            con.x = hor * GameData.BLOCK_SIZE + GameData.SCENE_BORDER + con.width / 2;
            con.y = ver * GameData.BLOCK_SIZE + 100 + con.height / 2;
            hor++;
            if (hor >= GameData.ConSizeX) {
                hor = 0;
                ver++;
            }
            this.containerArr.push(con);
            this.addChild(con);
        }
    };
    p.addBlock = function () {
        this.currStrArr = GameData.sumArr[this.currSceneNum - 1].split('|');
        for (var i = 0; i < this.currStrArr.length; i++) {
            var block = new CreateBlock(this.currStrArr[i], this);
            this.blockArr.push(block);
            this.addChild(block);
            block.x = i * GameData.BLOCK_SIZE * 2 / 3 + GameData.SCENE_BORDER + (GameData.sumArr.length + 1 - this.currSceneNum) * 30;
            block.y = 550 + block.height / 2;
            block.sprx = block.x;
            block.spry = block.y;
            block.addEventListener(GameEvent.CHECKHIT, this.checkHitHd, this);
        }
    };
    p.checkHitHd = function (e) {
        var _this = this;
        var sqr = e.target;
        var rowBool = sqr.getRow();
        var lineBool = sqr.getLine();
        //吸附
        for (var i = 0; i < this.containerArr.length; i++) {
            if (this.getDistance(sqr, this.containerArr[i]) <= 49) {
                if (rowBool && lineBool) {
                    sqr.x = this.containerArr[i].x + this.containerArr[i].width / 2;
                    sqr.y = this.containerArr[i].y + this.containerArr[i].height / 2;
                }
                else if (!rowBool && lineBool) {
                    sqr.x = this.containerArr[i].x;
                    sqr.y = this.containerArr[i].y + this.containerArr[i].height / 2;
                }
                else if (rowBool && !lineBool) {
                    sqr.x = this.containerArr[i].x + this.containerArr[i].width / 2;
                    sqr.y = this.containerArr[i].y;
                }
                else {
                    sqr.x = this.containerArr[i].x;
                    sqr.y = this.containerArr[i].y;
                }
                break;
            }
        }
        //越界归位
        if (sqr.y > 550 - sqr.height / 2 || sqr.y < 70 + sqr.height / 2 || sqr.x < sqr.width / 2 || sqr.x > GameData.stageW - sqr.width / 2) {
            sqr.x = sqr.sprx;
            sqr.y = sqr.spry;
            sqr.smallHd();
            return;
        }
        //被多边形覆盖的容器子集变为激活状态
        var sqrColor = Number(sqr.getColor());
        for (var i = 0; i < this.containerArr.length; i++) {
            if (sqr.hitTestPoint(this.containerArr[i].x, this.containerArr[i].y, true)) {
                this.containerArr[i].num += sqrColor;
            }
            if (this.containerArr[i].num > 0) {
                this.activeSum += 1;
            }
        }
        this.conSum = this.activeSum;
        this.activeSum = 0;
        // console.log("覆盖后被激活总数:"+this.conSum);
        setTimeout(function () { _this.gameOverHd(); }, 300);
    };
    //获取两对象之间的距离
    p.getDistance = function (obj1, obj2) {
        var dis = Math.sqrt(Math.abs(obj1.x - obj2.x) * Math.abs(obj1.x - obj2.x) +
            Math.abs(obj1.y - obj2.y) * Math.abs(obj1.y - obj2.y));
        return dis;
    };
    //下方滑块
    p.addSelePanel = function () {
        var selBtnNum = this.blockArr.length || 6; //本关方块数量
        var colorArr = []; //本关方块颜色
        var curCor = []; //某个方块颜色字符串拆分开的数组
        var cor = 0; //拆分开的数组里的某个数字
        var corStr = ""; //有颜色的数字
        /** 得到本关所有方块颜色*/
        for (var i = 0; i < this.currStrArr.length; i++) {
            curCor = this.currStrArr[i].split("");
            for (var j = 1; j < curCor.length; j++) {
                cor = Number(curCor[j]);
                if (cor <= 0) {
                    continue;
                }
                else {
                    corStr = cor + "";
                    colorArr.push(corStr);
                    break;
                }
            }
        }
        //创建相应个数滑块
        var selBtn = new egret.Sprite();
        for (var i = 0; i < selBtnNum; i++) {
            var block = new Block("pic" + colorArr[i] + "");
            selBtn.addChild(block);
            block.x = i * GameData.BLOCK_SIZE + block.width / 2;
            block.y = block.height / 2;
            block.vy = block.y;
            block.touchEnabled = true;
            block.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHd, this);
        }
        //滚动滑块
        var myScroller = new egret.ScrollView();
        myScroller.width = 420;
        myScroller.height = 80;
        myScroller.x = 30;
        myScroller.y = 727;
        myScroller.setContent(selBtn);
        this.addChild(myScroller);
        myScroller.bounces = true;
        myScroller.verticalScrollPolicy = "off";
        myScroller.horizontalScrollPolicy = "auto";
    };
    //点击滑块相应颜色方块显示在最上面
    p.btnTouchHd = function (e) {
        var tw = egret.Tween.get(e.target, { loop: false });
        tw.to({ y: e.target.y - 5 }).wait(300).to({ y: e.target.vy });
        var curBtn = e.target.str;
        var block;
        for (var i = 0; i < this.blockArr.length; i++) {
            if (this.blockArr[i].color === curBtn) {
                block = i;
                break;
            }
        }
        this.setChildIndex(this.blockArr[block], -1);
    };
    p.createBtn = function (type) {
        var btn = new egret.Bitmap();
        btn = GameData.createBitmapByName(type);
        btn.anchorOffsetX = btn.width / 2;
        btn.anchorOffsetY = btn.height / 2;
        return btn;
    };
    //游戏结束
    p.gameOverHd = function () {
        var _this = this;
        var sceneNum = GameData.sumArr.length - 1;
        if (this.conSum >= GameData.ConSizeX * GameData.ConSizeY) {
            for (var i = 0; i < this.blockArr.length; i++) {
                this.blockArr[i].isTouchEnabled();
            }
            this.setChildIndex(this.gp, -1);
            if (GameData.sceneNumber <= sceneNum) {
                GameData.sceneNumber++;
                if (GameData.unlockNum < GameData.sumArr.length) {
                    GameData.unlockNum++;
                }
                else {
                    GameData.unlockNum = GameData.sumArr.length;
                }
            }
            else {
                GameData.sceneNumber = 1;
                //通关~ 目前效果回到开始
                this.dispatchEventWith(GameEvent.GAMEOVER);
            }
            setTimeout(function () {
                _this.removeChildren();
                _this.containerArr.length = 0;
                _this.currStrArr.length = 0;
                _this.blockArr.length = 0;
                _this.currSceneNum = GameData.sceneNumber;
                _this.conSum = 0;
                _this.addObjectHd();
            }, 1500);
        }
    };
    //移除舞台事件
    p.removeHd = function () {
        this.removeChildren();
        this.containerArr.length = 0;
        this.currStrArr.length = 0;
        this.blockArr.length = 0;
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return GameScene;
}(egret.Sprite));
egret.registerClass(GameScene,'GameScene');
