<template>
  <div id="appDiv">
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
  #appDiv {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fafafa;
    min-height: 100vh;
  }
</style>