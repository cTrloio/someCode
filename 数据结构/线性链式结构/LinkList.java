package baotwo;

import java.util.Scanner;

public class LinkList implements IList {
	@SuppressWarnings("rawtypes")
	Node head;

	@SuppressWarnings("rawtypes")
	public LinkList() {
		head = new Node();
	}

	public LinkList(int n, boolean Order) throws Exception {
		this();
		if (Order) {
			createHead(n);
		} else {
			createRear(n);
		}
	}

	private void createHead(int n) throws Exception {// ͷ�巨
		Scanner in = new Scanner(System.in);
		for (int j = 0; j < n; j++) {
			insert(0, in.next());
		}
	}

	private void createRear(int n) throws Exception {// β�巨
		Scanner in = new Scanner(System.in);
		for (int j = 0; j < n; j++) {
			insert(length(), in.next());
		}
	}

	@SuppressWarnings("unchecked")
	public void clear() {// ���
		head.setData(null);
		head.setNext(null);
	}

	public boolean isEmpty() {
		return head.getNext() == null;
	}

	public int length() {// ��ȡ����
		@SuppressWarnings("rawtypes")
		Node p = head.getNext();
		int length = 0;
		while (p != null) {
			p = p.getNext();
			++length;
		}
		return length;
	}

	@SuppressWarnings("rawtypes")
	public Object get(int i) {// ��λ����
		Node p = head.getNext();
		int j = 0;
		while (p != null && j < i) {
			p = p.getNext();
			++j;
		}
		if (j > i || p == null) {
			System.out.print("����");
		}
		return p.getData();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	/*
	 * public void insert(int i, Object x) {//��ͷ�ڵ���� Node p = head; int j = -1;
	 * while (p != null && j < i - 1) { p = p.getNext(); ++j; } if (j > i - 1 ||
	 * p == null) { System.out.print("����"); } Node s = new Node(x);
	 * s.setNext(p.getNext()); p.setNext(s); }
	 */
	public void insert(int i, Object x) {// ����ͷ�ڵ����
		Node p = head;
		int j = 0;
		while (p != null && j < i - 1) {
			p = p.getNext();
			++j;
		}
		if (j > i || p == null) {
			System.out.print("����");
		}
		Node s = new Node(x);
		if (i == 0) {
			s.setNext(head);
			head = s;
		} else {
			s.setNext(p.getNext());
			p.setNext(s);
		}
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void remove(int i) {// ɾ��
		Node p = head;
		int j = -1;
		while (p != null && j < i - 1) {
			p = p.getNext();
			++j;
		}
		if (j > i - 1 || p.getNext() == null) {
			System.out.print("����");
		}
		p.setNext(p.getNext().getNext());
	}

	public int indexOf(Object x) {// ��ֵ����
		@SuppressWarnings("rawtypes")
		Node p = head.getNext();
		int j = 0;
		while (p != null && p.getData().equals(x)) {
			p = p.getNext();
			++j;
		}
		if (p != null) {
			return j;
		} else
			return -1;
	}

	@SuppressWarnings("rawtypes")
	public void display() {// ɾ�����нڵ�
		Node node = head.getNext();
		while (node != null) {
			System.out.print(node.getData() + " ");
			node = node.getNext();
		}
		System.out.print(" ");
	}

	public void PrintList() {// ����
		@SuppressWarnings("rawtypes")
		Node p = head.getNext();
		while (p != null) {
			System.out.println(p.getData());
			p = p.getNext();
		}
	}

}
