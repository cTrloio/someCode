var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.queX = [];
        this.queY = [];
        this.queF = [];
        this.queS = [];
        //分别标记队列 头&尾
        this.head = 0;
        this.tail = 0;
        //地图
        this.a = [
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 1]
        ];
        //标记走过坐标
        this.book = [];
        //表示地图有 n 行  m列
        this.n = 5;
        this.m = 4;
        //pq表示终点坐标
        this.p = 3;
        this.q = 2;
        //标记起始点 xy
        this.startX = 0;
        this.startY = 0;
        //下一点xy
        this.tx = 0;
        this.ty = 0;
        //标记是否寻找到终点
        this.flagXY = 0;
        for (var i = 0; i < 51; i++) {
            this.book[i] = new Array();
        }
        for (var j = 0; j < 51; j++) {
            for (var k = 0; k < 51; k++) {
                this.book[j][k] = 0;
            }
        }
        //表示行走方向 右下左上顺序
        var next = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        this.queX[this.tail] = this.startX;
        this.queY[this.tail] = this.startY;
        this.queF[this.tail] = 0; //第一点没有父节点
        this.queS[this.tail] = 0; //步数初始化为0
        this.tail++;
        this.book[this.startX][this.startY] = 1;
        this.flagXY = 0;
        while (this.head < this.tail) {
            for (var i = 0; i < 4; i++) {
                this.tx = this.queX[this.head] + next[i][0];
                this.ty = this.queY[this.head] + next[i][1];
                if (this.tx < 0 || this.tx >= this.n || this.ty < 0 || this.ty >= this.m) {
                    continue;
                }
                //判断 此点不是障碍物 并且 没有访问过
                if (this.a[this.tx][this.ty] == 0 && this.book[this.tx][this.ty] == 0) {
                    this.book[this.tx][this.ty] = 1; //标记此点到达过
                    this.queX[this.tail] = this.tx; //插入新点到队列
                    this.queY[this.tail] = this.ty;
                    this.queF[this.tail] = this.head; //标记其父亲是从上一点扩展出来的head
                    this.queS[this.tail] = this.queS[this.head] + 1; //步数是父亲步数+1
                    this.tail++;
                }
                if (this.tx == this.p && this.ty == this.q) {
                    this.flagXY = 1;
                    break;
                }
            }
            if (this.flagXY == 1) {
                break;
            }
            this.head++;
        }
        alert(this.queS[this.tail - 1]);
        console.log(this.queF);
        console.log(this.queS);
        console.log(this.queX + "\n" + this.queY + "\n");
        this.printHd(15);
    }
    var d = __define,c=Main,p=c.prototype;
    p.printHd = function (father) {
        console.log(this.queX[father] + "," + this.queY[father] + "\n");
        if (father != 0) {
            this.printHd(this.queF[father]);
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
