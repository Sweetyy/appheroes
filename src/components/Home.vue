<template>
  <section class="home">
    <h1>{{ title }}</h1>
    <banner :currentview="'home'"></banner>
  </section>
</template>

<script>
import Banner from './Banner.vue'

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
