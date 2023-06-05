<script>
import {useStore} from "../stores/store.js";

const store = useStore();

  import Header from '../components/header.vue'
  import Modes from '../components/modes.vue'
  import Llistat from '../components/llista.vue'
  import Fitxa from '../components/file.vue'
  import { temas } from '@/components/modes.vue'

export {ids}
export default {
   
  data() { 
      return {
        ids :''  /*: '../assets/clar.css'*/
      }
    }, 
   methods: {
     get_rnd(n,max)
     {  
     //n= quantitat de nombres aleatoris
     //max= nombre aleatori mes alt
     
     let nums=[];  //array de numeros
     for(i=0; i<n;i++)
     {
         nums.push(Math.floor(Math.random() * max));
     }
     this.ids=nums
     sessionStorage.setItem("ids", this.nums)
     return nums;
     }

   }}




</script>

<template>
  
  <Modes></Modes>
  <Header></Header>
  <Llistat></Llistat>



</template>
