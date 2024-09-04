<script setup>

</script>

<template>
 <header class="header">
      <div class="header-wrapper">
        <nav class="navbar-expand-sm navbar navbar-dark bg-primary py-0">
          <a class="navbar-brand py-2" href="index.html">Brightling Hotel</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link px-4 py-4 nav-link--active" href="index.html"
                  >Home<span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link px-4 py-4" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-4 py-4" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
</template>

<style lang="scss">
@import './menu-sec.scss';
</style>