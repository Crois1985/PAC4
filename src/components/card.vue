<script lang="ts">

//import axios from "axios";


export default {
  props:['ide']
,
data() {
  return {
  nom:''
}}

} //, created() {

   // console.log("Identificador "+this.ide)

    //axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
     // console.log(result.data);
  //  }
 // }






</script>

<template>

  <div  class="card" >
    <a href='index.html?id={{ ide }}'>
        <img src="{{ front }}" >
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
