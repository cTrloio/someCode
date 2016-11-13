// 第三章 nodejs基础知识

// /////////////////unref与ref的使用///////////////////////////
// var testHd = function(i){
// 	console.log(i);
// }
// var timer = setInterval(testHd,1000,1);
// timer.unref();//暂停
// timer.ref();//恢复
// /////////////////unref与ref的使用///////////////////////////


// /////////////////统计执行时间///////////////////////////
// console.time("free time");
// for(var i=0;i<1000000000;i++){
// }
// console.timeEnd("free time");
// /////////////////统计执行时间///////////////////////////


// ///////////////////dir查看对象/////////////////////////
// var user = {
// 	name:"hfy",
// 	age:22,
// 	sex:"男"
// }
// console.dir(user);
// ///////////////////dir查看对象/////////////////////////


////////////////////检测主模块//////////////////////////
// if(module === require.main){
// 	console.log("这是主模块");
// }else{
// 	console.log("不是主模块");
// }
////////////////////检测主模块//////////////////////////


////////////////require导入模块/////////////////////////////////
// var http = require('http');
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/html'});
// 	res.write('<head><meta charset="UTF-8"/></head>');
// 	res.end('hello\n');
// }).listen(1337,"127.0.0.1");
// console.log('Sever running at http://127.0.0.1:1337/');
////////////////require导入模块/////////////////////////////////


/////////////exports导出模块////////////////////////
// var s = "hellow";
// function greet(name){
// 	console.log(name+":"+s);
// }
// module.exports = greet;
// exports.s = s;
/////////////exports导出模块////////////////////////


///////////////repl下/////////////////////
// require.resolve('express');//查看模块的绝对路径
// console.log(require.cache);//查看该缓冲区中内容
// console.log(require.cache[require.resolve('express')]);//查看指定模块缓冲区内容
///////////////repl下/////////////////////


////////////////获取当前模块文件名/////////////////////////
// console.log(__filename);
////////////////获取当前模块文件名/////////////////////////


////////////////获取当前模块文件所在绝对目录/////////////////////////
// console.log(__dirname);
////////////////获取当前模块文件所在绝对目录/////////////////////////


//////////EventEmitter事件处理类////////////////////
// addListen(event,listener);	//对指定事件 绑定事件处理函数
// on(event,listener);			//对指定事件 绑定事件处理函数(addListen别名)
// once(event,listener);		//对指定事件 只执行一次的事件处理函数
// removeListener(event,listener);  	//对指定事件 解除事件处理函数
// removeAllListeners([event]);			//对指定事件 解除所有事件处理函数
// setMaxListeners(n);					//指定事件处理函数的最大数量，n代表最大数量
// listeners(event);					//获取指定事件的所有事件处理函数
// emit(event,[arg1],[arg2],[...]); 	//手工触发指定函数
// listenerCount(server,listener)	   	//获取指定事件的事件处理函数的数量
// 自身newListener(event,listener)     	//对继承了EmitterEvent的子类实例对象绑定事件函数时，都将触发
// 自身removeListener(event,listener)  	//对继承了EmitterEvent的子类实例对象移除事件函数时，都将触发

// app.js
// var http = require('http');
// var server = http.createServer();
// var events = require('events');
// server.setMaxListeners(6);
// server.on('newListener', function(event,f) {
// 	console.log("对 "+event+" 添加绑定事件");
// 	console.log(f);
// });
// server.on('removeListener', function(event,f) {
// 	console.log("对 "+event+" 移除绑定事件");
// 	console.log(f);
// });
// var testHd = function(req,res){
// 	if(req.url !== '/favicon.ico'){
// 		console.log("被删除的事件");
// 	}
// }
// server.removeListener('request',testHd);
// server.once('request', function(req,res) {
// 	if(req.url !== '/favicon.ico'){ //屏蔽收藏夹图标的自动请求
// 		console.log("收到请求");//只执行一次
// 	}
// });
// server.on('request', function(req,res) {
// 	if(req.url !== '/favicon.ico'){
// 		console.log(req.url);
// 	}
// 	res.end();
// });
// server.removeAllListeners('request');
// server.on('request', function(req,res) {
// 	if(req.url !== '/favicon.ico'){ //屏蔽收藏夹图标的自动请求
// 		console.log(server.listeners("request"));
// 		console.log("响应完毕");
// 	}
// });
// server.on('myEvent', function(name) { // 优先级较其他事件高? 还是非阻塞IO机制的结果？
// 	console.log(name);
// });
// server.emit('myEvent',"hfy");
// server.listen(8888);
// console.log("事件数量:"+events.EventEmitter.listenerCount(server,'request'));
//////////EventEmitter事件处理类////////////////////


////////////////////debug///////////////////////////
// node debug<app.js>启动调试
// debug>c 继续执行后面代码
// debug>n 执行到下一句代码
// debug>s 暂停在函数内第一行代码
// debug>o 立即执行完函数内所有代码
// debug>sb(脚本文件名,设置断点代码行数) 设置断点
// debug>cb(脚本文件名,取消断点代码行数) 取消断点
// debug>bt 查看该函数及其外层各函数的返回位置
// debug>list(n) 查看当前要执行代码及之后的几行代码 n代表前后各几行
// debug>repl 进入repl环境
// debug>restart 重新开始脚本调试
// debug>kill 终止脚本文件调试
// debug>run kill终止后用来重新开始
// debug>scripts 查看当前正在运行的文件及所有被加载的模块文件名称(不包括内置模块)
// debug>version 命令用于查看V8版本号
// npm install -g node-inspector调试工具
// 使用时输入 node --debug-brk[=port]app.js 会给出调试端口
// 浏览器中输入 localhost:8888/debug?port=调试端口
////////////////////debug///////////////////////////










// 第四章 npm包管理工具

// ////////////////////////////////////////////
//  ./代表当前目录    /代表磁盘根目录
// ////////////////////////////////////////////


// /////////////////将模块定义为类/////////////////////////
// /foo.js模块
// var _name; //私有变量
// var name ; //公有变量
// var foo = function(name){
// 	_name = name;
// }
// foo.prototype.GetName = function(){//公有函数
// 	return _name;
// }
// foo.prototype.SetName = function(name){
// 	_name = name;
// }
// foo.prototype.name = name;
// foo.staticName = ''; 				//为模块类定义类变量!
// foo.staticFunction = function(){ 	//为模块类定义类函数!
// 	console.log(foo.staticName);
// }
// module.exports = foo; 	      //使用module.exports定义类!

// /app.js
// var foo = require('./foo.js');
// var myFoo = new foo('tt');
// console.log("修改前"+myFoo.GetName());	//获取私有变量
// myFoo.SetName('xtt');			//修改私有变量
// console.log("修改后"+myFoo.GetName());	//获取私有变量
// console.log("修改前"+myFoo.name);		//获取共有变量
// myFoo.name = 'hfy';				//修改共有变量
// console.log("修改后"+myFoo.name);		//获取共有变量
// foo.staticName = "staticHfy";    //设置类变量
// foo.staticFunction();            //调用类方法
// /////////////////将模块定义为类/////////////////////////


// ////////////////npm包管理工具命令//////////////////
// npm search <包名>·················搜索并查看包信息
// npm view <包名>···················查看包所用 package.json信息
// npm install <包名>················下载包
// npm install <包名> -g·············安装到全局包
// npm root -g·······················查看全局包安装路径
// npm config set prefix "e:\nodeWorkSpace"·······设置全局包安装路径
// npm list··························查看当前目录下所有安装的包
// npm list -g·······················查看全局安装路径下所有包
// npm uninstall <包名>··············卸载当前目录下某个包
// npm uninstall -g <包名>···········卸载全局目录下某个包
// npm updata <包名>·················更新当前目录下某个包
// npm updata -g <包名>··············更新全局目录下某个包
// npm updata························更新当前目录下所有包
// npm updata -g·····················更新全局目录下所有包
// ////////////////npm包管理工具命令//////////////////










//第五章 Buffer类处理二进制数据

// ////////////////创建buffer对象////////////////////////////
// var buf = new Buffer(size); 		//size指定缓存区大小
// buf.length; 						//缓存区大小
// buf.fill(value,[offset],[end]);  //写入值、写入起始位置(0)、一直写入到第几字节(length)
// var buff = new Buffer(array);	//用数组来初始化buffer对象
// var buffer = new Buffer(str,[encoding]);//初始化字符串，编码类型(utf-8)

// var buf = new Buffer(10);
// buf.fill(1);
// buf.fill(2,5,10);
// console.log(buf.length);
// console.log(buf);
// var buf = new Buffer([0,1,2]);
// console.log(buf);
// var buf = new Buffer("aAbB","ascii");
// console.log(buf);
// ////////////////创建buffer对象////////////////////////////


// ///////////字符串长度与缓存区长度//////////////////
// var str = '嘟皮啥啦';
// var buf = new Buffer(str);
// console.log(buf);
// console.log(str.length);
// console.log(buf.length);
// console.log(str[2]);//指的并非同一字符
// console.log(buf[2]);//字符串一旦确定不可更改 但缓存区对象可修改
// var strSub = buf.slice(3,5);
// strSub[0] = 0; //将导致buf中的数据改变
// console.log(strSub);
// console.log(buf);
// ///////////字符串长度与缓存区长度//////////////////


// //////////////Buffer对象与字符串对象之间的转换/////////////////////////
// buf.toString([encoding],[start],[end]);//编码格式,起始位置，终止位置
// var buf = new Buffer('噼里啪啦');
// console.log(buf.toString('utf-8',3,6));
// 字符、写入位置(1+offset - offset+length)、长度、编码格式
// buf.write("砰",3,3,'utf-8');
// console.log(buf.toString());

// StringDecoder对象(对utf-8支持更好) 将buffer对象中的数据转换为字符串
// var sd = require('string_decoder').StringDecoder;
// var decoder = new sd('utf-8');
// var buf = new Buffer([0xe6,0x88,0x91,0xe5,0x96]);
// var buf2 = new Buffer([0x9c,0xe7,0x88,0xb1]);
// console.log(decoder.write(buf));
// console.log(decoder.write(buf2));
// //////////////Buffer对象与字符串对象之间的转换/////////////////////////


// //////////Buffer对象与数值对象之间的转换////////////////////
// var buf = new Buffer([0x00,0x10,0x20]);
// buf.readUInt8(0); //读取缓存区中第一个字节处无符号整数
// console.log(buf);
// buf.writeUInt8(48,0); //在缓存区第一个字节处写入
// console.log(buf);
// //////////Buffer对象与数值对象之间的转换////////////////////


// /////////////Buffer对象与JSON对象的转换///////////////////
// var buf = new Buffer('乌拉圭');
// var json = JSON.stringify(buf); //将Buffer对象中数据转换为字符串
// console.log(json);
// console.log(JSON.parse(json));  //再将json转换为一个数组
// var copy = new Buffer(JSON.parse(json));
// console.log(copy.toString());
// /////////////Buffer对象与JSON对象的转换///////////////////

/////////////////复制缓存数据///////////////////////
// var a = Buffer('乌拉圭');
// var b = Buffer(48);
// b.fill(0);
// a.copy(b,10);//copy对象，克隆起始位置
// console.log(b);
/////////////////复制缓存数据///////////////////////


// ///////////////////Buffer类类方法//////////////////////////////
// var buf = new Buffer('噼里啪啦');
// console.log(Buffer.isBuffer(buf));	//检测是否为一个buffer对象
// console.log(Buffer.byteLength("哈哈",'utf-8'));//计算指定字符串字节数
// var buf2 = new Buffer('砰');		
// console.log(Buffer.concat([buf,buf2],2)); //拼接Buffer对象,max拼接字节长度
// console.log(Buffer.isEncoding('utf-16'));//检测一个字符串是否为一个有效编码格式
// ///////////////////Buffer类类方法//////////////////////////////









//第六章 操作文件系统

// ////////////////同步方法与异步方法/////////////////////////////
// 同步：事情一件一件做  异步：所有事情可以一起做
// 所有具有后缀Sync的都是同步方法 否则为异步方法
// 多数情况下使用异步，但读取配置文件并启动服务器时用同步。
// 调用多个异步时并不能确定回掉执行顺序
// ////////////////同步方法与异步方法/////////////////////////////


