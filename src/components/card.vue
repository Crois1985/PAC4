
<script setup lang="ts">

import axios from "axios";
</script>



<script lang="ts">

export default {
  props:
  {ide:String,
  filtre:String
  },
data() {
  return {
  url:'',  
  front:'',
  back:'',
  atac:'',
  def:'',
  nom:'',
  dades: null,
  vis:'visibility:visible;' 
   
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
      
      ))}

  },
  created()
  {
    this.get_url()
  },
  watch:
  {
   filtre(){
    
      if (this.nom.includes(this.filtre) || this.filtre=='')
      {
        this.vis="visibility:visible;"
        console.log("Visible "+this.nom)
      }
      else
      {
        this.vis="visibility:hidden;"
        console.log("No Visible "+this.nom)
      }
    

   }
  }
}






</script>

<template>

  <div  class="card" v-bind:style="vis" >
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
height: 175px;

/* border-style: double;*/
text-align: center;
border-radius: 20px;
margin: 4px;
background-color: rgb(220,220,220);
transition: background-color 0.3s;
margin-top: 15px;
margin-bottom: 15px;
margin-left:10px

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
     background-color:rgb(220,220,220); 
     box-shadow: 5px 10px;
}



</style>
