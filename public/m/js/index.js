// 轮播图滑动
$(function(){
    var letao = new Letao();
    letao.initSlide();
})

var Letao = function(){

}

Letao.prototype = {
    initSlide:function(){
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    }
}

mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0006, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});