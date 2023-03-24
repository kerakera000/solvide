<template>
    <footer class="footer">
        <div class="footer__title" @click="gotop">
            <img class="footer__title--img" src="../../assets/images/footer-img/footer-logo.png" alt="">
        </div>
        <div class="footer__nav">
            <div class="footer__nav--text-box" @click="goabout">
                <p class="footer__nav--text-box--text">ABOUT</p>
            </div>
            <div class="footer__nav--text-box" @click="goservice">
                <p class="footer__nav--text-box--text">SERVICE</p>
            </div>
            <div class="footer__nav--text-box" @click="goflow">
                <p class="footer__nav--text-box--text">FLOW</p>
            </div>
            <div class="footer__nav--text-box" @click="goworks">
                <p class="footer__nav--text-box--text">WORKS</p>
            </div>
            <div class="footer__nav--text-box" @click="goprofile">
                <p class="footer__nav--text-box--text">PROFILE</p>
            </div>
            <a href="https://coconala.com/services/2725939?a8=9b0ndbI3qWfazXA4prfOfP_.KuSmKuzatrfAXSaVK3S4Zt0zg-fbg-0QhW7VBbg3qWo4740ZiWRzh5exxs00000012624009" class="footer__nav--text-box center-text">
                <p class="footer__nav--text-box--text">CONTACT</p>
            </a>
        </div>
        <div class="footer__sns">
            <div class="footer__sns--insta">
                <img class="footer__sns--insta--img" src="../../assets/images/footer-img/footer-insta.png" alt="">
            </div>
            <div class="footer__sns--twitter">
                <img class="footer__sns--twitter--img" src="../../assets/images/footer-img/footer-twitter.png" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComp',
        methods: {
            goservice() {
            const target = document.querySelector('#service');
            target.scrollIntoView({ behavior: 'smooth' });
            },
            goabout() {
            const target = document.querySelector('#about');
            target.scrollIntoView({ behavior: 'smooth' });
            },
            goflow() {
            const target = document.querySelector('#flow');
            target.scrollIntoView({ behavior: 'smooth' });
            },
            goprofile() {
            const target = document.querySelector('#profile');
            target.scrollIntoView({ behavior: 'smooth' });
            },
            goworks() {
            const target = document.querySelector('#works');
            target.scrollIntoView({ behavior: 'smooth' });
            },
            gotop(){
            const target = document.querySelector('#top');
            target.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
</script>