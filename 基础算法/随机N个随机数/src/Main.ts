class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.createRanNum(5,10);
    }
    private createRanNum(count:number,distancd:number) {   // 随机数量   随机范围(0-?)
        var isRanNum:Boolean = true;
        var r:Array<number> = new Array(count);
        if(count>distancd){
            console.log('数量大于范围');
        }
        else{
            //产生三个随机数
            for(var i = 1;i <= count;i++) {
                r[i] = Math.round(Math.random() * (distancd - 1)) + 1;
            }
            //判断随机的三个数是否重复
            for(var i = count;i >= 1;i--) {
                for(var j = count;j >= 1;j--) {
                    if((i != j) && (r[i] == r[j])) { //有重复
                        //不可以输出
                        isRanNum = false;
                    }
                }
            }
            //没有重复>>可以输出
            if(isRanNum) {
                for(var k = 1;k <= count;k++) {
                    console.log(r[k]);
                }
            }
            //有重复>>递归调用自己>>再次随机三个数>>直到没有重复的
            else {
                this.createRanNum(count,distancd);
            }
        }
        
    }
}