<template>
    <footer class="Nfooter">
        <div class="Nfooter__cnt">
            <div class="Nfooter__cnt--logo-box">
                <div class="Nfooter-logo">
                    <div class="Nfooter-logo--img">
                        <img src="../../assets/new-solvide-images/logo-images/logo.png" alt="">
                    </div>
                </div>
                <div class="Nfooter-sns">
                    <div class="Nfooter-sns--box">
                        <img src="../../assets/images/footer-img/footer-twitter.png" alt="">
                    </div>
                    <div class="Nfooter-sns--box">
                        <img src="../../assets/images/footer-img/footer-insta.png" alt="">
                    </div>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text">
                    <h3>私たちについて</h3>
                    <p>― 方針</p>
                    <p>― プロフィール</p>
                </div>
                <div class="Nfooter-text">
                    <h3>サービス内容</h3>
                    <p>― Web制作</p>
                    <p>― リニューアル</p>
                    <p>― サイト保守／運用</p>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text">
                    <h3>ブログ</h3>
                </div>
                <div class="Nfooter-text">
                    <h3>お知らせ</h3>
                </div>
            </div>
            <div class="Nfooter__cnt--col">
                <div class="Nfooter-text col-row">
                    <h3>お問い合わせ</h3>
                    <h3>プライバシーポリシー</h3>
                </div>
            </div>
            <div class="Nfooter__cnt--gotop ">
                <button @click="NewFootergotop"></button>
            </div>
        </div>
        <div class="Nfooter__inc">
            <p>2023 SOLVIDE.imc</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'NFooterComp',
        methods: {
            NewFootergotop(){
            const target = document.querySelector('#Newtop');
            target.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
</script>

<style lang="scss">

</style>