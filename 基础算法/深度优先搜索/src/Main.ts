class Main extends egret.DisplayObjectContainer {
    //地图，0表示空地 1表示障碍物
    a:Array<any>=[
        [0,0,1,0],
        [0,0,0,0],
        [0,0,1,0],
        [0,1,0,0],
        [0,0,0,1]
    ];
    
    //表示地图有 n 行  m列
    n: number = 5;
    m: number = 4;
    
    //pq表示终点坐标
    p:number=3;
    q:number=2;
    
    //标记起始点 xy
    startX:number=0;
    startY:number=0;
    
    //标记最小路程
    min:any=99;
    
    //用来标记走过的路线
    book:Array<any>=[];
    
    //声明一个栈 存储路线Xy  不包含起点和终点
    queX:Array<number>=[];
    queY:Array<number>=[];
    top:number = 0;
    
    
    public constructor() {
        super();
        //初始化为0表示没有走过
        for(var i=0;i<51;i++){
            this.book[i]=new Array();
        }
        for(var j=0;j<51;j++){
            for(var k=0;k<51;k++){
                this.book[j][k]=0;
            }
        }
        //标记 起始点已经尝试过
        this.book[this.startX][this.startY]=1;
        //从1,1尝试开始  初始步数为0
        this.dfs(this.startX,this.startY,0);
        //输出步数
        alert(this.min);
//        for(var i = 1;i < this.min;i++) {
//            console.log(this.queX[i] + "," + this.queY[i]);
//        }
        
    }
    private dfs(x:number,y:number,step:number){ //xy表示起点坐标  step标记行走步数
        //表示行走方向 右下左上顺序
        var next:Array<any>=[[0,1],[1,0],[0,-1],[-1,0]];
        //表示下一个点的坐标
        var nextX: number = 0;
        var nextY: number = 0;
        //判断是否到达终点
        if(x==this.p && y==this.q){
            if(step<this.min){
                this.min=step;
                
                for(var i = 1;i < this.top;i++) {
                    console.log(this.queX[i] + "," + this.queY[i]);
                }
                
            }
            return;
        }
        
        //枚举四种走法
        for(var l=0;l<4;l++){
            //计算下一点坐标
            nextX=x+next[l][0];
            nextY=y+next[l][1];
            //判断是否越界
            if(nextX<0 || nextX>=this.n || nextY<0 || nextY>=this.m){
                continue;
            }
            //判断是否已经到过此点 & 是此点不是障碍物
            if(this.a[nextX][nextY]==0 && this.book[nextX][nextY]==0){
                this.book[nextX][nextY]=1;  //标记这点已经走过了
                
                this.top++;
                this.queX[this.top] = nextX;
                this.queY[this.top] = nextY;
                
                this.dfs(nextX,nextY,step+1); //开始尝试下一点
                this.book[nextX][nextY]=0;  //本次尝试结束 取消标记的这次尝试的这个点
                this.top --;
            }
        }
        return;
    }
    
}