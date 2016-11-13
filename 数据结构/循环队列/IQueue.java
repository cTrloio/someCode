package baofive;

public interface IQueue<T>  {
	
	public void clear();
	
	public boolean isEmpty();
	
	public int length();
	
	public T peek();
	
	public void offer(T x) throws Exception;
	
	public T poll() throws Exception;
}
