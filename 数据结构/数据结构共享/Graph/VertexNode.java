package Graph;

public class VertexNode<T> {
     private T vertex;
     private ArcNode firstedge;
     public void setVertex(T vertex){
    	 this.vertex=vertex;
     }
     public T  getVertex(){
    	 return vertex;
     }
     public void setFirstedge(ArcNode firstedge){
    	 this.firstedge=firstedge;
     }
     public ArcNode getFirstedge(){
    	 return firstedge;
     }
}