// //////////////////读写操作//////////////////////////
// fs.readFile(filename,[options],callback);
// 	完整路径及文件名或目录名、可选读取参数(默认r,可指定编码格式)、回掉函数
// 	可选参数中可以指定编码格式(utf-8、ascii、base64)
// 	不使用options:encoding时则为原始二进制内容的缓存区对象
// 	回掉函数 function(err,data){}
// 	options:flag属性参数
// r···········读取文件，文件不存在则抛出异常
// r+··········读取并写入文件，文件不存在则抛出异常
// rs··········以同步方式读取文件并通知操作系统忽略本地文件系统缓存，不存在抛出异常
//             通常用于操作网络文件系统
// w···········写入文件，文件不存在则创建该文件，文件已存在则清空文件内容
// wx··········与w类似，但是以排他方式写入文件
// w+··········读取并写入文件，文件不存在则创建该文件，文件已存在则清空文件内容
// wx+·········作用与w+类似，但是以排他方式打开文件

// a···········追加写入文件，如果文件不存在则创建该文件
// ax··········作用与a类似，但以排他方式写入文件
// a+··········读取并追加写入文件，如果文件不存在则创建该文件
// ax+·········作用于a+类似，但是以排他方式打开文件
// 完整文件路径及文件名、可选读取参数(默认r,可指定编码格式)、回掉函数

// app.js                    异步方式读取
// var fs = require('fs');
// fs.readFile('./test.txt','utf-8',function(err,data){
// 	if(err) 
// 		console.log('读取错误');
// 	else 
// 		console.log(data);
// });
// app.js                    同步方式读取
// var fs = require('fs');
// var data = fs.readFileSync('./test.txt','utf-8');
// console.log(data);

// app.js
// fs.write(filename,data,[options],callback);
// 	完整路径及文件名或目录名，写入数据，可选操作(默认w)、回调函数
// 	flag属性与文件读取相同
// 	可选操作可以指定 options:mode属性，用于指定当文件被打开时对文件的读写权限(默认0666)
// 	第一个数字必须是0
// 	第二个数字规定文件或目录所有者的权限
// 	第三个数字规定文件或目录所有者所属用户组的权限
// 	第四个数字规定其他人的权限
// 	1：执行权限  2：写权限  4：读权限  (例如读写权限 可做加法操作 2 + 4 = 6)
// 	encoding属性指定编码格式（utf-8,ascii,base64）默认utf-8
// 	callback 回调函数 function(err){}
	
// app.js
// var fs = require('fs');
// var data = new Buffer('刀塔');
// var options = {
// 	flag:'a',
// }
// fs.writeFile('./msg.txt',data,options,function(err){
// 	if(err) console.log('写入失败');
// 	else console.log('写入成功');
// });

// 同步 fs.writeFileSync(filename,data,[options]); 使用方式同上

// //////////////////读写操作//////////////////////////


// ////////////////////图片复制/////////////////////////
// var fs = require('fs');
// fs.readFile('./message.png','base64',function(err,data){
// 	fs.writeFile('./messageCopy.png',data.toString(),'base64',function(err){
// 		if(err) console.log('复制失败');
// 		else console.log('复制成功')；
// 	});
// });
// ////////////////////图片复制/////////////////////////


// ////将一个字符串或一个缓存器中的数据追加到一个文件底部///////
// fs.appendFile(filename,data,[options],callback);
// 使用方式同上
// var fs = require('fs');
// fs.appendFile('./msg.txt','追加的数据','utf-8',function(err){
// 	if(err){
// 		console.log('fild');
// 	}else{
// 		console.log('succ');
// 	}
// });

// fs.appendFileSync(filename,data,[options])使用同上
// ////将一个字符串或一个缓存器中的数据追加到一个文件底部///////


// /////////////从指定位置处开始读写文件/////////////////////
// fs.open(filename,flags,[mode],callback); //打开文件
// 	 flags,[mode] 类似于 [optiongs] , mode参数作用 使用方式均相同
// 	 回调函数 function(err,fd){}   fd代表文件句柄
// fs.read(fd,buffer,offset,length,position,callback);//读取文件
//   open返回的句柄
//   buffer对象用于指定将文件读取到哪个缓存区中
// 	 offset,length,position均为整数
// 	 offset---------------指定写入时开始位置(字节)
// 	 length---------------指定从文件中读取的字节数
// 	 position-------------指定读取文件时的开始位置(为null的话,将从文件当前被读取位置处开始读取文件)
// 	 callback-------------function(err,byteRead,buffer){}
// 	 err错误对象  byteRead整数值,代表实际读取字节数   buffer被读取的缓存区对象
// 	 另外 一个汉字的utf编码为3个字节  一个换行符为2个字节  
	 
// var fs = require('fs');
// fs.open('./msg.txt','r',function(err,fd){
// 	var buf = new Buffer(255);
// 	fs.read(fd,buf,0,9,0,function(err,byteRead,buffer){
// 		console.log(buffer.slice(0,byteRead).toString());
// 		//从文件当前读取位置继续读取
// 		fs.read(fd,buf,0,5,null,function(err,byteRead,buffer){
// 			console.log(buffer.slice(0,byteRead).toString());
// 		});
// 	});
// });

// fs.openSync(filename,flags,[mode]);使用方式类似
// fs.readSync(fd,buffer,offset,length,position);使用方式类似

// fs.write(fd,buffer,offset,length,position,callback);
// 在指定文件里写入内容(会覆盖)
// var fs = require('fs');
// var buf = new Buffer('第三行');
// fs.open('./message.txt','w',function(err,fd){
// 	fs.write(fd,buf,0,9,0,function(err,written,buffer){
// 		if(err) console.log('失败');
// 		else console.log('成功');
// 	});
// });

// 从文件当前被写入出位置出开始写入文件
// var fs = require('fs');
// var buf = new Buffer('第三行追加写入');
// fs.open('./message2.txt','a',function(err,fd){
// 	fs.write(fd,buf,0,9,0,function(err,written,buffer){
// 		fs.write(fd,buf,9,12,null,function(err,written,buffer){
// 			if(err) console.log('失败');
// 			else console.log('成功');
// 		});
// 	});
// });

// fs.writeSync(fd,buffer,offsett,length,position);使用方式同上
// /////////////从指定位置处开始读写文件/////////////////////


// ///////////////close方法关闭文件,fs.sync确保文件全部写入////////////////////
// var fs = require('fs');
// var buf = new Buffer('关闭文件');
// fs.open('./message3.txt','w',function(err,fd){
// 	fs.write(fd,buf,0,12,0,function(err,written,buffer){
// 		if(err) console.log('失败');
// 		else console.log('成功');
// 		fs.fsync(fd);
// 		fs.close(fd);
// 	});
// });
// fs.closeSync(fd);
// fs.fsyncSync(fd);使用方式同上
// ///////////////close方法关闭文件,fs.sync确保文件全部写入///////////////////


// ///////////////////创建与读取目录///////////////////////////
// /创建目录
// fs.mkdir(path,[mode],callback);
// 被创建的目录完整路径及文件名或目录名 mode指定权限(默认0777) 回调函数
// var fs = require('fs');
// fs.mkdir('./testDir',function(err){
// 	if(err) console.log('fild');
// 	else console.log('create succ');
// });
// fs.mkdirSync(path,[mode]);使用方式同上
// /读取目录
// fs.readdir(path,callback);
// var fs = require('fs');
// fs.readdir('./testDir',function(err,file){ //错误对象,读取到所有的文件名数组
// 	if(err) console.log('fild');
// 	else console.log(file);
// });
// fs.readdirSync(path); 使用方式同上
// ///////////////////创建与读取目录///////////////////////////


// /////////////////查看与修改文件或目录信息//////////////////////
// fs.stat(path,callback);  fs.lstat(path,callback); 查看一个文件或目录的信息
// 区别是当查看符号连接文件的信息时,必须使用lstat方法
// path 指定查看的文件或目录的完整路径及文件名或目录名 callback回调函数
// 回调函数中 function(err,stats){} 
// err指定错误对象 stats为一个fs.Stats对象 拥有如下方法
// 	isFile();················被查看的对象是否为一个文件
// 	isDirectory();···········被查看的对象是否为一个目录
// 	isBlockDevice();·········被查看的对象是否为一个块设备文件(UNIX)
// 	isCharacterDevice();·····被查看的对象是否为一个字符设备文件(UNIX)
// 	isSymbolicLink();········被查看的对象是否为一个符号链接文件(仅在lstat)
// 	isFIFO();················被查看的对象是否为一个FIFO文件(UNIX)
// 	isSocket();··············被查看的对象是否为一个socket文件(UNIX)
// stats还拥有以下属性
// 	dev········文件或目录所在设备ID(UNIX)
// 	ino········文件或目录的索引编号(UNIX)
// 	mode·······为使用数值形式代表的文件或目录的权限标志
// 	nlink······文件或目录的硬连接数量
// 	uid········文件或目录的所有者的用户ID(UNIX)
// 	gid········文件或目录的所有者的组ID(UNIX)
// 	rdev·······字符设备文件或块设备文件所在设备ID(UNIX)
// 	size·······文件尺寸(字节数)
// 	atime······文件的访问时间
// 	mtime······文件的修改时间
// 	ctime······文件的创建时间

// var fs = require('fs');
// fs.stat('./testDir',function(err,stats){
// 	if(err) console.log(err);
// 	else console.log(stats);
// });
// fs.statSync(path);
// fs.lstatSync(path);使用方式同上

// 使用open方法或openSync打开文件并返回文件句柄后 
// 可以使用fs.fstat(fd)方法查看文件或目录信息操作完毕时执行的回调函数
// 回调函数的指定方法与stat方法的迭戈参数值回调函数的指定方法相同
// fs.fstatSync(fd);使用同上
// /////////////////查看与修改文件或目录信息//////////////////////


// //////////////////检查文件或目录是否存在/////////////////////////
// fs.exists(path,callback); 被检测文件或目录的完整路径及文件名或路径名
// 回调函数 function(exists){}  文件或目录存在时exists === true
// var fs = require('fs');
// fs.exists('./test',function(exists){
// 	if(exists) console.log('文件存在');
// 	else console.log('文件不存在');
// });
// //////////////////检查文件或目录是否存在/////////////////////////


// /////////////////获取文件或目录的绝对路径////////////////////////
// fs.realpath(path,[cache],callback);
// 需要查看的文件或目录的完整相对路径,参数值(预先指定的路径,如下),回调函数
// var cache = {'etc':'/private/etc'};
// fs.realpath('/ect/passwd',cache,function(err,resolvePath){});

// var fs = require('fs');
// fs.realpath('./msg.txt',function(err,resolvePath){
// 	if(err) throw err;
// 	else console.log(resolvePath);
// });
// fs.realpathSync(path,[cache]); 使用同上
// /////////////////获取文件或目录的绝对路径////////////////////////


// //////////////修改文件访问时间及修改时间///////////////////////
// fs.utimes(path,atime,mtiem,callback);
// 修改文件的完整路径及文件名或目录名 修改后的访问时间,修改后的修改时间,回调函数
// var fs = require('fs');
// fs.utimes('./msg.txt',new Date(),new Date(),function(err){
// 	if(err) console.log('修改失败');
// 	else console.log('修改成功');
// });
// fs.utimesSync(path,atime,mtime); 使用方式同上

// 在使用open或openSync方式打开文件并反悔文件句柄后
// 可以使用	fs.futimes(fd,atime,mtime,callback);修改文件的访问时间或修改时间
// fd为文件描述符,其余同上
// fs.futimesSync(fd,atime,mtime);使用同上
// //////////////修改文件访问时间及修改时间///////////////////////


// ///////////////修改文件或目录的读写权限//////////////////////
// fs.chmod(path,mode,callback);
// 修改文件或目录完整路径及文件名或目录名 , 读写权限 , 回调函数
// var fs = require('fs');
// fs.chmod('./message3.txt',0766,function(err){
// 	if(err) console.log('错误');
// 	else console.log('修改成功');
// });
// fs.chmodSync(path,mode); 使用方式同上
// 在使用open或openSync打开文件并返回句柄后,
// 可使用fs.fchomod(fd,mode,callback);修改文件或目录权限
// fs.fchmodSync(fd,mode);使用方式同上
// ///////////////修改文件或目录的读写权限//////////////////////


// ////////////////移动文件或目录/////////////////////
// fs.rename(oldPath,newPath,callback); oldPath == newPath时执行重命名操作
// 被移动文件完整路径名及文件名或目录名,移动后完整路径名,回调函数
// var fs = require('fs');
// fs.rename('./message.txt','./testDir/message.txt',function(err){
// 	if(err) console.log('fild');
// 	else console.log('succ');
// });
// fs.renameSync(oldPath,newPath);使用同上
// ////////////////移动文件或目录/////////////////////


