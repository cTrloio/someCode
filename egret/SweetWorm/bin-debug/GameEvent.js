/**
 * 自定义实事件类
 */
var GameEvent = (function () {
    function GameEvent() {
    }
    var d = __define,c=GameEvent,p=c.prototype;
    /**
     * 界面
     */
    GameEvent.GAME_LEVEL = "gamelevel";
    GameEvent.GAME_START = "gamestart";
    GameEvent.GAME_OVER = "gameover";
    GameEvent.GAME_WIN = "win";
    /**
     * 人物
     */
    GameEvent.MOVE_CHARA = 'movechara';
    GameEvent.SET_BOX = 'setbox';
    /**
     * 怪物 + 虫子
     */
    GameEvent.MOVE_WORM = "moveworm";
    GameEvent.MOVE_ENEMY = "moveenemy";
    return GameEvent;
}());
egret.registerClass(GameEvent,'GameEvent');
//# sourceMappingURL=GameEvent.js.map