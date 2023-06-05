<script setup lang="ts">
import Card from './card.vue'
</script>

<script  lang="ts">


export default  {
  
data(){
  return {
  ids:[]}
},
  methods: {
    get_index()
    {
      this.ids=sessionStorage.getItem("ids").split(',');
      console.log(this.ids.toString())
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
            <input type="search" id="find" oninput="cerca();">
            <a href="index.html" onclick="sessionStorage.setItem('ids', get_rnd(10,1000));"><div class="butt"><label>Refresca la llista </label></div></a>
        </div>

  <!--Aqui van las tarjetas-->
 <!--....-->
  <!--Final-->
        <Card ide={{ids[1]}}></Card> 
        <Card ide={{ids[1]}}></Card>
        <Card ide={{ids[2]}}></Card>
        <Card ide={{ids[3]}}></Card>
        <Card ide={{ids[4]}}></Card>
        <Card ide={{ids[5]}}></Card>
        <Card ide={{ids[6]}}></Card>
        <Card ide={{ids[7]}}></Card>
        <Card ide={{ids[8]}}></Card>
        <Card ide={{ids[9]}}></Card>
        


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
    background-color: red;
    
}
#navbar{
  width:720px;
  height: 100px;
}

.butt 
{
display: block;
 width: 200px;
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
  height: 25px;
 }


.butt label{
    width: 100%;
    opacity:1;
  
    margin-top: 15px;
}
.butt:hover
{
    transform: scale(1.2, 1.2);
    
}

</style>
