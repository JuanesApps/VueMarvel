<template>
  <div class="home">
    <button class="button" v-on:click="changeComics">
      Comics
    </button>
    <button class="button" v-on:click="changeCharacters">
      Characters
    </button>
    <Comics v-if="comic" :lista="items"></Comics>
    <Characters v-else :lista="items"></Characters>
    <button class="button">
      Back
    </button>
    <button class="button">
      Next
    </button>
  </div>
</template>

<script>
/* eslint-disable no-console */
import marvelApi from '../marvelApi'
import Comics from './Comics'
import Characters from './Characters'

const api = new marvelApi();

export default {
  name: 'Home',
  created: function(){
    api.getComics().then(
      (Response) => {
        console.log(Response.results);
        this.items = Response.results;
      }
    );
  },
  data: function(){
    return{
      comic: true,
      character: false,
      items: [],
      pagina: 1,
      offset: 0
    }
  },
  components:{
    Comics,
    Characters
  },
  methods:{
    changeComics(){
      this.comic=true;
      this.character= false;
      api.getComics().then(
        (Response) => {
          console.log(Response.results);
          this.items = Response.results;
        }
      );
    },
    changeCharacters(){
      this.comic=false;
      this.character=true;
      api.getCharacters().then(
        (Response) => {
          console.log(Response.results);
          this.items = Response.results;
        }
      );
    },
    changeBack(){
      this.pagina = this.pagina - 1;
      this.offset = this.offset - this.pagina * 20;
    },
    changeNext(){
      this.pagina = this.pagina + 1;
      this.offset = this.pagina * 20;
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background-color: #bf1414;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
