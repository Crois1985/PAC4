<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Modes from './components/modes.vue'
import Llistat from './components/llista.vue'
import { temas } from './components/modes.vue'

</script>

<script lang="ts">
        export default {
           
            methods: {
              get_rnd(n,max) //Agafem la llista de nombres aleatoris
              {  
              //n= quantitat de nombres aleatoris
              //max= nombre aleatori mes alt
              
              let nums=[];  //array de numeros
              let i=0
              for(i=0; i<n;i++)
              {
                  nums.push(Math.floor(Math.random() * max));
              }
             
              sessionStorage.setItem("ids", nums.toString())
              console.log(sessionStorage.getItem("ids"))
              return nums.toString()
              
              }
        
            },
            created(){
              if (sessionStorage.getItem("ids")==null)
              {
              this.ids=this.get_rnd(10,1000)
              }
              else 
              {
                this.ids=sessionStorage.getItem("ids")
              }
              
            }
          
          }
 </script>

<template>
  <Modes></Modes>
  <Header></Header>
<!--Aqui comprovar si hi ha un ID o no..per veure quina es mostra-->

  <Llistat ></Llistat>


</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

}
#app
 {display:block;}

</style>
