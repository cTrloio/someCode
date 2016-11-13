// TypeScript file
class GameData {

    static stageWidth: number = 1133;  //舞台宽高
    static stageHeight: number = 680;

    static fireRate: number = 350;  //人物开火速率
    static enemyRate: number = 750; //怪物创建速率

    static CREATEBOOSTIME:number = 5000; // 首次创建 间隔5S创建一个BOOS
    static createBoosRate:number = 5000; // 下次创建增加时间值

    static maxlife1:number = 30;  //BOOS基础血量
    static maxlife2:number = 45;
    static maxlife3:number = 60;

    static enemyType1:string = 'enemy1';
    static enemyType2:string = 'enemy2';
    static enemyType3:string = 'enemy3';
    static boosType1:string = 'boos1';
    static boosType2:string = 'boos2';
    static boosType3:string = 'boos3';
    static starType1:string = 'star1';
    static starType2:string = 'star2';

    static first_name:string = 'ToT';
    static MAXSCORE: string = egret.localStorage.getItem("score") || "0";
    static MAXNAME:string = egret.localStorage.getItem('name') || "ToT";

    //创建图片
    static CREATE_BITMAP(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    //行为检测
    static checkBourder(obj: any) {
        //限制最大加速度
        if (obj.vx >= obj.speedLim) {
            obj.vx = obj.speedLim;
        }
        if (obj.vx <= -obj.speedLim) {
            obj.vx = -obj.speedLim;
        }
        if (obj.vy >= obj.speedLim) {
            obj.vy = obj.speedLim;
        }
        if (obj.vy <= -obj.speedLim) {
            obj.vy = -obj.speedLim;
        }
        //加速度较小时归零
        if (Math.abs(obj.vx) < 0.15) {
            obj.vx = 0;
        }
        if (Math.abs(obj.vy) < 0.15) {
            obj.vy = 0;
        }
        //边界检测
        if (obj.x < obj.width/2 + 25) {
            obj.x = obj.width/2 + 25;
        }
        if (obj.y < obj.height/2 + 25) {
            obj.y = obj.height/2 +25;
        }
        if (obj.x > GameData.stageWidth - obj.width/2 - 25) {
            obj.x = GameData.stageWidth - obj.width/2 - 25;
        }
        if (obj.y > GameData.stageHeight - obj.height/2 - 25) {
            obj.y = GameData.stageHeight - obj.height/2 - 25;
        }
    }

     static getRandomNum(): number {
        return Math.random();
    }

}