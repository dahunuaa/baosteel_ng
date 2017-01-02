/**
 * Created by Administrator on 2016/12/30 0030.
 */
var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope,$http){
    var url =window.location.href;
    if(url.split('?').length==2){

    }else {
        init();
        var myTabbar;

        var mySidebar_1;
        var mySidebar_2;
        var mySidebar_3;
        var mySidebar_4;
        var mySidebar_5;
        var mySidebar_6;
        var mySidebar_7;

        function init() {
            $scope.login_name = localStorage.getItem("login_name");
            if (localStorage.getItem("token") == "undefined" || localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
                window.location.href = "login.html"
            } else {
                create();
            }

            function create() {
                //声明导航栏
                myTabbar = new dhtmlXTabBar({
                    parent: "tabbarObj",
                    tabs: [
                        {id: "placeholder", text: '', width: 160},
                        {id: "business", text: '出差信息',active:1, width: 160},
                        {id: "infor_gather", text: "情报搜集", width: 160},
                        {id: "infor_guide", text: "信息指南", width: 160},
                        {id: "self_infor", text: "个人中心", width: 160},
                        {id: "about_us", text: "关于我们", width: 160},
                        {id: "feedback", text: "意见反馈", width: 160},
                        {id: "notice", text: "通知公告", width: 160}
                    ]
                });
                //导航栏的分区

                mySidebar_1 = myTabbar.tabs("business").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/business.json",
                    onload: function () {
                        mySidebar_1.cells("business_list").attachURL("business/business_list.html");
                        mySidebar_1.cells("add_business").attachURL("business/add_business.html");
                    }
                });
                mySidebar_2 = myTabbar.tabs("infor_gather").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/infor_gather.json",
                    onload: function () {
                        mySidebar_2.cells("infor_gather_list").attachURL("infor_gather/inforgather_list.html");
                        mySidebar_2.cells("dongbei").attachURL("infor_gather/dongbei.html");
                        mySidebar_2.cells("xinan").attachURL("infor_gather/xinan.html");
                        mySidebar_2.cells("zhonghaiyou").attachURL("infor_gather/zhonghaiyou.html");
                        mySidebar_2.cells("huabei").attachURL("infor_gather/huabei.html");
                        mySidebar_2.cells("huazhong").attachURL("infor_gather/huazhong.html");
                        mySidebar_2.cells("huadong").attachURL("infor_gather/huadong.html");
                        mySidebar_2.cells("xinjiang").attachURL("infor_gather/xinjiang.html");
                        mySidebar_2.cells("xibei").attachURL("infor_gather/xibei.html");
                    }
                });
                mySidebar_3 = myTabbar.tabs("infor_guide").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/infor_guide.json",
                    onload: function () {
                        mySidebar_3.cells("infor_guide_list").attachURL("inforguide/infor_guide_list.html");
                    }
                });
                mySidebar_4 = myTabbar.tabs("self_infor").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/self_infor.json",
                    onload: function () {
                        mySidebar_4.cells("recent").attachURL("selfinfor/self_infor.html");
                    }
                });
                mySidebar_5 = myTabbar.tabs("about_us").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/about_us.json",
                    onload: function () {
                        mySidebar_5.cells("about_us").attachURL("about_us/web_user.html");
                    }
                });
                mySidebar_6 = myTabbar.tabs("feedback").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/feedback.json",
                    onload: function () {
                        mySidebar_6.cells("add_feedback").attachURL("feedback/web_user.html");
                    }
                });
                mySidebar_7 = myTabbar.tabs("notice").attachSidebar({
                    width: 160,
                    icons_path: "dhtmlxSuite/samples/dhtmlxSidebar/common/icons_material/",
                    json: "dhtmlxSuite/samples/dhtmlxSidebar/common/notice.json",
                    onload: function () {
                        mySidebar_7.cells("notice_list").attachURL("notice/web_user.html");
                    }
                });
            }
        }
    }
    $scope.login_out = function(){
        setCookie("token","");
        window.location.href="login.html"
    }

})