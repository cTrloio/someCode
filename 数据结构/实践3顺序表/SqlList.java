import java.lang.reflect.Array; 
@SuppressWarnings("unused")
public class SqlList<H> implements IList<H>{
	H[] a;
	int aleng;
	@SuppressWarnings("unchecked")
	SqlList(int maxSize){
		aleng=0;
		a=(H[])new Object[maxSize];
	
	}
	@SuppressWarnings("unchecked")
	SqlList(H[] b,int bleng,int maxSize)throws Exception{
		if(bleng>maxSize){
			aleng=bleng;
			a=(H[])new Object[maxSize];
			for(int i=0;i<bleng;i++){
				a[i]=b[i];
			}
		}
	}
	public void clear() {//置空
		  aleng=0;
	}
	public boolean isEmpty() {//是否为空
		return aleng==0;
	}
	public int length() {//长度
		return aleng;
	}
	@SuppressWarnings("unchecked")
	public H get(int i) {//得到i位置的值
		if(i<0||i>aleng-1){
			return (H)"错误：不在范围内";
		}
		return a[i];
	}
	public void insert(int i, H x){//在i位置插入x
		if(aleng==a.length){
			System.out.println("顺序表已满");
		}
		if(i<0||i>aleng){
			System.out.println("顺序表不在范围内");
		}
		for(int j=aleng;j>i;j--){
			a[j]=a[j-1];
			a[i]=x;
			aleng++;
		}
	}
	public void remove(int i) {//删除i位置的东西
		if(i<0||i>aleng){
			System.out.println("顺序表不在范围内");
		}
		for(int j=i;j<aleng-1;j++){
			a[j]=a[j+1];
			aleng--;
		}
	}
	public int indexOf(H x) {//查找
		int j=0;
		while(j<aleng&&!a[j].equals(x)){
			j++;
		}
		if(j<aleng){
			return j;
		}else{
			return -1;
		}
	}
	public void display() {//遍历
		for(int i=0;i<aleng;i++){
			System.out.println( a[i]+" ");
		}
	}
}
