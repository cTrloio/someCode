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
	public void clear() {//�ÿ�
		  aleng=0;
	}
	public boolean isEmpty() {//�Ƿ�Ϊ��
		return aleng==0;
	}
	public int length() {//����
		return aleng;
	}
	@SuppressWarnings("unchecked")
	public H get(int i) {//�õ�iλ�õ�ֵ
		if(i<0||i>aleng-1){
			return (H)"���󣺲��ڷ�Χ��";
		}
		return a[i];
	}
	public void insert(int i, H x){//��iλ�ò���x
		if(aleng==a.length){
			System.out.println("˳�������");
		}
		if(i<0||i>aleng){
			System.out.println("˳����ڷ�Χ��");
		}
		for(int j=aleng;j>i;j--){
			a[j]=a[j-1];
			a[i]=x;
			aleng++;
		}
	}
	public void remove(int i) {//ɾ��iλ�õĶ���
		if(i<0||i>aleng){
			System.out.println("˳����ڷ�Χ��");
		}
		for(int j=i;j<aleng-1;j++){
			a[j]=a[j+1];
			aleng--;
		}
	}
	public int indexOf(H x) {//����
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
	public void display() {//����
		for(int i=0;i<aleng;i++){
			System.out.println( a[i]+" ");
		}
	}
}
