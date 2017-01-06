/**
 * Created by Administrator on 2017/1/6 0006.
 */
var app =angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){
    var url=window.location.href;
    if(url.split('?').length==2){
        var back=url.split('?')[1];
        $scope._id = back;

    }
    init();

    function init(){
        if(localStorage.getItem("token") == undefined||localStorage.getItem("token")==null){
            window.localStorage.href = "../login.html"
        }else {
            $http.get(basePath+"api/v1.0/inforgather/"+$scope._id+"?access_token="+localStorage.getItem("token"))
                .success(function(res){
                    if(res.response.success ==1){
                        $scope.data = res.response.data
                        $scope.img1 = res.response.data.images[0]
                        $scope.img2 = res.response.data.images[1]
                        $scope.img3 = res.response.data.images[2]
                    }else {
                        dhx_alert(res.response.return_code)
                    }
                })
        }
    }
})