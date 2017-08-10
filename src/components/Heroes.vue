<template>
  <div class="heroes">
    <h1>{{ title }}</h1>
    <banner :currentview="'heroes'"></banner>
    <div>
      <ul>
        <li v-for="heroe in heroes">
          <h3 @click="info(heroe.name)" v-bind:class="heroe.name == active ? 'active' : ''">{{heroe.name}}</h3>
          <p v-if="heroe.name == active">{{heroe.description}}</p>
        </li>
      </ul>
    </div>

    <a @click="showmodal('createhero')">Create your hero!</a>

    <modal :id="'createhero'" :title="'Create your hero'" v-bind:class="open == 'createhero' ? 'show' : ''">
      <slot><a @click="open = ''">Close</a></slot>
    </modal>
  </div>
</template>

<script>
import Banner from './Banner.vue'
import Modal from './Modal.vue'

export default {
  name: 'heroes',
  data () {
    return {
      title: 'Heroes',
      active: '',
      open: '',
      heroes: [
        {name: 'Wonderwoman', description: 'The most powerful girl ever!'},
        {name: 'Superman', description: 'The most powerful man ever!'},
        {name: 'Spiderman', description: 'The most powerful spider ever!'}
      ],
    }
  },
  methods: {
    info: function (value) {
      this.active = value;
    },
    showmodal: function (key) {
      this.open = key;
      console.log(this.open);
    }
  },
  components: {
    'banner': Banner,
    'modal': Modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: inline-flex;
  align-items: flex-start;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  width: 300px;
  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
  padding: 20px;
}

h3 {
  cursor: pointer;
  transition: all 0.25s;
}

h3.active {
  cursor: default;
  color: #42b983;
}
</style>
