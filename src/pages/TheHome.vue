  <script>
   import TheMenu from '../components/Menu/TheMenu.vue'
   import TheHero from '../components/Hero/TheHero.vue'
   import TwoColumn from '../components/TwoColumn.vue'
   import ThreeColumn from '../components/ThreeColumn.vue'
   import TheFooter from '../components/TheFooter.vue'
   export default{
    components:{TheMenu, TheFooter, TwoColumn, ThreeColumn, TheHero},
   }
  </script>

<template>
 <div>
  <TheMenu/>
  <TheHero/>
  <TwoColumn/>
  <ThreeColumn/>
  <TheFooter/>
 </div>
 
</template>
