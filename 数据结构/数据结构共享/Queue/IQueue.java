package Queue;

public interface IQueue<T> {
	public T peek()throws Exception;
	public void offer(T x)throws Exception;
	public T poll()throws Exception;
}
