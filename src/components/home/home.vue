<template>
  <div id="homePage">
    <div class="hero">
      Your Art, Online!!!
    </div>
    <div class="subHero">
      The easiest way to showcase your artwork to friends, family, and strangers.<br>
      Email any photo to new@eden.gallery<br><br>


      <router-link color="primary" to="/user">
        <b-button variant="outline-light">View all art on Eden</b-button>
      </router-link>

    </div>

  </div>

</template>

<script>
  import homeComponent from "./homeComponent";
  export default homeComponent;
</script>


<style lang="scss" src="./home.scss"></style>