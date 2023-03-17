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
                <img src="../../assets/images/works-img/gim.png" alt="">
                <div class="swiper-cnt__text">
                    <h2>ワイヤーフレームからアップロードまで一括管理</h2>
                    <p>株式会社Zi;plaza/ 飲食業</p>
                </div>
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-cnt">
                <img src="../../assets/images/works-img/gim.png" alt="">
            </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Pagination, Navigation } from 'swiper';
    
    export default {
        name: 'WorksComp',

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