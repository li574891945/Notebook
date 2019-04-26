<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">自己写的一套完整小程序商城 第二篇 后台管理（前端部分）</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口</p>
                            <p>下面介绍下 后台管理（前端部分）</p>
                            <p>使用框架 vue + element-ui</p>
                            <p>代码地址 <a href="https://gitee.com/linxiaomao/sqDemo_cms.git" target="_blank">https://gitee.com/linxiaomao/sqDemo_cms.git</a></p>
                            <img src="../../assets/1555930471(1).jpg" alt="">
                            <p>
                                坑点一：图片上传 请求头需要加上 'Content-Type': 'multipart/form-data'
                            </p>
                            <p>
                                坑点二：在element里图片是单独上传的所以要想跟表单一起提交 需要新建一个表单 new FormData(); 然后上传图片提交的值 是 raw这个对象值
                            </p>
                            <img src="../../assets/1555938795(1).jpg" alt="">
                            <img src="../../assets/1555930411(1).jpg" alt="">
                            <img src="../../assets/1555930422(1).jpg" alt="">
                            <p>
                                总结一下：element-ui这个框架组件还可以在根据个人需求再封装一下，比如表格和分页组成一起
                            </p>
                            <router-link to='/sqDemoThree'><p>下一篇 自己写的一套完整小程序商城 第三篇 后台管理（后台部分）</p></router-link>
                        </div>
                        <div class="meta split split--responsive cf">
                            <div class="split__title">
                                2018/07/06
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
