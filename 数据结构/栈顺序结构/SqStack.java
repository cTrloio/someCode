package baothree;

public class SqStack<S> implements IStack<S>{
	private int top;
	private S[] se;
	@SuppressWarnings("unchecked")
	public SqStack(int maxSize){
		top=0;
		se=(S[])new Object[maxSize];
	}
	public void clear() {//���ջ
		top=0;
	}
	public boolean isEmpty() {//�ж��Ƿ�Ϊ��
		return top==0;
	}
	public int length() {//��ȡջ����
		return top;
	}
	public void push(S x) throws Exception {//��ջ
		if(top==se.length){
			throw new Exception("ջ����");
		}else{
			se[top++]=x;
		}
	}
	public S pop() {//��ջ
		if(isEmpty()){
			return null;
		}else{
			return se[--top];
		}
	}
	public S peek() {//ջ��Ԫ��
		if(!isEmpty()){
			return se[top-1];
		}
		else{
			return null;
		}
	}
	public void display(){//����
		for(int i=top-1;i>=0;i--){
			System.out.print(se[i].toString()+" ");
		}
		System.out.println();
	}

}
