"use strict";
var __cov_H6CATK6A_xuhMIrYPYEeiQ = (Function('return this'))();
if (!__cov_H6CATK6A_xuhMIrYPYEeiQ.__coverage__) { __cov_H6CATK6A_xuhMIrYPYEeiQ.__coverage__ = {}; }
__cov_H6CATK6A_xuhMIrYPYEeiQ = __cov_H6CATK6A_xuhMIrYPYEeiQ.__coverage__;
if (!(__cov_H6CATK6A_xuhMIrYPYEeiQ['server/config/express.js'])) {
   __cov_H6CATK6A_xuhMIrYPYEeiQ['server/config/express.js'] = {"path":"server/config/express.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":18,"loc":{"start":{"line":18,"column":17},"end":{"line":18,"column":31}}}},"statementMap":{"1":{"start":{"line":7,"column":0},"end":{"line":7,"column":40}},"2":{"start":{"line":8,"column":0},"end":{"line":8,"column":46}},"3":{"start":{"line":9,"column":0},"end":{"line":9,"column":39}},"4":{"start":{"line":10,"column":0},"end":{"line":10,"column":44}},"5":{"start":{"line":11,"column":0},"end":{"line":11,"column":44}},"6":{"start":{"line":12,"column":0},"end":{"line":12,"column":48}},"7":{"start":{"line":13,"column":0},"end":{"line":13,"column":46}},"8":{"start":{"line":14,"column":0},"end":{"line":14,"column":45}},"9":{"start":{"line":15,"column":0},"end":{"line":15,"column":37}},"10":{"start":{"line":16,"column":0},"end":{"line":16,"column":46}},"11":{"start":{"line":18,"column":0},"end":{"line":49,"column":2}},"12":{"start":{"line":19,"column":2},"end":{"line":19,"column":27}},"13":{"start":{"line":21,"column":2},"end":{"line":21,"column":53}},"14":{"start":{"line":22,"column":2},"end":{"line":22,"column":61}},"15":{"start":{"line":24,"column":2},"end":{"line":24,"column":33}},"16":{"start":{"line":25,"column":2},"end":{"line":25,"column":45}},"17":{"start":{"line":27,"column":2},"end":{"line":27,"column":25}},"18":{"start":{"line":28,"column":2},"end":{"line":28,"column":54}},"19":{"start":{"line":29,"column":2},"end":{"line":29,"column":29}},"20":{"start":{"line":30,"column":2},"end":{"line":30,"column":28}},"21":{"start":{"line":31,"column":2},"end":{"line":31,"column":26}},"22":{"start":{"line":33,"column":2},"end":{"line":39,"column":3}},"23":{"start":{"line":34,"column":4},"end":{"line":34,"column":57}},"24":{"start":{"line":35,"column":4},"end":{"line":35,"column":70}},"25":{"start":{"line":36,"column":4},"end":{"line":36,"column":62}},"26":{"start":{"line":37,"column":4},"end":{"line":37,"column":48}},"27":{"start":{"line":38,"column":4},"end":{"line":38,"column":27}},"28":{"start":{"line":41,"column":2},"end":{"line":48,"column":3}},"29":{"start":{"line":42,"column":4},"end":{"line":42,"column":45}},"30":{"start":{"line":43,"column":4},"end":{"line":43,"column":60}},"31":{"start":{"line":44,"column":4},"end":{"line":44,"column":62}},"32":{"start":{"line":45,"column":4},"end":{"line":45,"column":33}},"33":{"start":{"line":46,"column":4},"end":{"line":46,"column":27}},"34":{"start":{"line":47,"column":4},"end":{"line":47,"column":28}}},"branchMap":{"1":{"line":33,"type":"if","locations":[{"start":{"line":33,"column":2},"end":{"line":33,"column":2}},{"start":{"line":33,"column":2},"end":{"line":33,"column":2}}]},"2":{"line":33,"type":"binary-expr","locations":[{"start":{"line":33,"column":6},"end":{"line":33,"column":26}},{"start":{"line":33,"column":30},"end":{"line":33,"column":47}}]},"3":{"line":41,"type":"if","locations":[{"start":{"line":41,"column":2},"end":{"line":41,"column":2}},{"start":{"line":41,"column":2},"end":{"line":41,"column":2}}]},"4":{"line":41,"type":"binary-expr","locations":[{"start":{"line":41,"column":6},"end":{"line":41,"column":27}},{"start":{"line":41,"column":31},"end":{"line":41,"column":45}}]}}};
}
__cov_H6CATK6A_xuhMIrYPYEeiQ = __cov_H6CATK6A_xuhMIrYPYEeiQ['server/config/express.js'];
__cov_H6CATK6A_xuhMIrYPYEeiQ.s['1']++;var express=require('express');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['2']++;var favicon=require('serve-favicon');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['3']++;var morgan=require('morgan');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['4']++;var compression=require('compression');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['5']++;var bodyParser=require('body-parser');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['6']++;var methodOverride=require('method-override');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['7']++;var cookieParser=require('cookie-parser');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['8']++;var errorHandler=require('errorhandler');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['9']++;var path=require('path');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['10']++;var config=require('./environment');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['11']++;module.exports=function(app){__cov_H6CATK6A_xuhMIrYPYEeiQ.f['1']++;__cov_H6CATK6A_xuhMIrYPYEeiQ.s['12']++;var env=app.get('env');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['13']++;app.locals.FACEBOOK_APP_ID=config.FACEBOOK_APP_ID;__cov_H6CATK6A_xuhMIrYPYEeiQ.s['14']++;app.locals.GOOGLE_ANALYTICS_ID=config.GOOGLE_ANALYTICS_ID;__cov_H6CATK6A_xuhMIrYPYEeiQ.s['15']++;app.set('view engine','jade');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['16']++;app.set('views',config.root+'/client/');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['17']++;app.use(compression());__cov_H6CATK6A_xuhMIrYPYEeiQ.s['18']++;app.use(bodyParser.urlencoded({extended:false}));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['19']++;app.use(bodyParser.json());__cov_H6CATK6A_xuhMIrYPYEeiQ.s['20']++;app.use(methodOverride());__cov_H6CATK6A_xuhMIrYPYEeiQ.s['21']++;app.use(cookieParser());__cov_H6CATK6A_xuhMIrYPYEeiQ.s['22']++;if((__cov_H6CATK6A_xuhMIrYPYEeiQ.b['2'][0]++,'production'===env)||(__cov_H6CATK6A_xuhMIrYPYEeiQ.b['2'][1]++,'staging'===env)){__cov_H6CATK6A_xuhMIrYPYEeiQ.b['1'][0]++;__cov_H6CATK6A_xuhMIrYPYEeiQ.s['23']++;app.set('views',path.join(config.root+'/public'));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['24']++;app.use(favicon(path.join(config.root,'public','favicon.ico')));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['25']++;app.use(express.static(path.join(config.root,'public')));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['26']++;app.set('appPath',config.root+'/public');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['27']++;app.use(morgan('dev'));}else{__cov_H6CATK6A_xuhMIrYPYEeiQ.b['1'][1]++;}__cov_H6CATK6A_xuhMIrYPYEeiQ.s['28']++;if((__cov_H6CATK6A_xuhMIrYPYEeiQ.b['4'][0]++,'development'===env)||(__cov_H6CATK6A_xuhMIrYPYEeiQ.b['4'][1]++,'test'===env)){__cov_H6CATK6A_xuhMIrYPYEeiQ.b['3'][0]++;__cov_H6CATK6A_xuhMIrYPYEeiQ.s['29']++;app.use(require('connect-livereload')());__cov_H6CATK6A_xuhMIrYPYEeiQ.s['30']++;app.use(express.static(path.join(config.root,'.tmp')));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['31']++;app.use(express.static(path.join(config.root,'client')));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['32']++;app.set('appPath','client');__cov_H6CATK6A_xuhMIrYPYEeiQ.s['33']++;app.use(morgan('dev'));__cov_H6CATK6A_xuhMIrYPYEeiQ.s['34']++;app.use(errorHandler());}else{__cov_H6CATK6A_xuhMIrYPYEeiQ.b['3'][1]++;}};
