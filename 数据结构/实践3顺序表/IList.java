public interface IList<H>{
	public void clear();
	public boolean isEmpty();
	public int length();
	public H get(int i);
	public void insert(int i,H x);
	public void remove(int i);
	public int indexOf(H x);
	public void display();
}