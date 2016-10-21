/**
 * Created by Administrator on 2016/10/21.
 */

function productService($http){
    var _this = this;
    _this.getProduct = function getProduct(callback){
        return $http({
            method:'GET',
            url:'http://localhost:8081/hotshots/product'
        }).success(callback);
    }
}

module.exports = productService;