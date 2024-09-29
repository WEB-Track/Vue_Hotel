<template>
        <div class="container">
        <div class="row">
          <div class="col-12 spacing_p-tb-20">
            <p class="text-center text-light spacing_m-tb-10">
              Brightling Hotel &copy; <span id="date"></span>, All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
</template>

<script>
// ********** set date ************ 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
</script>