<template>
  <section class="about">
    <banner :currentview="'about'"></banner>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
import Banner from './../views/Banner.vue'

export default {
  name: 'about',
  data () {
    return {
      title: 'About'
    }
  },
  components: {
    'banner': Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
