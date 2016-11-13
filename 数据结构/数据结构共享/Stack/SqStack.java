package Stack;

public class SqStack<T> implements IStack<T> {
	private T []stackElem;
	private int top;
	@SuppressWarnings("unchecked")
	public SqStack(int maxSize){
		stackElem=(T[])new Object[maxSize];
		top=-1;
	}

	@Override
	public void clear() {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean isEmpty() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int length() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public T peek() throws Exception{ //取栈
		// TODO Auto-generated method stub
		if(top==-1) throw new Exception("下溢！");
		return stackElem[top];
	}

	@Override
	public void push(T x) throws Exception {
		// TODO Auto-generated method stub
     if(top==stackElem.length-1) throw new Exception("上溢！");
     top++;
     stackElem[top]=x;
	}

	@Override
	public T pop() throws Exception{
		// TODO Auto-generated method stub
		if(top==-1) throw new Exception("下溢！");
		T x=stackElem[top];
		top--;
		return x;
	}
    public int getTop(){
    	return top;
    }
}