// ///////////////创建与删除文件的硬链接///////////////////////
// fs.link(srcpath,dstpath,callback);
// 需要被创建硬连链接文件或目录的完整路径名及文件名或目录名
// 被创建的硬链接的完整路径及文件名,必须与原文件位于同一卷中
// 回调函数function(err){}     修改硬链接会导致原文件变化,反同
// var fs = require('fs');
// fs.link('./ylj.txt','./testDir/myDir/ylj.txt',function(err){
// 	if(err) console.log('fild');
// 	else console.log('succ');
// });
// fs.linkSync(srcpath,dstpath);使用同上

// fs.unlink(path,callback);
// 被删除硬链接完整路径及文件名,回调函数
// var fs = require('fs');
// fs.unlink('./testDir/myDir/ylj.txt',function(err){
// 	if(err) console.log('fild');
// 	else console.log('succ');
// });
// fs.unlinkSync(path);使用同上
// ///////////////创建与删除文件的硬链接///////////////////////


// ///////////////创建与查看符号链接//////////////////////
// 符号链接这个文件中包含了另一个文件或目录的路径及文件名或目录名,
// 如果对其记性编辑,操作系统会自动打开符号链接中所指向的原文件进行编辑
// fs.symlink(srcpath,dstpath,[type],callback);
// 需要被创建符号链接完整路径及文件名或路径名
// 被创建符号链接文件完整路径及文件名或路径名
// 指定文件创建符号链接还是为目录创建符号链接file,dir,junction(默认file)
// 回调函数
// var fs = require('fs');
// fs.symlink('./symlink.txt','./testDir/myDir/symlink.txt','file',function(err){
// 	if(err) console.log('fild');
// 	else console.log('succ');
// });
// fs.symlinkSync(srcpath,dstpath,[type]);使用同上

// fs.readlink(path,callback);读取符号链接中所包含的另一个文件或目录的路径及文件名或目录名
// var fs = require('fs');
// fs.readlink('./testDir/myDir/symlink.txt',function(err,linkString){
// 	console.log(linkString);
// });
// fs.readlinkSync(path);使用同上
// ///////////////创建与查看符号链接//////////////////////


// //////////////////截断文件////////////////////////
// fs.truncate(filename,length,callback);
// 需要截断文件完整路径及文件名  截断后的尺寸(字节) 回调函数
// var fs = require('fs');
// fs.truncate('./jdwj.txt',5,function(err){
// 	if(err) console.log('fild');
// 	else{
// 		fs.stat('./jdwj.txt',function(err,stats){
// 			console.log('文件尺寸:'+stats.size);
// 		});
// 	}
// });
// fs.truncateSync(filename,length);使用同上
// 在使用open打开文件并返回句柄后 使用fs.ftruncate(fd,length,callback);截断文件
// fs.ftruncateSync(fd,length);使用同上
// //////////////////截断文件////////////////////////


// ////////////////删除空目录/////////////////////
// fs.rmdir(path,callback); 被删除目录的完整路径及目录名
// var fs = require('fs');
// fs.rmdir('./empty',function(err){
// 	if(err) console.log('fild');
// 	else console.log('succ');
// });
// fs.rmdirSync(path);  如果目录非空则删除失败
// ////////////////删除空目录/////////////////////


// ///////////////监视文件//////////////////////
// fs.watchFile(filename,[options],listener);
// filename:需要被监视的文件完整路径及文件名或路径名
// options:布尔类型的persistent数学指定被监视的文件后是否停止当前正在运行的应用程序({persistent:true})
//  也可在options中使用一个整数类型的interval属性值(单位毫秒)
//  指定每个多少毫秒监视一次文件是否发生改变以及发生了什么改变
// listener:指定当被监视的文件发生改变时调用的回调函数 
// function(curr,prev){} 
// 	curr:为一个fs.Stats对象 代表被修改之后的当前文件
// 	prev:为一个fs.Stats对象 代表被修改之前的当前文件
	 
// var fs = require('fs');
// var func1 = function(curr,prev){
// 	if(Date.parse(prev.ctime) == 0){
// 		console.log('文件被创建');
// 	}else if(Date.parse(curr.ctime) == 0){
// 		console.log('文件被删除');
// 	}else if(Date.parse(prev.mtime) != Date.parse(curr.mtime)){
// 		console.log('文件被修改');
// 	}
// }
// var func2 = function(curr,prev){ //多个watch监视一个文件
// 	if(Date.parse(curr.ctime)!=0){
// 		console.log('文件尺寸:'+ curr.size);
// 	}
// }
// fs.watchFile('./jianshi.txt',{interval:1000},func1);
// fs.watchFile('./jianshi.txt',func2);

// 使用fs.unwatchFile(filename,[listener]);取消文件发生改变时所要执行的处理
// 被取消文件完整路径及文件名,  取消的回调函数名(如果不指定则取消监视)
// fs.unwatchFile('./jianshi.txt',func2);
// ///////////////监视文件//////////////////////


// //////////////////使用watch方法监视文件或目录/////////////////////////
// fs.watch(filename,[options],[listener]); 参数作用同上 [options]没有interval属性 但返回一个fs.FSEatcher对象
// fs.FSEatcher对象拥有 var watcher = fs.watch();
// close()方法 用于停止监视操作 watchre.close();
// change事件 时间出发时调用回调函数 function(event,filename)
// 回调函数 function(event,filename) 
// 	event参数输出为rename字符串时 当被指定的文件或目录中的任何文件被重命名 移动或删除
// 	event参数输出为change字符串时 当被指定的文件或目录的任何文件改变
// 	filename:为任何发生改变的文件的完整路径名及文件名
// var fs = require('fs');
// var watcher = fs.watch('./jianshi.txt',{persistent:true},function(event,filename){
// 	console.log(event);
// 	console.log(filename);
// 	watcher.close();
// });

// var fs = require('fs');
// var watcher = fs.watch('./jianshi.txt');
// watcher.on('change',function(event,filename){
// 	console.log(event);
// 	console.log(filename);
// });
// //////////////////使用watch方法监视文件或目录/////////////////////////

// /////////////////////同步和异步读写总结///////////////////////////////
// readFile   将文件完整读入缓存区
// read       将文件部分读取缓存区
// writeFile  将数据完整写入文件
// write      将缓存区部分文件写入文件
// /////////////////////同步和异步读写总结///////////////////////////////



// //////////////////使用文件流//////////////////////////
// 有时我们并不关心整个文件的内容 而只关注是否从文件中读取到了某些数据
// 以及在读取到这些数据时所需要执行的处理
// 在nodejs中,使用各种实现了stream.Readable接口对象来将对象数据读取为流数据
// 所有对象都是继承了EventEmitter类的实例对象,在读取数据过程中,可能触发各种事件
// 在nodejs中,可以使用flowing模式与非flowing模式来读取数据
// flowing使用操作系统的内部IO机制来读取数据 以最快的速度读取数据
// 非flowing必须显示调用对象的read方法读取数据


// 读取数据的对象
// / fs.ReadStream			用于读取文件
// / http.IncomingMessage	代表客户端请求或服务端响应
// / net.Socket 				代表一个socket端口对象
// / child.stdout			创建子进程的标准输出流
// / child.stderr			创建子进程的标准错误输出流
// / process.stdin			创建进程的标准输入流
// / Gzip					
// / Deflate 				用于实现数据压缩
// / DeflateRaw

// 读取数据的对象会触发的事件
// / readable	当可以从流中读取数据时触发
// / data 		当读取到来自于文件,客户端,服务器等对象的新的数据时触发
// / end 		当读取完所有数据时触发
// / error 		当读取数据过程中产生错误时触发
// / close 		当读取流数据的对象被关闭时触发

// 读取数据的对象所拥有的方法
// / read 			读取数据
// / setEncoding		指定用什么编码方式读取数据
// / pause 			通知对象停止触发data事件
// / resume 			通知对象恢复触发data事件
// / pipe 			设置一个数据通道,然后去除所有流数据并将其输出到通道另一段所指向的对象中
// / unpipe 			取消在pipe方法中设置的通道
// / unshif 			对流数据绑定了一个解析器时,取消该解析器的绑定,使流数据可以通过其他方式解析


// 写入数据的对象
// / fs.WriteStream 		写入文件
// / http.ClientRequest 	写入HTTP客户端请求数据
// / http.ServerResponse 写入HHTP服务器端响应数据
// / new.Socket 			读写TCP流或UNIX流,可被创建为一个客户端使用
// / child.stdin 		创建子进程的标准输入流
// / process.stdout 		创建进程的标准输出流
// / process.srderr 		创建进程的标准错误输出流
// / Gunzip
// / Inflate 			用于解压数据
// / InflateRaw

// 写入数据的对象会触发的事件
// / drain	写入数据的write方法返回false之后触发,表示操作系统缓存区中数据已全部输出到目录对象,可继续向操作系统缓存写入数据
// / finish 	当end方法被调用且数据被全部写入操作系统缓存区时触发
// / pipe 	当用于读取数据的对象的pipe方法被调用时触发
// / unpipe  当用于读取数据的对象的unpipe方法被调用时触发
// / error 	当写入数据的过程中产生错误时触发

// 写入数据的对象所拥有的方法
// / write 	写入数据
// / end 	当没有数据被写入流中时调用该方法
// //////////////////使用文件流//////////////////////////


// //////////////////使用ReadStream对象读取文件//////////////////////////
// fs.createReadStream(path,[options]);
// path指定被读取文件的完整路径及文件名
// options为一个对象 可使用以下属性 
// flags : 指定文件采取什么操作 默认'r' 与readFile中flags参数可选项一致
// encoding: 指定使用什么编码格式读取文件 (utf-8,ascii,base64 默认null)
// autoClose: 指定是否关闭在读取文件时操作系统内部使用的文件描述符.
//      如果false,在读取过程中产生错误不会自动关闭,需用close()手动关闭 
//      默认true.
// start: 使用整数值来指定文件的开始读取位置(字节)
// end: 使用整数值来指定文件的结束读取位置(字节)
// 除上述读取触发事件之外,当文件被打开时,将触发ReadStream对象的open事件
// 该事件触发时调用的回调函数可以使用一个参数,参数值为打开问件事返回的文件描述符

// var fs = require('fs');
// var file = fs.createReadStream('./msg.txt',{start:1,end:22});
// file.on('open',function(fd){
// 	console.log('开始读取文件');
// });
// file.on('data',function(data){
// 	console.log('读取到数据');
// 	console.log(data.toString());
// });
// file.on('end',function(){
// 	console.log('文件读取完毕');
// });
// file.on('error',function(err){
// 	console.log('文件读取失败');
// });

// pause暂停读取 resume恢复读取
// var fs = require('fs');
// var readStream = fs.createReadStream('./msg.txt');
// readStream.pause();
// readStream.on('data',function(data){
// 	console.log(data);
// });
// setTimeout(function(){
// 	readStream.resume();
// },2000);
// //////////////////使用ReadStream对象读取文件//////////////////////////


// /////////////////使用WriteStream对象写入文件//////////////////////////
// 	fs.createWriteStram(path,[options]);
// 	path:指定被写入文件的完整路径及文件名
// 	options参数可选
// 	options.flags:指定对该文件采取什么操作,默认w
// 	encoding:指定写入编码格式
// 	start:指定开始写入位置(字节) 如果是追加(flags=a);

// 	ws.write(chunk,[encoding],[callback]);  ws表示WriteStream对象,返回bool,false表示缓存已满,true表示缓存未满
// 		chunk:一个buffer对象或字符串,  编码格式,回调函数
//  ws.end([chunk],[encoding],[callback]); 	
//  	chunk:指定buffer/string,在文件关闭之前需要在文件中追加的写入的数据
// 	ws.bytesWritten 属性,为当前已在文件中写入数据的字节数
// app.js
// var fs = require('fs');
// var file = fs.createReadStream('./msg.txt');
// var out = fs.createWriteStream('./streamMsg.txt');
// file.on('data',function(data){
// 	out.write(data,function(){
// 		console.log("正在写入数据\n" + data);
// 	});
// });
// out.on('open',function(fd){
// 	console.log('文件已经打开');
// });
// file.on('end',function(){
// 	out.end('再见',function(){
// 		console.log("共写入%d字节数据",out.bytesWritten);
// 	});
// });

// drain触发时机  error错误处理
// var fs = require('fs');
// var rs = fs.createReadStream('./sixRain.mp3');
// var ws = fs.createWriteStream('./sixRainWrite.mp3');
// rs.on('data',function(data){
// 	var flag = ws.write(data);
// 	console.log(flag);
// });
// ws.on('drain',function(){
// 	console.log('缓存区数据已经输出');
// });
// ws.on('error',function(){
// 	console.log('写入错误');
// });

