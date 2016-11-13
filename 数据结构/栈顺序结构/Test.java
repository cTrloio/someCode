package baothree;

public class Test {//顺序栈结构

	public static void main(String[] args) throws Exception {
		
		SqStack<Integer> ss=new SqStack<Integer>(10);
		ss.push(1);ss.push(2);ss.push(3);ss.push(4);ss.push(5);
		ss.push(6);ss.push(7);ss.push(8);ss.push(9);
		
		System.out.println("栈长度："+ss.length());
		System.out.println("是否为空："+ss.isEmpty());
		System.out.println("返回栈顶元素："+ss.peek());
		ss.display();
		
		//ss.clear();
		ss.pop();ss.pop();ss.pop();ss.pop();
		
		System.out.println("栈长度："+ss.length());
		System.out.println("是否为空："+ss.isEmpty());
		System.out.println("返回栈顶元素："+ss.peek());
		ss.display();
	}

}
