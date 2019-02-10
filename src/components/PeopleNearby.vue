<template>

        <ul class="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle blue">person</i>

            <span class="title">Carolin</span>
            <p>0.5 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">person</i>
            <span class="title">Tim</span>
            <p>3 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle green">person</i>
            <span class="title">Jack</span>
            <p>3.1 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">person</i>
            <span class="title">Patricia</span>
            <p>5 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle blue">person</i>

            <span class="title">Carolin</span>
            <p>0.5 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">person</i>
            <span class="title">Tim</span>
            <p>3 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle green">person</i>
            <span class="title">Jack</span>
            <p>3.1 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">person</i>
            <span class="title">Patricia</span>
            <p>5 km
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">message</i></a>
          </li>
        </ul>



</template>

<script>
export default {
  name: 'PeopleNearby',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.collection .collection-item.avatar .secondary-content{
  color: grey;
}

.collection .collection-item.avatar {
  min-height: unset;
}
</style>
