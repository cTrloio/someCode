class GameData {

    static getHeight(): number {
        return egret.MainContext.instance.stage.height;
    }

    static getWidth(): number {
        return egret.MainContext.instance.stage.width;
    }

    static SIZE: number = 80;

    static ENEMY_SIZE: number = 50;

    static LEVEL: number = 1;

    static LOCK_LEVEL: number = 1;

    static STAGE_TOP: number = 80;

    static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    static getLevelBoxNum(): number {
        return this.STEP_ARR[this.LEVEL];
    }

    //每一关可放置箱子数量
    private static STEP_ARR: Array<number> = [2, 3, 4, 4, 4, 5, 5, 5, 5, 4];

    static getTypeNum(str: string): number {
        enum Type {
            "block" = 0, //空地  (固定)
            "box"   = 1, //箱子  (影响人物寻路系统)
            "chara" = 2, //人物  (寻路)
            "enemy" = 3, //怪物  (寻路)
            "candy" = 4, //糖果  (固定)
            "worm"  = 5,  //虫子  (随机行动or寻路??)
            "charaBox" = 7//箱子  (影响除了人物的其他寻路系统)
        }
        var num: number = Number(Type[str]);
        return num;
    }
    static level1: string = "040003|" + "000000|" + "000000|" + "005000|" + "002004|" + "000000|" + "000000|" + "000000|" + "111111|";

    static level2: string = "300004|" + "010001|" + "000000|" + "105100|" + "002000|" + "410001|" + "041000|" + "004000|" + "000013|";

    static level3: string = "004003|" + "011110|" + "000000|" + "005000|" + "411114|" + "002000|" + "000000|" + "011110|" + "000400|";

    static level4: string = "000004|" + "010100|" + "010105|" + "413140|" + "011110|" + "002140|" + "000100|" + "000000|" + "400003|";

    static level5: string = "040000|" + "011140|" + "014000|" + "010500|" + "411010|" + "002040|" + "004010|" + "011110|" + "340043|";

    static level6: string = "000000|" + "041140|" + "012000|" + "015000|" + "011110|" + "040010|" + "010340|" + "014110|" + "300000|";

    static level7: string = "000001|" + "010000|" + "010025|" + "411411|" + "010003|" + "040000|" + "010010|" + "041110|" + "300000|";

    static level8: string = "301410|" + "100001|" + "100001|" + "405024|" + "011410|" + "400001|" + "100001|" + "100001|" + "041103|";

    static level9: string = "040100|" + "310010|" + "001001|" + "000000|" + "014104|" + "000000|" + "001001|" + "410010|" + "100025|";
 
    static levelArr = [
        GameData.level1, GameData.level2, GameData.level3,
        GameData.level4, GameData.level5, GameData.level6,
        GameData.level7, GameData.level8, GameData.level9,
    ];

}