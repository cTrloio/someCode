/**
 * Created by Administrator on 2016/2/6.
 */

function getMousePos(ev){ //获取鼠标位置 兼容性写法
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop};
}

//见例     js-事件基础-鼠标事件