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

	private void createHead(int n) throws Exception {// 头插法
		Scanner in = new Scanner(System.in);
		for (int j = 0; j < n; j++) {
			insert(0, in.next());
		}
	}

	private void createRear(int n) throws Exception {// 尾插法
		Scanner in = new Scanner(System.in);
		for (int j = 0; j < n; j++) {
			insert(length(), in.next());
		}
	}

	@SuppressWarnings("unchecked")
	public void clear() {// 清空
		head.setData(null);
		head.setNext(null);
	}

	public boolean isEmpty() {
		return head.getNext() == null;
	}

	public int length() {// 获取长度
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
	public Object get(int i) {// 按位查找
		Node p = head.getNext();
		int j = 0;
		while (p != null && j < i) {
			p = p.getNext();
			++j;
		}
		if (j > i || p == null) {
			System.out.print("错误");
		}
		return p.getData();
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	/*
	 * public void insert(int i, Object x) {//带头节点插入 Node p = head; int j = -1;
	 * while (p != null && j < i - 1) { p = p.getNext(); ++j; } if (j > i - 1 ||
	 * p == null) { System.out.print("错误"); } Node s = new Node(x);
	 * s.setNext(p.getNext()); p.setNext(s); }
	 */
	public void insert(int i, Object x) {// 不带头节点插入
		Node p = head;
		int j = 0;
		while (p != null && j < i - 1) {
			p = p.getNext();
			++j;
		}
		if (j > i || p == null) {
			System.out.print("错误");
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
	public void remove(int i) {// 删除
		Node p = head;
		int j = -1;
		while (p != null && j < i - 1) {
			p = p.getNext();
			++j;
		}
		if (j > i - 1 || p.getNext() == null) {
			System.out.print("错误");
		}
		p.setNext(p.getNext().getNext());
	}

	public int indexOf(Object x) {// 按值查找
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
	public void display() {// 删除所有节点
		Node node = head.getNext();
		while (node != null) {
			System.out.print(node.getData() + " ");
			node = node.getNext();
		}
		System.out.print(" ");
	}

	public void PrintList() {// 遍历
		@SuppressWarnings("rawtypes")
		Node p = head.getNext();
		while (p != null) {
			System.out.println(p.getData());
			p = p.getNext();
		}
	}

}
