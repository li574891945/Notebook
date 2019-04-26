<template>
    <div class="container">
        <article itemscope="itemscope">
            <div class="posts-list js-posts">
                <div class="post post-layout-list" data-aos="fade-up">
                    <div class="status_list_item icon_kyubo">
                        <div class="status_user" :style = '{backgroundImage:" url("+imgUrl1+")"}' >
                            <div class="status_section" >
                                <router-link to='/center'>
                                    <a href="#" class="status_btn">关于前端嵌套页面在原生app（两端）方法</a>
                                    <p class="section_p">
                                        最近有个项目在原生APP里嵌套前端页面，下面我几说下和原生相互调取各自方法,和开封中遇到的问题..
                                    </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post post-layout-list" data-aos="fade-up">
                    <div class="status_list_item icon_kyubo">
                        <div class="status_user" :style = '{backgroundImage:" url("+imgUrl1+")"}' >
                            <div class="status_section" >
                                <router-link to='/about'>
                                <a href="#" class="status_btn">gulp构建的项目的经验</a>
                                <p class="section_p">
                                    分享一下个人 gulp构建的项目 官网、后台管理、
                                </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="post post-layout-list" data-aos="fade-up">-->
                    <!--<div class="postnormal review ">-->
                        <!--<div class="post-container review-item">-->
                            <!--<div class="row review-item-wrapper">-->
                                <!--<div class="col-sm-3">-->
                                    <!--<a rel="nofollow" href="detail.html">-->
                                        <!--<div class="review-item-img" style="background-image: url(statics/images/diego-ph-249471-2-800x1000.jpg);"></div>-->
                                    <!--</a>-->
                                <!--</div>-->
                                <!--<div class="col-sm-9 flex-xs-middle">-->
                                    <!--<div class="review-item-title">-->
                                        <!--<a href="detail.html" rel="bookmark">我才不会写年终总结之瞎说篇</a>-->
                                    <!--</div>-->
                                    <!--<div class="review-item-creator"><b>发布日期：</b>2017-12-30</div>-->
                                    <!--<span class="review-item-info"><b>总浏览量：</b>1203 reads</span>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="review-bg-wrapper">-->
                                <!--<div class="bg-blur" style="background-image: url(statics/images/diego-ph-249471-2-800x1000.jpg);"></div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="post-container">-->
                            <!--<div class="entry-content">确实讨厌去写所谓的年终总结，在公司已经被动的想领导上交一个总结，自己就懒得去总结，不然，我觉得脑子里应该会编写出八九不离十的内容，所以正经八儿的事情略了，瞎说一下。 年初的人事调动是个人最不能接受的事情，但不接受也得接受，老板一句“这是命令...</div>-->
                            <!--<div class="post-footer">-->
                                <!--<a class="gaz-btn primary" href="">READ MORE</a>-->
                                <!--<span class="total-comments-on-post pull-right"><a href="">31 Comments</a></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="post post-layout-list" data-aos="fade-up">-->
                    <!--<div class="status_list_item icon_kyubo">-->
                        <!--<div class="status_user" style="background-image: url(statics/images/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg);">-->
                            <!--<div class="status_section">-->
                                <!--<a href="detail.html" class="status_btn">状态</a>-->
                                <!--<p class="section_p">因为我这后半年飘忽不定的更新节奏，感觉真的对不住用户。最近才松下来能处理反馈的bug，顺便加快新主题 Dcras 的制作，农历年后或许能上线，准确时间，不敢说&#45;&#45; 为了感谢大家对 Yarn 的支持，Dcras 会以 获兑现码半价的承诺 给 Yarn ... </p>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="post post-layout-list js-gallery" data-aos="fade-up">
                    <div class="post-album">
                        <router-link to='/sqDemoOne'>
                        <div class="row content">
                            <div class="bg" style="background-image: url(statics/images/IMG_0150.jpg);"></div>
                            <div class="contentext flex-xs-middle">
                                <div class="album-title">
                                     自己写的一套完整小程序商城 第一篇（小程序）
                                </div>
                                <h5 class="review-item-creator"><b>发布日期：</b>2018-07-05</h5>
                                <div class="album-content">分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口</div>
                            </div>
                            <div class="album-thumb-width flex-xs-middle">
                                <div class="row album-thumb no-gutter">
                                    <div class="col-xs-4"><img class="thumb" src="../assets/1555927488(1).jpg" /></div>
                                    <div class="col-xs-4"><img class="thumb" src="../assets/1555927346(1).jpg" /></div>
                                    <div class="col-xs-4"><img class="thumb" src="../assets/1555927346.png" /></div>
                                    <div class="col-xs-4"><img class="thumb" src="../assets/1555927346.jpg" /></div>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="post post-layout-list" data-aos="fade-up">
                    <div class="status_list_item icon_kyubo">
                        <div class="status_user" :style = '{backgroundImage:" url("+imgUrl1+")"}' >
                            <div class="status_section" >
                                <router-link to='/sqDemoTwo'>
                                    <a href="#" class="status_btn">自己写的一套完整小程序商城 第二篇 后台管理（前端部分）</a>
                                    <p class="section_p">
                                        分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口
                                    </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post post-layout-list" data-aos="fade-up">
                    <div class="status_list_item icon_kyubo">
                        <div class="status_user" :style = '{backgroundImage:" url("+imgUrl1+")"}' >
                            <div class="status_section" >
                                <router-link to='/sqDemoThree'>
                                    <a href="#" class="status_btn">自己写的一套完整小程序商城 第三篇 后台管理（后台部分）</a>
                                    <p class="section_p">
                                        分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口
                                    </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post post-layout-list" data-aos="fade-up">
                    <div class="status_list_item icon_kyubo">
                        <div class="status_user" :style = '{backgroundImage:" url("+imgUrl1+")"}' >
                            <div class="status_section" >
                                <router-link to='/sqDemoFour'>
                                    <a href="#" class="status_btn">自己写的一套完整小程序商城 第四篇 小程序接口</a>
                                    <p class="section_p">
                                        分享一下自己写一整套商城到部署，我分开四篇 小程序、后台管理（前端部分）、后台管理（后台部分）、小程序接口
                                    </p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="post post-layout-list" data-aos="fade-up">-->
                    <!--<div class="postnormal review ">-->
                        <!--<div class="post-container review-item">-->
                            <!--<div class="row review-item-wrapper">-->
                                <!--<div class="col-sm-3">-->
                                    <!--<a rel="nofollow" href="detail.html">-->
                                        <!--<div class="review-item-img" style="background-image: url(statics/images/47fb3c_9afed6c259f94589881bd55376206366mv2_d_3840_5784_s_4_2-800x450.jpg);"></div>-->
                                    <!--</a>-->
                                <!--</div>-->
                                <!--<div class="col-sm-9 flex-xs-middle">-->
                                    <!--<div class="review-item-title">-->
                                        <!--<a href="detail.html" rel="bookmark">给大家介绍一下</a>-->
                                    <!--</div>-->
                                    <!--<div class="review-item-creator"><b>发布日期：</b>2017-10-02</div>-->
                                    <!--<span class="review-item-info"><b>总浏览量：</b>1600 reads</span>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="review-bg-wrapper">-->
                                <!--<div class="bg-blur" style="background-image: url(statics/images/47fb3c_9afed6c259f94589881bd55376206366mv2_d_3840_5784_s_4_2-800x450.jpg);"></div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="post-container">-->
                            <!--<div class="entry-content">现在的明星的影响力足以影响国内娱乐圈的"半壁江山"，发条微博，新浪都恐慌好几天，来来来，蹭个热点给大家介绍一下我的女朋友。</div>-->
                            <!--<div class="post-footer">-->
                                <!--<a class="gaz-btn primary" href="detail.html">READ MORE</a>-->
                                <!--<span class="total-comments-on-post pull-right"><a href="">30 Comments</a></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "book-list",
        data(){
            return {
                imgUrl1:require("../assets/b0ce3f3cde0c084b6d42321b2dcbc407.jpeg"),
                imgUrl2:require("../assets/diego-ph-249471-2-800x1000.jpg"),
            }
        },
    }
</script>

<style scoped>

</style>
