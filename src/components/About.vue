<template>
  <section class="about">
    <h1>{{ title }}</h1>
    <banner :currentview="'about'"></banner>
  </section>
</template>

<script>
import Banner from './Banner.vue'

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
