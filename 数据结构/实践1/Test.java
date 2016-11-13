public class Test {

	public static void main(String[] args) {
		//标明空子树序列：	ABDH##I##E##CFJ###GK###
		String a="ABDH##I##E##CFJ###GK###";
		
		BiTree c=new BiTree(a);		//创建二叉树
		c.OrderD(c.bn);			//设置放大器位置
		c.preTraverse(c.bn);		//前序递归遍历
		c.PrintD(c.bn);			//输出放大器位置节点
	}
}
