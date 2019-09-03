<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <edenGallery />
    </q-page-container>
  </q-layout>
</template>

<script>
import edenGallery from "./components/edenGallery.vue";

export default {
  name: "LayoutDefault",

  components: {
    edenGallery
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>

<style>
</style>
