/**
 * Created by Administrator on 2017/1/2.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){

    $scope.business = {};
    $scope.to_back = function(){
        window.location.href="business_list.html"
    };
    $scope.submit = function(){
        if ($scope.business.staff==""||$scope.business.staff==undefined||$scope.business.staff==null){
            dhx_alert("请填写出差人员！")
        }else if($scope.business.place==""||$scope.business.place==undefined||$scope.business.place==null){
            dhx_alert("请填写出差地！")
        }else if($scope.business.reason==""||$scope.business.reason==undefined||$scope.business.reason==null){
            dhx_alert("请填写出差缘由！")
        }else if($scope.business.starttime==""||$scope.business.starttime==undefined||$scope.business.starttime==null){
            dhx_alert("请选择出差开始时间！")
        }else if($scope.business.endtime==""||$scope.business.endtime==undefined||$scope.business.endtime==null){
            dhx_alert("请选择出差结束时间！")
        }else{
            $http({
                method:'post',
                url:basePath+"api/v1.0/business",
                params:{
                    "access_token":localStorage.getItem("token"),
                    "business_staff":"['"+"dahu"+"']",
                    "business_place":$scope.business.place,
                    "business_reason":$scope.business.reason,
                    "begin_time":$scope.business.starttime,
                    "end_time":$scope.business.endtime,
                    "remark":$scope.business.remark
                }
            }).success(function(res){
                if(res.response.success==1){
                    dhx_alert("新建出差任务成功!",function(){
                        window.location.href="business_list.html"
                    })
                }else{
                    dhx_alert(res.response.return_code)
                }
            })
        }
    }
});
