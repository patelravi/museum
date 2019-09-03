<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Header -->
    <q-header reveal class="bg-white pageHeader">
      <div class="desktop row">

        <div class="col-2 logo">EDEN</div>
        <div class="col middle">Second column</div>
        <div class="col-3 right">Third column</div>

      </div>
      <!-- <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
        <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
      </q-toolbar> -->
    </q-header>


    <!-- Router -->
    <q-page-container class="pageContainer">
      <router-view />
    </q-page-container>

    <!-- Footer -->

  </q-layout>
</template>

<script>
  // import edenGallery from "./components/edenGallery.vue";
  import './styles/app.styl'

  export default {
    name: "App",
    data() {
      return {

      };
    }
  };
</script>

<style lang="stylus">
</style>