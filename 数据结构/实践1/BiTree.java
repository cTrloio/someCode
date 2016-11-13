public class BiTree {
	static int limit=3;	//����ֵ
	BiNode bn;		//�ڵ�
	static int i=0;		//��������
	BiTree(){
		this.bn=null;
	}
	public BiTree(String TreeStr){//����������������ֵ������
		int dArray[]={0,1,2,2,0,0,1,0,0,2,0,0,3,1,2,0,0,0,2,2,0,0,0};
		bn=new BiNode();
		bn.data=new element();
		char c=TreeStr.charAt(i);
		int d=dArray[i];
		i++;
		if(c=='#')bn=null;
		else{
			bn.data.name=c;
			bn.data.d=d;
			bn.lchild=new BiTree(TreeStr).bn;
			bn.rchild=new BiTree(TreeStr).bn;
		}
	}
	int OrderD(BiNode bn){//���÷Ŵ���λ��
		bn.data.D=0;
		if(bn.lchild!=null){
			OrderD(bn.lchild);
			if(bn.lchild.data.D+bn.lchild.data.d>limit){
				bn.lchild.data.flag=true;
			}
			else{
				bn.data.D=Math.max(bn.data.D, bn.lchild.data.D+bn.lchild.data.d);
			}
		}
		if(bn.rchild!=null){
			OrderD(bn.rchild);
			if(bn.rchild.data.D+bn.rchild.data.d>limit){
				bn.rchild.data.flag=true;
			}
			else{
				bn.data.D=Math.max(bn.data.D, bn.rchild.data.D+bn.rchild.data.d);
			}
		}
		return bn.data.D;
	}

	void preTraverse(BiNode bn){//����������
		if(bn!=null){
			System.out.print(bn.data.name);
			preTraverse(bn.lchild);
			preTraverse(bn.rchild);
		}
	}

	void PrintD(BiNode bn){//����Ŵ���λ�ýڵ���
		if(bn!=null){
			if(bn.data.flag){
				System.out.print("\n"+bn.data.name+"����÷Ŵ���");
			}
			PrintD(bn.lchild);
			PrintD(bn.rchild);
		}
	}
}
