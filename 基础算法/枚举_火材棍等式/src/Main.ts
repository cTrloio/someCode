class Main extends egret.DisplayObjectContainer {
    //加号和等号各需要两个火柴
    //如果A!=B A+B=C   &   B+A=C 视为不同的等式 ABC都大于0
    //所有火柴棍必须都用上
    //现有m 跟火柴 m<=24
    //可以拼出多少个A+B=C的等式
    //加入0-9 需要火柴数量如下数组
    f: Array<number> = [6,2,5,5,4,5,6,3,7,6];
    m: number = 18; //假设最多有24跟火柴
    sum: number = 0;// 记录共有多少组等式
    public constructor() {
        super();
        //除去加号等号最多剩下20根火柴  数字1最少需要2根火柴  所以每个数字最多不超过1111
        this.getNum();
    }
    private getNum(){
        for(var i = 0;i <= 1111;i++) {
            for(var j = 0;j <= 1111;j++) {
                var c: number = i + j;
                if(this.fun(i) + this.fun(j) + this.fun(c) == this.m - 4) {
                    console.log(i + '+' + j + '=' + c);
                    this.sum++;
                }
            }
        }
        console.log('共有：' + this.sum);
    }
    private fun(needNum:number){ 
        var num: number = 0; //记录火柴数
        while(needNum / 10 != 0) {  //如果所需火柴数是两位数
            num += this.f[needNum % 10];  //记录个位数字所需要的火柴数量
            needNum = Math.floor(needNum / 10);                    //去掉尾数  
//            console.log(needNum);
        }
        //如果是一位数
        num += this.f[needNum];                   //记录(十位上的)数字所需的火柴数
        
        return num;
        
    }
}