/**
 * Created by Administrator on 2017/1/3 0003.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    init();

    function init(){
        $scope.user_name = localStorage.getItem("name");
        $scope.user_mobile = localStorage.getItem("login_name")
        $scope.user_scope = localStorage.getItem("user_scope")
    }
});