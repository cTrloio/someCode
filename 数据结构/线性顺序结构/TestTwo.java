
public class TestTwo {//顺序线性结构
	public static void main(String[] args) {
		SqlList<Integer> sq=new SqlList<Integer>(100);
		sq.insert(0, 2);
		sq.insert(1, 2);
		sq.insert(2, 2);
		sq.get(0);
		sq.get(1);
		sq.get(2);
		sq.remove(0);
	}
}
