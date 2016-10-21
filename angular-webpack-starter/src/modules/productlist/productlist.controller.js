/**
 * Created by Administrator on 2016/10/21.
 */
'use strict';

function productListController($scope,productService){
    $scope.list = [];
     productService.getProduct(function(data,status,headers,config){
        console.log(data);
         $scope.list = data;
    });
}

module.exports = productListController;