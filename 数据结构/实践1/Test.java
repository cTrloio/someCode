public class Test {

	public static void main(String[] args) {
		//�������������У�	ABDH##I##E##CFJ###GK###
		String a="ABDH##I##E##CFJ###GK###";
		
		BiTree c=new BiTree(a);		//����������
		c.OrderD(c.bn);			//���÷Ŵ���λ��
		c.preTraverse(c.bn);		//ǰ��ݹ����
		c.PrintD(c.bn);			//����Ŵ���λ�ýڵ�
	}
}
