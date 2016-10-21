/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';
var angular = require('angular');

angular.module('hotshots').config(function($stateProvider){

    var homeState = {
        name:'home',
        url:'/home',
        template:'<h3>home page</h3>'
    }
    var productlistRouter = {
        state:'productlist',
        config:{
            url:'/productlist',
            template: require('../productlist/productList.html'),
            controller: 'productListController'
        }
    }

    $stateProvider.state(homeState);
    $stateProvider.state(productlistRouter.state,productlistRouter.config);
});