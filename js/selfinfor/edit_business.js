var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {

    init();

    function init(){
        if(localStorage.getItem("token") == undefined || localStorage.getItem("token") == null){
        }else{
            var url=window.location.href;
            if(url.split('?').length==2){
                var back=url.split('?')[1];
                $scope._id = back;
            }

            $http.get(basePath+"api/v1.0/business/"+$scope._id+"?"+"&access_token="+localStorage.getItem("token"))
                .success(function(res){
                    if(res.response.success == 1){
                        $scope.data = res.response.data;
                        $scope.src_bus_staff = res.response.data.business_staff;
                        $scope.src_bus_num = res.response.data.business_num;
                        $scope.src_bus_reason = res.response.data.business_reason;
                        $scope.src_bus_place = res.response.data.business_place;
                        $scope.src_start_time = res.response.data.begin_time;
                        $scope.src_end_time = res.response.data.end_time;
                        $scope.src_remark = res.response.data.remark;

                    }else{
                        dhx_alert(res.response.return_code)
                    }
                })
        }
    }
//返回
    $scope.back = function(){
        window.location.href = "self_business.html"
    };
//确认修改
    $scope.do_edit = function(){

        $http({
            method:'put',
            url:basePath+"api/v1.0/business/"+$scope._id,
            params:{"access_token":localStorage.getItem("token"),
                "business_staff":$scope.src_bus_staff,
                "business_num":$scope.src_bus_num,
                "business_reason":$scope.src_bus_reason,
                "business_place":$scope.src_bus_place,
                "begin_time":$scope.src_start_time,
                "end_time":$scope.src_end_time,
                "remark":$scope.src_remark}
        }).success(function(res){
            if(res.response.success == 1){
                dhx_alert("修改成功",function(){
                    window.location.href = "self_business.html"
                })

            }else{
                dhx_alert(res.response.return_code)
            }
        })
    }

});

