package Queue;

import Stack.SqStack;

public class CircleQueue<T> implements IQueue<T> {
	private T[] queueElem; 
	private int front; 
    private int rear;
    private int flag;
    @SuppressWarnings("unchecked")
	public CircleQueue(int maxSize){
    	queueElem=(T[]) new Object[maxSize];
    	front=0;
    	rear=0;
    	flag=0;
    }
	@Override
	public T peek() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void offer(T x) throws Exception {
		// TODO Auto-generated method stub
		if(rear==front&&flag==1) throw new Exception("…œ“Á£°");
	      rear=(rear+1)%queueElem.length;   
	      queueElem[rear]=x;
	    if(flag==0)flag=1;
	}

	@Override
	public T poll() throws Exception {
		// TODO Auto-generated method stub
		if(front==rear&&flag==0)throw new Exception("œ¬“Á£°");
		T x=queueElem[(front+1)%queueElem.length];
		front=(front+1)%queueElem.length;
		if(front==rear) flag=0;
	     return  x;
	}
	public void reverse(){
		int l=(rear-front+queueElem.length)%queueElem.length;
		SqStack<T> s=new SqStack<T>(l);
		while(flag!=0){
			try{
			s.push(poll());
			}
			catch(Exception e){
				System.out.println(e.getMessage());
			}
		}
		while(s.getTop()!=-1){
			try{
				offer(s.pop());
				}
				catch(Exception e){
					System.out.println(e.getMessage());
				}
		}
	}
    
}
