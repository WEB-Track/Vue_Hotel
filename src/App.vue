<script>
  // import TheHome from './pages/TheHome.vue'
  // import TheAbout from './pages/TheAbout.vue'
  // import TheContact from './pages/TheContact.vue'
    import TheMenu from './components/Menu/TheMenu.vue';
  export default{
    components:{TheMenu}
  }
</script>

<template>
  <TheMenu/>
  <RouterView/>
</template>

<style lang="scss">
@use './scss/2-base/reset';
// @import './scss/main.scss';
@use './vue-app.scss';

</style>
