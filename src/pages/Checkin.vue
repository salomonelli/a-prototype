<template>

  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/">
        <i class="material-icons">keyboard_arrow_left</i>
      </router-link>
      </div>
    </nav>
  <!--  <i class="material-icons">location_on</i> -->
    <h3>I am located in</h3>
    <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">City</label>
        </div>

        <button class="btn waves-effect waves-light" >Checkin <!-- type="submit" name="action" -->
   <i class="material-icons right">location_on</i>
 </button>

  </div>
</template>

<script>



export default {
  name: 'inituser',
  components: {
  },
  async mounted() {
  }
}
</script>

<style>
</style>
