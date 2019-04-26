<template>
    <div class="about">
        <tops></tops>
        <div id="main" class="content">
            <div class="container">
                <article id="post-1202" class="js-gallery post-1202 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-11 tag-22 tag-29">
                    <section class="post_content">
                        <header class="post_header">
                            <h1 class="post_title">关于前端嵌套页面在原生app（两端）方法</h1>
                        </header>
                        <div class="post-body js-gallery">
                            <p>
                                一、原生调用Vue方法 </p>
                            <p> 1、Vue<br>
                                created() {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//Vue的方法给原生调用，则需要把方法挂在Window下面<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.getDataFromNative = this.getDataFromNative;<br>
                                },<br>
                                methods: {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getDataFromNative(params) {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//params: 原生调用Vue时传值（params）给Vue<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("得到原生传值结果:" + params);<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var dic = {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'name': "vicky"<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dic; //回调给原生，可写可不写<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
                                }<br>
                            </p>
                            <p>
                                二、Vue 调用原生<br>
                                1、Vue<br>

                                //vue调用Android方法，且传值给Android （Android方法名为 getDataFormVue）<br>
                                $App.getDataFormVue({<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: this.money, //vue给android传值<br>
                                });<br>
                                //vue调用iOS方法，且传值给iOS （iOS 方法名为 getDataFormVue）<br>
                                window.webkit.messageHandlers.getDataFormVue.postMessage({<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: this.money, //vue给iOS传值<br>
                                });<br>
                            </p>
                            <p>
                                在开发中发现的问题：1、一般都是要在安卓跟ios所以要加上判断否则 其中一端会找不到该方法或者语法错误导致报错 所以要加上下面判断
                            </p>
                            <p>
                                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//苹果端<br>
                                } else if (/(Android)/i.test(navigator.userAgent)) {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//安卓端<br>
                                }
                            </p>
                            <p>
                                问题2、安卓跟ios可能会有缓存，会找不到方法，或者调不起方法。可以叫ios跟安卓清除缓存，或者吧方法名换一下（跟ios对接遇到过的问题，就是函数名没错，安卓端都能调起我的定义方法名，在ios端即使清除缓存，还是调不起，非得重新改个函数名就能调起）。
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
