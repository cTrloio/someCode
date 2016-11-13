package Queue;

import List.Node;
import Stack.IStack;

public class LinkQueue<T> implements IStack<T> {
	private Node<T> front;
	private Node<T> rear;
	public LinkQueue(){
		 front=new Node(); 
	     rear=front;

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
	public T peek() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void push(T x) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public T pop() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
