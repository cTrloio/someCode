public class TestOne {
	public static void main(String[] args) {
		int arr[]={52,100,101,4,91,98};
		int max=0;
		int nmax=0;
		for(int i=0;i<arr.length;i++){
			if(arr[i]>max){
				nmax=max;
				max=arr[i];	
			}else if(arr[i]<max){
				if(arr[i]>nmax){
					nmax=arr[i];
				}
			}
		}
		System.out.println("最大数："+max+"次大数："+nmax);
	}
}
