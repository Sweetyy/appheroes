<template>
  <section class="main hero">
    <banner :currentview="'hero'"></banner>
    <h1>{{ $route.params.heroName }}</h1>
    <div class="fadein">

    </div>
  </section>
</template>

<script>
import Banner from './../views/Banner.vue'
import Modal from './../views/Modal.vue'

export default {
  name: 'hero',
  data () {
    return {
      title: 'Hero'
    }
  },
  methods: {
  },
  components: {
    'banner': Banner,
    'modal': Modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
