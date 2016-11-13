package baofive;

public class SqQueue<T> implements IQueue<T>{
	T[] list;
	int front;
	int rear;
	int flag=0;
	@SuppressWarnings("unchecked")
	public SqQueue(int maxSize){
		list=(T[])new Object[maxSize];
		front = rear =0;
	}
	public void clear() {
		front = rear =0;
	}
	public boolean isEmpty() {
		return (front==rear);
	}
	public int length() {
		return (rear-front);
	}
	public T peek() {
		if(front==rear){
			return null;
		}else{
			return list[front];
		}
	}
	public void offer(T x) throws Exception {
		//if((rear+1)%list.length==front){
		if(rear==front&&flag==1){
			throw new Exception("队列已满");
		}else{
			list[rear]=x;
			rear=(rear+1)%list.length;
			flag=1;
		}
	}

	public T poll() throws Exception {
		//if(rear==front){
		if(rear==front&&flag==0){
			throw new Exception("队列为空");
		}else{
			T t=list[front];
			front=(front+1)%list.length;
			flag=0;
			return t;
		}
	}
	
	public void display(){
		if(!isEmpty()){
			for(int i=front;i!=rear;i=(i+1)%list.length){
				System.out.print(list[i].toString()+" ");
			}
		}
		else{
			System.out.println("队列为空");
		}
	}
	

}
