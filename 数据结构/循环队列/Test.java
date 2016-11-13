package baofive;

public class Test {

	public static void main(String[] args) {
		SqQueue<Integer> sq=new SqQueue<Integer>(10);
		SqStack<Integer> ss=new SqStack<Integer>(10);
		
		try {
			sq.offer(9);
			sq.offer(8);
			sq.offer(7);
			while(!sq.isEmpty()){
				ss.push(sq.poll());
			}
			
			while(!ss.isEmpty()){
				sq.offer(ss.pop());
			}
		
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		sq.display();
	}

}
