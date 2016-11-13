
public interface IGraph {
	void createGraph();
	int getVexNum();
	int getArcNum();
	Object getVex(int v) throws Exception;
	int locateVex(Object vex);	
}
