package Stack;

public interface IStack<T> {
	public  void  clear();
	public  boolean  isEmpty();
	public  int  length();
	public  T  peek()throws Exception;
	public  void  push(T x) throws Exception;
	public  T  pop()throws Exception;

}
