<template>
    <div>
        <router-link to="/" v-bind:class="currentview == 'home' ? 'active' : ''">Home</router-link>
        <router-link to="/heroes" v-bind:class="currentview == 'heroes' ? 'active' : ''">Heroes</router-link>
    </div>
</template>

<script>
export default {
  props: ['currentview'],
  name: 'banner',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  a {
    color: rgba(0,0,0,.87);
    text-decoration: none;
    margin: 10px;
  }
  
  a.active {
    color: #42b983;
    font-weight: bold;
  }
</style>