/**
 * Created by Administrator on 2016/10/21.
 */
var angular = require('angular');
var uirouter = require('angular-ui-router');

var app = angular.module('hotshots',[uirouter]);

//路由配置
require('./config/router');

//各业务模块
require('./home');
require('./productlist');
