<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">自己写的一套完整小程序商城 第四篇 小程序接口</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口</p>
                            <p>下面介绍下 小程序接口</p>
                            <p>使用框架 node + express + mongodb</p>
                            <p>代码地址 <a href="https://gitee.com/linxiaomao/sqDemo_api.git" target="_blank">https://gitee.com/linxiaomao/sqDemo_api.git</a></p>
                            <p>数据库用上篇的数据库（xiaoqi） </p>
                            <p>这篇说下微信小程序支付的问题吧！下面是支付流程的代码，最终返回客户端需要的参数</p>
                            <img src="../../assets/1556003598(1).png" alt="">
                            <img src="../../assets/1556003637(1).jpg" alt="">
                            <img src="../../assets/1556003650(1).jpg" alt="">
                            <p>以上就已经生成客户端需要的参数,传回给客户端，客户端只要支付成功后，微信会调起当初提交的回调接口，下面是接受到微信的回调代码</p>
                            <img src="../../assets/1556004295(1).jpg" alt="">
                            <p> 总结一下：第一次写支付，某些地方还可以吧代码改下，变的更精简，在服务器部署后支付流程整体是成功的;
                                通过这个项目，还有很多未完善的事情，比如加密信息，数据库表关联、查询等等，不过总体对后台有个很好认知。
                            </p>
                        </div>
                        <div class="meta split split--responsive cf">
                            <div class="split__title">
                                2018/07/08
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
