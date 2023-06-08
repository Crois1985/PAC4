<script setup lang="ts">
import Card from '@/components/card.vue'
</script>

<script  lang="ts">


export default  {
props:
{
  tema:String
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
              
              },

     cercar()
          {
           //Ya veremos que se hace aqui
          
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
   <div id="llistat" >
        <div class="navbar">
            <label>Cerca a la llista:</label>
            <input type="search" v-model="cerca" placeholder="Cerca pokemon">
            <a class="abut" href="index.html" @click="get_rnd(10,1000)"><div class="butt"><label>Refresca la llista </label></div></a>
        </div>

  <!--Aqui van las tarjetas-->

        <Card :ide=ids[0] :filtre=cerca></Card> 
        <Card :ide=ids[1] :filtre=cerca></Card>
        <Card :ide=ids[2] :filtre=cerca></Card>
        <Card :ide=ids[3] :filtre=cerca></Card>
        <Card :ide=ids[4] :filtre=cerca></Card>
        <Card :ide=ids[5] :filtre=cerca></Card>
        <Card :ide=ids[6] :filtre=cerca></Card>
        <Card :ide=ids[7] :filtre=cerca></Card>
        <Card :ide=ids[8] :filtre=cerca></Card>
        <Card :ide=ids[9] :filtre=cerca></Card>
        


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
    background-color: transparent;
    
}
#navbar{
  width:720px;
  height: 100px;
}

.butt 
{
display: block;
 width: 120px;
 height: 25px;
 margin-left: 5px;

 background-color: #EFEFEF;
 border-color: gray;
 border-radius: 20px;
 
 transition: background-color 1s;

}
a
 {
  display:block;
  width:200px;
  height: 25px;
 }
 .abut
 {
  margin-left: 600px;
  width: 120px;
 }


.butt label{
    width: 100%;
    opacity:1;
  
    margin-top: 15px;
}
.butt:hover
{
    transform: scale(1.2, 1.2);
     background-color: gray; 

    
}

</style>
