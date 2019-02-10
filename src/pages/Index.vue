<template>
<div id="app">
  <div class="fixed-action-btn">
    <router-link to="/checkin">

      <a class="btn-floating btn-large red">
        <i class="large material-icons">location_city</i>
      </a>

    </router-link>
  </div>
<Nav />

  <div class="row">
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3"><a class="active" href="#test2">People Nearby</a></li>
        <li class="tab col s3"><a href="#test1">Chats</a></li>
      </ul>
    </div>
    <div id="test2" class="col s12">
      <PeopleNearby v-if="user && user.locationEnabled && user.longitude && user.latitude" />
      <p v-if="!user || !user.locationEnabled || !user.longitude || !user.latitude">Enable your location to view people nearby</p>

    </div>
    <div id="test1" class="col s12">
      <Chats/>
    </div>
  </div>



  <!--
  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
</div>
</template>

<script>

import PeopleNearby from '../components/PeopleNearby.vue'
import Nav from '../components/Nav.vue'
import Chats from '../components/Chats.vue'
import * as Database from '../database/Database';


export default {
  name: 'inituser',
  data: function() {
    return {
      user: null
    }
  },
  components: {
    PeopleNearby,
    Chats,
    Nav
  },
  async mounted() {
    // check if user exists
    const db = await Database.get();
    this.user = await db.localuser.findOne().exec();
    if (!this.user)
      this.$router.push({path: '/logon'});
    // user exists - render page components
    const el = document.getElementsByClassName('tabs')[0];
    var instance = M.Tabs.init(el);
  }
}
</script>

<style>
.tabs {
  background: none;
}
</style>
