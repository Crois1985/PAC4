<script setup lang="ts">
import Card from '@/components/card.vue'
</script>

<script  lang="ts">


export default  {
props:
{
  tema:'',

}  ,
data(){
  return {
  ids:[],
   cerca:'' 
}
},
  methods: {

    get_index()
    {
      this.ids=sessionStorage.getItem("ids").split(',');
      console.log(this.ids.toString())
    },
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
      this.ids=nums;
      console.log("numeros ",this.ids.toString())
      console.log(sessionStorage.getItem("ids"))
      return nums.toString()
    
    }

   

  },


  created()
  {
    this.get_index()
  }

}
</script>

<template>
  <!--:style="`--visibility: ${mostra}`"-->
   <div id="llistat" :class="{obscur:tema}">
        <div class="navbar">
            <label>Cerca a la llista:</label>
            <input type="search" v-model="cerca" placeholder="Cerca pokemon">
            <a class="abut" href="index.html" @click="get_rnd(10,1000)"><div class="butt"><label>Refresca la llista </label></div></a>
        </div>

  <!--Aqui van las tarjetas-->

        <Card v-for="pok in ids" :ide=pok :filtre=cerca :class="{obscur:tema}"></Card> 
      
        


    </div>
</template>

<style scoped>

div{
  display:block;
  
}
#llistat
{
    
    width:720px;
    height: 512px;
    margin: auto;
   
    
}
.navbar{
  width:720px;
  height: 100px;
  float:left;
  margin-top: 20px;
}

.navbar > label
{
  margin-left: 15px;
}

.butt 
{
display: block;
 width: 120px;
 height: 25px;
 margin-left: 5px;
 margin-right: 100px;

 background-color: rgb(230,230,230);
 border-color: gray;
 border-radius: 20px;
 
 

}
a
 {
  display:block;
  width:200px;
  height: 25px;
 }
 .abut
 {
  margin-right: 20px;
  width: 120px;
  float: right;
 }


.butt label{
    width: 100%;
    opacity:1;
    margin-left: 5px;
    margin-top: 15px;
}
.butt:hover
{
  transform: scale(1.1, 1.1);
      
     box-shadow: 5px 10px;

    
}

.obscur{
  background-color: rgb(50,50,50);
}
.obscur > div >label
{color: white;
}

</style>
