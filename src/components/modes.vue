<script lang="ts">
import { moduleExpression } from '@babel/types';

let temas ='../assets/clar.css'
export {temas}

  export default {
   
   data() { 
      return {
        temas  : '../assets/clar.css'
      }
    }, 
    methods: {
    //Funcio que salta entre temes
   set_tema(e)
  {
    //Aqui habria que setear una variable de entorno....
    //Y luego Que los componentes la consulten y actuen en consecuencia
      if (e.target.value==0)
      {
        this.temas='../assets/clar.css'
        
        sessionStorage.setItem("tema", '../assets/clar.css')  //Salvem la llista per refrescar
      
      }
      else
      {
        this.temas='../assets/obscur.css'
        sessionStorage.setItem("tema", '../assets/obscur.css')  //Salvem la llista per refrescar
      }
      console.log("Tema " +sessionStorage.getItem("tema"))
  }
    }
  }

</script>

<template>
  <div id="cap">
  <div id="temes">
   
    
        <input type="radio" :value=0 name="tema"  @click='set_tema'>
        <label>Tema clar</label><br>
        <input type="radio" :value=1 name="tema" @click='set_tema'>
        <label>Tema obscur</label><br>
  
</div>
</div>
</template>

<style :src="{{temas}}">

/*@import {{temas}};*/
#cap {
 
    margin: auto;
    float: none;
    width: 720px;
    height: 100px;
}
#temes{
  float: right;
}

 
</style>
