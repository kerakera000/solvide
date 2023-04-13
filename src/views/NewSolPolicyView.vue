<template>
    <NHeaderComp/>
    <NpolicyKVComp/>
</template>

<script>
    import NHeaderComp from '@/components/new-solvide/NheaderComp.vue';
    import NpolicyKVComp from '@/components/new-solvide-policy/NpolicyKVComp.vue'

    export default {
        name: 'Home-page',
        components: {
            NHeaderComp,
            NpolicyKVComp
        },
    };
</script>

<style lang="scss">
    @import "/src/assets/css/new-solvide.scss";
</style>