/**
 * Created by zuoq on 2015/10/18.
 */

require(["avalon","jquery"], function (avalon, $) {
    var vm = avalon.define({
        $id: "main",
        nav_item: [
            {nav:"发现音乐",html_src: "tpl/find.html"},
            {nav:"我的音乐",html_src: "tpl/mymusic.html"},
            {nav:"朋友",html_src: "tpl/friends.html"},
            {nav:"下载客户端",html_src: "tpl/download.html"}
        ],
        html_template: "tpl/find.html",
        click: function() {
            console.log(vm.nav_item);
            var _this = $(this);
            var src = _this.attr("src");
            setTimeout(function () {
                _this.addClass("click").siblings().removeClass("click");
                var oI = _this.children("i");
                oI.addClass("show-bg").parent().siblings().children("i").removeClass("show-bg");
                vm.html_template = src;
            },400);

            var vmFindTemplate = avalon.vmodels["find"];
            //console.log(vmFindTemplate)
            //console.log(vmFindTemplate.html_template);
            vm.$watch("html_template", function(newTem, oldTem) {
                //newTem = "tpl/findlist/recommend.html";
                vmFindTemplate.html_template = "tpl/findlist/recommend.html";

            });
            //console.log(vmFindTemplate);
            //if(vmFindTemplate !== "tpl/findlist/recommend.html") {
            //    vmFindTemplate = "tpl/findlist/recommend.html";
            //}
            //console.log(vmFindTemplate);
            //console.log(vmFindTemplate == avalon.vmodels["find"].html_template)
            //console.log(avalon.vmodels["find"]);

        },
        render: function() {
            var firstI = $(".nav").find("i").eq(0);
            //console.log(firstI);
            if(vm.html_template==="tpl/find.html") {
                firstI.addClass("show-bg");
            }


        }
    });

    avalon.scan();

    //alert(444);
    return vm;
});