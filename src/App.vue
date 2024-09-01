<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <section class="hero md:container" id="hero">
    <div class="row">
      <div class="columns-1 p-0 m-0">
        <div class="h-auto">
          <img class="image jumbotron--hero" src="./assets/images/showcase.jpg">
          <div class="justify-center max-h-40max-w-64">
            <h1 class="display-4 text-light hero_header--bold spacing_p-t-58">
              <span class="hero_header--orange">Enjoy</span> Your Stay
            </h1>
            <p class="lead text-light pb-3">
              Come!! Relax, See The Sites and Enjoy Yourself. While we pamper
              you.
            </p>
            <a class="btn btn-primary spacing_p-lr-20 spacing_p-tb-10 btn-lg font-18 hero--btn" href="about.html"
              role="button">About Our Hotel</a>
          </div>
          </img>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import './scss/main.scss';
@import './vue-app.scss';
</style>
