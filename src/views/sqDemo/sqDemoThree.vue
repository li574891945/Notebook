<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">自己写的一套完整小程序商城 第三篇 后台管理（后台部分）</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口</p>
                            <p>下面介绍下 后台管理（后台部分）</p>
                            <p>使用框架 node + express + mongodb</p>
                            <p>代码地址 <a href="https://gitee.com/linxiaomao/sqDemo_server.git" target="_blank">https://gitee.com/linxiaomao/sqDemo_server.git</a></p>
                            <p>第一步 在mongodb创建一个数据库（xiaoqi）表名分别在下图</p>
                            <img src="../../assets/1555998647(1).jpg" alt="">
                            <p>项目文件分布</p>
                            <img src="../../assets/1555999150(1).jpg" alt="">
                            <p>
                                坑点一：上传的图片接收用到 multer 组件，声明 multer({ dest: 'upload/' }) 文件的路径
                            </p>
                            <p>
                                总结一下：善用 async await new Promise 减少回调地狱; mongodb 增删改查基本上会掌握了；
                            </p>
                            <router-link to='/sqDemoFour'><p>下一篇 自己写的一套完整小程序商城 第四篇 小程序接口</p></router-link>
                        </div>
                        <div class="meta split split--responsive cf">
                            <div class="split__title">
                                2018/07/07
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
