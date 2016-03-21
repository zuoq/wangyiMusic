/**
 * Created by zuoq on 2015/10/21.
 */
//require(["avalon","jquery","shCore","carousel"], function (avalon, $) {
//    var vm = avalon.define({
//        $id: "banner",
//        $opt1: {
//            pictures: [{
//                src: "http://7xkm02.com1.z0.glb.clouddn.com/f1.jpeg"
//            }, {
//                src: "http://7xkm02.com1.z0.glb.clouddn.com/f2.jpeg"
//            }, {
//                src: "http://7xkm02.com1.z0.glb.clouddn.com/f3.jpeg"
//            }],
//            pictureWidth: 800,
//            pictureHeight: 200,
//            effect: "fade"
//        }
//    });
//    avalon.scan();
//    return vm;
//});

require(["../carousel/avalon.carousel.js"], function() {
    avalon.define("banner", function(vm) {
        vm.$opt1 = {
            pictures: [{
                src: "img/banner/001.jpg"
            }, {
                src: "img/banner/002.jpg"
            }, {
                src: "img/banner/003.jpg"
            },{
                src: "img/banner/004.jpg"
            },{
                src: "img/banner/005.jpg"
            },{
                src: "img/banner/006.jpg"
            },{
                src: "img/banner/007.jpg"
            },{
                src: "img/banner/008.jpg"
            }],


            pictureWidth: 730,
            pictureHeight: 336,
            effect: "fade"
        }
    });
    avalon.scan();
});