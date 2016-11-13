var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    GameData.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    GameData.SCENE_BORDER = 30;
    GameData.BLOCK_SIZE = 70;
    GameData.ConSizeX = 6;
    GameData.ConSizeY = 6;
    GameData.stageW = 480;
    GameData.stageH = 800;
    // grba=0-----0 red--------1 yellow-----2 blue-------3
    // gray-------4 green------5 aqua-------6 brown------7
    //关卡
    GameData.sceneNumber = 1;
    //已解锁关卡数
    GameData.unlockNum = 1;
    //第一关
    GameData.one = "41111111111001100|233333333|6005500005500555555555555";
    //第二关
    GameData.two = "3100100100100111111|3666600600666|3022222222|4003333333333";
    //第三关
    GameData.three = "3110010011|3222222|22020222222|3300333333|3006006666666006006";
    //第四关
    GameData.four = "3100110111|53333303330|2505550|3222022222|2707777|3006666006";
    //第五关
    GameData.five = "3222222200|2707077|266660606|3440444440|3550055|3010111|2303303";
    //第六关
    GameData.six = "211111101|3200222022|3333003|2404444|15555|3006666600|3077777";
    //所有关卡数组
    GameData.sumArr = [GameData.one, GameData.two, GameData.three, GameData.four, GameData.five, GameData.six];
    return GameData;
}());
egret.registerClass(GameData,'GameData');
