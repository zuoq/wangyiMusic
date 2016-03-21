/**
 * Created by zuoq on 2015/10/18.
 */

require(["avalon","jquery"], function (avalon, $) {
    var vm = avalon.define({
        $id: "find",
        find_item: [
            {item: "推荐", html_src: "tpl/findlist/recommend.html"},
            {item: "排行榜", html_src: "tpl/findlist/rankinglist.html"},
            {item: "歌单", html_src: "tpl/findlist/songlist.html"},
            {item: "主播电台", html_src: "tpl/findlist/radio.html"},
            {item: "歌手", html_src: "tpl/findlist/singer.html"},
            {item: "新碟上架", html_src: "tpl/findlist/newsongs.html"},
        ],
        html_template: "tpl/findlist/recommend.html",
        change: function() {
            var src = $(this).attr("src");
            vm.html_template = src;
            var _this = $(this);
            _this.addClass("active").siblings().removeClass("active");
        },
        render: function() {
            //console.log(vm.html_template);
            var firstA = $(".find-item>a").eq(0);

            if(vm.html_template==="tpl/findlist/recommend.html") {
                firstA.addClass("active");
            }
            //console.log(firstA);
        }

    });
    avalon.scan();
    return vm;
});