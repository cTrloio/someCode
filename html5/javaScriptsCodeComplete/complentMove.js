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
        var bStop=true; //�������� ��������json���Զ��Ѿ�����Ŀ���
        for(var attr in json){
            var cur=0;
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur=parseInt(getStyle(obj,attr))
            }
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur!=json[attr]){ //�������һ��json����û�е���Ŀ���
                bStop=false;
            }

            if(attr=='opacity'){
                obj.style.opacity=(cur+speed)/100;
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'
            }else{
                obj.style[attr] =cur+speed +'px';
            }
        }
        if(bStop){ //�������json���Զ��ﵽĿ�꣬�رն�ʱ����ִ�лص�����
            clearInterval(obj.timer);
            endHd&&endHd();
        }
    },30);
}