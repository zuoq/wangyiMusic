/**
 * Created by zuoq on 2015/10/26.
 */

require(["avalon","jquery"], function (avalon, $) {
    var vm = avalon.define({
        $id: "recommend",
        rm_recom: {
            title: "热门推荐",
            fl: ["话语","流行","摇滚","民谣","电子"]
        },
        rm_mv: [
            {"img_src": "img/recommend/rm_re/001.jpg", "num": "32万", "instruction": "晨梦初醒 心起涟漪"},
            {"img_src": "img/recommend/rm_re/002.jpg","num": "35万", "instruction": "戴上耳机 仿佛行走在异国他乡的街头"},
            {"img_src": "img/recommend/rm_re/003.jpg","num": "19717", "instruction": "苹果牛Gforce的摇滚世界"},
            {"img_src": "img/recommend/rm_re/004.jpg","num": "27309", "instruction": "永远的艾米"},
            {"img_src": "img/recommend/rm_re/005.jpg","num": "32502", "instruction": "Vol.75 - 精神伊甸 • 窒息残酷"},
            {"img_src": "img/recommend/rm_re/006.jpg","num": "7835", "instruction": "传奇谭 具官用贪"},
            {"img_src": "img/recommend/rm_re/007.jpg","num": "64万", "instruction": "我听欧美民谣的美好时光"},
            {"img_src": "img/recommend/rm_re/008.jpg","num": "1784", "instruction": "这才是中国民谣"}
        ],
        index_banner_item:[
            {"img_src": "img/recommend/index_banner_item/001.jpg", "name": "In the Lonely Hour", "author": "Sam Smith"},
            {"img_src": "img/recommend/index_banner_item/002.jpg", "name": "祝君好", "author": "陈洁仪"},
            {"img_src": "img/recommend/index_banner_item/003.jpg", "name": "WORLDWIDE", "author": "朴宰范"},
            {"img_src": "img/recommend/index_banner_item/004.jpg", "name": "Delirium", "author": "Ellie Goulding"},
            {"img_src": "img/recommend/index_banner_item/005.jpg", "name": "伊人如梦", "author": "霍尊"},
        ],
        bd_item: [
            {   "img_src": "img/recommend/bd/biaosb.jpg",
                "bd_title": "云音乐飙升榜",
                list:[
                    {list_num: 1, "list_name": "Bad Girl"},
                    {list_num: 2, "list_name": "相爱一场 (完整版)"},
                    {list_num: 3, "list_name": "我是你的Lover"},
                    {list_num: 4, "list_name": "时间的力量"},
                    {list_num: 5, "list_name": "Monody"},
                    {list_num: 6, "list_name": "时间煮雨"},
                    {list_num: 7, "list_name": "时间不会还给她"},
                    {list_num: 8, "list_name": "当我们"},
                    {list_num: 9, "list_name": "Lost (Extended)"},
                    {list_num: 10, "list_name": "爱的早餐"}
                ]
            },
            {
                "img_src": "img/recommend/bd/xinge.jpg",
                "bd_title": "云音乐新歌榜",
                list:[
                    {list_num: 1, "list_name": "Hello"},
                    {list_num: 2, "list_name": "一次就好"},
                    {list_num: 3, "list_name": "陪你度过漫长岁月"},
                    {list_num: 4, "list_name": "再见"},
                    {list_num: 5, "list_name": "Sorry"},
                    {list_num: 6, "list_name": "4 Walls"},
                    {list_num: 7, "list_name": "于是"},
                    {list_num: 8, "list_name": "失语者"},
                    {list_num: 9, "list_name": "Adventure Lifelime"},
                    {list_num: 10, "list_name": "一路逆风"}
                ]
            },
            {
                "img_src": "img/recommend/bd/yuanchuang.jpg",
                "bd_title": "云音乐热歌榜",
                list:[
                    {list_num: 1, "list_name": "鸢尾的呼唤"},
                    {list_num: 2, "list_name": "旧情人"},
                    {list_num: 3, "list_name": "伊萨贝拉"},
                    {list_num: 4, "list_name": "午夜歌手"},
                    {list_num: 5, "list_name": "早春的树"},
                    {list_num: 6, "list_name": "歇一歇"},
                    {list_num: 7, "list_name": "盲觉"},
                    {list_num: 8, "list_name": "匆匆"},
                    {list_num: 9, "list_name": "没有你"},
                    {list_num: 10, "list_name": "松果"},
                ]
            }

        ],
        rz_singer:[
            {"img_src": "img/recommend/right/001.jpg", "name":"张惠妹aMei","jieshao":"台湾歌手张惠妹"},
            {"img_src": "img/recommend/right/002.jpg", "name":"尚雯婕","jieshao":"原创点子创作人"},
            {"img_src": "img/recommend/right/003.jpg", "name":"羽泉","jieshao":"国内知名演唱组合"},
            {"img_src": "img/recommend/right/004.jpg", "name":"李志","jieshao":"个体音乐人李志"},
            {"img_src": "img/recommend/right/005.jpg", "name":"马頔麻油节","jieshao":"民谣音乐人"},
        ],
        dj_singer:[
            {"img_src": "img/recommend/right/01.jpg", "name":"灵伟 ","jieshao":"电台DJ、资深乐评人。"},
            {"img_src": "img/recommend/right/02.jpg", "name":"庞柯","jieshao":"深圳电台飞扬971主持人"},
            {"img_src": "img/recommend/right/03.jpg", "name":"林海","jieshao":"著名音乐节目主持人"},
            {"img_src": "img/recommend/right/04.jpg", "name":"阿鹏叔 ","jieshao":"桒惪SOUND创办人"},
            {"img_src": "img/recommend/right/05.jpg", "name":"DJ晓苏","jieshao":"独立DJ，CRI环球旅游广播特"},
        ],
    });
});
