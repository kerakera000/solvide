<template>
    <NHeaderbComp/>
    <NServiceComp/>
    <NServicePointComp/>
    <NServiceContentComp/>
    <NServiceFlowComp/>
    <NContactComp/>
    <NFooterComp/>
</template>

<script>
    import NHeaderbComp from '@/components/new-solvide/NheaderblackComp.vue';
    import NContactComp from '@/components/new-solvide/NContactComp.vue';
    import NServiceComp from '@/components/new-solvide-service/NewserviceKVComp.vue';
    import NServiceFlowComp from '@/components/new-solvide-service/NewserviceFlowComp.vue';
    import NFooterComp from '@/components/new-solvide/NFooterComp.vue';
    import NServicePointComp from '@/components/new-solvide-service/NservicePointComp.vue';
    import NServiceContentComp from '@/components/new-solvide-service/NewserviceContentComp.vue';

    export default {
        name: 'Home-page',
        components: {
            NHeaderbComp,
            NContactComp,
            NServiceContentComp,
            NServiceFlowComp,
            NFooterComp,
            NServiceComp,
            NServicePointComp,
        },
    };
</script>