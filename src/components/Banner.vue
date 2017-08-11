<template>
    <ul class="menu">
      <router-link tag="li" to="/" v-bind:class="currentview == 'home' ? 'active' : ''">
        <i class="icon-home"></i>
        <span>Home</span>
      </router-link>
      <router-link tag="li" to="/heroes" v-bind:class="currentview == 'heroes' ? 'active' : ''">
        <i class="icon-heroes"></i>
        <span>Heroes</span>
      </router-link>
      <router-link tag="li" to="/about" v-bind:class="currentview == 'about' ? 'active' : ''">
        <i class="icon-about"></i>
        <span>About</span>
      </router-link>
    </ul>
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
  ul.menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.menu li {
    font-size: inherit;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    color: rgba(44, 62, 80, 0.62);
    transition: all 0.25s;
    cursor: pointer;
    width: 48px;
    font-size: 38px;
  }

  ul.menu li span {
    font-size: 0.4em;
    transition: all 0.25s;
    opacity: 0;
  }

  ul.menu li:hover {
    color: rgba(44, 62, 80, 1);
  }

  ul.menu li:hover span {
    opacity: 1;
  }

  ul.menu li.active * {
    color: #42b983;
    font-weight: bold;
  }

  ul.menu li.active span {
    opacity: 1;
  }

  ul.menu ul li i[class^="icon-"]:before,
  ul.menu ul li i[class*=" icon-"]:before {
    display: inline-flex;
  }
</style>