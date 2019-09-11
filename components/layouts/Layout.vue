<template>
  <div id="defaultPageLayout">

    <div class="header">
      <div class="edenTitle">
        <b> EDEN</b>

        <!-- Search Box -->
        <div class="searchBox">
          <v-text-field class="input" label="Search" single-line outlined></v-text-field>
        </div>

        <div class="rightSide">
          <div class="title">
            For Artists
          </div>&nbsp;
          <div class="title">
            For Art Lover
          </div>&nbsp;
          <div class="title">
            Login
          </div>
          <!-- Sign Up Btn -->
          <v-btn outlined color="black">Sign Up</v-btn>
        </div>
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
