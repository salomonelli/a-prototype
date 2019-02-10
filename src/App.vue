<template>
<div id="app">
      <router-view/>
</div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
export default {
  name: 'index',
  components: {
  },
  async mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>
