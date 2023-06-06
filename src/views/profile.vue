<script setup lang="ts">

import axios from "axios";
</script>


<script lang="ts">




export default {
  props:
  {ide:String},
data() {
  return {
  url:'',  
  front:'',
  back:'',
  atac:'',
  def:'',
  nom:'',
  tipus:'',
  dades: null  
}
},
 methods: {
  get_info()
  {

   console.log('index.html?id='+this.ide)

    this.url='index.html?id='+this.ide
    axios
      .get('https://pokeapi.co/api/v2/pokemon/'+this.ide)
      .then(response => (
       
    
      this.nom=response.data.name,
      this.front=response.data.sprites.front_default,
      this.back=response.data.sprites.back_default,
      this.atac="Atac: "+response.data.stats[1].base_stat,
      this.def="Defensa: "+response.data.stats[2].base_stat,
      this.tipus="Tipus: "+response.data.types[0]
      
      ))

     
 
    }
  },
  created()
  {
    this.get_info()
  }
}






</script>

<template>
  
     

      <div id="poke_profile">

          <div class="navbar">
              <a id="back-b" href="index.html"><div class="butt"><label>Torna enrera </label></div></a>
          </div>

          <h2 id="pk_name">{{ nom }}</h2>
          <h4 id="tipus">{{ tipus }}</h4>
          <div id="imgs"> 
              <img id="front" :src='front'>
              <img id="back" :src='back'>
          </div>
      
          <h4 id="atac">{{ atac }}</h4>
          <h4 id="defensa">{{ def }}</h4>
      </div>    


</template>

<style>

</style>
