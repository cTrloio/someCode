package baothree;

public class SqStack<S> implements IStack<S>{
	private int top;
	private S[] se;
	@SuppressWarnings("unchecked")
	public SqStack(int maxSize){
		top=0;
		se=(S[])new Object[maxSize];
	}
	public void clear() {//清空栈
		top=0;
	}
	public boolean isEmpty() {//判断是否为空
		return top==0;
	}
	public int length() {//获取栈长度
		return top;
	}
	public void push(S x) throws Exception {//入栈
		if(top==se.length){
			throw new Exception("栈已满");
		}else{
			se[top++]=x;
		}
	}
	public S pop() {//出栈
		if(isEmpty()){
			return null;
		}else{
			return se[--top];
		}
	}
	public S peek() {//栈顶元素
		if(!isEmpty()){
			return se[top-1];
		}
		else{
			return null;
		}
	}
	public void display(){//遍历
		for(int i=top-1;i>=0;i--){
			System.out.print(se[i].toString()+" ");
		}
		System.out.println();
	}

}
