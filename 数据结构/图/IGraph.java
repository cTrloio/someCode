package Graph;

public interface IGraph {
	void createGraph();
	int getVexNum();
	int getArcNum();
	Object getVex(int v);
	int locateVex(Object vex);
	int firstAdjVex(int v) throws Exception;
	int nextAdjVex(int v,int w) throws Exception;
	
}
