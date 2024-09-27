  <script>
   import TheMenu from '../components/Menu/TheMenu.vue'
   import TheHero from '../components/Hero/TheHero.vue'
   import TwoColumn from '../components/TwoColumn.vue'
   import ThreeColumn from '../components/ThreeColumn.vue'
   export default{
    components:{TheMenu, TwoColumn, ThreeColumn,TheHero},
   }
  </script>

<template>
 <div class="flex flex-col">
  <TheMenu/>
  <TheHero/>
  <TwoColumn/>
  <ThreeColumn/>
 </div>
 
</template>
