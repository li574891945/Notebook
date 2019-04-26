<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">自己写的一套完整小程序商城 第一篇（小程序）</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口</p>
                            <p>下面介绍下小程序端的</p>
                            <p>代码地址 <a href="https://gitee.com/linxiaomao/gulp-demo.git" target="_blank">https://gitee.com/linxiaomao/sqdemo_applet.git</a></p>
                            <p>整体功能有 商品分类、商品列表、商品详情、支付、订单状态</p>
                            <div class="col-xs-4"><img src="../../assets/1555927488(1).jpg" alt=""></div>
                            <div class="col-xs-4"><img src="../../assets/1555927346(1).jpg" alt=""></div>
                            <div class="col-xs-4"><img src="../../assets/1555927346.png" alt=""></div>
                            <div class="col-xs-4"><img src="../../assets/1555927346.jpg" alt=""></div>
                            <p>
                                总结一下：有些代码没封装，所以勿喷，但整体下订单流程是通的，小程序也不难就不多说了。
                            </p>
                            <router-link to='/sqDemoTwo'><p>下一篇 自己写的一套完整小程序商城 第二篇 后台管理（前端部分）</p></router-link>
                        </div>
                        <div class="meta split split--responsive cf">
                            <div class="split__title">
                                2018/07/05
                                <!--<span class=""><a href="" rel="tag">主题</a><a href="" rel="tag">日常</a><a href="" rel="tag">更新</a> </span>-->
                            </div>
                            <!--<div id="social-share"><span class="entypo-share"><i class="iconfont"></i>分享</span></div>-->
                            <!--<div class="slide">-->
                            <!--<a class="btn-slide" title="switch down"><i class="iconfont"></i>折叠评论区</a>-->
                            <!--</div>-->
                        </div>
                    </section>
                </article>
            </div>
        </div>
        <bottoms></bottoms>
    </div>
</template>
<script>
    import tops from '../../components/tops.vue'
    import bottoms from '../../components/bottoms.vue'
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            tops,
            bottoms,
        }
    }

</script>
