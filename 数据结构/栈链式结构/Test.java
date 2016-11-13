package baofour;

public class Test {//列式栈结构

	public static void main(String[] args) throws Exception {
		LinkStack<Integer> ls=new LinkStack<Integer>();
		
		ls.push(9);ls.push(8);ls.push(7);ls.push(6);ls.push(5);
		
		System.out.print("是否为空："+ls.isEmpty());
		System.out.print("栈长度："+ls.length());
		System.out.print("返回栈顶元素："+ls.peek());
		//ls.display();
		//ls.clear();
		ls.pop();ls.pop();ls.pop();
		
		System.out.print("是否为空："+ls.isEmpty());
		System.out.print("栈长度："+ls.length());
		System.out.print("返回栈顶元素："+ls.peek());
		//ls.display();
	}

}
