<template>
    <section id="top" class="kv">
        <div class="kv__text-box">
            <h2 :class="{ 'kv__text-box--title opa': true, 'active': loaded1 }">結果につながるサイトには<br class="pcbr">必ず理由がある</h2>
            <p :class="{ 'kv__text-box--subtitle opa': true, 'active': loaded2 }">Solvideはデザインからサイト構築、保守運用まで一括で担当しているホームページ制作グループです。</p>
            <img :class="{ 'kv__text-box--img-title-back opa': true, 'active': loaded1 }" src="../../assets/images/kv-img/kv-title-back.png" alt="">
            <img :class="{ 'kv__text-box--img-text-back opa': true, 'active': loaded2 }" src="../../assets/images/kv-img/kv-text-back.png" alt="">
        </div>
        <div :class="{ 'kv__img-box opa': true, 'active': loaded3 }">
            <img class="kv__img-box--img" src="../../assets/images/kv-img/kv.png" alt="">
            <img class="kv__img-box--img-back" src="../../assets/images/kv-img/kv-back.png" alt="">
        </div>
        <div class="scroll-down">
            <p class="scroll-down__text">Scrole Down</p>
            <img class="scroll-down__img" src="arow.png" alt="">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'KVComp',
        data() {
            return{
                loaded1: false,
                loaded2: false,
                loaded3: false
            }
        },
        mounted: function() {
            setTimeout(() => {
                this.loaded1 = true;
            }, 100);
            setTimeout(() => {
                this.loaded2 = true;
            }, 200);
            setTimeout(() => {
                this.loaded3 = true;
            }, 500);
        }
    }
</script>

<style lang="scss">
    .opa{
        opacity: 0;
        transform: translateY(5rem);
    }
    .active{
        opacity: 1;
        transform: translateY(0rem);
        transition: opacity 1s ease-in-out , transform 1s ease-in-out;
    }
</style>