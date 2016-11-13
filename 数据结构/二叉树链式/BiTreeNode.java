package baoseven;

public class BiTreeNode <T>{
	private T data;
	private BiTreeNode<T> lchild,rchild;
	
	public BiTreeNode(){
		this(null);
	}
	public BiTreeNode(T data) {
		this(data,null,null);
	}
	public BiTreeNode (T data,BiTreeNode<T> lchild,BiTreeNode<T> rchild){
		this.data=data;
		this.lchild=lchild;
		this.rchild=rchild;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public BiTreeNode<T> getLchild() {
		return lchild;
	}
	public void setLchild(BiTreeNode<T> lchild) {
		this.lchild = lchild;
	}
	public BiTreeNode<T> getRchild() {
		return rchild;
	}
	public void setRchild(BiTreeNode<T> rchild) {
		this.rchild = rchild;
	}
	
}
