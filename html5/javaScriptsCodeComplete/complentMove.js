/**
 * Created by Administrator on 2016/2/5.
 */
/**
 * Created by Administrator on 2016/2/2.
 */
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,json,endHd){
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var bStop=true; //布尔变量 假设所有json属性都已经到达目标点
        for(var attr in json){
            var cur=0;
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur=parseInt(getStyle(obj,attr))
            }
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr]){ //如果其中一个json属性没有到达目标点
                bStop=false;
            }

            if(attr=='opacity'){
                obj.style.opacity=(cur+speed)/100;
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'
            }else{
                obj.style[attr] =cur+speed +'px';
            }
        }
        if(bStop){ //如果所有json属性都达到目标，关闭定时器，执行回调函数
            clearInterval(obj.timer);
            endHd&&endHd();
        }
    },30);
}