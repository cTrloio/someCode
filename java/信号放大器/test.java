package single;


public class test {

	public static void main(String[] args) {
        String s="ABDH##I##E##CFJ###GK###";
        int []t={0,1,2,2,0,0,1,0,0,2,0,0,3,1,2,0,0,0,2,2,0,0,0};
						//����dֵ���飬�����Ӧs����
        BiTree tree=new BiTree(s,t);
        tree.setD(tree.root);
        tree.Amplifier(tree.root);
	}

}
