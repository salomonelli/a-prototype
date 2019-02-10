<template>
<ul class="collection" v-if="!loading">

  <li class="collection-item avatar" v-for="user in users">
    <i class="material-icons circle" :background="user.color">person</i>

    <span class="title">{{user.pseudonym}}</span>
    <p>0.5 km
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
  </li>

</ul>
</template>

<script>
import * as Database from '../database/Database';
import {combineLatest} from 'rxjs';
import {
  map
} from 'rxjs/operators';

export default {
  name: 'PeopleNearby',
  props: {
    msg: String
  },
  data: function() {
    return {
      loading: true
    }
  },
  subscriptions() {
    const db = Database.get();
    return {
      users2: combineLatest(
        db.users.find().$,
        db.localuser.findOne().$
      ).pipe(
        map(([users,localuser])=>{
           users.forEach(user => user._distance = user.getDistance(localuser));
           this.loading = false;
           return users;
        })
      )
    }
  },
  async mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collection .collection-item.avatar .secondary-content {
  color: grey;
}

.collection .collection-item.avatar {
  min-height: unset;
}
</style>
