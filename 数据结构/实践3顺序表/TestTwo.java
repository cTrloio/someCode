
public class TestTwo {
	public static void main(String[] args) {
		SqlList<Integer> a=new SqlList<Integer>(10);
		a.insert(0,10);
		a.insert(1,20);
		a.insert(2,30);
		a.insert(3,40);
		a.insert(4,50);
		System.out.println(a.get(1));
		a.length();
		a.remove(1);
	}

}