// pipe复制
// readStream.pipe(destination,[options]);
// destination:指定一个可用于写入数据流的对象
// options: end true/false,
// 	true为当数据全部读取完毕时,立即将缓存区剩余数据写入文件并关闭文件
// 	false为并不关闭文件,文件可以继续写入新的数据,默认true
// var fs = require('fs');
// var rs = fs.createReadStream('./sixRain.mp3');
// var ws = fs.createWriteStream('./sixRainCopy.mp3');
// rs.pipe(ws,{end:false});

// setTimeout(function(){
// 	rs.unpipe(ws);//取消写入操作
// 	ws.end();
// 	console.log('取消操作');//保留10MS内写入的
// },10);

// rs.on('end',function(){
// 	ws.end('\n追加再见');
// });
// /////////////////使用WriteStream对象写入文件//////////////////////////


// /////////////////对路径进行操作/////////////////////////
// path模块提供了处理和转换路径的方法及属性

// normalize()方法
// 将非标准路径字符串转换为标准路径字符串,转换过程中执行以下处理:
// 1:解析路径字符串中的..字符串与.字符串,返回解析后的标准路径
// 2:将多个斜杠字符串转换为一个斜杠字符串,例如\\转换为\
// 3:将win操作系统中的反斜杠字符串转换为正斜杠字符串
// 4:如果路径字符串以斜杠结尾,则在转换后的完整路径字符串末尾保留该斜杠字符串
// path.normalize(p);  p代表解析的路径字符串
// var fs = require('fs');
// var path = require('path');
// var myPath = path.normalize('.//a//b//d//..//c/e//..//');
// console.log(myPath);
// var file = fs.createReadStream(myPath + 'd.txt');
// file.on('data',function(data){
// 	console.log(data.toString());
// });

// join()方法
// 将多个参数值字符串结合为一个路径字符串
// path.join([path1],[path2],[...]);
// var fs = require('fs');
// var path = require('path');
// var myPath = path.join(__dirname,'a','b','c');
// console.log(myPath);
// var file = fs.createWriteStream(myPath + '/e.txt');
// file.on('data',function(data){
// 	console.log(data.toString());
// });

// resolve()方法
// 以应用程序根目录为起点,根据所有参数值字符串解析出一个结对路径.
// path.resolve(path1,[path2],[...]);
// 步骤很复杂 详见127
// var fs = require('fs');
// var path = require('path');
// var myPath = path.resolve('a','b','c');  			// var myPath = path.resolve('a','b','c');
// console.log(myPath);
// var file = fs.createReadStream(myPath + '/d.txt');	// var file = fs.createReadStream('a','b','c/d.txt');
// file.on('data',function(data){
// 	console.log(data.toString());
// });

// relative()方法
// 用于获取两个路径之间的相对关系
// path.relative(form,to);   可以是绝对路径/相对路径/文件路径/目录路径
// var path = require('path');
// 返回第二个目录相对第一个目录的路径,或者说是第二个目录如何切换到第一个目录的路径操作
// console.log(path.relative('/testDir/myDir','/a/b'));

// dirname()方法
// 用于获取一个路径中的目录名
// path.dirname(p);  p可以是绝对路径/相对路径/文件路径(返回文件所在路径)/目录路径(返回目录上层目录)
// var path = require('path');
// console.log(path.dirname('/a/b/c/d.txt'));

// basename()方法
// 获取路径中的文件名
// path.basename(p,[ext]); p可以是绝对/相对路径.  ext用于在方法返回的文件名中取出扩展名 必须与p中文件扩展名相同
// var path = require('path');
// console.log(path.basename('/a/b/c/d.txt'));
// console.log(path.basename('/a/b/c/d.txt','.txt'));
// console.log(path.basename('/a/b/c/d.txt','txt'));

// extname()方法
// 用于获取一个路径中的扩展名
// path.extname(p); 
// var path = require('path');
// console.log(path.extname('/a/b/c/d.txt'));
// console.log(path.extname('/a/b/c/d.'));
// console.log(path.extname('/a/b/c/d'));

// path.sep属性
// 操作系统指定的文件分隔符,"\\"(win),"/"(unix)
// path.delimiter属性
// 操作系统指定的路径分隔符,可能的属性值为:";"(win),或":"(unix)

// /////////////////对路径进行操作/////////////////////////











/**
  TPC/IP协议是传输层协议，主要解决数据如何在网络中传输，
  而HTTP是应用层协议，主要解决如何包装数据。
  关于TCP/IP和HTTP协议的关系，网络有一段比较容易理解的介绍：
  “我们在传输数据时，可以只使用（传输层）TCP/IP协议，但是那样的话，
  如果没有应用层，便无法识别数据内容，如果想要使传输的数据有意义，
  则必须使用到应用层协议，应用层协议有很多，比如HTTP、FTP、TELNET等，
  也可以自己定义应用层协议。WEB使用HTTP协议作应用层协议，
  以封装HTTP 文本信息，然后使用TCP/IP做传输层协议将它发到网络上。”
  
  术语TCP/IP代表传输控制协议/网际协议，指的是一系列协议。
  “IP”代表网际协议，TCP和UDP使用该协议从一个网络传送数据包到另一个网络。
  把IP想像成一种高速公路，它允许其它协议在上面行驶并找到到其它电脑的出口。
  TCP和UDP是高速公路上的“卡车”，它们携带的货物就是像HTTP，文件传输协议FTP这样的协议等。 
  你应该能理解，TCP和UDP是FTP，HTTP和SMTP之类使用的传输层协议。
  虽然TCP和UDP都是用来传输其他协议的，它们却有一个显著的不同：
  TCP提供有保证的数据传输，而UDP不提供。
  这意味着TCP有一个特殊的机制来确保数据安全的不出错的从一个端点传到另一个端点，
  而UDP不提供任何这样的保证。
  HTTP(超文本传输协议)是利用TCP在两台电脑(通常是Web服务器和客户端)之间
  传输信息的协议。客户端使用Web浏览器发起HTTP请求给Web服务器，
  Web服务器发送被请求的信息给客户端。
 */

// 第七章
// 基于TCP/UDP的数据通信
// 基于TCP数据通信的net模块,基于UDP数据通信的dgram模块
// 如何创建TCP服务器/客户端和他们之间的通信
// 如何创建UDP服务器/客户端和他们之间的通信

//1创建TCP服务器
//2使用TCP服务器监听客户端链接的socket端口对象读取客户端发送的数据
//3创建TCP客户端以 及利 怎样利用客户端用于链接TCP服务器的cocket端口对象客户端发送数据
//4创建UDP服务器与UDP客户端,如何实现UDP客户端与UDP服务器之间通信
//5从UDP服务器向客户端广播数据,如何从UDP服务器向客户端组播数据

// //////////创建TCP服务器///////////

// 创建TCP服务器
// 	var server = net.createServer([options],[connectionListener]);
// 	options:一个对象,true:接受FIN包不回发FIN包,false:会回发FIN包. 
// 		true使得TCP服务器可以继续向客户端发送数据,但不会继续接受客户端发送的数据,使用end方法关闭socket连接
// 		默认false
// 	connectionListener:指定客户端与服务器端建立连接时所要调用的回调函数 function(socket){}
// 		socket:TCP服务器监听的socket端口对象
// 		当客户端与服务器连接时,触发connection事件,可以不指定connectionListener,对connection事件监听
// 		server.on("connection",function(socket){});

// 创建TCP服务器后,使用listen()通知服务器开始监听客户端连接
// 	方式一
// 	server.listen(port,[host],[backlog],[callback]);	(server代表一个TCP的服务器)
// 		port:指定需要监听的端口号,为0时将随机指定一个端口号
// 		host:指定需要监听的IP地址或主机名,默认监听来自于任何IPv4地址的客户端连接
// 		backlog:整数值,指定位于等待队列中的客户端连接的最大数量,(超越则TCP服务器将开始拒接来自新客户端的请求).默认511
// 		callback:回调函数
// 	方式二
// 	server.listen(path,[callback]);	(server代表一个使用unix端口的服务器)
// 		path:需要监听的路径
// 		callback:回调函数
// 	方式三
// 	server.listen(handle,[callback]);	(server代表一个TCP的服务器)
// 		handle:指定需要监听的socket句柄
// 		callback:回调函数
// 	不在上述三种形式时,监听TCP的listening事件
// 		server.on("listening",function(){});

// 	app.js 
// 	var net = require('net');
// 	var server = net.createServer(function(socket){
// 		console.log('客户端与服务器连接已建立');
// 	});
// 	server.listen(8888,'localhost');
// 	server.on("error",function(e){
// 		if(e.code === "EADDRINUSE"){
// 			console.log("服务器端口被占用");
// 		}
// 	});

// 创建了TCP服务器后,可以用address方法查看服务器监听的地址信息,在listen事件被触发后使用
// 	var address = server.address();  该方法返回一个对象 具有一下属性
// 		port:TCP服务器监听的socket端口对象,如8888
// 		adress:TCP服务器监听的地址,如127.0.0.1
// 		family:标识了TCP服务器监听的地址是IPv4还是IPv6地址的字符串,如IPv4
// 	var net = require("net");
// 	var server = net.createServer(function(){
// 		console.log("客户端与服务器端连接已建立");
// 	});
// 	server.listen(8888,"localhost",function(){
// 		var address = server.address();
// 		console.log("地址信息: %j",address);
// 	});

// 使用TCP服务器的getConnections方法查看当前与TCP服务器建立连接的客户端数量
// 	var net = require('net');
// 	var server = net.createServer(function(socket){
// 		server.getConnections(function(err,count){
// 			console.log("当前连接数量:"+count);
// 			server.maxConnections = 2;
// 			console.log('最大连接数为:'+server.maxConnections);
// 		});
// 	})
// 	server.listen(8888,'localhost');

// 使用TCP服务器close()显示指定服务器拒绝所有新的客户端连接(不会断开现有连接)
// 	var net = require("net");
// 	var server = net.createServer(function(socket){
// 		server.close(function(){
// 			console.log("服务器被关闭");
// 		});
// 	});
// 	server.listen(8888,'localhost');


// socket端口对象	(var server = net.createServer(function(socket){};socket为一个自动创建的net.Socket对象)
// 	类似TCP address()方法 port,address,family属性
// 		var net = require("net");
// 		var server = net.createServer();
// 		server.on('connection',function(socket){
// 			address = socket.address();
// 			console.log("地址信息: %j",address);
// 		});
// 		server.listen(8888,'localhost');

// 	socket对象读取客户端发送的数据流,接受到数据时触发data事件
		// var net = require("net");
		// var server = net.createServer();
		// server.on('connection',function(socket){
		// 	socket.setEncoding("utf-8");
		// 	server.on("data",function(data){
		// 		console.log(data); // data.toString();
		// 		console.log(socket.bytesRead); //收到字节数
		// 	});
		// 	server.on("end",function(){
		// 		console.log("客户端连接被关闭");
		// 	});
		// });
		// server.listen(8888,'localhost');

//  使用pipe方法将所有客户端发送数据写入文件
// var net = require("net");
// var fs = require("fs");
// var file = fs.createWriteStream("./msg.txt");
// var server = net.createServer();
// server.on('connection',function(socket){
// 	socket.pipe(file,{end:false}); //end:false 指定当客户端不会发送新数据时,不立即结束写操作
// 	//取消写入
// 	setTimeout(function(){
// 		file.end("再见");
// 		socket.unpipe(file);
// 	},5000);
// 	//最后追加再见
// 	socket.on("end",function(){
// 		file.end("这回真再见了");
// 	});
// });
// server.listen(8888,"localhost");


// socket端口对象的pause方法和resume方法
// var net = require("net");
// var file = require("fs").createWriteStream("./message.txt");
// var server = net.createServer();
// server.on("connection",function(socket){
// 	socket.pause(); //暂停读取
// 	setTimeout(()=>{
// 		socket.resume();//恢复读取
// 		socket.pipe(file);
// 	},5000);
// });




// //////////创建TCP服务器///////////










/////////////////创建HTTP/HTTPS服务器及客户端//////////////////////











////////////////进程与子进程////////////////////











//////////////////错误处理与断言处理////////////////////////











///////////////////加密与压缩//////////////////////////











