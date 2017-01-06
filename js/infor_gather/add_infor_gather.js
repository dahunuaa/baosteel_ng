/**
 * Created by Administrator on 2017/1/2.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http){

    $scope.gather_areas = {
        area01 : {value: "dongbei",text: "东北"},
        area02 : {value: "xinan", text: "西南"},
        area03 : {value: "zhonghaiyou", text: "中海油"},
        area04 : {value: "huabei", text: "华北"},
        area05 : {value: "huazhong", text: "华中"},
        area06 : {value: "huadong",text: "华东"},
        area07 : {value: "xinjiang", selected: "1", text: "新疆"}
    };

    $scope.inforgather = {};

    $scope.submit = function(){
        if ($scope.inforgather.title==""||$scope.inforgather.title==undefined||$scope.inforgather.title==null){
            dhx_alert("请填写标题！")
        }else if($scope.inforgather.address==""||$scope.inforgather.address==undefined||$scope.inforgather.address==null){
            dhx_alert("请填写地址！")
        }else if($scope.inforgather.area.text==""||$scope.inforgather.area.text==undefined||$scope.inforgather.area.text==null){
            dhx_alert("请选择油田区块！")
        }else if($scope.inforgather.oilfield==""||$scope.inforgather.oilfield==undefined||$scope.inforgather.oilfield==null){
            dhx_alert("请填写油田！")
        }else if($scope.inforgather.text==""||$scope.inforgather.text==undefined||$scope.inforgather.text==null){
            dhx_alert("请填写正文！")
        }else{
            $http({
                method:'post',
                url:basePath+"api/v1.0/inforgather",
                params:{
                    "access_token":localStorage.getItem("token"),
                    "gather_title":$scope.inforgather.title,
                    "gather_address":$scope.inforgather.address,
                    "gather_area":$scope.inforgather.area.text,
                    "gather_oilfield":$scope.inforgather.oilfield,
                    "gather_text":$scope.inforgather.text,
                }
            }).success(function(res){
                if(res.response.success==1){
                    dhx_alert("新建情报搜集!",function(){
                        window.location.href="inforgather_list.html"
                    })
                }else{
                    dhx_alert(res.response.return_code)
                }
            })
        }
    }
});
