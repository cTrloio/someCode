package baoseven;

public interface IStack<S>  {
	
	public void clear();
	
	public boolean isEmpty();
	
	public int length();
	
	public S peek();
	
	public void push(S x) throws Exception;
	
	public S pop();
}
