<template>
  <router-view/>
</template>

<script>
  export default {
    mounted(){
      const myFunc = function(){

      const target = document.getElementsByClassName('target');
      const position = Math.floor(window.innerHeight * .75);

      for (let i = 0; i < target.length; i++) {

          let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
          let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

          if (offsetTop < position) {
              target[i].classList.add('view');
          }
          
          if(offsetBottom < 0){
              target[i].classList.remove('view');
          }
      }
      }
      window.addEventListener('scroll', myFunc, false);
    }
  }
</script>

<style lang="scss">
    
</style>
