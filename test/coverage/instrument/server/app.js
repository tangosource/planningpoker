"use strict";
var __cov_nkohW09fYTqAL6Q9irNScA = (Function('return this'))();
if (!__cov_nkohW09fYTqAL6Q9irNScA.__coverage__) { __cov_nkohW09fYTqAL6Q9irNScA.__coverage__ = {}; }
__cov_nkohW09fYTqAL6Q9irNScA = __cov_nkohW09fYTqAL6Q9irNScA.__coverage__;
if (!(__cov_nkohW09fYTqAL6Q9irNScA['server/app.js'])) {
   __cov_nkohW09fYTqAL6Q9irNScA['server/app.js'] = {"path":"server/app.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":26,"loc":{"start":{"line":26,"column":38},"end":{"line":26,"column":50}}}},"statementMap":{"1":{"start":{"line":7,"column":0},"end":{"line":7,"column":61}},"2":{"start":{"line":9,"column":0},"end":{"line":9,"column":33}},"3":{"start":{"line":10,"column":0},"end":{"line":10,"column":46}},"4":{"start":{"line":13,"column":0},"end":{"line":13,"column":23}},"5":{"start":{"line":14,"column":0},"end":{"line":14,"column":47}},"6":{"start":{"line":16,"column":0},"end":{"line":19,"column":3}},"7":{"start":{"line":21,"column":0},"end":{"line":21,"column":39}},"8":{"start":{"line":22,"column":0},"end":{"line":22,"column":33}},"9":{"start":{"line":23,"column":0},"end":{"line":23,"column":25}},"10":{"start":{"line":26,"column":0},"end":{"line":28,"column":3}},"11":{"start":{"line":27,"column":2},"end":{"line":27,"column":89}},"12":{"start":{"line":31,"column":0},"end":{"line":31,"column":31}}},"branchMap":{"1":{"line":7,"type":"binary-expr","locations":[{"start":{"line":7,"column":23},"end":{"line":7,"column":43}},{"start":{"line":7,"column":47},"end":{"line":7,"column":60}}]},"2":{"line":17,"type":"cond-expr","locations":[{"start":{"line":17,"column":71},"end":{"line":17,"column":76}},{"start":{"line":17,"column":79},"end":{"line":17,"column":83}}]},"3":{"line":17,"type":"binary-expr","locations":[{"start":{"line":17,"column":16},"end":{"line":17,"column":43}},{"start":{"line":17,"column":47},"end":{"line":17,"column":67}}]}}};
}
__cov_nkohW09fYTqAL6Q9irNScA = __cov_nkohW09fYTqAL6Q9irNScA['server/app.js'];
__cov_nkohW09fYTqAL6Q9irNScA.s['1']++;process.env.NODE_ENV=(__cov_nkohW09fYTqAL6Q9irNScA.b['1'][0]++,process.env.NODE_ENV)||(__cov_nkohW09fYTqAL6Q9irNScA.b['1'][1]++,'development');__cov_nkohW09fYTqAL6Q9irNScA.s['2']++;var express=require('express');__cov_nkohW09fYTqAL6Q9irNScA.s['3']++;var config=require('./config/environment');__cov_nkohW09fYTqAL6Q9irNScA.s['4']++;var app=express();__cov_nkohW09fYTqAL6Q9irNScA.s['5']++;var server=require('http').createServer(app);__cov_nkohW09fYTqAL6Q9irNScA.s['6']++;var socketio=require('socket.io')(server,{serveClient:(__cov_nkohW09fYTqAL6Q9irNScA.b['3'][0]++,config.env!='development')&&(__cov_nkohW09fYTqAL6Q9irNScA.b['3'][1]++,config.env!='test')?(__cov_nkohW09fYTqAL6Q9irNScA.b['2'][0]++,false):(__cov_nkohW09fYTqAL6Q9irNScA.b['2'][1]++,true),path:'/socket.io-client'});__cov_nkohW09fYTqAL6Q9irNScA.s['7']++;require('./config/socketio')(socketio);__cov_nkohW09fYTqAL6Q9irNScA.s['8']++;require('./config/express')(app);__cov_nkohW09fYTqAL6Q9irNScA.s['9']++;require('./routes')(app);__cov_nkohW09fYTqAL6Q9irNScA.s['10']++;server.listen(config.port,config.ip,function(){__cov_nkohW09fYTqAL6Q9irNScA.f['1']++;__cov_nkohW09fYTqAL6Q9irNScA.s['11']++;console.log('Express server listening on %d, in %s mode',config.port,app.get('env'));});__cov_nkohW09fYTqAL6Q9irNScA.s['12']++;exports=module.exports=app;