/////////////////////其他模块////////////////////////
// 1:dns模块实现域名查找及域名解析的处理
// 2:punycode模块实现地方语言所采用的各种编码及punycode编码之间的互相转换处理
// 3:os模块来获取运行nodejs的操作系统的各种信息
// 4:readline模块实现逐行读取数据的处理
// 5:实用util模块
// 6:vm模块实现在独立环境中运行脚本代码的处理
// 7:repl模块中的start方法的options参数值对象中的各种属性定制REPL运行环境

//1:dns模块实现域名查找及域名解析的处理
	//使用resolve方法将域名解析为DNS记录
		//dns.resolve(domain,[rrtype],callback);
			//domain:字符串,用于指定需要被解析的域名(可以包括子域名)
			//rrtype:字符串,指定需要获取的记录类型
				//A:默认,将IPv4地址映射为一个域名
				//AAAA:将IPv6地址映射为一个域名
				//CNAME:表示该记录为一个域名的别名记录 例如:www.example.com 别名 example.com
				//MX:指向一个使用SMTP的域中的邮件服务器 例如:向467347544@qq.com发送邮件时,
				//   467347544@qq.com域的MX记录中保存了发送该邮件服务器地址
				//TXT:为该域名附加的描述记录
				//SRV:用于为一个特定域中所有可用服务提供信息
				//PTR:用于反向地址解析,将一个域名映射为一个IPv4地址
				//NS:域名服务器记录,用来指定该域名由哪个DNS服务器进行解析
			//callback:指定回调函数 function(err,addresses){}
				//err:指定错误对象
				//addresses:数组,存放所有获取到的DNS记录
		// var dns = require('dns');
		// dns.resolve('www.baidu.com','A',function(err,addresses){
		// 	console.log(addresses);
		// });
		// 简便方法
		// dns.resolve4(domain,callback);
		// dns.resolve6(domain,callback);
		// dns.resolveMx(domain,callback);
		// dns.resolveTxT(domain,callback);
		// dns.resolveSrv(domain,callback);
		// dns.resolveNs(domain,callback);
		// dns.resolveCname(domain,callback);
		// var dns = require('dns');
		// dns.resolveMx('google.com',function(e,r){
		// 	console.log(r);
		// });

	//使用lookup方法查询IP地址
		//dns.lookup(domain,[family],callback);
			//domain:解析的域名
			//family:4/6指定获取IPv4/6地址,默认null,都可以获取
			//callback function(err,address,family){}
				//err:错误对象
				//addresses:字符串,获取到的IP地址
				//family:整数,标识获取道德IP地址类型,4/6
		// var dns = require('dns');
		// dns.lookup('www.google.com',4,function(e,address,f){
		// 	console.log(address,f);
		// });

	//使用reverse方法反向解析IP地址
		// dns.reverse(ip,callback);
			//ip:指定解析IP地址
			//callback:回调函数 function(err,domain){}
				//err:错误对象
				//domain:数组,存放获取到的所有域名
		// var dns = require('dns');
		// dns.reverse('202.165.102.205',function(err,domain){
		// 	console.log(domain);
		// });

//2:punycode模块实现地方语言所采用的各种编码及punycode编码之间的互相转换处理
	//encode():将一个Unicode编码字符转换为一个punycode编码字符串
		// punycode.encode(string);
		// repl下
		// punycode.encode("猴子"); //i8sv96c
	//decode():将一个punycode编码字符转换为一个Unicode编码字符
		//punycode.decode(string);
		// repl下
		// punycode.decode("i8sv96c"); //猴子
	//toASCII():将Unicode编码字符转换为punycode编码域名,只转换地方语言,不转换英文
		// punycode.toASCII(string);
		//repl下
		// punycode.toASCII("www.猴子.com"); //www.xn--i8sv96c.com
	//toUnicode():将punycode编码域名转换为Unicode编码域名,只转换地方语言,不转换英文
		// punycode.toUnicode(string);
		// repl下
		// punycode.toUnicode("www.xn--i8sv96c.com");//www.猴子.com
	//ucs2.encode():将一个UCS-2编码数组转换为一个字符串
		//punycode.ucs2.encode(codePoints);
		// repl下
		// punycode.ucs2.encode([97,98,99]); //abc
	//ucs2.decode():将一个字符串转换为一个UCS-2编码数组
		//punycode.ucs2.decode(string);
		//repl
		// punycode.ucs2.decode("abc"); //[97,98,99]
	//version属性:获取punycode模块版本

//3:使用OS模块获取操作系统信息
	//repl
	// os.tmpdir(); 	//获取操作系统中默认的用于存放临时文件的目录
	// os.endianness();	//获取CPU的字节序BE/LE
	// os.hostname(); 	//获取计算机名
	// os.type();		//获取操作系统类型
	// os.platform();	//获取操作系统平台
	// os.arch();		//获取CPU架构
	// os.release();	//获取操作系统版本号
	// os.uptime();		//获取系统的当前运行时间,单位秒
	// os.loadavg();	//返回一个数组,存放1,5,15,分钟的系统平均负载
	// os.totalmem();	//返回系统的总内存量,单位字节
	// os.freemem();	//返回系统的空闲内存量
	// os.cpus();		//返回一个数组,存放CPU内核各种信息,包含规格,运行速度,运行时间
	// os.networkInterfaces(); //返回一个数组,存放系统中所有网络接口
	// os.EOL //常量 表示操作系统的换行符

//4:使用readline模块逐行读取流数据
	//在readline模块中,使用interface对象实现逐行读取流数据.
	//创建Interface对象
		//readline.createInterface(options);
			//参数为一个对象 对象具有以下属性
			// input:为一个可用来读取流数据的对象,用于指定读入数据的来源
			// output:为一个可用来写入流数据的对象,用于指定数据的输出目标
			// completer:为一个函数,用于指定Tab补全处理
				// completer函数示例如下
				// function completer(line){
				// 	var completions = '.help .error .exit .quit .q'.split(" ");
				// 	var hits = completions.filter(function(c){
				// 		return c.indexOf(line) == 0;
				// 	});
				// 	return [hits.length ? hits : completions,line];
				// }
			// terminal:为一个布尔类型的属性,当需要想一个终端那个实时地将输入数据流进行输出,
						// 且需要在输出数据中写入ANSI/VT100控制字符时,设置为true
						// 默认为output属性值对象的isTTY属性值
			//close触发条件
			//调用close()
			//Interface对象的input属性的end方法被触发
			//接受到EOT信号 如ctrl+d 
			//Interface对象接受到SIGINT信号,如ctrl+c

		//示例1(输出输入的字符 按下q等退出)
		// var readline = require('readline');
		// var rl = readline.createInterface({
		// 	input:process.stdin, //创建进程标准输入流
		// 	ouput:process.stdout
		// });
		// rl.on("line",function(line){
		// 	if(line == "exit" || line == "quit" || line == "q"){
		// 		rl.close();
		// 	}else{
		// 		console.log('输入了:'+line);
		// 	}
		// });
		// rl.on('close',function(){
		// 	console.log('行数据读取被终止');
		// });

		//示例2(Tab补全功能)
		// var readline = require('readline');
		// function completer(line){
		// 	var completions = 'help error quit aaa abc ccc'.split(" ");
		// 	var hits = completions.filter(function(c){return c.indexOf(line) == 0});
		// 	return [hits,line];
		// }
		// var rl = readline.createInterface({
		// 	input:process.stdin,
		// 	output:process.stdout,
		// 	completer:completer
		// });
		// rl.on('line',function(line){
		// 	if(line == "exit" || line == "quit" || line == "q"){
		// 		rl.close();
		// 	}else{
		// 		console.log('输入了:'+line);
		// 	}
		// });
		// rl.on('close',function(){
		// 	console.log("行数据读取终止");
		// });

		//示例3(逐行读取一个文件再写入另一个文件)
		// var readline = require('readline');
		// var fs = require('fs');
		// var file = fs.createReadStream('./msg.txt');
		// var out = fs.createWriteStream('./msgRl.txt');
		// var index = 1;
		// out.write('line'+index.toString()+':');
		// index++;
		// var rl = readline.createInterface({
		// 	input:file,
		// 	output:out,
		// 	terminal:true
		// })
		// rl.on('line',function(line){
		// 	out.write('line'+index.toString()+':');
		// 	index++;
		// });

	//Interface对象所拥有的各种方法与事件
		// pause()
			// 暂停使用创建该对象所使用的createInterface方法中所使用的options参数对象的input属性对象读取流数据
			// 当调用rl.pause()或接受到SIGCONT(非win)/SIGINT(win)信号触发rl.pause()
		// resume()
			// 恢复被pause()暂停的读取流数据
				// var readline = require('readline');
				// var rl = readline.createInterface({
				// 	input:process.stdin,
				// 	output:process.stdout
				// });
				// rl.on('line',function(line){
				// 	if(line=='quit' || line=='exit' || line=='q'){
				// 		rl.close();
				// 	}
				// 	else if(line=='pause'){
				// 		console.log('暂停10s');
				// 		rl.pause();
				// 		setTimeout(()=>{
				// 			rl.resume();
				// 		},10000);
				// 	}
				// 	else{
				// 		console.log('输入了'+line);
				// 	}
				// });
				// rl.on('pause',function(){
				// 	console.log('暂停读取数据');
				// });
				// rl.on('resume',function(){
				// 	console.log('恢复读取数据');
				// });
				// rl.on('close',function(){
				// 	console.log('读取结束');
				// });

		// 	write()
			//暂停使用创建该对象所使用的createInterface方法中所使用的options参数对象的output属性目标对象写入数据
			// rl.write(data,[key]);
			// 如果input属性对象被暂停或终止,write方法将通知input对象继续读取流数据,读入其实数据为write写入数据
				// var readline = require('readline');
				// var fs = require('fs');
				// var file = fs.createReadStream('./msg.txt');
				// var out = fs.createWriteStream('./msgRl.txt');
				// var index = 1;
				// out.write('line'+index.toString()+':');
				// index++;
				// var rl = readline.createInterface({
				// 	input:file,
				// 	output:out,
				// 	terminal:true
				// });
				// rl.on('line',function(line){
				// 	out.write('line'+index.toString()+':');
				// 	index++;
				// });
				// file.on('end',function(){
				// 	var buf = new Buffer("文件创建时间:"+(new Date()).toLocaleString());
				// 	rl.removeAllListeners('line');
				// 	rl.write('\r\n');
				// 	rl.write(buf);
				// });

			// write方法中,可使用key参数模拟一个按键操作
				// var readline = require('readline');
				// var fs = require('fs');
				// var file = fs.createReadStream('./msg.txt');
				// var rl = readline.createInterface({
				// 	input:file,
				// 	output:process.stdout,
				// 	terminal:true
				// });
				// file.on('end',function(){
				// 	var buf = new Buffer('文件创建时间:'+(new Date()).toLocaleString());
				// 	rl.write('\r\n');
				// 	rl.write(buf,{ctrl:true,name:'u'});
				// });

		// 	setPrompt()&prompt()
			// 在终端环境下制定命令提示符 如>
			// rl.setPrompt(prompt,[length]):prompt:string 提示符,length:起始输入位置
			// r;.prompt():如果input属性对象读取流数据被暂停或终止,prompt将通知input属性对象恢复读取流数据
				// var readline = require("readline");
				// var rl = readline.createInterface({
				// 	input:process.stdin,
				// 	output:process.stdout
				// });
				// rl.setPrompt('请输入:',9);
				// rl.prompt();
				// rl.on('line',function(line){
				// 	if(line == 'q'){
				// 		rl.close();
				// 	}else{
				// 		console.log('输入了:'+line);
				// 		rl.prompt();
				// 	}
				// });
				// rl.on('close',function(){
				// 	console.log('\r\n 行数据读取终止');
				// });

		// 	question()
			//用于在终端环境中显示一个问题
			//rl.question(query,callback); query:问题 callback:回调函数 funtion(answer){} answer:回答的答案
			//如果input属性对象读取流数据被暂停或终止,question将通知input属性对象恢复读取流数据
				// var readline = require("readline");
				// var rl = readline.createInterface({
				// 	input:process.stdin,
				// 	output:process.stdout
				// });
				// rl.question('who care ?',function(answer){
				// 	console.log('\nsomeOne:'+ answer);
				// 	rl.close();
				// });

		//  信号事件
			// window 接受SIGINT信号  如Ctrl+c    将触发Interface对象的信号事件 如果不指定回调函数,input对象将暂停流数据读取操作
			// 非window 接受SIGTSTP信号 如Ctrl+z  将触发Interface对象的信号事件 如果不指定回调函数,进程将被挂起
				// var readline = require('readline');
				// var rl = readline.createInterface({
				// 	input:process.stdin,
				// 	output:process.stdout
				// });
				// rl.on('line',function(line){
				// 	if(line =='q'){
				// 		rl.close();
				// 	}
				// 	else{
				// 		console.log('输入了:'+line);
				// 	}
				// });
				// rl.on('SIGINT',function(){
				// 	var reg = /^y(es)?$/i;
				// 	rl.question('are you sure want to exit?',function(answer){
				// 		if(answer.match(reg)){
				// 			rl.pause();
				// 		}
				// 	});
				// });
				// rl.on('close',function(){
				// 	console.log('行数据读取终止');
				// 	process.exit();
				// });

