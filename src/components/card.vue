
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
  dades: null  
}
},
 methods: {
  get_url()
  {

   console.log('index.html?id='+this.ide)

    this.url='index.html?id='+this.ide
    axios
      .get('https://pokeapi.co/api/v2/pokemon/'+this.ide)
      .then(response => (
       
    
      this.nom=response.data.name,
      this.front=response.data.sprites.front_default,
      this.back=response.data.sprites.back_default,
      this.atac=response.data.stats[1].base_stat,
      this.def=response.data.stats[2].base_stat
      
      ))

     
 
    }
  },
  created()
  {
    this.get_url()
  }
}






</script>

<template>

  <div  class="card" >
    <a :href='url' >
        <img :src='front' >
        <h3>{{ nom }}</h3>
    </a>
     
        


    </div>
</template>

<style scoped>


.card{

float:left;

width: 130px;
height: 200px;

/* border-style: double;*/
text-align: center;
border-radius: 20px;
margin: 4px;
transition: background-color 1s;
}


.card > img
{
    
    text-align: center;
    width: 120px;
    height: 120px;
}

.card > h3
{
    text-align: center;
    font-size: 18;
}



.card:hover
{
    transform: scale(1.1, 1.1);
     background-color: #EFEFEF;
}




</style>
