<template>
    <NHeaderComp/>
    <NpolicyKVComp/>
    <NprofileComp/>
    <NContactComp/>
    <NFooterComp/>
</template>

<script>
    import NHeaderComp from '@/components/new-solvide/NheaderComp.vue';
    import NpolicyKVComp from '@/components/new-solvide-policy/NpolicyKVComp.vue'
    import NContactComp from '@/components/new-solvide/NContactComp.vue';
    import NFooterComp from '@/components/new-solvide/NFooterComp.vue';
    import NprofileComp from '@/components/new-solvide-policy/NProfileComp.vue';

    export default {
        name: 'policy-page',
        components: {
            NHeaderComp,
            NpolicyKVComp,
            NprofileComp,
            NContactComp,
            NFooterComp,
        },
    };
</script>