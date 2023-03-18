<template>
    <section class="works">
        <div class="works__title">
            <div class="title">
                <h2 class="title__main-text">制作実績</h2>
                <div class="title__line"></div>
                <p class="title__sub-text">WORKS</p>
            </div>
        </div>
        <div class="works__swiper">
            <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :loop="true"
            :pagination="{
                clickable: false,
            }"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :breakpoints="{
                '768': {
                slidesPerView: 1,
                spaceBetween: 40,
                },
                '1024': {
                slidesPerView: 1.5,
                spaceBetween: 50,
                },
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide class="swiper-cnt">
                    <img src="../../assets/images/works-img/higurashi.png" alt="post.image.title">
                    <div class="swiper-cnt__text">
                        <h2>ひぐらし不動産</h2>
                        <p>コーディングからアップロードまで</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-cnt">
                    <img src="../../assets/images/works-img/higurashi.png" alt="post.image.title">
                    <div class="swiper-cnt__text">
                        <h2>ひぐらし不動産</h2>
                        <p>コーディングからアップロードまで</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-cnt">
                    <img src="../../assets/images/works-img/higurashi.png" alt="post.image.title">
                    <div class="swiper-cnt__text">
                        <h2>ひぐらし不動産</h2>
                        <p>コーディングからアップロードまで</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-cnt" v-for="post in posts" :key="post.id">
                    <img :src="post.img.url" alt="post.image.title">
                    <div class="swiper-cnt__text">
                        <h2>{{ post.title }}</h2>
                        <p>{{ post.text }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
    //スライダー
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Pagination, Navigation } from 'swiper';
    //cms
    import { getPosts } from '@/microcms.js';
    export default {
        name: 'WorksComp',

        data() {
            return {
                posts: [],
            };
        },
        async created() {
            this.posts = await getPosts();
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Pagination, Navigation],
            };
        },
    }
</script>