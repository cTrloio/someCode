package baoseven;
public class LinkStack<L> implements IStack<L> {
	@SuppressWarnings("rawtypes")
	private Node top;
	public void clear() {// �ÿ���ʽջ
		top = null;
	}

	public boolean isEmpty() {// �Ƿ�Ϊ��
		return top == null;
	}

	@SuppressWarnings("rawtypes")
	public int length() {// ��ȡ����
		Node p = top;
		int length = 0;
		while (p != null) {
			p = p.getNext();
			++length;
		}
		return length;
	}

	@SuppressWarnings("unchecked")
	public L peek() {// ջ��Ԫ��
		if (isEmpty()) {
			return (L) top.getData();
		} else {
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public void push(L x) throws Exception {// ��ջ
		@SuppressWarnings("rawtypes")
		Node p = new Node(x);
		p.setNext(top);
		top = p;
	}

	@SuppressWarnings("unchecked")
	public L pop() {// ��ջ
		if (isEmpty()) {
			return null;
		} else {
			@SuppressWarnings("rawtypes")
			Node p = top;
			top = top.getNext();
			return (L) p.getData();
		}
	}

	public void display() {// ����
		@SuppressWarnings("rawtypes")
		Node p = top;
		while (p != null) {
			System.out.print(p.getData().toString() + " ");
			p.getNext();
		}
	}
}
