<template>
  <div id="defaultPageLayout">

    <div class="header">
      <b> EDEN</b>

      <div class="rightSide">
        <v-text-field class="input searchBox" label="Search" single-line outlined></v-text-field>
        <v-btn text color="black">For Artists</v-btn>
        <v-btn text color="black">For Art Lover</v-btn>
        <v-btn text color="black"> Login</v-btn>
        <v-btn outlined color="black">Sign Up</v-btn>
      </div>

    </div>

    <v-content class="nuxtContainer">
      <v-layout>
        <v-flex>
          <slot />
        </v-flex>
      </v-layout>
      <vue-snotify />
    </v-content>

    <v-footer class="footer">

      <div class="footerTitle">
        <b> EDEN</b>
      </div>

      <div class="footer1">
        <h2> Art web</h2><br>
        About us<br>
        Contact<br>
        Help<br>
        Terms<br>
        Privacy policy<br>
      </div>

      <div class="footer2">
        <h2>For Art Lover</h2>
        <br>
        Popular<br>
        Fresh<br>
      </div>

      <div class="footer2">
        <h2>User Section</h2>
        <br>
        Login<br>
        Sign Up<br>
      </div>

      <div class="footer2">
        <h2>Community</h2>
        <br>
        Art Blog<br>
        Support<br>
      </div>

      <div class="footer2">
        <h2>Follow us</h2>
      </div>

      <div class="copyRightDetail">

        All rights reserved Artweb &copy;2019 Eden

      </div>

    </v-footer>

  </div>

</template>
  
<script>
export default {
  props: {},
  data() {
    return {};
  }
};
</script>


<style lang="scss" src="@/assets/styles/layout.scss">
</style>