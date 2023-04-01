<template>
    <HeaderComp/>
    <KVComp/>
    <AboutComp/>
    <ServiceComp/>
    <FlowComp/>
    <WorksComp/>
    <ProfileComp/>
    <ContactComp/>
    <FooterComp/>
</template>

<script>
    import HeaderComp from '@/components/solvide/HeaderComp.vue';
    import KVComp from '@/components/solvide/KVComp.vue';
    import AboutComp from '@/components/solvide/AboutComp.vue';
    import ServiceComp from '@/components/solvide/ServiceComp.vue';
    import FlowComp from '@/components/solvide/FlowComp.vue';
    import WorksComp from '@/components/solvide/WorksComp.vue';
    import ProfileComp from '@/components/solvide/ProfileComp.vue';
    import ContactComp from '@/components/solvide/ContactComp.vue';
    import FooterComp from '@/components/solvide/FooterComp.vue';

    export default {
        name: 'HomeView',
        components: {
            HeaderComp,
            KVComp,
            AboutComp,
            ServiceComp,
            FlowComp,
            WorksComp,
            ProfileComp,
            ContactComp,
            FooterComp,
        },
    };
</script>

<style lang="scss">
    @import "/src/assets/css/main.scss";
</style>