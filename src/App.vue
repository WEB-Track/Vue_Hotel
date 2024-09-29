<script>
  import TheHome from './pages/TheHome.vue'
  import TheAbout from './pages/TheAbout.vue'
  import TheContact from './pages/TheContact.vue'
  export default{
    components:{TheHome, TheAbout, TheContact}
  }
</script>

<template>
  <TheHome/>
</template>

<style lang="scss">
@use './scss/2-base/reset';
// @import './scss/main.scss';
@use './vue-app.scss';

</style>
