package baoseven;
public class LinkStack<L> implements IStack<L> {
	@SuppressWarnings("rawtypes")
	private Node top;
	public void clear() {// 置空链式栈
		top = null;
	}

	public boolean isEmpty() {// 是否为空
		return top == null;
	}

	@SuppressWarnings("rawtypes")
	public int length() {// 获取长度
		Node p = top;
		int length = 0;
		while (p != null) {
			p = p.getNext();
			++length;
		}
		return length;
	}

	@SuppressWarnings("unchecked")
	public L peek() {// 栈顶元素
		if (isEmpty()) {
			return (L) top.getData();
		} else {
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public void push(L x) throws Exception {// 入栈
		@SuppressWarnings("rawtypes")
		Node p = new Node(x);
		p.setNext(top);
		top = p;
	}

	@SuppressWarnings("unchecked")
	public L pop() {// 出栈
		if (isEmpty()) {
			return null;
		} else {
			@SuppressWarnings("rawtypes")
			Node p = top;
			top = top.getNext();
			return (L) p.getData();
		}
	}

	public void display() {// 遍历
		@SuppressWarnings("rawtypes")
		Node p = top;
		while (p != null) {
			System.out.print(p.getData().toString() + " ");
			p.getNext();
		}
	}
}
