package Graph;
import java.util.Scanner;
public class MGraph implements IGraph{
	
	public final static int INFINITY = Integer.MAX_VALUE;//无穷
	
	private GraphKind kind;		//种类
	private int vexNum,arcNum;	//顶点数和边数
	private Object[] vexs;		//顶点
	private int [][]arcs;		//领接矩阵
	int visited[];
	public MGraph(){
		this(null,0,0,null,null);
	}
	/*public MGraph(GraphKind kind,int vexNum,int arcNum,Object[] vexs,int [][]arcs){
		this.kind=kind;
		this.vexNum=vexNum;
		this.arcNum=arcNum;
		visited=new int[vexNum];
		vexs=new Object[vexNum];
		arcs=new int[vexNum][vexNum];
		for(int i=0;i<vexNum;i++){
			visited[i]=0;
		}
		for(int i=0;i<vexNum;i++){                                      
			this.vexs[i]=vexs[i];
		}
		for(int i=0;i<vexNum;i++){
			for(int j=0;j<vexNum;j++){
				this.arcs[i][j]=0;
			}
		}
	}*/
	public MGraph(GraphKind kind,int vexNum,int arcNum,Object[] vexs,int [][]arcs){
		this.kind=kind;
		this.vexNum=vexNum;
		this.arcNum=arcNum;
		this.vexs=vexs;
		this.arcs=arcs;
	}
	public void createGraph() {//创建无向图
		Scanner in =new Scanner (System.in);
		System.out.println("请输入图的种类：（UDG,DG,UDN,DN）");
		GraphKind kind=GraphKind.valueOf(in.next());
		switch(kind){
		case UDG:
			createUDG();
			return;
		
		case DG:
			createDG();
			return;
		
		case UDN:
			createUDN();
			return;

		case DN:
			createDN();
			return;
		}
	}
	private void createDN() {//有向网
		Scanner in =new Scanner (System.in);
		System.out.println("请输入图的顶点数，边数：");
		vexNum=in.nextInt();
		arcNum=in.nextInt();
		vexs=new Object[vexNum];
		System.out.println("请输入图的各个顶点：");
		for(int v = 0; v<vexNum;v++){
			vexs[v]=in.next();
		}
		arcs= new int [vexNum][vexNum];
		for(int v=0;v<vexNum;v++){
			for(int u=0;u<vexNum;u++){
				arcs[v][u]=INFINITY;
			}
		}
		System.out.println("请输入各个边的两个顶点及其权值：");
		for(int k=0;k<arcNum;k++){
			int v=locateVex(in.next());
			int u=locateVex(in.next());
			arcs[v][u]=in.nextInt();
		}
	}
	private void createUDN() {//无相网
		Scanner in =new Scanner (System.in);
		System.out.println("请输入图的顶点数，边数：");
		vexNum=in.nextInt();
		arcNum=in.nextInt();
		vexs=new Object[vexNum];
		System.out.println("请输入图的各个顶点：");
		for(int v = 0; v<vexNum;v++){
			vexs[v]=in.next();
		}
		arcs= new int [vexNum][vexNum];
		for(int v=0;v<vexNum;v++){
			for(int u=0;u<vexNum;u++){
				arcs[v][u]=INFINITY;
			}
		}
		System.out.println("请输入各个边的两个顶点及其权值：");
		for(int k=0;k<arcNum;k++){
			int v=locateVex(in.next());
			int u=locateVex(in.next());
			arcs[v][u]=arcs[u][v]=in.nextInt();
		}
	}
	private void createDG() {//有向图
		System.out.println("请输入各个边的两个顶点：");
		Scanner in=new Scanner(System.in);
		for(int k=0;k<arcNum;k++){
			int v=in.nextInt();
			int u=in.nextInt();
			arcs[v][u]=arcs[v][u];
		}
	}
	private void createUDG() {//无相图
		System.out.println("请输入各个边的两个顶点：");
		Scanner in=new Scanner(System.in);
		for(int k=0;k<arcNum;k++){
			int v=in.nextInt();
			int u=in.nextInt();
			arcs[v][u]=arcs[u][v];
		}
	}
	
	public Object getVex(int v) throws Exception {
		if(v<0&&v>=vexNum){
			throw new Exception("第"+v+"个顶点不存在");
			
		}
		return null;
	}
	public int locateVex(Object vex) {//顶点定位
		for(int v=0; v<vexNum;v++){
			if(vexs[v].equals(vex)){
				return v;
			}
		}
		return -1;
	}
	
	public int firstAdjVex(int v) throws Exception {//查找第一个邻接点
		if(v<0&&v>=vexNum){
			throw new Exception("第"+v+"个顶点不存在");
		}
		for(int j=0;j<vexNum;j++){
			if(arcs[v][j]!=0&&arcs[v][j]<INFINITY){
				return j;
			}
		}
		return -1;
	}
	
	public int nextAdjVex(int v, int w) throws Exception {//查找下一个顶点
		if(v<0&&v>=vexNum){
			throw new Exception("第"+v+"个顶点不存在");
		}
		for(int j=w+1;j<vexNum;j++){
			if(arcs[v][j]!=0&&arcs[v][j]<INFINITY){
				return j;
			}
		}
		return -1;
	}
	
	public GraphKind getKind() {
		return kind;
	}
	public void setKind(GraphKind kind) {
		this.kind = kind;
	}
	public int getVexNum() {
		return vexNum;
	}
	public void setVexNum(int vexNum) {
		this.vexNum = vexNum;
	}
	public int getArcNum() {
		return arcNum;
	}
	public void setArcNum(int arcNum) {
		this.arcNum = arcNum;
	}
	public Object[] getVexs() {
		return vexs;
	}
	public void setVexs(Object[] vexs) {
		this.vexs = vexs;
	}
	public int[][] getArcs() {
		return arcs;
	}
	public void setArcs(int[][] arcs) {
		this.arcs = arcs;
	}
	
	/*void DFSTraverse(int v){
		System.out.print(vexs[v]);
		visited[v]=-1;
		for(int i=0;i<vexNum;i++){
			if(arcs[v][i]==1&&visited[i]==-1){
				DFSTraverse(i);
			}
		}
	}*/
	
	



}
