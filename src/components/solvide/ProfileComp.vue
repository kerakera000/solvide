<template>
    <section class="profile">
        <div class="profile__title">
            <div class="title">
                <h2 class="title__main-text">プロフィール</h2>
                <div class="title__line"></div>
                <p class="title__sub-text">Profile</p>
            </div>
        </div>
        <div class="profile__cnt">
            <div class="profile__cnt--img-box-left">
                <img class="profile__cnt--img-box-left--img" src="../../assets/images/profile-img/profile-left.png" alt="">
            </div>
            <div class="profile__cnt--img-box-right">
                <img class="profile__cnt--img-box-right--img" src="../../assets/images/profile-img/profile-right.png" alt="">
            </div>
            <div class="profile__cnt--box">
                <div class="profile-row">
                    <div class="profile-row--title">
                        <h3 class="profile-row--title--text">グループ名</h3>
                    </div>
                    <div class="profile-row--text-box">
                        <p class="profile-row--text-box--text">Solvide制作グループ</p>
                    </div>
                </div>
                <div class="profile__cnt--box--text"></div>
                <div class="profile-row">
                    <div class="profile-row--title">
                        <h3 class="profile-row--title--text">設立</h3>
                    </div>
                    <div class="profile-row--text-box">
                        <p class="profile-row--text-box--text">2022年8月1日</p>
                    </div>
                </div>
                <div class="profile__cnt--box--text"></div>
                <div class="profile-row">
                    <div class="profile-row--title">
                        <h3 class="profile-row--title--text">代表</h3>
                    </div>
                    <div class="profile-row--text-box">
                        <p class="profile-row--text-box--text">吉澤 紫魔</p>
                    </div>
                </div>
                <div class="profile__cnt--box--text"></div>
                <div class="profile-row">
                    <div class="profile-row--title">
                        <h3 class="profile-row--title--text">従業員</h3>
                    </div>
                    <div class="profile-row--text-box">
                        <p class="profile-row--text-box--text">2人</p>
                    </div>
                </div>
                <div class="profile__cnt--box--text"></div>
                <div class="profile-row">
                    <div class="profile-row--title">
                        <h3 class="profile-row--title--text">お問い合わせ</h3>
                    </div>
                    <div class="profile-row--text-box">
                        <p class="profile-row--text-box--text">Solvideココナラ</p>
                    </div>
                </div>
                <div class="profile__cnt--box--text"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ProfileComp',
    }
</script>