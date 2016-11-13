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
function startMove(obj,attr,iTarget,endHd){
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var cur=0;
        if(attr=='opacity'){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            cur=parseInt(getStyle(obj,attr))
        }
        var speed=(iTarget-cur)/6;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
            endHd&&endHd();
        }
        else{
            if(attr=='opacity'){
                obj.style.opacity=(cur+speed)/100;
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'
            }else{
                obj.style[attr] =cur+speed +'px';
            }
        }
    },30);
}