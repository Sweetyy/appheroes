<template>
  <div class="heroes">
    <h1>{{ title }}</h1>
    <router-link to="/">Home</router-link>
    <div>
      <ul>
        <li v-for="heroe in heroes">
          <h3 @click="info(heroe.name)">{{heroe.name}}</h3>
          <p v-if="heroe.name == active">{{heroe.description}}</p>
        </li>
      </ul>
    </div>
    <modal :id="'createhero'" :title="'Create your hero'">
      <slot>Test</slot>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'heroes',
  data () {
    return {
      title: 'Heroes',
      active: '',
      heroes: [
        {name: 'Wonderwoman', description: 'The most powerful girl ever!'},
        {name: 'Superman', description: 'The most powerful man ever!'}
      ],
    }
  },
  methods: {
    info: function (value) {
      this.active = value;
    }
  },
  components: {
    'modal': Modal
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
  display: inline-flex;
  align-items: flex-start;
}

li {
  margin: 0 10px;
  width: 300px;
}

a {
  color: #42b983;
}
</style>
