class GameData {

	static SCENE_BORDER: number = 30;
	static BLOCK_SIZE: number = 70;
	static ConSizeX:number = 6;
	static ConSizeY:number = 6;
	static stageW:number = 480;
	static stageH:number = 800;

	// grba=0-----0 red--------1 yellow-----2 blue-------3
	// gray-------4 green------5 aqua-------6 brown------7

	//关卡
	static sceneNumber: number = 1;
	//已解锁关卡数
	static unlockNum:number = 1;

	//第一关
	static one: string = "41111111111001100|233333333|6005500005500555555555555";
	//第二关
	static two: string = "3100100100100111111|3666600600666|3022222222|4003333333333";
	//第三关
	static three: string = "3110010011|3222222|22020222222|3300333333|3006006666666006006";
	//第四关
	static four: string = "3100110111|53333303330|2505550|3222022222|2707777|3006666006";
	//第五关
	static five: string = "3222222200|2707077|266660606|3440444440|3550055|3010111|2303303";
	//第六关
	static six:string = "211111101|3200222022|3333003|2404444|15555|3006666600|3077777";
	//所有关卡数组
	static sumArr: Array<string> = [GameData.one, GameData.two, GameData.three, GameData.four, GameData.five,GameData.six];

	static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}