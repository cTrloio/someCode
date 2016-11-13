/**
 * Created by Administrator on 2015/12/15.
 */

function opacityHd(obj,dir,endHd){
    clearInterval(obj.Opacitytimer);
    obj.Opacitytimer = setInterval(function () {
        var objBuff=parseFloat(getStyle(obj,'opacity'))+dir;
        if(objBuff <0){
            objBuff=0;
        }
        obj.style['opacity'] = objBuff;
        if(objBuff==0){
            clearInterval(obj.Opacitytimer);
            endHd&&endHd();
        }
    },300);
}

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    /*IE识别前一个，其他识别后一个*/
}