// 5:使用util模块中提供的一些实用方法 repl测试
	// format() 格式化字符串
		// util.format(format,[...]);
		// %s字符串 %d数值 %jJSON对象 %%百分号
		// util.format('%s,%d,100%%','hfy','22');
	// debug() 同步方法,阻塞当前线程,将一个字符串作为标准错误输出流输出
		// util.debug(string);
		// util.debug('this is an unknow bug');
	// error() 同步方法,阻塞当前线程,将一个数组的多个字符串作为标准错误输出流进行输出
		//util.error([...]);
		// util.error(['err1','err2']);
	// puts() 同步方法,阻塞当前线程,将数组多个字符串作为标准输出流输出,输出后会产生一个新行
		//util.puts([...]);
		// util.puts(['str1','str2']);
	// print() 同步方法,阻塞当前线程,将数组多个字符串作为标准输出流输出,输出后不产生新行
		//util.print([...]);
		// util.print(['str3','str4']);
	// log() 将一个字符串作为标准输出流输出,在该字符串前输出系统当前时间
		// util.log(string);
		// util.log('sleep');
	// inspect() 返回一个字符串,包含一个对象的信息
		//util.ispect(object,[options]);
			// object:被查看的对象
			// options:
			// 	showHidden:是否包含对象的不可枚举属性
			// 	depth: 当对象具有层级关系,指定深度,默认2,没有为null
			// 	colors:输出该对象信息时,是否给对象的各种属性染色
			// 	customInspect:是否 在查看对象信息时将调用被查看对象自定义的inspect方法
			// var util = require('util');
			// var parent = {
			// 	name:'par',
			// 	age:50
			// }
			// console.log(util.inspect(parent,{showHidden:"true",depth:3}));
	// isArray() 	判断一个参数值是否为数组
	// isRegExp()	判断一个参数值是否为正则表达式
	// isData()		判断一个参数值是否为日期类型
	// isError()	判断一个参数值是否为错误对象
	// inherits()	将一个父类方法继承给父类的子类

// 6:使用VM模块改变脚本运行环境
	// 在独立环境中运行javascript代码
		//1:runInThisContext(code,[filename]); 
			// 该方法预编译代码,在指定的上下文环境中运行一些代码并返回运行结果
			// 作用类似eval(),但与eval不同的是,在该上下文环境中不能访问任何模块中定义的本地变量,属性,对象,方法
			// code:指定需要运行的代码
			// filename:指定一个文件名,可以是不存在的文件,将自动创建文件
				//repl
				// vm.runInThisContext('1+1'); //2
			// runInThisContext维护的是一个独立的上下文环境,如果在它里面定义对象方法 在之后的runInThisContext中可以访问
				// var vm = require('vm');
				// vm.runInThisContext('var obj = { name : "hfy"}');
				// vm.runInThisContext('console.log(obj.name)');

		//2:runInNewContext(code,[sandBox],[filename]);
			// 与runInThisContext不同的是,在被指定的上下文环境中,不能访问Nodejs中定义的全局变量,属性,方法
			// code:指定需要运行的代码
			// sandBox:一个对象,指定独立的上下文环境
			// filename:指定文件名,可以是不存在的文件
				// var vm = require('vm');
				// var obj = {
				// 	name:""
				// };
				// vm.runInNewContext('name = "hfy"',obj);
				// vm.runInNewContext('age = 22',obj);
				// console.log(obj.name);
				// console.log(obj.age);

		//3:createContext方法与runInContext方法
		// 使用runInNewContext方法,那么当独立的上下文环境中的变量或对象属性被修改后,不能返回到其初始状态
		// 为了维护一个独立的上下文环境中的初始状态 Nodejs使用createContext方法与runInContext方法
		// createContext方法用于根据一个被初始化的上下文对象创建另一个上下文对象,当另一个上下文对象被创建后
		// 就可以使用runInContext方法在该上下文环境中运行js代码,而初始上下文对象中保存的变量或对象的属性将不被修改
		// 在vm模块中 runInContext方法比runInNewContext方法效率高
			// vm.createContext([initSandBox]);
			// 参数为一个保存了初始变量或对象属性的上下文环境,返回另一个上下文环境
			// 在该上下文环境中不能访问任何模块中定义的本地变量 也不能访问Nodejs中定义的全局变量,属性,方法
				// var vm = require('vm');
				// var obj = {x:2};
				// var context1 = vm.createContext(obj);
				// vm.runInContext('x = x+2',context1);
				// console.log(context1.x);
				// var context2 = vm.createContext(obj);
				// vm.runInContext('x = x+2',context2);
				// console.log(context2.x);

	//创建并使用Script对象
		// 在vm模块中,可以使用createScript方法编译一段代码但不运行,
		// 而是将其保存在一个Script对象中,之后可以通过Script对象的各种方法来运行这些代码
		// vm.createScript(code,[filename]); 返回被创建的script对象
		// code:指定需要编译的代码
		// filename:为一个文件名,可以不存在

		//var script = vm.createScript(code,[filename]);
		//(1)可以使用script对象的runInThisContext运行Script对象中的代码 与vm模块的runInThisContext类似
		// script.runInThisContext();
			// var vm = require('vm');
			// globalVar = 0;
			// var script = vm.createScript('globalVar+=1');
			// for(var i = 0;i<100;i++){
			// 	script.runInThisContext();
			// }
			// console.log(globalVar);
		//(2)可以使用script对象的tunInNewContext运行Script对象中的代码	与vm模块的runInNewContext类似
		//script.runInNewContext([sandBox]);
			// var vm = require('vm');
			// var obj = {
			// 	globalVar : 0
			// };
			// var script = vm.createScript('globalVar+=1');
			// for(var i = 0;i<100;i++){
			// 	script.runInNewContext(obj);
			// }
			// console.log(obj.globalVar);


// 7:自定义REPL运行环境
/////////////////////其他模块////////////////////////












///////////////////数据库访问(mongoDB/mysql)//////////////////////
/// 配置本地数据库服务器
/// mongod -dbpath <data所在文件夹>
/// data文件夹内新建db log文件夹
/// cmd:mongod --dbpath "E:\nodeWorkSpace\MongoDB\Server\3.2\bin\data\db" 
///            --logpath "E:\nodeWorkSpace\MongoDB\Server\3.2\bin\data\log\MongoDB.log" 
///            --install --serviceName "MongoDB"
/// cmd:net start mongodb / net stop mongodb 开始或停止mongodb服务
/// cmd:mongo > help / show dbs / show collections  帮助等一些命令
/// npm install mongodb

//引用mongodb模块
// var mongo = require('mongodb');
// 
// 当需要连接MongoDB数据库时,先要创建一个代表MongoDB数据库所在服务器的server对象
// var server = new mongo.Server(host,port,[options]);
// host:指定服务器所在地址
// port:指定服务器端口号
// options为一个对象 包含以下属性
	// ssl:true/false(default) 
		// 客户端与服务端之间建立一个基于ssl安全协议的连接,服务端需启用ssl安全协议
	// sslValidate:true/false(default) 
		// 指定服务器是否验证客户端所提交的证书 (需ssl安全协议2.4版本以上)
	// sslCA:数组 默认null
		// 数组中每一个元素为一个Buffer对象或字符串,指定一组供服务器端验证时使用的证书
	// sslCert:Buffer对象或字符串 默认null
		// 指定一个供服务器端验证时使用的证书
	// sslKey:Buffer对象或字符串 默认null
		// 指定一个供服务器端验证时使用的私钥
	// sslPass:Buffer对象或字符串 默认null
		// 指定一个供服务器端验证时使用的证书密码
	// poolSize:一个整数 默认5
		// 指定连接池中的最大连接数量
	// socketOptions:一个对象 默认null
		// 指定与服务器简历连接的端口使用的选项
			//keepAlive:整数,单位毫秒,指定客户端每隔多久向服务器端发送一次keepAlive探测包
			//connectTimeoutMS:整数,单位毫秒,指定客户端连接超时时间
			//socketTimeoutMS:整数,单位毫秒,指定客户端端口超时时间
	// logger:一个对象 默认null
		// 记录日志
	// auto_reconnect:true/false(default) 
		// 在客户端与服务器连接过程中发生错误时自动重建连接
	// disableDriverBSONSizeCheck:true/false(default) 
		// 在BSON对象尺寸过大时强迫服务器抛出一个错误

// MongoDB服务器创建以后,需要创建一个代表MongoDB数据库的Db对象
// var db = new mongo.Db(databaseName,server,[options]);
// databaseName:字符串,指定数据库名
// server:一个Server对象,指定数据库所在服务器
// options:一个对象,包含以下属性
	// w:为大于-1的整数或字符串,
	// 设置写数据操作时MongoDB数据库内部的write concern机制,
	// 小于1时,write concern机制不承认一条数据被写入,大于等于1时承认。
	// wtimeout:整数值
	// 	指定写数据操作的超时时间,单位毫秒
	// fsync:true/false(default)
	// 	指定写数据操作的方法返回前是否要等待MongoDB数据库内部使用的
	// 	fsync操作(该操作将剩余的被挂起数据全部写入数据库)结束,
	// journal:true/false(default)
	// 	指定写数据操作的方法返回前是否要等待MongoDB数据库内部使用的
	// 	journal操作(该操作在数据库中写入执行日志)结束,
	// native_parser:true/false(default)
	// 	指定MongoDB数据库内部是否使用C++BSON解析器
	// forceServerObjectId:true/false(default)
	// 	指定是否在服务器端,而不是在客户端创建BSON对象ID
	// pkFactory:对象 
	// 	该对象重载MongoDB数据库内部生成的对象ID主键
	// serizlizeFunctions:true/false(default)
	// 	指定是否在MongoDB数据库内部序列化javascript函数
	// raw:true/false(default)
	// 	指定是否在MongoDB数据库内部使用二进制BSON数据缓存区来执行数据的存取操作
	// recordQueryStats:true/false(default)
	// 	指定当查询数据时是否在MongoDB数据库内部执行查询统计
	// retryMiliSeconds:整数,单位毫秒 默认5000
	// 	指定当连接数据库操作失败时每隔多长时间重新尝试连接数据库
	// numberOfRetries:整数值,默认5 
	// 	指定当连接数据库操作失败时重新尝试连接数据库的次数
	// logger:对象,默认Null
	// 	用于记录操作日志
	// slaveOk:整数值,默认null
	// 	用于设置查询时在MongoDB数据库内部使用的SlaveOk值 (只在需要显示指定连接到一个从属服务器时有效)
	// safe:true/false(default)
	// 	使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。

// 在Db对象创建之后,需要使用该对象的open方法执行数据库连接操作
// db.open(callback);
	// callback:function (err,db){} 
	// err:连接错误,db:Db对象,失败时为Null
	
// 当数据库不需要时,使用close方法关闭数据库
// db.close([forceClose],[callback]);
	// forceClose:true时:强制关闭数据库,并且不可再使用open方法打开数据库
			// false时:不强制关闭数据库,可使用数据库对象open方法打开数据库
	// callback:关闭后的回调函数 function(err){} err:错误对象

// 数据库关闭时,触发数据库对象的close事件
// db.on('close',function(err,db){});
	// err:错误对象
	// db:数据库对象 关闭失败时db == null 

//示例 建立数据库连接及关闭数据库
	// var mongo = require('mongodb');
	// var host = 'localhost';
	// var port = 27017;//mongo.Connection.DEFAULT_PORT
	// var server = new mongo.Server(host,port,{auto_reconnect:true});
	// var db = new mongo.Db('node-mongo-test',server,{safe:true});
	// db.open(function(err,db){
	// 	if(err) throw err;
	// 	else{
	// 		console.log('成功建立数据库连接');
	// 		db.close();
	// 	}
	// });
	// db.on('close',function(err,db){
	// 	if(err) throw err;
	// 	else{
	// 		console.log('成功关闭数据库');
	// 	}
	// });

