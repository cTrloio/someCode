/**
 * Created by Administrator on 2015/12/14.
 */
function doMove(obj,attr,dir,target,endHd){//移动谁，属性(改变的状态width top等),速度，最大移动边界，回调函数
    dir = parseInt(getStyle(obj,attr)) < target? dir:-dir;  /* !!! 根据当前位置和最大边界去判断速度正负*/
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed = parseInt(getStyle(obj,attr))+dir;
        if(speed>target && dir>0 || speed<target && dir<0){      /*向前移动*/
            speed=target;      /* 在赋值之前，先限制*/
        }
        obj.style[attr] = speed+'px'; /*赋值*/
        obj.canmove=false;
        if(speed == target){
            clearInterval(obj.timer);
            /* 在endHd为真时(也就是不是未定义) 才执行endHd() 等价于 if(endHd){endHd();}*/
            endHd && endHd();  /* 这样写 回调的参数就可有可无 */
        }
    },30);
}
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    /*IE识别前一个，其他识别后一个*/
}