package baothree;

public class Test {//˳��ջ�ṹ

	public static void main(String[] args) throws Exception {
		
		SqStack<Integer> ss=new SqStack<Integer>(10);
		ss.push(1);ss.push(2);ss.push(3);ss.push(4);ss.push(5);
		ss.push(6);ss.push(7);ss.push(8);ss.push(9);
		
		System.out.println("ջ���ȣ�"+ss.length());
		System.out.println("�Ƿ�Ϊ�գ�"+ss.isEmpty());
		System.out.println("����ջ��Ԫ�أ�"+ss.peek());
		ss.display();
		
		//ss.clear();
		ss.pop();ss.pop();ss.pop();ss.pop();
		
		System.out.println("ջ���ȣ�"+ss.length());
		System.out.println("�Ƿ�Ϊ�գ�"+ss.isEmpty());
		System.out.println("����ջ��Ԫ�أ�"+ss.peek());
		ss.display();
	}

}
