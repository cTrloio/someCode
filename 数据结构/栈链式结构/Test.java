package baofour;

public class Test {//��ʽջ�ṹ

	public static void main(String[] args) throws Exception {
		LinkStack<Integer> ls=new LinkStack<Integer>();
		
		ls.push(9);ls.push(8);ls.push(7);ls.push(6);ls.push(5);
		
		System.out.print("�Ƿ�Ϊ�գ�"+ls.isEmpty());
		System.out.print("ջ���ȣ�"+ls.length());
		System.out.print("����ջ��Ԫ�أ�"+ls.peek());
		//ls.display();
		//ls.clear();
		ls.pop();ls.pop();ls.pop();
		
		System.out.print("�Ƿ�Ϊ�գ�"+ls.isEmpty());
		System.out.print("ջ���ȣ�"+ls.length());
		System.out.print("����ջ��Ԫ�أ�"+ls.peek());
		//ls.display();
	}

}
