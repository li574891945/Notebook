<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">gulp构建的项目的经验</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>总结一下gulp3 写的项目</p>
                            <p>gulp配置 demo <a href="https://gitee.com/linxiaomao/gulp-demo.git" target="_blank">https://gitee.com/linxiaomao/gulp-demo.git</a></p>
                            <p>第一个 官网 （为什么用gulp做官网 因为多页面对搜索引擎的友好）</p>
                            <p>
                                提一下gulp好用的组件 1 利用 gulp-file-include 模块复用直接 减少写相同代码 2 关于响应式布局 用gulp postcss-px2rem 转换 rem 3 gulp-babel js转换ES6 4 gulp-imagemin 图片压缩 等等
                            </p>
                            <p>第二个 管理系统</p>
                            <p>
                                使用到 layui框架（为什么用layui兼容人类正在使用的全部浏览器 （IE6/7除外） 这个就很舒服了）<br/>
                                代码地址   <a href="https://gitee.com/linxiaomao/background_template.git" target="_blank">https://gitee.com/linxiaomao/background_template.git</a><br/>
                                基本功能都有了 登录--列表--刷选--表单--图表
                                <img src="../assets/1555687029(1).jpg" alt="">
                                <img src="../assets/1555910027(1).jpg" alt="">
                            </p>
                        </div>
                        <div class="meta split split--responsive cf">
                            <div class="split__title">
                                <time datetime="2017-10-02 01:44">2019/01/02</time>
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
    import tops from '../components/tops.vue'
    import bottoms from '../components/bottoms.vue'
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            tops,
            bottoms,
        }
    }

</script>
