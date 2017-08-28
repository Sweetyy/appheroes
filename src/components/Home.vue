<template>
  <section class="home">
    <banner :currentview="'home'"></banner>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
import Banner from './../views/Banner.vue'

export default {
  name: 'home',
  data () {
    return {
      title: 'We are all Heroes'
    }
  },
  components: {
    'banner': Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
