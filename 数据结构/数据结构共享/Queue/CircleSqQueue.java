package Queue;

import Stack.SqStack;

public class CircleSqQueue<T> implements IQueue<T>{
	private T[] queueElem; 
	private int front; 
    private int rear;
    @SuppressWarnings("unchecked")
	public CircleSqQueue(int maxSize){
    	queueElem=(T[]) new Object[maxSize];
    }
    	@Override
	public T peek() throws Exception{
		// TODO Auto-generated method stub
     if(front==rear)throw new Exception("œ¬“Á£°");
    	int i=(front+1)%queueElem.length;
		return queueElem[i];
	}

	@Override
	public void offer(T x) throws Exception {
		// TODO Auto-generated method stub
		if((rear+1)%queueElem.length==front) throw new Exception("…œ“Á£°");
	      rear=(rear+1)%queueElem.length;   
	      queueElem[rear]=x;

	}

	@Override
	public T poll() throws Exception {
		// TODO Auto-generated method stub
		if(front==rear)throw new Exception("œ¬“Á£°");
		int i=(front+1)%queueElem.length;
		front=(front+1)%queueElem.length;
	     return  queueElem[i];
	}
	public void reverse(){
		SqStack<T> s=new SqStack<T>(10);
		
	}

}
