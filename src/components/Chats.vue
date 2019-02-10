<template>

        <ul class="collection">
          <li class="collection-item avatar unread">
            <i class="material-icons circle blue">person</i>

            <span class="title">Carolin</span>
            <p >Oh no, surely next time :)
            </p>
            <a href="#!" class="secondary-content">22:40

          </a>

          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">person</i>
            <span class="title">Tim</span>
            <p>Hello, how are you?
            </p>
            <a href="#!" class="secondary-content">3:25</a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle green">person</i>
            <span class="title">Jack</span>
            <p>Are you also at the Marrio...
            </p>
            <a href="#!" class="secondary-content">19:30</a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">person</i>
            <span class="title">Patricia</span>
            <p>Thanks for the coffee
            </p>
            <a href="#!" class="secondary-content">Yesterday</a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle blue">person</i>

            <span class="title">Carolin</span>
            <p>0.5 km
            </p>
            <a href="#!" class="secondary-content">01.03.2018</a>
          </li>

        </ul>



</template>

<script>
export default {
  name: 'Chats',
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

.unread {
  font-weight: bold;
}
</style>
