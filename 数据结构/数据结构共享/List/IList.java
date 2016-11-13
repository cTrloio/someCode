package List;

public interface IList <T>{
    public T get(int i)throws Exception;
    public void insert(int i,T x) throws Exception;
    public  int  indexOf(T x);
    public T remove(int i)throws Exception;
    public void PrintList(); 
}
