<script setup lang="ts">
export default {
   
   data() { 
      return {
        id:0 , /*la ID del Pokemon*/
        nom:'',
        front:''
      }
    }
}


 



</script>

<template>

  <div id="poke_profile" >
    <a href="index.html?id={{ id }}">
        <img src="{{ front }}" >
        <h3>{{ nom }}</h3>
    </a>
     
        


    </div>
</template>

<style scoped>
 #poke_profile
{
    margin: auto;
    display: none;
    width: 720px;
    height: 512px;
}
</style>
