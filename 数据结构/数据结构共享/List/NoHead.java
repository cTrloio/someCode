package List;

public class NoHead<T> implements IList<T> {
	private Node<T> head;
	public NoHead(){
		head=null;
	}
    public NoHead(T []a,int n){
    	Node<T> rear=head;
    	Node<T> s=new Node<T>(a[0],null);
    	head=s;
    	rear=s;
		   for(int i=1;i<n;i++){
			   s=new Node<T>(a[i],null);
			   rear.setNext(s);
			   rear=s;	  
		   }
    }
	@Override
	public T get(int i) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void insert(int i, T x) throws Exception {
		// TODO Auto-generated method stub
		if(i==0){
			Node<T> s=new Node<T>();  
			s.setData(x);
			s.setNext(head);
			head=s;
		}
		else{
		Node<T> p=head;
		int j=0;
		while(p!=null&&j<i-1){
			p=p.getNext();
       	++j;
			
		}
		if(p==null) throw new Exception("位置异常");
		else
			{
			Node<T> s=new Node<T>();  
			s.setData(x);
			s.setNext(p.getNext());  
			p.setNext(s);
			}
		}
	}

	@Override
	public int indexOf(T x) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public T remove(int i) throws Exception {
		if(head==null)throw new Exception("下溢！");
		// TODO Auto-generated method stub
		if(i==0){
			 Node<T> q=head;
			 T x=q.getData();
			 head=head.getNext();
			 return x;
		}
		else{
		Node<T> p=head;
		int j=0;
		while(p!=null&&j<i-1){
			p=p.getNext();
       	    ++j;
			
		}
		if(p==null||p.getNext()==null) throw new Exception("位置异常");
		else
			{
			 Node<T> q=p.getNext();
			 T x=q.getData();
			 p.setNext(q.getNext());
			 return x;
			}
		}
	}

	@Override
	public void PrintList() {
		// TODO Auto-generated method stub
		Node<T> p=head;
		int j=0;
	     while (p!=null)   
	     {
	      j++;	 
	      p=p.getNext(); 
	     }
	     System.out.print(j);
	}

}
