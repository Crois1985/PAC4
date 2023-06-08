<script setup lang="ts">

//import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Modes from './components/modes.vue'
import Llistat from './views/main.vue'
import Fitxa from './views/profile.vue'
import { temas } from './components/modes.vue'

</script>

<script lang="ts">
        export default {
          data(){
            return {
                poke_id:'',
                prof:'',
                ids:'',
                tema:0
            }
          },
           
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


            

              //comprovem si hem escollit un pokemon
              let uri = window.location.search.substring(1) 
              let params = new URLSearchParams(uri)
              let file_id=params.get("id")

              if (file_id==null)
              {
                this.poke_id="-1"
                this.prof='false'
                console.log("Sin IDs")
              }
              else
              {

                this.poke_id=file_id
                this.prof='true'
                console.log("Tenemos pokemon "+this.poke_id)
              }
              

              //comprovem si tenim una llsita carregada
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

<div id="cap" :class="{obscur:tema}">
  <div id="temes">
   
    
        <input type="radio" :value=0 v-model="tema" name="tema"  checked >
        <label>Tema clar</label><br>
        <input type="radio" :value=1  v-model="tema" name="tema" >
        <label>Tema obscur</label><br>
  
</div>
</div>


  <Header :tema="tema"></Header>
  <!--Aqui comprovar si hi ha un ID o no..per veure quina es mostra-->
  <Llistat :tema="tema" v-if="prof==='false'"  ></Llistat>
  <Fitxa :ide="poke_id"  :tema="tema" v-else  ></Fitxa>

  
  
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




 #cap {
 
 margin: auto;
 float: none;
 width: 720px;
 height: 100px;
}
#temes{
float: right;
}

 .obscur{
  background-color: rgb(100, 100, 100);
}
.obscur > div > label{
  color:white;
}
</style>
