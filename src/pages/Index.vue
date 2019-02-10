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
      <PeopleNearby v-if="user && user.locationEnabled && user.position" />
      <div>
        <div v-if="user && (!user.locationEnabled || !user.position)">
          <p>Enable your location to view people nearby:</p>
          <label>
            <input type="checkbox" id="checkbox" v-model="shareLocation"/>
            <span>Use my location</span>
          </label>
          <br><br>
          <div class="btn waves-effect waves-light col s12" v-on:click="updateLocation"> Update
          </div>
        </div>
      </div>
    </div>
    <div id="test1" class="col s12">
      <Chats />
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
      user: null,
      shareLocation: false
    }
  },
  components: {
    PeopleNearby,
    Chats,
    Nav
  },
  methods: {
    getLocation: async function() {
      return new Promise((res, rej) => {
        if (navigator.geolocation) {
          console.log('asdddddddddasdasdasd');
          navigator.geolocation.getCurrentPosition((position, error) => {
            console.dir(error);
            if (error) rej(error);
            else {
              res({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            }
          });
        } else rej("Geolocation is not supported by this browser");
      });
    },
    updateLocation: async function() {
      console.log(this.shareLocation);
      // update location in DB
      let position;
      if (this.shareLocation)
        position = await this.getLocation();
      // store to db
      const db = await Database.get();
      const user = await db.localuser.findOne().exec();
      const updatedUser = await user.atomicUpdate(oldData => {
        oldData.position = position;
        oldData.locationEnabled = this.shareLocation;
        return oldData;
      });
      // TODO clean this up
      this.$router.go();
    }
  },
  async mounted() {
    // check if user exists
    const db = Database.get();
    const user = await db.localuser.findOne().exec();
    // TODO clean
    if (!user)
      this.$router.push({
        path: '/logon'
      });
    this.user = user.toJSON();
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
