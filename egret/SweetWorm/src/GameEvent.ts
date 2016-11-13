/**
 * 自定义实事件类
 */
class GameEvent {
	
	/**
	 * 界面
	 */
	static GAME_LEVEL: string = "gamelevel";
	
	static GAME_START:string = "gamestart"; 

	static GAME_OVER:string = "gameover";

	static GAME_WIN:string = "win";

	/**
	 * 人物
	 */
	static MOVE_CHARA:string = 'movechara'; 

	static SET_BOX:string = 'setbox';

	/**
	 * 怪物 + 虫子
	 */
	static MOVE_WORM:string = "moveworm";

	static MOVE_ENEMY:string = "moveenemy";

}