//在Mongodb数据库中插入数据
	//数据存储在许多数据集合中,就好像在关系型数据库中数据全部存储在数据表中一样
	
	//可以使用数据库对象的collection方法访问一个集合
	//db.collection(collectionName,[options],[callback]);
		// collectionName:字符串,指定需要访问的集合名
		// options:对象,指定访问集合时使用的选项,其属性如下
			// w:大于-1的整数或字符串,小于1 write concern机制不承认一条数据被写入,大于等于1时承认。
			//  wtimeout:整数值,指定写数据操作的超时时间,单位毫秒
			// fsync:true/false(default),指定写数据操作的方法返回前是否要等待MongoDB数据库内部使用的
			//  fsync操作(该操作将剩余的被挂起数据全部写入数据库)结束,
			// journal:true/false(default)
			// 	指定写数据操作的方法返回前是否要等待MongoDB数据库内部使用的
			// 	journal操作(该操作在数据库中写入执行日志)结束,
			// pkFactory:对象,重载MongoDB数据库内部生产的ID主键
			// serializeFunctions:true/false(default),指定是否在MongoDB数据库内部序列化js函数
			// raw:true/false(default),指定是否在MongoDB数据库内部使用二进制BSON数据缓存
			//  来执行数据的存取操作
			// strict:true/false(default),指定当被访问的集合不存在时是否抛出一个错误
			// safe:true/false(default),是否使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。
		// callback:回调函数 function(err,collection){}
			// err :错误对象
			// collection: 被访问的集合
	
	//可以使用Collection对象的insert方法向该集合中插入一个数据文档
	//因为MongoDB数据库是一个面向文档的NoSQL数据库,每一条数据都是一个数据文档
		// collection.insert(docs,[options],[callback]);
		// 	docs: 一个JSON对象或一个由JSON对象构成的数组
		// 	options: 指定插入数据时使用的选项,其属性如下
		// 		w、wtimeout、fsync、journal、serializeFunctions、safe同上
		// 		continueOnError/keepGoing: true/false(default),指定当插入一组数据文档时,
		// 		 如果一个数据文档插入失败,是否继续插入剩余数据文档
		// 		forceServerObjectId: true/false(default),指定是否在MongoDB数据库服务器中生成对象ID,
		// 		 而不是在驱动程序中生成对象ID
		// 		checkKeys: true(default)/false,指定插入数据时是否取消在MongoDB数据库中检查该数据文档的主键,
		// 		 是否已经存在的处理
		// 	callback:回调函数 function(err,docs){}
		// 		err:错误对象
		// 		docs:被插入的数据文档
	
	// var mongo = require("mongodb");
	// var host = "localhost";
	// var port = 27017;
	// var server = new mongo.Server(host,port,{auto_reconnect:true});
	// var db = new mongo.Db('node-mongo-test',server,{safe:true});
	// db.open(function(err,db){
	// 	db.collection('user',function(err,collection){
	// 		collection.insert({username:'hfy',age:22},function(err,docs){
	// 			if(err) throw err;
	// 			else{
	// 				console.log(docs);
	// 				db.close(false);
	// 			}
	// 		});
	// 	});
	// });

