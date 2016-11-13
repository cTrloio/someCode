var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.blockArr = [];
        this.wallArr = [];
        this.starArr = [];
        this.resetNum = 0;
        this.score = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStageHd, this);
    }
    var d = __define,c=GameScene,p=c.prototype;
    p.addToStageHd = function (e) {
        this.addObjectHd();
        this.addEventHd();
    };
    p.addObjectHd = function () {
        //构造 砖块二维数组
        for (var i = 0; i < GameFactory.block_Vnum; i++) {
            this.blockArr[i] = new Array(GameFactory.block_Hnum);
        }
        for (var i = 0; i < GameFactory.block_Vnum; i++) {
            for (var j = 0; j < GameFactory.block_Hnum; j++) {
                this.blockArr[i][j] = new Block(GameFactory.randomColor());
            }
        }
        //背景
        var bg = GameFactory.createShape(GameFactory.sceneWidth, GameFactory.sceneHeight, GameFactory.BACKGROUND2);
        bg.y = GameFactory.sceneTop;
        this.addChild(bg);
        //分数
        this.showScore = new egret.TextField();
        this.showScore.text = this.score + "";
        this.showScore.size = 60;
        this.showScore.bold = true;
        this.showScore.x = GameFactory.sceneWidth / 2 - this.showScore.width / 2;
        this.showScore.y = 20;
        this.addChild(this.showScore);
        this.createWall();
        this.createBlock();
        this.createSlider();
        this.createBullet();
    };
    p.addEventHd = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.once(egret.TouchEvent.TOUCH_TAP, this.init, this);
        this.resetSlider = new egret.Timer(15000);
        this.resetSlider.addEventListener(egret.TimerEvent.TIMER, this.resetSliderHd, this);
    };
    //开始游戏
    p.init = function (e) {
        this.bullet.canLunch = true;
        var angle = Math.atan2(e.stageY - this.slider.y, e.stageX - this.slider.x);
        this.bullet.speedX = Math.cos(angle) * this.slider.bounce;
        this.bullet.speedY = Math.sin(angle) * this.slider.bounce;
    };
    p.enterHd = function (e) {
        if (this.bullet.canLunch) {
            this.bullet.x += this.bullet.speedX;
            this.bullet.y += this.bullet.speedY;
            //特效跟随
            this.par.emitterX = this.bullet.x + this.bullet.width / 2;
            this.par.emitterY = this.bullet.y + this.bullet.height / 2;
            //碰撞检测
            this.collisionWall();
            this.collisionSlider();
            this.collisionBlock();
            //掉落块
            this.starHd();
            //游戏失败
            if (this.bullet.y > 800) {
                GameFactory.score = this.score;
                this.dispatchEvent(new egret.Event('gameover'));
            }
            //重置游戏
            if (this.resetNum >= 30 && this.bullet.y > 500) {
                for (var i = 0; i < this.blockArr.length; i++) {
                    for (var j = 0; j < this.blockArr[i].length; j++) {
                        this.blockArr[i][j].alpha = 1;
                        this.blockArr[i][j].collisioned = GameFactory.BLOCK_TYPE_CLOSE;
                    }
                }
                this.resetNum = 0;
                //初始化位于最下方一排 响应碰撞检测
                for (var k = 0; k < this.blockArr[0].length; k++) {
                    this.blockArr[4][k].collisioned = GameFactory.BLOCK_TYPE_OPEN;
                }
            }
        }
    };
    p.starHd = function () {
        for (var i = 0; i < this.starArr.length; i++) {
            if (this.starArr[i] != null) {
                this.starArr[i].y += GameFactory.gravity;
                if (this.starArr[i].y > 1000) {
                    this.removeChild(this.starArr[i]);
                    this.starArr[i] = null;
                    this.starArr.splice(i, 1);
                    return;
                }
                Collision.block(this.starArr[i], this.slider);
                if (Collision.collisionSide == 'Top' || Collision.collisionSide == 'Bottom' ||
                    Collision.collisionSide == 'Right' || Collision.collisionSide == 'Left') {
                    if (this.starArr[i].name == GameFactory.BLOCK_NAME_BLUE) {
                        this.slider.changeSliderWidth(200);
                    }
                    else {
                        this.slider.changeSliderBounce(10);
                    }
                    this.resetSlider.reset();
                    this.resetSlider.start();
                    this.removeChild(this.starArr[i]);
                    this.starArr[i] = null;
                    this.starArr.splice(i, 1);
                }
            }
        }
    };
    p.dosomething = function (i, j) {
        this.resetNum++;
        if (GameFactory.gravity > 5) {
            this.score += 2;
        }
        else {
            this.score++;
        }
        this.showScore.text = this.score + "";
        this.blockArr[i][j].alpha = 0;
        this.blockArr[i][j].collisioned = GameFactory.BLOCK_TYPE_OVER;
        this.sarchColled(i, j);
        if (this.blockArr[i][j].name == GameFactory.BLOCK_NAME_BLUE) {
            var star = this.createStar(GameFactory.BLOCK_NAME_BLUE, GameFactory.SLIDER_2, this.blockArr[i][j]);
            this.addChild(star);
            this.starArr.push(star);
        }
        if (this.blockArr[i][j].name == GameFactory.BLOCK_NAME_ORG) {
            var star = this.createStar(GameFactory.BLOCK_NAME_ORG, GameFactory.SLIDER_3, this.blockArr[i][j]);
            this.addChild(star);
            this.starArr.push(star);
        }
    };
    p.collisionBlock = function () {
        for (var i = 0; i < this.blockArr.length; i++) {
            for (var j = 0; j < this.blockArr[i].length; j++) {
                if (this.blockArr[i][j].collisioned == 'open') {
                    Collision.block(this.blockArr[i][j], this.bullet);
                    if (Collision.collisionSide == 'Top') {
                        this.bullet.speedY = -(this.bullet.speedY);
                        this.dosomething(i, j);
                    }
                    else if (Collision.collisionSide == 'Bottom') {
                        this.bullet.speedY = -(this.bullet.speedY);
                        this.dosomething(i, j);
                    }
                    else if (Collision.collisionSide == 'Left') {
                        this.bullet.speedX = -(this.bullet.speedX);
                        this.dosomething(i, j);
                    }
                    else if (Collision.collisionSide == 'Right') {
                        this.bullet.speedX = -(this.bullet.speedX);
                        this.dosomething(i, j);
                    }
                }
            }
        }
    };
    p.collisiionDo = function (e1, e2) {
        Collision.block(e1, e2);
        if (Collision.collisionSide == 'Top') {
            e2.speedY = -(e2.speedY);
        }
        else if (Collision.collisionSide == 'Bottom') {
            e2.speedY = -(e2.speedY);
        }
        else if (Collision.collisionSide == 'Left') {
            e2.speedX = -(e2.speedX);
        }
        else if (Collision.collisionSide == 'Right') {
            e2.speedX = -(e2.speedX);
        }
    };
    p.collisionWall = function () {
        for (var i = 0; i < this.wallArr.length; i++) {
            this.collisiionDo(this.wallArr[i], this.bullet);
        }
    };
    p.collisionSlider = function () {
        Collision.block(this.slider, this.bullet, 'slider');
        var divergeAngle, over_y, over_x;
        if (Collision.collisionSide == 'Top' || Collision.collisionSide == 'Bottom' ||
            Collision.collisionSide == 'Right' || Collision.collisionSide == 'Left') {
            //再次偏离角度 取决于 子弹和滑块的偏离角度
            over_y = this.bullet.y - this.slider.y;
            over_x = this.bullet.x - this.slider.x;
            divergeAngle = Math.atan2(over_y, over_x);
            this.bullet.speedX = Math.cos(divergeAngle) * this.slider.bounce;
            this.bullet.speedY = Math.sin(divergeAngle) * this.slider.bounce;
        }
    };
    p.touchBeginHd = function (e) {
        // this.addChild(this.line);
        this.mouseX = e.stageX;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHd, this);
    };
    p.touchMoveHd = function (e) {
        if (this.slider.x < GameFactory.wallWidth + this.slider.width / 2) {
            this.slider.x = GameFactory.wallWidth + this.slider.width / 2;
        }
        if (this.slider.x > GameFactory.sceneWidth - this.slider.width / 2 - GameFactory.wallWidth) {
            this.slider.x = GameFactory.sceneWidth - this.slider.width / 2 - GameFactory.wallWidth;
        }
        //游戏开始前 子弹/特效 跟随滑块
        if (!this.bullet.canLunch) {
            this.bullet.x = this.slider.x;
            this.par.emitterX = this.slider.x;
        }
        this.slider.x += e.stageX - this.mouseX;
        this.mouseX = e.stageX;
    };
    p.touchEndHd = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMoveHd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEndHd, this);
    };
    p.createBlock = function () {
        var h_num = GameFactory.block_Vnum; //5行 6列
        var v_num = GameFactory.block_Hnum;
        var color;
        for (var i = 0; i < h_num; i++) {
            for (var j = 0; j < v_num; j++) {
                color = GameFactory.randomColor();
                var block = new Block(color);
                if (color == GameFactory.BLOCK_BLUE) {
                    block.name = GameFactory.BLOCK_NAME_BLUE;
                }
                if (color == GameFactory.BLOCK_ORANGE) {
                    block.name = GameFactory.BLOCK_NAME_ORG;
                }
                this.addChild(block);
                this.blockArr[i][j] = block;
                this.blockArr[i][j].x = j * block.width + GameFactory.wallWidth;
                this.blockArr[i][j].y = i * block.height + GameFactory.sceneTop;
            }
        }
        //初始化位于最下方一排 响应碰撞检测
        for (var k = 0; k < this.blockArr[0].length; k++) {
            this.blockArr[4][k].collisioned = GameFactory.BLOCK_TYPE_OPEN;
        }
    };
    p.createWall = function () {
        var wallLeft = new Block(GameFactory.BLOCK_BLACK, GameFactory.wallWidth, GameFactory.wallHeight);
        var wallRight = new Block(GameFactory.BLOCK_BLACK, GameFactory.wallWidth, GameFactory.wallHeight);
        var wallTop = new Block(GameFactory.BLOCK_BLACK, GameFactory.wallTopWidth, GameFactory.wallTopHeight);
        this.wallArr.push(wallLeft);
        this.wallArr.push(wallRight);
        this.wallArr.push(wallTop);
        wallRight.x = GameFactory.sceneWidth - wallRight.width;
        for (var i = 0; i < this.wallArr.length; i++) {
            this.addChild(this.wallArr[i]);
            this.wallArr[i].y = GameFactory.sceneTop - GameFactory.wallTopHeight;
        }
    };
    p.createSlider = function () {
        this.slider = new Slider();
        this.addChild(this.slider);
        this.slider.x = GameFactory.sceneWidth / 2;
        this.slider.y = GameFactory.sceneHeight / 8 * 7 + this.slider.height / 2;
    };
    p.createBullet = function () {
        this.bullet = new Bullet();
        this.addChild(this.bullet);
        this.bullet.x = this.slider.x;
        this.bullet.y = this.slider.y - this.bullet.height;
        //子弹特效
        this.bullet.alpha = 0;
        var pic = RES.getRes('bullPng');
        var txt = RES.getRes('bullJson');
        this.par = new particle.GravityParticleSystem(pic, txt);
        this.addChild(this.par);
        this.par.start();
        this.par.emitterX = this.bullet.x;
        this.par.emitterY = this.bullet.y;
    };
    p.createStar = function (name, color, sha) {
        var stars = new Block(color, GameFactory.blockHeight, GameFactory.blockHeight);
        stars.x = sha.x + sha.width / 4;
        stars.y = sha.y;
        stars.name = name;
        return stars;
    };
    p.resetSliderHd = function () {
        this.slider.resetSider();
        this.resetSlider.reset();
        this.resetSlider.stop();
    };
    //鉴别某个砖块是否需要碰撞检测
    p.sarchColled = function (x, y) {
        //判断方向 → ↓ ← ↑
        var ways = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        //下一点
        var nextX = 0;
        var nextY = 0;
        for (var i = 0; i < 4; i++) {
            nextX = x + ways[i][0];
            nextY = y + ways[i][1];
            if (nextX < this.blockArr.length && nextY < this.blockArr[i].length && nextX >= 0 && nextY >= 0) {
                if (this.blockArr[nextX][nextY].collisioned == GameFactory.BLOCK_TYPE_CLOSE) {
                    this.blockArr[nextX][nextY].collisioned = GameFactory.BLOCK_TYPE_OPEN;
                    console.log(nextX + ',' + nextY + 'is open');
                }
            }
        }
    };
    //移除舞台
    p.removeStageHd = function () {
        this.wallArr = [];
        this.blockArr = [];
        this.removeChild(this.par);
        this.removeChild(this.slider);
        this.removeChild(this.bullet);
        this.removeChild(this.showScore);
        this.resetSlider.reset();
        this.resetSlider.stop();
        this.resetSlider.removeEventListener(egret.TimerEvent.TIMER, this.resetSliderHd, this);
        this.touchEnabled = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.enterHd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBeginHd, this);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStageHd, this);
    };
    return GameScene;
}(egret.Sprite));
egret.registerClass(GameScene,'GameScene');
//# sourceMappingURL=GameScene.js.map