/**
 * Created by Administrator on 2017/1/3 0003.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    init();

    function init(){
        $scope.user_name = localStorage.getItem("name");
        $scope.user_mobile = localStorage.getItem("mobile");
        if(localStorage.getItem("scope")=="admin"){
            $scope.user_scope ="管理员"
        }else if(localStorage.getItem("scope")=="normal"){
            $scope.user_scope ="普通用户"
        }else if(localStorage.getItem("scope")=="backend"){
            $scope.user_scope ="后端用户"
        }
    }
});