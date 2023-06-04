<script setup lang="ts">


defineProps<{

  ids: string 
}>()



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
 width: 200px;
 /*height: 50px;*/
 margin-left: 5px;

 background-color: #EFEFEF;
 border-color: gray;
 border-radius: 20px;
 
 transition: background-color 1s;

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
