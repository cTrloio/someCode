package single;


public class BiTree {
    public BiNode root;
    public static int index=0;
    private static int  tolerate=3;//容忍值
    public BiTree(){
    	this.root=null;
    }
	public BiTree(String preStr,int[]t){//二叉树的构造
    	char c=preStr.charAt(index);
    	int d=t[index];
    	index++;
    	if(c!='#'){
    		root=new BiNode();
    		root.name=c;
    		root.data=new element();
    		System.out.println(c);
    		root.data.d=d;
    		root.lchild=new BiTree(preStr,t).root;
    		root.rchild=new BiTree(preStr,t).root;
    	}
    	else{
    		root=null;
    	}
    }
    public int setD(BiNode R){//设置放大器及添加设置放大器后的D值
    	R.data.D=0;
    	if(R.lchild!=null)
    	{
    		setD(R.lchild);
    		if(R.lchild.data.D+R.lchild.data.d>tolerate)
    			R.lchild.data.boost=true;
    		else
    		R.data.D=Math.max(R.data.D, R.lchild.data.D+R.lchild.data.d);
    	}
    	if(R.rchild!=null)
    	{
    		setD(R.rchild);
    		if(R.rchild.data.D+R.rchild.data.d>tolerate)
    			R.rchild.data.boost=true;
    		else
    		R.data.D=Math.max(R.data.D, R.rchild.data.D+R.rchild.data.d);
    	}
    	return R.data.D;
    }
    public void Amplifier(BiNode R){//应用前序遍历输出设置了放大器的结点。
    	if(R!=null){
    		if(R.data.boost)
    		System.out.println(R.name);
    		Amplifier(R.lchild);
    		Amplifier(R.rchild);
    	}
    }
}
