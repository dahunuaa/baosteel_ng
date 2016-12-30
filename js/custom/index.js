/**
 * Created by Administrator on 2016/12/30 0030.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    init()
    function init(){
        $scope.login_name = localStorage.getItem("login_name");
        if(localStorage.getItem("token") == "undefined"||localStorage.getItem("token")==""){
            window.location.href = "login.html"
        }else{

        }
    }

})