/**
 * Created by Administrator on 2016/10/21.
 */
var angular = require('angular');

angular.module('hotshots').controller('productListController',require('./productlist.controller'));
angular.module('hotshots').service('productService',require('./productlist.service'));