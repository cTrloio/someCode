package Tree;

public class BiTree<T> implements ITree<T> {
    private BiTreeNode<T> root;
    private static int index=0;
    public BiTree(){
    	this.root=null;
    }
    @SuppressWarnings("unchecked")
	public BiTree(String preStr){
    	Character c=preStr.charAt(index);
    	index++;
    	if(c!='#'){
    		root=new BiTreeNode<T>((T)c);
    		root.setLchild(new BiTree<T>(preStr).getRoot());
    		root.setRchild(new BiTree<T>(preStr).getRoot());
    	}
    	else{
    		root=null;
    	}
    }
    public BiTreeNode<T> getRoot(){
    	return this.root;
    }
	@Override
	public void preRootTraverse(BiTreeNode<T> R) {
		// TODO Auto-generated method stub
        if(R!=null){
        	System.out.println(R.getData());
        	preRootTraverse(R.getLchild());
        	preRootTraverse(R.getRchild());
        }
	}
	
	@Override
	public void inRootTraverse(BiTreeNode<T> R) {
		// TODO Auto-generated method stub
      if(R!=null){
    	  inRootTraverse(R.getLchild());
    	  System.out.println(R.getData());
    	  inRootTraverse(R.getRchild());
      }
	}

	@Override
	public void postRootTraverse(BiTreeNode<T> R) {
		// TODO Auto-generated method stub
		if(R!=null){
	    	  postRootTraverse(R.getLchild());
	    	  postRootTraverse(R.getRchild());
	    	  System.out.println(R.getData());
	      }
	}
	public int Count(BiTreeNode<T> R){
		int count=0;
		if(R!=null){
			if(R.getLchild()==null&&R.getRchild()==null){
			       count++;
			       return count;
			       }
			count=count+Count(R.getLchild());
			count=count+Count(R.getRchild());
			return count;

		}
		return count;
	}
	public boolean select(BiTreeNode<T> R,T p){
		if(R!=null){
			if(R.getData()==p)
			{
				System.out.println(R.getData());
				return true;
			}
			if(select(R.getLchild(),p)||select(R.getRchild(),p)){
				System.out.println(R.getData());
				return true;
			}
		}
		return false;
	}

}
