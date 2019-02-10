<template>

  <nav>
    <div class="nav-wrapper">
      <router-link class="brand-logo" to="/">+</router-link>
      <!-- &gt; -->
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
}
.brand-logo {
  font-size: 81px;
}
</style>
