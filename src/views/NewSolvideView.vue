<template>
    <NKVComp/>
    <NAbout/>
    <NAService/>
    <NWorkComp/>
    <NBlogsComp/>
    <NContactComp/>
</template>

<script>
    import NKVComp from '@/components/new-solvide/NKVComp.vue';
    import NAbout from '@/components/new-solvide/NAboutComp.vue';
    import NAService from '@/components/new-solvide/NServiceComp.vue';
    import NWorkComp from '@/components/new-solvide/NWorkComp.vue';
    import NBlogsComp from '@/components/new-solvide/NBlogsComp.vue';
    import NContactComp from '@/components/new-solvide/NContactComp.vue';

    export default {
        name: 'HomeView',
        components: {
            NKVComp,
            NAbout,
            NAService,
            NWorkComp,
            NBlogsComp,
            NContactComp,
        },
    };
</script>

<style lang="scss">
    @import "/src/assets/css/new-solvide.scss";
</style>
