/**
 * Created by Administrator on 2016/2/6.
 */

function getMousePos(ev){ //��ȡ���λ�� ������д��
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    return {x:ev.clientX+scrollLeft,y:ev.clientY+scrollTop};
}

//����     js-�¼�����-����¼