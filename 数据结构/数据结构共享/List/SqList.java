package List;

import java.lang.reflect.Array;

public class SqList<T> implements IList<T> {
	T[]listElem;
	int curLen;
        @Override
	public void PrintList() {
		// TODO Auto-generated method stub
		
	}
        @SuppressWarnings("unchecked")
        public SqList(int maxSize,Class<T> type){
        	listElem=(T[])Array.newInstance(type, maxSize);
        	curLen=0;
        }
        @SuppressWarnings("unchecked")
		public SqList (T[]a,int n,int maxSize)throws Exception{
        	 if (n>maxSize)
        	             throw new Exception("顺序表空间不足");
        	listElem=(T[])new Object[maxSize];//申请存储空间
        	 for (int i=0; i<n; i++)  //放入数据元素
        	             listElem[i]=a[i];
        	 curLen=n;
        	 
        	 
        	 } 

        @Override
		public void insert(int i, T x) throws Exception {
			// TODO Auto-generated method stub
			
		}
		@Override
		public int indexOf(T x) {
			// TODO Auto-generated method stub
			return 0;
		}
		@Override
		public T remove(int i) {
			// TODO Auto-generated method stub
			return null;
		}
		@Override
		public T get(int i) throws Exception {
			// TODO Auto-generated method stub
			if(i<0||i>curLen-1)throw new Exception("i不存在！");
			return listElem[i];
		}
		
}
