var http = require('http');
var express = require('express');
var sio = require('socket.io');
var app = express();
var server = http.createServer(app);

app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});

// server.listen(8888);
server.listen(82);
var io = sio.listen(server);
var names = [];

io.sockets.on('connection', function(socket) {
	
	socket.on('login', function(name) {
		for(var i=0;i<names.length;i++){
			if(names[i] == name){
				//回应链接断开
				socket.emit('duplicate');
				return;
			}
		}
		names.push(name);
		//回应登录
		io.sockets.emit('login',name);
		//回应更新用户列表
		io.sockets.emit('sendClients',names);
	});
	
	socket.on('chat', function(data) {
		io.sockets.emit('chat',data);
	});
	
	socket.on('logout', function(name) {
		for(var i=0;i<names.length;i++){
			if(names[i] == name){
				names.splice(i,1);
				break;
			}
		}
		socket.broadcast.emit('logout',name);
		io.sockets.emit('sendClients',names);
	});

});
		// socket.emit() ：          向建立该连接的客户端广播
		// socket.broadcast.emit() ：向除去发送该连接的客户端的所有客户端广播
		// io.sockets.emit() ：      向所有客户端广播，等同于上面两个的和