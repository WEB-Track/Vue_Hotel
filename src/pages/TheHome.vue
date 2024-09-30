  <script>
   import TheHero from '../components/Hero/TheHero.vue'
   import TwoColumn from '../components/TwoColumn.vue'
   import ThreeColumn from '../components/ThreeColumn.vue'
   import TheFooter from '../components/TheFooter.vue'
   export default{
    components:{TheFooter, TwoColumn, ThreeColumn, TheHero},
   }
  </script>

<template>
 <div>
  <TheHero/>
  <TwoColumn/>
  <ThreeColumn/>
  <TheFooter/>
 </div>
 
</template>
