class Main extends egret.DisplayObjectContainer {
    //?3 *6528 = 3? * 8256;
    //枚举 即 穷举    列出每一种可能  符合条件的输出结果
    public constructor() {
        super();
        for(var i = 1;i <= 9;i++){
            if((i*10+3)*6528 == (30+i)*8256){
                console.log(i);                
            }
        }
    }
}