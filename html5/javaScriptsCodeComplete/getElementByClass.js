/**
 * Created by Administrator on 2016/1/22.
 */
function getEleByClassName(oParents,oClassname){ //������ȥѰ�ҡ�Ѱ�ҵ�Ԫ�ص�����
    var result=[];
    var aEle=oParents.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==oClassname){
            result.push(aEle[i]);
        }
    }
    return result;
}