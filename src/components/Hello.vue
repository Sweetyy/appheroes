<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      <banner :currentview="'home'"></banner>
    </div>
  </div>
</template>

<script>
import Banner from './Banner.vue'

export default {
  name: 'hello',
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
