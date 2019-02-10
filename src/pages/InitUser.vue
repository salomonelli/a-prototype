<template>
<div class="row">
  <form class="col s12">
    <div class="row">
      <h1 class="center init-user-title">+</h1>
      <!-- &gt; -->
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="pseudonym" type="text" v-model="pseudonym" class="validate">
        <label for="pseudonym">Your pseudonym, like 'pizza&chips'</label>
      </div>
      <div class="col s12">
        <label>
          <input type="checkbox" id="checkbox" v-model="shareLocation" checked/>
          <span>Use my location</span>
        </label>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col s12">
        <div class="btn waves-effect waves-light col s12" v-on:click="logon" :disabled="isDisabled"> Go
    <!--<i class="material-icons right">keyboard_arrow_right</i>-->
  </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import * as Database from '../database/Database';
import * as randomMC from 'random-material-color';
import Router from 'vue-router';


export default {
  name: 'index',
  data: function() {
    return {
      pseudonym: null,
      shareLocation: true
    };
  },
  computed: {
    isDisabled: function() {
      return !this.pseudonym;
    }
  },
  methods: {
    getLocation: async function() {
      return new Promise((res, rej) => {
        if (navigator.geolocation) {
          console.log('asdddddddddasdasdasd');
          navigator.geolocation.getCurrentPosition((position, error) => {
            console.dir(error);
            if(error) rej(error);
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
    logon: async function() {
      if (!this.pseudonym) return;
      // get location
      try {
        let position;
        if (this.shareLocation)
          position = await this.getLocation();
        // store to db
        const db = Database.get();
        const user = {
          pseudonym: this.pseudonym,
          locationEnabled: this.shareLocation,
          position: position ? position : undefined,
          color: randomMC.getColor({
            shades: ['500', '900']
          })
        };
        const doc = await db.localuser.insert(user);
        this.$router.push({path: '/'});
      } catch (e) {
        M.toast({
          html: e
        });
      }
    }
  },
  async mounted() {
    // check if user exists
    const db = Database.get();
    const user = await db.localuser.findOne().exec();
    if (user && user.pseudonym != '')
      this.$router.push({path: '/'});
  }


}
</script>

<style>
form {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80% !important;
  left: 10% !important;
}

.init-user-title {
  font-size: 10.2rem;
}
</style>
