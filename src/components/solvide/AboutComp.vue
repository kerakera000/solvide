<template>
    <div id="about"></div>
    <section class="about">
        <div id="Aboutscroll1" class="about__img-box target">
            <div class="about__img-box--light">
                <img class="about__img-box--light--img" src="../../assets/images/about-img/about-light.png" alt="">
            </div>
            <div class="about__img-box--light-back">
                <img class="about__img-box--light-back--img" src="../../assets/images/about-img/about-light-back.png" alt="">
            </div>
        </div>
        <div id="Aboutscroll2" class="about__text-box target">
            <h2 class="about__text-box--title">「わかりやすさ」と「デザイン」で<br> お客様目線に立ったものをつくる</h2>
            <p class="about__text-box--text">デザインはアートではなく、問題を解決するためのものです。<br class="pcbr"> 私たちが無意識に見ている広告や商品も製作者の”意図”があります。<br class="pcbr"> 例えば、「こうしたら使いやすい」「こういう印象を与えたい」など。<br class="pcbr"><br class="spbr">会社やサービスの顔となるホームページにもお客様に伝えるための<br class="pcbr">意図を散りばめて見た目だけじゃないサイトをつくりあげます。</p>
            <a href="https://coconala.com/services/2725939?a8=9b0ndbI3qWfazXA4prfOfP_.KuSmKuzatrfAXSaVK3S4Zt0zg-fbg-0QhW7VBbg3qWo4740ZiWRzh5exxs00000012624009">
                <button class="about__text-box--button">
                    ご依頼はこちら
                    <img class="about__text-box--button--img" src="" alt="">
                </button>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
    name: 'AboutComp',
    mounted(){
        window.addEventListener('scroll', function() {
            console.log('スクロール位置: ' + window.scrollY);
        });
        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener('scroll', function(){
                const Aboutelement1 = document.getElementById('Aboutscroll1');
                const Aboutelement2 = document.getElementById('Aboutscroll2');
                if (Aboutelement1) {
                    setTimeout(() => {
                    if (400 < window.scrollY ) {
                        Aboutelement1.classList.add('view');
                    } else {
                        Aboutelement1.classList.remove('view');
                    }
                    }, 100);
                }
                if (Aboutelement2) {
                    setTimeout(() => {
                    if (400 < window.scrollY ) {
                        Aboutelement2.classList.add('view');
                    } else {
                        Aboutelement2.classList.remove('view');
                    }
                    }, 400);
                }
            });
        });
    }
    }
</script>

<style lang="scss">
</style>