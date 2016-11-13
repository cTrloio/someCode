/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-12 20:37:10
 * @version $Id$
 */

//堆优化的Dijkstra算法 时间复杂度降到O(M+N)LogN
//邻接表 xyz表示顶点x-顶点y权值为z n表示顶点数  m表示边数   m <<< n^2 为稀疏图 反之稠密图
//如有数据 n=4,m=5
//1 4 9
//2 4 6 
//1 2 5
//4 3 8
//1 3 7
var n = 4;
var m = 5;
var u = [1, 2, 1, 4, 1]; // u[i] v[i] w[i] 表示第i条边是从第u[i]顶点到v[i]顶点 权值为w[i]
var v = [4, 4, 2, 3, 3];
var w = [9, 6, 5, 8, 7];
var first = []; // 保存每个顶点i的第一条边的编号 -1表示没有 找到第一条边后,剩下的边可以在next数组中找到
var next = []; // next[i]保存编号为i的边的下一条边的编号  -1表示没有
for (var i = 0; i < n; i++) {
	first[i] = -1; //初始化为-1表示暂时没有边
}
for (var i = 0; i < m; i++) {
	next[i] = first[u[i]];
	first[u[i]] = i;
}
//算法开始
for (var i = 0; i < n; i++) {
	var k = first[i];
	while (k != -1) {
		console.log(u[k] + "," + v[k] + "," + w[k]); //输出
		k = next[k];
	}
}