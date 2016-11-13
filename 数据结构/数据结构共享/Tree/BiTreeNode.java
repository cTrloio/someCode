package Tree;

public class BiTreeNode<T> {
       private T data;
       private BiTreeNode<T> lchild,rchild;
       public BiTreeNode(T data,BiTreeNode<T> lchild,BiTreeNode<T> rchild){
    	     this.data=data;
    	     this.lchild=lchild;
    	     this.rchild=rchild;
       }
       public BiTreeNode(T data){
    	   this(data,null,null);
       }
       public BiTreeNode(){
    	   this(null,null,null);
       }
       public void setData(T data){
    	   this.data=data;
       }
       public T getData(){
    	   return this.data;
       }
       public void setLchild(BiTreeNode<T> lchild){
    	   this.lchild=lchild;
       }
       public BiTreeNode<T> getLchild(){
    	   return this.lchild;
       }
       public void setRchild(BiTreeNode<T> rchild){
    	   this.rchild=rchild;
       }
       public BiTreeNode<T> getRchild(){
    	   return this.rchild;
       }
}
