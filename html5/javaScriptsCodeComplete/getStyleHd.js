/**
 * Created by Administrator on 2015/12/14.
 */
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    /*IEʶ��ǰһ��������ʶ���һ��*/
}