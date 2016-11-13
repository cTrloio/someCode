package huffmantree;

public class HuffmanTree {
	Node selectMin(Node[] HN,int end){//���ص�ǰ��Сֵ
		Node min=HN[end];
		for(int i=0; i<HN.length;i++){
			if(HN[i].getFlag()==0&&HN[i].getWeight()<min.getWeight()){
				min=HN[i];
			}
		}
		return min;
	}
	int[][] huffmanCoding(int[] W){
		int n=W.length;	//Ȩ����
		int m=2*n-1;	//�ڵ����
		Node []HN=new Node[m]; //�����Žڵ�Ŀ�����
		int i;
		for(i=0;i<n;i++){		//��Ȩֵ���������
			HN[i]=new Node(W[i]);
		}
		for(i=n;i<m;i++){//������С�ڵ�ϳ�һ���ڵ�,������ָ��
			Node min1=selectMin(HN,i-1);
			min1.setFlag(1);
			Node min2=selectMin(HN,i-1);
			min2.setFlag(1);
			
			HN[i]=new Node();//����ڵ�
			min1.setParent(HN[i]);//����ָ��
			min2.setParent(HN[i]);
			HN[i].setLchild(min1);
			HN[i].setRchild(min2);
			HN[i].setWeight(min1.getWeight()+min2.getWeight());
		}
		int[][] huffCode=new int[n][n];//�ֱ��¼ ԭֵ�ͱ����ֵ
		for(int j=0;j<n;j++){
			int start =n-1;
			for(Node c=HN[j],p=c.getParent();p!=null;c=p,p=p.getParent()){
				if(p.getLchild().equals(c)){
					huffCode[j][start--]=0;
				}else{
\					huffCode[j][start--]=1;
				}
			}
			huffCode[j][start]=-1;
		}
		return huffCode;
		
	}
}
	













