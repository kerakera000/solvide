<template>
    <NHeaderComp/>
    <NKVComp/>
    <NAbout/>
    <NAService/>
    <NWorkComp/>
    <NBlogsComp/>
    <NContactComp/>
    <NFooterComp/>
</template>

<script>
    import NKVComp from '@/components/new-solvide/NKVComp.vue';
    import NAbout from '@/components/new-solvide/NAboutComp.vue';
    import NAService from '@/components/new-solvide/NServiceComp.vue';
    import NWorkComp from '@/components/new-solvide/NWorkComp.vue';
    import NBlogsComp from '@/components/new-solvide/NBlogsComp.vue';
    import NContactComp from '@/components/new-solvide/NContactComp.vue';
    import NFooterComp from '@/components/new-solvide/NFooterComp.vue';
    import NHeaderComp from '@/components/new-solvide/NheaderComp.vue';

    export default {
        name: 'solvide-page',
        components: {
            NHeaderComp,
            NKVComp,
            NAbout,
            NAService,
            NWorkComp,
            NBlogsComp,
            NContactComp,
            NFooterComp,
        },
    };
</script>
