var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    GameData.getHeight = function () {
        return egret.MainContext.instance.stage.height;
    };
    GameData.getWidth = function () {
        return egret.MainContext.instance.stage.width;
    };
    GameData.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    GameData.getLevelBoxNum = function () {
        return this.STEP_ARR[this.LEVEL];
    };
    GameData.getTypeNum = function (str) {
        var Type;
        (function (Type) {
            Type[Type["block"] = 0] = "block";
            Type[Type["box"] = 1] = "box";
            Type[Type["chara"] = 2] = "chara";
            Type[Type["enemy"] = 3] = "enemy";
            Type[Type["candy"] = 4] = "candy";
            Type[Type["worm"] = 5] = "worm";
            Type[Type["charaBox"] = 7] = "charaBox"; //箱子  (影响除了人物的其他寻路系统)
        })(Type || (Type = {}));
        var num = Number(Type[str]);
        return num;
    };
    GameData.SIZE = 80;
    GameData.ENEMY_SIZE = 50;
    GameData.LEVEL = 1;
    GameData.LOCK_LEVEL = 1;
    GameData.STAGE_TOP = 80;
    //每一关可放置箱子数量
    GameData.STEP_ARR = [2, 3, 4, 4, 4, 5, 5, 5, 5, 4];
    GameData.level1 = "040003|" + "000000|" + "000000|" + "005000|" + "002004|" + "000000|" + "000000|" + "000000|" + "111111|";
    GameData.level2 = "300004|" + "010001|" + "000000|" + "105100|" + "002000|" + "410001|" + "041000|" + "004000|" + "000013|";
    GameData.level3 = "004003|" + "011110|" + "000000|" + "005000|" + "411114|" + "002000|" + "000000|" + "011110|" + "000400|";
    GameData.level4 = "000004|" + "010100|" + "010105|" + "413140|" + "011110|" + "002140|" + "000100|" + "000000|" + "400003|";
    GameData.level5 = "040000|" + "011140|" + "014000|" + "010500|" + "411010|" + "002040|" + "004010|" + "011110|" + "340043|";
    GameData.level6 = "000000|" + "041140|" + "012000|" + "015000|" + "011110|" + "040010|" + "010340|" + "014110|" + "300000|";
    GameData.level7 = "000001|" + "010000|" + "010025|" + "411411|" + "010003|" + "040000|" + "010010|" + "041110|" + "300000|";
    GameData.level8 = "301410|" + "100001|" + "100001|" + "405024|" + "011410|" + "400001|" + "100001|" + "100001|" + "041103|";
    GameData.level9 = "040100|" + "310010|" + "001001|" + "000000|" + "014104|" + "000000|" + "001001|" + "410010|" + "100025|";
    GameData.levelArr = [
        GameData.level1, GameData.level2, GameData.level3,
        GameData.level4, GameData.level5, GameData.level6,
        GameData.level7, GameData.level8, GameData.level9,
    ];
    return GameData;
}());
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map