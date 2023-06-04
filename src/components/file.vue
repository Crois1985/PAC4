<script setup lang="ts">



 
defineProps<{
  mostra: string
}>()


</script>

<template>
  
  <div id="poke_profile" :style="`--visibility: ${mostra}`">

        <div class="navbar">
            <a id="back-b" href="index.html"><div class="butt"><label>Torna enrera </label></div></a>
        </div>

        <h2 id="pk_name"></h2>
        <h4 id="tipus"></h4>
        <div id="imgs"> 
            <img id="front" src="">
            <img id="back" src="">
        </div>
    
        <h4 id="atac"></h4>
        <h4 id="defensa"></h4>
        


    </div>
</template>

<style scoped>
 #poke_profile
{
    margin: auto;
    
    width: 720px;
    height: 512px;
}
.navbar
{
  text-align: right;
}
</style>
