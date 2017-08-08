<template>
  <div class="banner">
    <router-link :to="{name: 'root'}">Home</router-link>
    <router-link :to="{name: 'listofheroes'}">List of heroes</router-link>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
