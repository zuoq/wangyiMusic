/**
 * Created by zuoq on 2015/10/16.
 */
require.config({
    baseUrl: "js",
    paths: {
        avalon: "avalon",
        require: "require",
        jquery: "jquery",
        domReady: "domReady",
        ready: "ready",
        carousel: "tools/carousel/avalon.carousel",
        shCore: "tools/highlight/shCore"

    }
});

require([
    "require",
    "avalon",
    "jquery",
    "domReady",
    "ready",
    "carousel",
    "shCore"
], function (require, avalon) {
    require([
        "vms/topWrap",
        "vms/find",
        "vms/banner",
        "vms/recommend",
    ]);
});