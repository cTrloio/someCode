/**
 * Created by Administrator on 2015/12/14.
 */
function doMove(obj,attr,dir,target,endHd){//�ƶ�˭������(�ı��״̬width top��),�ٶȣ�����ƶ��߽磬�ص�����
    dir = parseInt(getStyle(obj,attr)) < target? dir:-dir;  /* !!! ���ݵ�ǰλ�ú����߽�ȥ�ж��ٶ�����*/
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed = parseInt(getStyle(obj,attr))+dir;
        if(speed>target && dir>0 || speed<target && dir<0){      /*��ǰ�ƶ�*/
            speed=target;      /* �ڸ�ֵ֮ǰ��������*/
        }
        obj.style[attr] = speed+'px'; /*��ֵ*/
        obj.canmove=false;
        if(speed == target){
            clearInterval(obj.timer);
            /* ��endHdΪ��ʱ(Ҳ���ǲ���δ����) ��ִ��endHd() �ȼ��� if(endHd){endHd();}*/
            endHd && endHd();  /* ����д �ص��Ĳ����Ϳ��п��� */
        }
    },30);
}
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    /*IEʶ��ǰһ��������ʶ���һ��*/
}