//在MongoDB数据库中查询数据
	// 在MongoDB数据库中可以使用,Collection对象的find方法从一个集合中查询多个数据文档
	// collection.find(selector,[options]);
		// selector: 指定查询数据时使用的查询条件
		// options : 指定查询数据时使用的选项
	//find方法返回一个代表游标的Cursor对象,该游标中包含了所有查询到的数据文档信息
	//可使用Cursor对象的toArray方法获取所有查询到的数据文档
		// collection.find(selector,[options]).toArray(callback);
			// callback:回调函数 function(err,docs){}
				// err:错误对象
				// docs:查询到的数据文档(根据options的不同,查询到的数据文档不一定包含所有字段)
		//查询user集合中所有数据
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// db.open(function(err,db){
			// 	db.collection('user',function(err,collection){
			// 		collection.find({}).toArray(function(err,docs){  //查询全部数据
			// 			console.log(docs);
			// 			db.close();
			// 		});
			// 	})
			// });
		
		//在查询条件中指定需要查询的字段及字段值
			//collcetion.find({username:'hfy'});
		//在查询选择器中指定需要查询的字段并限定字段值范围
			//collection.find({username:{$in:['hfy','tt']}}); //username为hfy或tt
		
		//同时指定多个字段值的查询条件
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var docs = [{type:'food',price:11},
			// 			{type:'food',price:10},
			// 			{type:'food',price:9},
			// 			{type:'food',price:8},
			// 			{type:'book',price:9}];
			// var findSql = {type:'food',price:{$lt:10}}; //查询type==food && price<10 的数据
			// var findSql2= {$or:[						//查询type==food || price<10 的数据
			// 					{type:'food'},
			// 					{price:{$lt:10}}
			// 				]};
			// var findSql3= {type:'food',$or:[			//查询type==food && price==11 || price<9 的数据
			// 								{price:11},
			// 								{price:{$lt:9}}
			// 				]};
			// db.open(function(err,db){
			// 	db.collection('goods',function(err,collection){
			// 		collection.insert(docs,function(err,docs){
			// 			if(err) throw err;
			// 			else{
			// 				collection.find(findSql).toArray(function(err,docs){
			// 					if(err) throw err;
			// 					else{
			// 						console.log(docs);
			// 						db.close();
			// 					}
			// 				});
			// 			}
			// 		})
			// 	})
			// });
		
		//数据文档含有子文档时,可以在查询条件中指定需要查询的子文档
			//{<子文档>:<子文档值>};
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var store1 = {name:'store1',goods:{type:'food',price:11}};
			// var store2 = {name:'store2',goods:{type:'food',price:10}};
			// var store3 = {name:'store3',goods:{type:'food',price:9}};
			// var store4 = {name:'store4',goods:{type:'food',price:8}};
			// var store5 = {name:'store5',goods:{type:'book',price:9}};
			// var docs = [store1,store2,store3,store4,store5];
			// var findSql = {					//查询指定子文档
			// 		goods:{type:'food',price:8} //查询goods子文档的type字段为food,price为8的数据文档(全部内容)
			// 	}
			// db.open(function(err,db){
			// 	db.collection('stores',function(err,collection){
			// 		collection.insert(docs,function(err,docs){
			// 			if(err) throw err;
			// 			else{
			// 				collection.find(findSql).toArray(function(err,docs){
			// 					if(err) throw err;
			// 					else{
			// 						console.log(docs);
			// 						db.close();
			// 					}
			// 				});
			// 			}
			// 		});
			// 	});
			// });
		
		//在查询条件中指定一个数组的完整内容
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var article1 = {name:'TV',tags:['device','electric equipment']};
			// var article2 = {name:"apple",tags:['food','fruit','citrus']};
			// var article3 = {name:'Node',tags:['language','web','computer']};
			// var docs = [article1,article2,article3];
			// var findSql = {tags:['food','fruit','citrus']} //查询指定一个数组的完整内容 的数据文档(全部内容)
			// var findSql2= {tags:['food']}     //查询指定字段值数组中包含某个元素 的数据文档(全部内容)
			// var findSql3= {'tags.0':'food'}   //使用数组中序号精确指定字段值数组中某个元素的值(第一个序号为0) 的数据文档(全部内容)
			// db.open(function(err,db){
			// 	db.collection('articles',function(err,collection){
			// 		collection.insert(docs,function(err,docs){
			// 			if(err) throw err;
			// 			else{
			// 				collection.find(findSql).toArray(function(err,docs){
			// 					if(err) throw err;
			// 					else{
			// 						console.log(docs);
			// 						db.close();
			// 					}
			// 				});
			// 			}
			// 		})
			// 	})
			// })
		
		//指定某个自数据文档的某个元素的查询条件(一个数据文档包含子数据文档,子数据文档的某个字段值为一个数组)
			// var mongo = require("mongodb");
			// var util = require('util');
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var food1 = {type:'food',price:11};
			// var food2 = {type:'food',price:10};
			// var food3 = {type:'food',price:9};
			// var food4 = {type:'food',price:8};
			// var foods = [food1,food2,food3,food4];
			// var book1 = {type:'book',price:11};
			// var book2 = {type:'book',price:10};
			// var book3 = {type:'book',price:9};
			// var book4 = {type:'book',price:8};
			// var books = [book1,book2,book3,book4];
			// var store1 = {name:"store1",goods:foods};
			// var store2 = {name:"store2",goods:books};
			// var storeArr=[store1,store2];
			// var findSql = {'goods.0.type':'book'}    //查询goods字段值数组中第一个对象的type字段值等于book 的数据文档(全部内容)
			// var findSql2={'goods.price':{$lt:10}}	 //数组中只要有一个元素满足该条件, 数据文档就会被查找出来(全部内容)

			// db.open(function(err,db){
			// 	db.collection('stores',function(err,collection){
			// 		collection.insert(storeArr,function(err,docs){
			// 			collection.find(findSql).toArray(function(err,docs){
			// 				console.log(util.inspect(docs,{depth:3}));
			// 				db.close();
			// 			})
			// 		})
			// 	})
			// })
		
		//在find(selector,[options])中,可指定options对象的属性来进行查询数据,collection为一个Collection对象
		
			// fields:对象,来显示指定在查询结果中需要包含或排除的字段(1包含/0不包含)(设置除_id字段之外的所有)
				// collection.find({username:'hfy'},{fields:{username:1}});//查询结果只包含username=='hfy'和_id字段
				// collection.find({username:'hfy'},{fields:{username:1,_id:0}});//查询结果只包含username=='hfy'
			    //如果fields对象中使用属性0设置某些字段,则查询结果包含除这些字段之外的所有字段
			    // collection.find({username:'hfy'},{fields:{username:0}});//除了username==hfy的所有字段
			// sort:一个数组或对象,指定需要用来排序的字段
				//当为数组时,每一个元素为一个数组,该数组包含两个元素,第一个元素值为用于排序的字段名,第二个元素值可以为1(升序)/-1(降序)
				//当为对象时,该对象中各属性名为用于排序的字段名,各属性值可以为1(升序)/-1(降序)
				// collection.find({},{sort:[['type',1],['price',-1]]}); //按type升序排序,price降序排序
				// collection.find({},{sort:{type:1,price:-1}});
			// limit:整数,指定查询结果条数
				// collection.find({type:'food'},{limit:1}); //指定只查询第一条type==food的 数据文档
			// skip:整数,限定在从符合查询条件的数据文档中抽取数据文档时需要跳过前面多少条数据文档,(指定跳过的数据文档的条数)
				// collection.find({type:'food'},{limit:1,skip:1}); //查询1条type==food的数据文档,在查询条件的记录中跳过第1条数据文档,抽取第2条
			// hint:强迫在查询时利用一个已经存在的索引对象
				// var mongo = require("mongodb");
				// var util = require('util');
				// var host = "localhost";
				// var port = 27017;
				// var server = new mongo.Server(host,port,{auto_reconnect:true});
				// var db = new mongo.Db('node-mongo-test',server,{safe:true});
				// db.open(function(err,db){
				// 	db.collection('goods',function(err,collection){
				// 		collection.createIndex({price:1},function(err,indexName){
				// 			//指定在查询时利用根据price字段创建的索引 按price字段升序显示goods集合中type==food的数据
				// 			collection.find({type:'food'},{hint:{price:1}}).toArray(function(err,docs){
				// 				console.log(docs);
				// 				db.close();
				// 			});
				// 		});
				// 	});
				// });
				
				//hint也可以结合使用returnKey属性值来指定是否只在查询结果中包含索引字段值(true/false)
				// collection.find({type:'food'},{hint:{price:1},returnKey:true}); //查询goods集合中所有type==food的数据文档的price的字段值
			// max:限定查询结果中索引字段的最大值
				// collection.find({type:'food'},{max:{price:10}}); //查询限定price索引字段值<10的数据文档
			// min:限定在查询结果中索引字段的最小值
				// collection.find({type:'food'},{min:{price:10}}); //查询限定price索引字段值>=10的数据文档
			// explain:查看在执行一个find方法查询数据时的详细性能信息,find方法并不真正执行数据的查找操作,只返回性能信息 true/false
				// var mongo = require("mongodb");
				// var util = require('util');
				// var host = "localhost";
				// var port = 27017;
				// var server = new mongo.Server(host,port,{auto_reconnect:true});
				// var db = new mongo.Db('node-mongo-test',server,{safe:true});
				// db.open(function(err,db){
				// 	db.collection('goods',function(err,collection){
				// 		collection.find({},{explain:true}).toArray(function(err,docs){
				// 			console.log(docs[0]);
				// 			db.close();
				// 		});
				// 	})
				// })
			// raw:指定在查询数据时,是否将二进制BSON数据文档存放在缓存区中,然后将该缓存区作为查询结果进行返回(true/false)
				// collection.find({},{raw:true}); //是
			// snapshot:指定执行一个快照模式的数据查询
			// timeout:true/false(default)指定是否限定游标的超时时间
			// tailable:true/false(default)指定是否使用一个tailable游标(当一个游标为tailable游标时,在游标数据获取完毕时不自动关闭游标);
			// tailableRetryInterval:整数,指定当使用tailable游标时,每一次藏尸从未关闭的游标中获取更多数据的操作时间之间的间隔时间,单位毫秒,默认100
			// numberOfRetries:整数,指定尝试从未关闭的游标中获取更多数据的操作次数,默认5
			// awaitdata:true/false(default),指定当查询时使用的游标唯一个tailable游标时,是否允许未被关闭的游标等待接受新的数据
			// exhaust:true/false(default),指定当服务器发送完所有查询数据时是否立即发送一个getMore数据包.(不推介使用)
			// baychSize:整数,指定在对游标数据进行便利的过程中使用getMore命令获取更多数据文档时返回的数据文档条数
			// maxScan:整数,用于限定查询时的扫描次数
			// showDiskLoc:true/false(default),指定是否在查询结果中包含数据文档的磁盘位置信息
			// comment:字符串值,指定记载在profile日志中的一个注释信息
			// partial:true/false(default),指定在一个集群系统中是否允许游标返回部分查询结果

		// 在MongoDB数据库中,可以使用Collection的findOne()从一个集合中查询一条数据文档,当存在多条时,默认返回第一条
			// colection.findOne(selector,[options],callback);//使用同上 callback:function(err,docs){}

//在MongoDB数据库中更新删除数据
	// 在MongoDB数据库中,使用Collection对象的updata方法更新集合中的数据文档
	
	//  	collection.update(selector,document,[options],[callback]);
	// 		selector:对象,用于查询需要更新的数据文档,与find中的selector使用方式相同(被替换者)
	// 		document:对象,指定用来更新的数据文档(替换者)
	// 		options:对象,指定更新数据时的选项
	// 			w:一个大于-1的整数或一个字符串,用来设置写数据操作时MongoDB数据库内部的write concern 机制
	// 				大于等于1的整数/字符串时承认数据被写入。否则不承认
	// 			wtimeout:整数值,指定写数据操作的超时时间,单位毫秒
	// 			fsync:true/false(default),指定在写数据操作的方法返回前是否要等待MongoDB数据库内部使用的fsync操作
	// 			journal:true/false(default),指定在些数据操作的方法返回前是否等待ongoDB数据库内部使用的journal操作
	// 			serizlizeFunctions:true/false(default),指定是否在MongoDB数据库内部序列化javascript函数
	// 			checkKeys:true/false(default),,指定是否取消在MongoDB数据库中检测该数据文档的主键值是否已存在的处理
	// 			upsert:true/false(default),指定是否在更新数据时执行upsert操作(指被更新的数据文档不存在时插入一条数据文档)
	// 			multi:true/false(default),指定是否更新所有符合查询条件的数据文档(默认只更新第一条(如果重复)符合查询条件的数据文档)
	// 			safe:true/false(default),使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。
	// 		callback:回调函数,function(err,result){}  当使用write concern机制时必须指定回调
	// 			err:错误对象 
	// 			result:更新成功的数据条数,更新失败时为null
	
		// var mongo = require("mongodb");
		// var host = "localhost";
		// var port = 27017;
		// var server = new mongo.Server(host,port,{auto_reconnect:true});
		// var db = new mongo.Db('node-mongo-test',server,{safe:true});
		// var docs = {username:'hfy',firstname:'tttt'}
		// var doc = {username:'tt',firstname:'tt'}
		// db.open(function(err,db){
		// 	db.collection('user',function(err,collection){
		// 			collection.insert(docs,function(err,docs){
		// 				collection.update({},doc,function(err,result){
		// 				console.log('成功更新第%d条数据',result);
		// 				collection.find({}).toArray(function(err,docs){
		// 					console.log('更新后的结果:',docs);
		// 					db.close();
		// 				});
		// 			})
		// 		});
		// 	})
		// })
	
		//在update方法中将options参数中multi属性指定为true,在document参数对象中使用$set原子操作符
			// collection.update({},{$set:{username:'test',firstname:'test'}},{multi:true},function(err,result){
			// 	//回调 将更新所有符合查询条件的数据文档(包括重复的)
			// });
		//将options对象中的upsert属性指定为true 那么当集合中不存在符合查询条件的数据文档时,将把document参数值对象插入到集合中
			// collection.update({username:'aaa'},{username:'aaa',firstname:'aaa'},{upsert:true},function(err,result){
				//回调 将把{username:'aaa',firstname:'aaa'}插入到集合中
			// });
	
	//使用Collection对象的findAndModify()查找并更新一条数据文档
		// collection.findAndModify(selector,sort,document,[options],[callback]);
		// 	selector:一个对象,与find方法中selector相同
		// 	sort:一个数组,指定当存在多条符合查询条件的数据文档时这些数据文档的排序方式
		// 		该数组包含两个元素,第一个元素值为用于排序的字段名,第二个元素值可以为1(升序)/-1(降序)
		// 	document:一个对象,指定用来更新的数据文档
		// 	options:一个对象,指定更新数据时使用的选项
		// 		w:一个大于-1的整数或一个字符串,用来设置写数据操作时MongoDB数据库内部的write concern 机制
		// 			大于等于1的整数/字符串时承认数据被写入。否则不承认
		// 		wtimeout:整数值,指定写数据操作的超时时间,单位毫秒
		// 		fsync:true/false(default),指定在写数据操作的方法返回前是否要等待MongoDB数据库内部使用的fsync操作
		// 		journal:true/false(default),指定在些数据操作的方法返回前是否等待ongoDB数据库内部使用的journal操作
		// 		remove:true/false(default),当存在符合查询条件的数据文档时,在返回查询结果后删除这些数据文档
		// 		upsert:true/false(default),指定是否在更新数据时执行upsert操作
		// 		new:true/false(default),true时查询结果返回更新后的数据,false时查询结果返回更新前的数据文档,remove为true时,该属性忽略
		// 		safe:true/false(default),使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。
		// 	callback:回调函数,function(err,doc){}
		// 		err:错误对象 
		// 		doc:一个对象,(options参数中new==false时) 代表更新的数据文档
		// 					(options参数中new==false时) 代表更新后的数据文档
		// 					更新失败时为null
		
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var docs = [
			// 	{type:'food',price:11},
			// 	{type:'food',price:10},
			// 	{type:'food',price:9},
			// 	{type:'food',price:8},
			// 	{type:'book',price:9}
			// ];
			// db.open(function(err,db){
			// 	db.collection('goods',function(err,collection){
			// 		collection.insert(docs,function(err,docs){
			// 			collection.findAndModify({type:'food'},[['type',1],['price',-1]],{type:'food',price:100},{new:true},function(err,doc){
			// 				console.log(doc);
			// 				db.close();
			// 			})
			// 		})
			// 	})
			// })
	
	//使用Collection对象的remove方法删除集合中的数据文档
		// collection.remove([selector],[options],[callback]);
		// 	selector:一个对象,用于查询需要删除的数据文档,与find中的selector使用方式相同
		// 	options :一个对象,指定删除数据时使用的选项
		// 		w:一个大于-1的整数或一个字符串,用来设置写数据操作时MongoDB数据库内部的write concern 机制
		//  			大于等于1的整数/字符串时承认数据被写入。否则不承认
		// 		wtimeout:整数值,指定写数据操作的超时时间,单位毫秒
		// 		fsync:true/false(default),指定在写数据操作的方法返回前是否要等待MongoDB数据库内部使用的fsync操作
		// 		journal:true/false(default),指定在些数据操作的方法返回前是否等待ongoDB数据库内部使用的journal操作
		// 		single:true/false(default),指定是否只删除第一条满足查询条件的数据文档
		// 		safe:true/false(default),使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。
		// 	callback:回调函数,function(err,result){}
		// 		err:错误对象 
		// 		result:代表成功删除的数据条数,删除数据失败时为Null

			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// db.open(function(err,db){
			// 	db.collection('user',function(err,collection){
			// 		collection.remove({username:'tt'},function(err,result){
			// 			console.log("成功删除了 %d 条数据",result);
			// 			collection.find({}).toArray(function(err,docs){
			// 				console.log("删除后的数据:");
			// 				console.log(docs);
			// 				db.close();
			// 			})
			// 		})
			// 	})
			// })
		//如果把options参数对象中的single属性设置为true,那么将只删除第一条满足查询条件的数据文档
			// collection.remove({username:'tt'},{single:true},function(err,result){
				//回调
			// })
	
	//在MongoDB数据库中使用Collection对象的findAndRemove()查询并删除一条数据文档
		// collection.findAndRemove(selector,sort,[options],callback);
		// 	selector:一个对象,查询需要删除的数据文档,与find方法中selector相同
		// 	sort:一个数组,指定当存在多条符合查询条件的数据文档时这些数据文档的排序方式
		// 		该数组包含两个元素,第一个元素值为用于排序的字段名,第二个元素值可以为1(升序)/-1(降序)
		// 	options:一个对象,指定更新数据时使用的选项
		// 		w:一个大于-1的整数或一个字符串,用来设置写数据操作时MongoDB数据库内部的write concern 机制
		// 			大于等于1的整数/字符串时承认数据被写入。否则不承认
		// 		wtimeout:整数值,指定写数据操作的超时时间,单位毫秒
		// 		fsync:true/false(default),指定在写数据操作的方法返回前是否要等待MongoDB数据库内部使用的fsync操作
		// 		journal:true/false(default),指定在些数据操作的方法返回前是否等待ongoDB数据库内部使用的journal操作
		// 		safe:true/false(default),使用getLastError命令执行数据的存取操作,该命令返回存取操作的执行结果。
		// 	callback:回调函数,function(err,doc){}
		// 		err:错误对象 
		// 		doc:代表删除的数据文档,删除失败时为Null
			// var mongo = require("mongodb");
			// var host = "localhost";
			// var port = 27017;
			// var server = new mongo.Server(host,port,{auto_reconnect:true});
			// var db = new mongo.Db('node-mongo-test',server,{safe:true});
			// var docs = [
			// 	{type:'food',price:11},
			// 	{type:'food',price:10},
			// 	{type:'food',price:9},
			// 	{type:'food',price:8},
			// 	{type:'book',price:9}
			// ];
			// db.open(function(err,db){
			// 	db.collection('goods',function(err,collection){
			// 		collection.insert(docs,function(err,docs){
			// 			collection.findAndRemove({type:'food'},[['type',1],['price',-1]],function(err,doc){
			// 				console.log(doc);
			// 				db.close();
			// 			})
			// 		})
			// 	})
			// })
	
//使用Mongoose类库
	// Mongoose类库可以为Mongodb数据库制定一个开发环境,也可以在该开发环境中为MongoDB数据库中的数据操作制作一些数据架构
	// npm install mongoose
	// 使用Mongoose类库定义stores集合中的数据文档及goods子数据文档的数据架构
		// var mongoose = require("mongoose");
		// var Schema = mongoose.Schema;
		// mongoose.connect('mongodb://localhost:27017/node-mongo-test',function(err){
		// 	if(err){
		// 		console.log('连接数据库失败');
		// 	}
		// });
		// var goodsSchema = new Schema({type:String,price:Number});
		// var storeSchema = new Schema({name:String,goods:[goodsSchema]});
		// var store1 = {name:'store1',goods:[{type:'food',price:11}]};
		// var store2 = {name:'store2',goods:[{type:'food',price:10}]};
		// var store3 = {name:'store3',goods:[{type:'food',price:9}]};
		// var store4 = {name:'store4',goods:[{type:'food',price:8}]};
		// var store5 = {name:'store5',goods:[{type:'book',price:9}]};
		// var docs = [store1,store2,store3,store4,store5];
		// var Stores = mongoose.model('stores',storeSchema);
		// Stores.create(docs,function(err,docs){
		// 	if(err) console.log('save filed');
		// 	else{
		// 		Stores.find(function(err,docs){
		// 			if(err) console.log('find filed');
		// 			else{
		// 				console.log(docs);
		// 				mongoose.disconnect();
		// 			}
		// 		});
		// 	}
		// });