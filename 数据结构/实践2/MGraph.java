import java.util.Scanner;
public class MGraph implements IGraph{
	
	public final static int INFINITY = Integer.MAX_VALUE;//无穷
	private GraphKind kind;		//种类
	private int vexNum,arcNum;	//顶点数和边数
	private Object[] vexs;		//顶点
	private int [][]arcs;		//领接矩阵
	public MGraph(){
		this(null,0,0,null,null);
	}
	public MGraph(GraphKind kind,int vexNum,int arcNum,Object[] vexs,int [][]arcs){
		this.kind=kind;
		this.vexNum=vexNum;
		this.arcNum=arcNum;
		this.vexs=vexs;
		this.arcs=arcs;
	}
	public void createGraph() {
		Scanner in =new Scanner (System.in);
		System.out.println("请输入图的种类：（UDG,DG,UDN,DN）");
		GraphKind kind=GraphKind.valueOf(in.next());
		switch(kind){
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
	public Object getVex(int v) throws Exception {
		if(v<0&&v>=vexNum){
			throw new Exception("第"+v+"个顶点不存在");
		}
		return vexs[v];
	}
	public int locateVex(Object vex) {//顶点定位
		for(int v=0; v<vexNum;v++){
			if(vexs[v].equals(vex)){
				return v;
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
	
}
