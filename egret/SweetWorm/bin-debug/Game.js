var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        //当前关卡
        this.level = 1;
        //盒子宽高
        this.size = GameData.SIZE;
        this.stagetop = GameData.STAGE_TOP;
        //某关地图信息 行数 列数
        this.MAP = {
            arr: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ],
            rows: 9,
            cols: 6
        };
        this.enemyArr = [];
        this.candyArr = [];
        this.boxArr = [];
        this.charaBoxArr = [];
        this.gameover = false;
        this.level = GameData.LEVEL;
        this.init();
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStageHd, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    }
    var d = __define,c=Game,p=c.prototype;
    //初始化本关地图数据
    p.init = function () {
        var strMapArr = GameData.levelArr[this.level - 1].split("|"); //减1:关卡1 对应 数组0
        var mapArr = [];
        //将某一关卡字符串变为二维数组
        for (var i = 0; i < strMapArr.length; i++) {
            mapArr.push(strMapArr[i].split(""));
        }
        //将上述二维数组对应到当前地图数组
        for (var j = 0; j < this.MAP.rows; j++) {
            for (var k = 0; k < this.MAP.cols; k++) {
                this.MAP.arr[j][k] = mapArr[j][k];
            }
        }
    };
    //添加到舞台
    p.addToStageHd = function () {
        //游戏数据面板
        this.gamePanel = new GamePanel();
        this.addChild(this.gamePanel);
        this.gamePanel.addEventListener(GameEvent.GAME_LEVEL, this.backSceleHd, this);
        //根据地图构造游戏场景
        this.createMap();
    };
    p.createMap = function () {
        var mapHorNum = this.MAP.rows; //map行 === 二维数组中 一维数组个数
        var mapVerNum = this.MAP.cols; //map列 === 二维数组中 某个一维数组长度
        var map = this.MAP.arr;
        // 0  空地  (固定)  1  箱子  (唯一影响寻路系统)  2  人物  (寻路)
        // 3  怪物  (寻路)  4  糖果  (固定)             5  虫子  (随机行动or寻路??)
        for (var i = 0; i < mapHorNum; i++) {
            for (var j = 0; j < mapVerNum; j++) {
                var mapNum = Number(map[i][j]);
                switch (mapNum) {
                    case 0:
                        this.createRoad(i, j);
                        break;
                    case 1:
                        this.createBox(i, j);
                        break;
                    case 2:
                        this.createRoad(i, j);
                        this.createChara(i, j);
                        break;
                    case 3:
                        this.createRoad(i, j);
                        this.createEnemy(i, j);
                        break;
                    case 4:
                        this.createCandy(i, j);
                        this.createRoad(i, j);
                        break;
                    case 5:
                        this.createRoad(i, j);
                        this.createWorm(i, j);
                        break;
                }
            }
        }
        this.setChildIndex(this.chara, -1);
    };
    //******************************************创建对象 i控制y坐标***********************************************
    p.createRoad = function (i, j) {
        var road = new Road();
        this.addChild(road);
        // this.roadArr.push(road);
        road.x = j * this.size + road.width / 2;
        road.y = i * this.size + this.stagetop + road.height / 2;
        road.mapX = i;
        road.mapY = j;
        road.addEventListener(GameEvent.MOVE_CHARA, this.moveChara, this);
    };
    p.createChara = function (i, j) {
        this.chara = new Character();
        this.addChild(this.chara);
        this.chara.x = j * this.size + this.chara.width / 2;
        this.chara.y = i * this.size + this.stagetop + this.chara.height / 2;
        this.chara.mapX = i;
        this.chara.mapY = j;
        this.MAP.arr[i][j] = 0;
        this.chara.addEventListener(GameEvent.SET_BOX, this.setBox, this);
    };
    p.createWorm = function (i, j) {
        this.worm = new Worm();
        this.addChild(this.worm);
        this.worm.x = j * this.size + this.worm.width / 2;
        this.worm.y = i * this.size + this.stagetop + this.worm.height / 2;
        this.worm.mapX = i;
        this.worm.mapY = j;
        this.worm.addEventListener(GameEvent.MOVE_WORM, this.moveWormHd, this);
        this.MAP.arr[i][j] = 0;
    };
    p.createBox = function (i, j) {
        var box = new Box("fixedBox");
        this.addChild(box);
        box.x = j * this.size + box.width / 2;
        box.y = i * this.size + this.stagetop + box.height / 2;
        box.mapX = i;
        box.mapY = j;
        this.boxArr.push(box);
    };
    p.createEnemy = function (i, j) {
        var enemy = new Enemy();
        this.addChild(enemy);
        enemy.x = j * this.size + this.size / 2;
        enemy.y = i * this.size + this.stagetop + this.size / 2;
        enemy.mapX = i;
        enemy.mapY = j;
        this.MAP.arr[i][j] = 0;
        enemy.addEventListener(GameEvent.MOVE_ENEMY, this.moveEnemyHd, this);
        this.enemyArr.push(enemy);
    };
    p.createCandy = function (i, j) {
        var candy = new Candy();
        this.addChild(candy);
        this.candyArr.push(candy);
        candy.x = j * this.size + candy.width / 2;
        candy.y = i * this.size + this.stagetop + candy.height / 2;
        candy.mapX = i;
        candy.mapY = j;
    };
    //******************************************创建结束*********************************************
    //***************************************事件处理*********************************************
    /** 人物寻路事件*/
    p.moveChara = function (e) {
        egret.Tween.removeTweens(this.chara);
        //    this.chara.setTouchEnable(false);
        if (this.chara.canMove) {
            var route = this.searchRoad(this.chara.mapX, this.chara.mapY, e.target.mapX, e.target.mapY, "chara");
            if (route.length != 0) {
                this.move(0, this.chara, route);
            }
        }
    };
    /** 怪物寻路事件*/
    p.moveEnemyHd = function () {
        for (var u = 0; u < this.enemyArr.length; u++) {
            egret.Tween.removeTweens(this.enemyArr[u]);
        }
        for (var l = 0; l < this.enemyArr.length; l++) {
            var route = this.searchRoad(this.enemyArr[l].mapX, this.enemyArr[l].mapY, this.worm.mapX, this.worm.mapY, "enemy");
            if (route.length != 0) {
                this.move(0, this.enemyArr[l], route);
            }
        }
    };
    /** 虫子移动事件*/
    p.moveWormHd = function (e) {
        egret.Tween.removeTweens(this.worm);
        if (this.candyArr.length != 0) {
            var currCandy_x = this.candyArr[0].mapX;
            var currCandy_y = this.candyArr[0].mapY;
        }
        var route = this.searchRoad(e.target.mapX, e.target.mapY, currCandy_x, currCandy_y, "worm");
        if (this.candyArr.length != 0) {
            if (route.length == 0) {
                while (e.target.findNum < this.candyArr.length) {
                    currCandy_x = this.candyArr[e.target.findNum].mapX;
                    currCandy_y = this.candyArr[e.target.findNum].mapY;
                    route = this.searchRoad(e.target.mapX, e.target.mapY, currCandy_x, currCandy_y, "worm");
                    if (route.length != 0) {
                        e.target.findNum = 0;
                        break;
                    }
                    e.target.findNum++;
                }
                e.target.findNum = 0;
            }
            e.target.findNum = 0;
        }
        if (route.length != 0) {
            this.move(0, this.worm, route, "worm");
        }
    };
    /** 移动函数*/
    p.move = function (step, obj, route, wormT) {
        var _this = this;
        var stepSum = route.length; //到终点总步数
        obj.setTouchEnable(false);
        if (step >= stepSum) {
            obj.setTouchEnable(true);
            return;
        }
        var tw = egret.Tween.get(obj, {
            loop: false,
            onChange: function () {
                _this.collisionHd();
            },
            onChangeObj: this
        });
        if (obj.mapX < route[step].x) {
            obj.rotation = 0;
        }
        if (obj.mapX > route[step].x) {
            obj.rotation = 180;
        }
        if (obj.mapY > route[step].y) {
            obj.rotation = 90;
        }
        if (obj.mapY < route[step].y) {
            obj.rotation = -90;
        }
        tw.to({
            x: route[step].y * this.size + this.size / 2,
            y: route[step].x * this.size + this.size / 2 + this.stagetop
        }, obj.moveSpeed).call(function () {
            obj.mapX = route[step].x; //移动一格后更新在地图中的位置
            obj.mapY = route[step].y;
            obj.setTouchEnable(true);
            _this.move(step + 1, obj, route); //继续移动
        });
    };
    /** 设置箱子事件*/
    p.setBox = function (e) {
        var mapx = e.target.mapX;
        var mapy = e.target.mapY;
        var mapType = this.MAP.arr[mapx][mapy]; //当前格子类型
        if (mapType == 0) {
            if (this.gamePanel.currBoxNum > 0) {
                var box = new Box("charaBox"); //创建一个箱子
                this.addChild(box);
                box.x = e.target.x;
                box.y = e.target.y;
                box.mapX = mapx;
                box.mapY = mapy;
                this.charaBoxArr.push(box);
                this.MAP.arr[mapx][mapy] = 7; //更新放置箱子的当前地图数据(7影响怪物和虫子但不影响人物)
                this.setChildIndex(this.chara, -1);
                this.gamePanel.currBoxNum--; //更新可放置箱子数量
                this.gamePanel.upDate();
                this.worm.moveHd(); //更新虫子寻路
                for (var t = 0; t < this.enemyArr.length; t++) {
                    this.enemyArr[t].moveHd();
                }
                return;
            }
        }
        if (mapType == 7) {
            this.gamePanel.currBoxNum++; //更新可放置箱子数量
            this.gamePanel.upDate();
            for (var j = 0; j < this.charaBoxArr.length; j++) {
                if (this.charaBoxArr[j].mapX === mapx && this.charaBoxArr[j].mapY === mapy) {
                    this.removeChild(this.charaBoxArr[j]);
                    this.charaBoxArr.splice(j, 1);
                }
            }
            this.MAP.arr[mapx][mapy] = 0; //更新放置箱子的当前地图数据
            this.worm.moveHd(); //更新寻路
            for (var t = 0; t < this.enemyArr.length; t++) {
                this.enemyArr[t].moveHd();
            }
            return;
        }
    };
    /** 碰撞事件*/
    p.collisionHd = function () {
        if (!this.gameover) {
            /** 虫子 碰撞 糖果*/
            if (this.candyArr.length != 0 && this.worm != undefined) {
                for (var i = 0; i < this.candyArr.length; i++) {
                    if (this.worm.hitTestPoint(this.candyArr[i].x, this.candyArr[i].y)) {
                        this.MAP.arr[this.candyArr[i].mapX][this.candyArr[i].mapY] = 0;
                        this.removeChild(this.candyArr[i]);
                        this.candyArr.splice(i, 1);
                        this.worm.moveHd(); //更新虫子寻路
                    }
                }
            }
            /** 怪物 碰撞 人物*/
            if (this.enemyArr.length != 0 && this.chara != undefined) {
                for (var j = 0; j < this.enemyArr.length; j++) {
                    if (this.chara.hitTestPoint(this.enemyArr[j].x, this.enemyArr[j].y)) {
                        if (this.chara.isActive != false) {
                            egret.Tween.removeTweens(this.chara);
                        }
                        this.chara.changeNiaoD();
                        this.chara.isActive = false;
                        break;
                    }
                }
            }
            /** 怪物 碰撞 虫子*/
            if (this.enemyArr.length != 0 && this.worm != undefined) {
                for (var k = 0; k < this.enemyArr.length; k++) {
                    if (this.worm.hitTestPoint(this.enemyArr[k].x, this.enemyArr[k].y)) {
                        this.gameOver();
                        this.dispatchEventWith(GameEvent.GAME_OVER);
                        return;
                    }
                }
            }
            /**gameover */
            if (this.candyArr.length === 0) {
                this.gameover = true;
                this.gameOver();
                if (GameData.LEVEL < 9) {
                    GameData.LEVEL++;
                    if (GameData.LOCK_LEVEL <= this.level) {
                        GameData.LOCK_LEVEL++;
                    }
                    else {
                        GameData.LOCK_LEVEL = GameData.LOCK_LEVEL;
                    }
                    this.dispatchEventWith(GameEvent.GAME_WIN);
                    return;
                }
                if (GameData.LEVEL == 9) {
                    this.dispatchEventWith(GameEvent.GAME_LEVEL);
                    return;
                }
            }
        }
    };
    //***************************************事件处理结束*********************************************
    //********************* AStar算法(F=G+H), G:当前点到开始点的距离,H:当前点到终点的距离 *****************************
    p.searchRoad = function (start_x, start_y, end_x, end_y, objStr) {
        var openList = [], //开启列表
        closeList = [], //关闭列表
        result = [], //结果数组
        result_index; //结果数组在开启列表中的序号
        //把当前点加入到开启列表中，并且G是0
        openList.push({
            x: start_x,
            y: start_y,
            G: 0
        });
        //计算当前点周围点的F
        do {
            var currentPoint = openList.pop();
            closeList.push(currentPoint);
            var surroundPoint = this.SurroundPoint(currentPoint);
            for (var i in surroundPoint) {
                var item = {
                    x: 0,
                    y: 0,
                    F: 0,
                    G: 0,
                    H: 0
                };
                item.x = surroundPoint[i].x; //获得周围的8/4个点
                item.y = surroundPoint[i].y; //获得周围的8/4个点
                if (objStr == "chara") {
                    if (item.x >= 0 &&
                        item.y >= 0 &&
                        item.x < this.MAP.rows &&
                        item.y < this.MAP.cols &&
                        this.MAP.arr[item.x][item.y] != 1 &&
                        !this.existList(item, closeList) &&
                        this.MAP.arr[item.x][currentPoint.y] != 1 &&
                        this.MAP.arr[currentPoint.x][item.y] != 1) {
                        // g为当前点到父节点的位置
                        // 如果是上下左右位置的则g等于10(用于F值计算,多少都行)，斜对角的就是14
                        // var g = currentPoint.G + ((currentPoint.x - item.x) * (currentPoint.y - item.y) == 0 ? 10 : 14);
                        var g = 10; //这里只需要上下左右型
                        if (!this.existList(item, openList)) {
                            //计算H，通过水平和垂直距离进行确定
                            item.H = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
                            item.G = g;
                            item.F = item.H + item.G;
                            item['parent'] = currentPoint;
                            openList.push(item);
                        }
                        else {
                            var index = this.existList(item, openList);
                            //如果当前点的g更小
                            if (g < openList[index].G) {
                                openList[index].parent = currentPoint;
                                openList[index].G = g;
                                openList[index].F = g + openList[index].H;
                            }
                        }
                    }
                }
                else {
                    if (item.x >= 0 &&
                        item.y >= 0 &&
                        item.x < this.MAP.rows &&
                        item.y < this.MAP.cols &&
                        this.MAP.arr[item.x][item.y] != 1 &&
                        this.MAP.arr[item.x][item.y] != 7 &&
                        !this.existList(item, closeList) &&
                        this.MAP.arr[item.x][currentPoint.y] != 1 &&
                        this.MAP.arr[item.x][currentPoint.y] != 7 &&
                        this.MAP.arr[currentPoint.x][item.y] != 1 &&
                        this.MAP.arr[currentPoint.x][item.y] != 7) {
                        // g为当前点到父节点的位置
                        // 如果是上下左右位置的则g等于10(用于F值计算,多少都行)，斜对角的就是14
                        // var g = currentPoint.G + ((currentPoint.x - item.x) * (currentPoint.y - item.y) == 0 ? 10 : 14);
                        var g = 10; //这里只需要上下左右型
                        if (!this.existList(item, openList)) {
                            //计算H，通过水平和垂直距离进行确定
                            item.H = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
                            item.G = g;
                            item.F = item.H + item.G;
                            item['parent'] = currentPoint;
                            openList.push(item);
                        }
                        else {
                            var index = this.existList(item, openList);
                            //如果当前点的g更小
                            if (g < openList[index].G) {
                                openList[index].parent = currentPoint;
                                openList[index].G = g;
                                openList[index].F = g + openList[index].H;
                            }
                        }
                    }
                }
            }
            //如果开启列表空了，则没有通路，结果为空
            if (openList.length == 0) {
                break;
            }
            openList.sort(this.sortF); //循环回去的时候，找出 F 值最小的, 将它从 "开启列表" 中移掉
        } while (!(result_index = this.existList({ x: end_x, y: end_y }, openList)));
        //判断结果列表是否为空
        if (!result_index) {
            result = [];
        }
        else {
            var currentObj = openList[result_index];
            do {
                //把路径节点添加到result当中
                result.unshift({
                    x: currentObj.x,
                    y: currentObj.y
                });
                currentObj = currentObj.parent;
            } while (currentObj.x != start_x || currentObj.y != start_y);
        }
        return result;
    };
    //用F值对数组排序
    p.sortF = function (a, b) {
        return b.F - a.F;
    };
    //获取参数点周围8/4个点在二维数组中的值
    p.SurroundPoint = function (curPoint) {
        var x = curPoint.x, y = curPoint.y;
        return [
            // {x:x-1,y:y-1},   //斜对角位移量
            {
                x: x,
                y: y - 1
            },
            // {x:x+1,y:y-1},
            {
                x: x + 1,
                y: y
            },
            // {x:x+1,y:y+1},
            {
                x: x,
                y: y + 1
            },
            // {x:x-1,y:y+1},
            {
                x: x - 1,
                y: y
            }
        ];
    };
    //判断点是否存在在某个列表中，是的话返回的是序列号
    p.existList = function (point, list) {
        for (var i in list) {
            if (point.x == list[i].x && point.y == list[i].y) {
                return i;
            }
        }
        return false;
    };
    //******************************************** AStar算法结束 *****************************************************
    p.backSceleHd = function () {
        this.gameOver();
        this.dispatchEventWith(GameEvent.GAME_LEVEL);
    };
    p.gameOver = function () {
        egret.Tween.removeAllTweens();
        this.gamePanel.removeEventListener(GameEvent.GAME_LEVEL, this.backSceleHd, this);
        this.removeChildren();
        this.enemyArr = [];
        this.candyArr = [];
        this.boxArr = [];
        this.touchChildren = false;
    };
    p.removeHd = function () {
        this.removeChildren();
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeHd, this);
    };
    return Game;
}(egret.Sprite));
egret.registerClass(Game,'Game');
//# sourceMappingURL=Game.js.map