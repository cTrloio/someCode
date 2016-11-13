/**
 * Created by Administrator on 2016/1/22.
 */
function getEleByClassName(oParents,oClassname){ //从哪里去寻找、寻找的元素的类名
    var result=[];
    var aEle=oParents.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==oClassname){
            result.push(aEle[i]);
        }
    }
    return result;
}