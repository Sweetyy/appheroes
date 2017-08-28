<template>
  <section class="main heroes">
    <banner :currentview="'heroes'"></banner>
    <h1>{{ title }}</h1>
    <div class="fadein">
      <ul class="list-heroes">
        <li v-for="(heroe, index) in heroes">
          <a @click="removeElement(index)" class="item-remove">X</a>
          <h3 @click="info(heroe.name)" v-bind:class="heroe.name == active ? 'active' : ''">{{heroe.name}}</h3>
          <div v-if="heroe.name == active">
            <p>{{heroe.description}}</p>
            <br/>
            <a @click="hero(heroe.name)">
              <small>About</small>
            </a>
          </div>
        </li>
      </ul>

      <a @click="showModal('createhero')" class="btn-sweet btn-fat">Summon your hero!</a>
    </div>

    <modal :id="'createhero'" :title="'Summon your hero'" v-bind:class="open == 'createhero' ? 'show' : ''">
      <slot>
        <div class="form-group">
          <input type="text" v-model="heroename" class="form-heroe" placeholder="Your Heroe's name">
        </div>
        <div class="form-group">
          <textarea v-model="heroedescription" class="form-heroe" rows="4" placeholder="About him/her..." maxlength="200"></textarea>
        </div>
        <div class="flex-box flex-between">
          <a @click="open = ''" class="btn-sweet">Not yet</a>
          <a @click="addRow" class="btn-sweet" :disabled="heroename == '' || heroedescription == ''">Summon</a>
        </div>
      </slot>
    </modal>
  </section>
</template>

<script>
import Banner from './../views/Banner.vue'
import Modal from './../views/Modal.vue'

export default {
  name: 'heroes',
  data () {
    return {
      title: 'Heroes',
      active: '',
      open: '',
      heroename: '',
      heroedescription: '',
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
    showModal: function (key) {
      this.open = key;
    },
    addRow: function (){
      if(this.heroename != '' && this.heroedescription != '') {
        this.heroes.push({name: this.heroename, description: this.heroedescription});
        this.heroename = '';
        this.heroedescription = '';
        this.open = '';
      }
    },
    removeElement: function (index) {
      this.heroes.splice(index, 1);
    },
    hero: function (id) {
      this.$router.push({ name: 'Hero', params: { heroName: id }})
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
ul.list-heroes {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
}

ul.list-heroes li {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
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

.item-remove {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  transition: all 0.25s;
}

ul.list-heroes li:hover .item-remove {
  opacity: 1;
}
</style>
