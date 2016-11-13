
public class Test {
	public final static int INFINITY = Integer.MAX_VALUE;//无穷
	public static void main(String[] args) throws Exception {
		/*图的顶点数，边数：
			5 7
		图的各个顶点：
			a b c d e 
		各个边的两个顶点及其权值：
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
		System.out.println("矩阵为：");
		for(int v=0;v<D.length;v++){
			for(int w=0;w<D.length;w++){
				System.out.printf("%10d",D[v][w]);
			}
			System.out.println();
		}
	}
		public static void findPlace(MGraph mg,int[][]D)throws Exception{
		int max=0;		//记录每一列最大值
		int min=INFINITY;//记录每一列最大值中的最小值
		int o=-1;		//标记最小偏心度位置
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
		System.out.println("偏心度最小值为："+min);
		System.out.println("医院设置在"+mg.getVex(o)+"村庄");
		System.out.println(mg.getVex(o)+"村庄到其他各村庄距离依次为：");
		for(int i=0;i<D.length;i++){
			System.out.print(D[o][i]+"\t");
		}
		System.out.println();
	}
}
