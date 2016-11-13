
public class Test {
	public final static int INFINITY = Integer.MAX_VALUE;//����
	public static void main(String[] args) throws Exception {
		/*ͼ�Ķ�������������
			5 7
		ͼ�ĸ������㣺
			a b c d e 
		�����ߵ��������㼰��Ȩֵ��
			ab1 bc2 cd2 dc3 db1 ce4 ed5 */
		int vexNum=5;
		int arcNum=7;
		Object[] vexs={'a','b','c','d','e'};
		int [][]arcs={
					{0,1,INFINITY,INFINITY,INFINITY},
					{INFINITY,0,2,INFINITY,INFINITY},
					{INFINITY,INFINITY,0,2,4},
					{INFINITY,1,3,0,INFINITY},
					{INFINITY,INFINITY,INFINITY,5,0}
					};
		MGraph mg=new MGraph(GraphKind.DN,vexNum,arcNum,vexs,arcs);
		ShortestPath floyd=new ShortestPath();
		floyd.FLOYD(mg);
		display(floyd.getD());
		findPlace(mg,floyd.getD());
	}
	public static void display(int[][]D){
		System.out.println("����Ϊ��");
		for(int v=0;v<D.length;v++){
			for(int w=0;w<D.length;w++){
				System.out.printf("%10d",D[v][w]);
			}
			System.out.println();
		}
	}
		public static void findPlace(MGraph mg,int[][]D)throws Exception{
		int max=0;		//��¼ÿһ�����ֵ
		int min=INFINITY;//��¼ÿһ�����ֵ�е���Сֵ
		int o=-1;		//�����Сƫ�Ķ�λ��
		for(int i=0;i<D.length;i++){
			max=0;
			for(int j=0;j<D.length;j++){
				if(D[j][i]>=max){
					max=D[j][i];
				}
			}
			if(max<min){
				min=max;
				o=i;
			}
		}
		System.out.println("ƫ�Ķ���СֵΪ��"+min);
		System.out.println("ҽԺ������"+mg.getVex(o)+"��ׯ");
		System.out.println(mg.getVex(o)+"��ׯ����������ׯ��������Ϊ��");
		for(int i=0;i<D.length;i++){
			System.out.print(D[o][i]+"\t");
		}
		System.out.println();
	}
}
