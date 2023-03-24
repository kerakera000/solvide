<template>
    <header :class="{ 'header': true, 'active': isToggled }">
        <h1 class="header--title-sp"></h1>
        <nav :class="{ 'header__nav': true, 'active': isToggled }">
            <h1 class="header__nav--title" @click="gotop">Solvide</h1>
            <ul class="header__nav--list">
                <li class="header__nav--list--item" @click="goabout">
                    <a class="header__nav--list--item--text">
                        ABOUT
                    </a>
                </li>
                <li class="header__nav--list--item" @click="goservice">
                    <a class="header__nav--list--item--text">
                        SERVICE
                    </a>
                </li>
                <li class="header__nav--list--item" @click="goflow">
                    <a class="header__nav--list--item--text">
                        FLOW
                    </a>
                </li>
                <li class="header__nav--list--item" @click="goworks">
                    <a class="header__nav--list--item--text">
                        WORKS
                    </a>
                </li>
                <li class="header__nav--list--item" @click="goprofile">
                    <a class="header__nav--list--item--text">
                        PROFILE
                    </a>
                </li>
            </ul>
            <div class="header__nav--contact-box" >
                <a href="https://coconala.com/services/2725939?a8=9b0ndbI3qWfazXA4prfOfP_.KuSmKuzatrfAXSaVK3S4Zt0zg-fbg-0QhW7VBbg3qWo4740ZiWRzh5exxs00000012624009" class="header__nav--contact-box--text">
                    ご依頼はこちら
                    <!-- 色べた塗 -->
                </a>
            </div>
        </nav>
	</header>
    <div :class="{ 'header-navsp-cnt': true, 'active': isToggled }" @click="isToggled = !isToggled">
        <span class="span1"></span>
        <span class="span2"></span>
        <span class="span3"></span>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComp',
        data() {
            return {
                isToggled: false
            }
        },
        methods: {
            goservice() {
            const target = document.querySelector('#service');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            },
            goabout() {
            const target = document.querySelector('#about');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            },
            goflow() {
            const target = document.querySelector('#flow');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            },
            goprofile() {
            const target = document.querySelector('#profile');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            },
            goworks() {
            const target = document.querySelector('#works');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            },
            gotop(){
            const target = document.querySelector('#top');
            target.scrollIntoView({ behavior: 'smooth' });
            this.isToggled = false;
            }
        },
    }
</script>