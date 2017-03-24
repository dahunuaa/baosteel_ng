var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {

    var get_url  ="api/v1.0/like/list?";
    var detail_url = "detail_infor_guide.html?";


    var myGrid;// 声明表格
    init();//初始化

    var get_data = new Array();


    function init(){
        if(localStorage.getItem("token") == undefined ||localStorage.getItem("token") == null){
            window.location.href = "../../../../mui workspace/miniui/login.html"
        }else{
            //建页
            myGrid = new dhtmlXGridObject('gridbox');
            myGrid.setImagePath("../dhtmlxSuite/sources/dhtmlxGrid/codebase/imgs/");//表格图标路径
            myGrid.setHeader("编辑人,标题,类别,添加时间,最后编辑时间,详情");//设置表头
            myGrid.setInitWidths("130,200,100,200,200,65");//设置表格初始宽度
            myGrid.setColAlign("left,left,left,left,left,left");//数据显示位置
            myGrid.setColTypes("ro,ro,ro,ro,ro,ro");//数据呈现类型
            myGrid.enableAutoWidth(true);
            myGrid.init();

            myGridjiazai();//加载数据
        }
    }

    function myGridjiazai(){
        $http.get(basePath+get_url+"access_token="+localStorage.getItem("token")+"&user_id="+localStorage.getItem("mobile"))
            .success(function(res){
                if(res.response.success == 1){
                    $scope.location_data = res.response.data.guide_like_detail;

                    //添加数据
                    get_data = $scope.location_data;
                    var str;
                    for(var i=0; i < get_data.length;i++){
                        str = get_data[i]._id;
                        get_data[i].index = i+1;
                        myGrid.addRow(str,[
                            get_data[i].add_user_name,
                            get_data[i].guide_title,
                            get_data[i].guide_type,
                            get_data[i].add_time,
                            get_data[i].last_updated_time,
                            "<span style='margin: 0;padding: 0;font-size: 30px' class='icon-ios-eye' id='detail' ></span>",
                        ],i);
                    }

                }else{
                    dhx_alert(res.response.return_code);
                }
            })
    }
    //点击查看详情
    $("table").on('click','#detail',function(){//$scope.this_row_id为当前行的_id
        if($scope.this_row_id==undefined){
            dhx_alert("未选中记录！")
        }else {
            window.location.href=detail_url+$scope.this_row_id//页面间传值直接在window.location.href后面加上就行
        }
    });

    //选中任何row列表
    myGrid._doClick=function(ev){
        var selMethod = 0;
        var el = this.getFirstParentOfType(_isIE ? ev.srcElement : ev.target, "TD");
        $scope.this_row_id = el.parentNode.idd;


        if (!el || !el.parentNode || !el.parentNode.idd) return;
        var fl = true;

        //markers start
        if (this.markedCells){
            var markMethod = 0;

            if (ev.shiftKey||ev.metaKey){
                markMethod=1;
            }

            if (ev.ctrlKey){
                markMethod=2;
            }
            this.doMark(el, markMethod);
            return true;
        }
        if (this.selMultiRows != false){
            if (ev.shiftKey && this.row != null && this.selectedRows.length){
                selMethod=1;
            }

            if (ev.ctrlKey||ev.metaKey){
                selMethod=2;
            }
        }
        return this.doClick(el, fl, selMethod, false)
    };

});