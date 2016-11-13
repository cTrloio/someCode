package List;

public class Node<T> {
      private T data;
      private Node<T> next;
      public Node(T data,Node<T> next){
    	  this.data=data;
    	  this.next=next;
    	  
      }
      public Node(){
    	  this(null,null);//this.data=null;this.next=null;
      }
      public void setData(T data){
    	  this.data=data;
      }
      public T getData(){
    	  return this.data;
      }
      public Node<T> getNext(){
    	  return next;
      }
      public void setNext(Node<T> next){
    	  this.next=next;
      }
}
