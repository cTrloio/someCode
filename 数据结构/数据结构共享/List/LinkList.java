package List;

public class LinkList<T> implements IList<T> {
	private Node<T> head;
	public LinkList(){
		head=new Node<T>();
	}
   public LinkList(T []a,int n,boolean Order){
	   this();
	   if(Order==true){ //头插法
	   for(int i=0;i<n;i++){
		   Node<T> s=new Node<T>(a[i],head.getNext());
		   head.setNext(s);
	   }
	   }
	   else//尾插法
	   {
		   Node<T> rear=head;
		   for(int i=0;i<n;i++){
			   Node<T> s=new Node<T>(a[i],null);
			   rear.setNext(s);
			   rear=s;	  
		   }
		   }
	   
   }
   public Node<T> getHead(){
	   return head;
   }

	

	@Override
public void PrintList() {
	// TODO Auto-generated method stub
		{
			Node<T> p=head.getNext();
			while(p!=null){
				System.out.println(p.getData());
				p=p.getNext();
			}
		}
	
}
	@Override
	public T get(int i) throws Exception{
		// TODO Auto-generated method stub
		Node<T> p=head.getNext();
		int j=0;
		while(p!=null&&j<i){
			p=p.getNext();
			j++;
		}
		if(p==null) throw new Exception("位置异常");
		else
			return p.getData();
	}

	@Override
	public void insert(int i, T x) throws Exception {
		// TODO Auto-generated method stub
		Node<T> p=head;
		int j=-1;
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

	@Override
	public int indexOf(T x) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public T remove(int i) throws Exception{
		Node<T> p=head;
		int j=-1;
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
