<script lang="ts">
import { moduleExpression } from '@babel/types';

  export default {
   
   data() { 
      return {
        temas: '../assets/clar.css'
      }
    }
  }

</script>

<template>
  <div id="temes">
   
    
        <input type="radio" name="tema" @click="temas='../assets/clar.css'">
        <label>Tema clar</label><br>
        <input type="radio" name="tema" @click="temas='../assets/obscur.css'">
        <label>Tema obscur</label><br>
  
</div>
</template>

<style >
/*@import {{temas}}; */
#temes {
  margin: auto;
    float: none;
    width: 720px;
    height: 200px;
}

 
</style>
