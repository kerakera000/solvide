<template>
    <header class="Newheader">
        <div class="Newheader__cnt">
            <div class="Newheader__cnt--box">
            <h1 class="Newheader__cnt--box--title">
                <router-link to="/" class="title-box">
                    <img src="../../assets/new-solvide-images/logo-images/logo.png" alt="">
                </router-link>
            </h1>
            <div class="Newheader__cnt--box--contact">
                <img src="../../assets/new-solvide-images/home-images/header-images/feather-mail.png" alt="">
                <p>お問い合わせ</p>
            </div>
            </div>
            <div class="New-nav-hover">
                <nav class="Newheader__cnt--nav">
                <router-link to="/" class="Newnav-list Nl1">私たちについて</router-link>
                <router-link to="/" class="Newnav-list Nl2">サービス内容</router-link>
                <router-link to="/" class="Newnav-list Nl3">ブログ</router-link>
                <router-link to="/" class="Newnav-list Nl4">お知らせ</router-link>
                <router-link to="/" class="Newnav-list Nl5">お問い合わせ</router-link>
                </nav>
                <button class="Newheader__cnt--button">
                    <div class="Newheader-spanbox">
                        <span class="span1"></span>
                        <span class="span2"></span>
                        <span class="span3"></span>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'NHeaderComp',
    }
</script>

<style lang="scss">

</style>