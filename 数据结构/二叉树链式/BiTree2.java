package baoseven;

public class BiTree<T> {
	private BiTreeNode<T> root;//�����ڵ�

	public BiTree(){//����һ�ÿ���
		this.root=null;
	}
	public BiTree(BiTreeNode<T> root){//����һ����
		this.root=root;
	}
	public BiTree(String preOrder,String inOrder,int preIndex,int inIndex,int count){
		//���ȸ��������и��������д���һ�Ŷ��������㷨
		if(count>0){
			char r= preOrder.charAt(preIndex);
			int i=0;
			for(;i<count;i++){
				if(r==inOrder.charAt(i+inIndex)){
					break;
				}
			}
			root=new BiTreeNode(r);
			root.setLchild(new BiTree<T>(preOrder,inOrder,preIndex+1,inIndex,i).root);
			root.setRchild(new BiTree<T>(preOrder,inOrder,preIndex+i+1,inIndex+i+1,count-i-1).root);
		}
	}
	
	private static int index=0;
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public BiTree(String preStr){
		//�ɱ������������ȸ��������д������������㷨
		char c=preStr.charAt(index++);
		if(c!='#'){
			root=new BiTreeNode(c);
			root.setLchild(new BiTree<T>(preStr).root);
			root.setRchild(new BiTree<T>(preStr).root);
		}else{
			root=null;
		}
	}
	public void preRootTraverse(BiTreeNode<T> T){
		//�ȸ��������������������ĵݹ��㷨
		if(T!=null){
			System.out.print(T.getData());
			preRootTraverse(T.getLchild());
			preRootTraverse(T.getRchild());
		}
	}
  /*public void preRootTraverse() {		 //ǰ������ǵݹ��㷨
    BiTreeNode<T> T=root;
    BiTreeNode[] s=new BiTreeNode[20];	 //ջ
    int top= -1;     					 //����˳��ջ�����ٶ����ᷢ������
    while (T!=null || top!= -1)
    {
        while (T!= null)
        {
           System.out.print(T.getData());
            s[++top]=T;
            T=T.getLchild();  
        }
        if (top!= -1) { 
            T=s[top--];
            T=T.getRchild();  
        }
    }
}*/
	@SuppressWarnings("unchecked")
	public void preRootTraverse() throws Exception{
		//�ȸ��������������������ķǵݹ��㷨
		BiTreeNode<T> T =root;
		if(T!=null){
			LinkStack S=new LinkStack();
			S.push(T);
			while(!S.isEmpty()){
				while(T!=null){
					if(T.getLchild()!=null){
						System.out.print(T.getLchild().getData());
					}
					if(T.getRchild()!=null){
						S.push(T.getRchild());
					}
					T=T.getLchild();
				}
			}
		}
	}

	public void inRootTraverse(BiTreeNode<T> T){
		//�и��������������������ĵݹ��㷨
		if(T!=null){
			inRootTraverse(T.getLchild());
			System.out.print(T.getData());
			inRootTraverse(T.getRchild());
		}
	}
	@SuppressWarnings("unchecked")
	public void inRootTraverse() throws Exception{
		//�и��������������������ķǵݹ��㷨
		BiTreeNode<T> T=root;
		if(T!=null){
			LinkStack S=new LinkStack();
			S.push(T);
			while(!S.isEmpty()){
				while(S.peek()!=null){
					S.push(((BiTreeNode<T>)S.peek()).getLchild());
				}
				S.pop();
				if(!S.isEmpty()){
					T=(BiTreeNode<T>)S.pop();
					System.out.print(T.getData());
					S.push(T.getRchild());
				}
			}
		}
	}

	public void postRootTraverse(BiTreeNode<T> T){
		//����������������������ĵݹ��㷨
		if(T!=null){
			postRootTraverse(T.getLchild());
			postRootTraverse(T.getRchild());
			System.out.print(T.getData());
		}
	}
	@SuppressWarnings("unchecked")
	public void postRootTraverse() throws Exception{
		//����������������������ķǵݹ��㷨
		BiTreeNode<T> T=root;
		if(T!=null){
			LinkStack S=new LinkStack();//����ջ
			S.push(T);					//���ڵ��ջ
			Boolean flag;				//���ʱ��
			BiTreeNode<T> p=null;			//pָ��ոձ����ʵĽڵ�
			while(!S.isEmpty()){
				while(S.peek()!=null){
					S.push(((BiTreeNode<T>)S.peek()).getLchild());
				}
				S.pop();
				while(!S.isEmpty()){
					T=(BiTreeNode<T>)S.peek();//ջ��Ԫ��
					if(T.getRchild()==null||T.getRchild()==p){
						System.out.print(T.getData());
						S.pop();
						p=T;
						flag=true;
					}
					else{
						S.push(T.getRchild());
						flag=true;
					}
					if(!flag){
						break;
					}
				}
			}
		}
	}
	public int countNode(BiTreeNode<T> T){//��ڵ����
		
		int count =0;
		if(T!=null){
			++count;
			count+=countNode(T.getLchild());
			count+=countNode(T.getRchild());
		}
		return count;
	}
	
	public int countyeNode(BiTreeNode<T> U){//��Ҷ�ڵ����
		int count =0;
		if(U!=null){
			if(U.getLchild()==null&&U.getRchild()==null){
				++count;
			}
			count+=countyeNode(U.getLchild());
			count+=countyeNode(U.getRchild());
		}
		return count;
	}

	public int getDepth(BiTreeNode<T> T){//�����������㷨
		if(T!=null){
			int lDepth=getDepth(T.getLchild());
			int rDepth=getDepth(T.getRchild());
			return 1+(lDepth>rDepth?lDepth:rDepth);
		}
		return 0;
	}
	
	
	public BiTreeNode<T> getRoot() {
		return root;
	}
	public void setRoot(BiTreeNode<T> root) {
		this.root = root;
	}
	public static int getIndex() {
		return index;
	}
	public static void setIndex(int index) {
		BiTree.index = index;
	}

}
