package Tree;

public interface ITree<T> {
   public void preRootTraverse(BiTreeNode<T> R);
   public void inRootTraverse(BiTreeNode<T> R);
   public void postRootTraverse(BiTreeNode<T> R);
}
