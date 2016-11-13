package NewGraph;

public class VertexNode<T> {
     private T vertex;
     private ArcNode<T> firstedge;
     public void setVertex(T vertex){
    	 this.vertex=vertex;
     }
     public T  getVertex(){
    	 return vertex;
     }
     public void setFirstedge(ArcNode firstedge){
    	 this.firstedge=firstedge;
     }
     public ArcNode<T> getFirstedge(){
    	 return firstedge;
     }
}
