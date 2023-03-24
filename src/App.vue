<template>
  <router-view/>
</template>

<script>
  export default {
    mounted() {
      console.log(process.env.VUE_APP_ROOT_URL)
    }
  }
</script>

<style lang="scss">
@import "/src/assets/css/main.scss";
</style>
