<script  lang="ts">
export default {
  props:
  {
  tema:Boolean,
}}
</script>

<template>
  <div id="title" :class="{obscur:tema}"> 
    <img src="../assets/img/pokedex.png">
    
  </div>
</template>

<style scoped>

div {
  margin: auto;
    float: none;
    width: 720px;
    height: 300px;
}
img {
  width: 720px;
    height: 300px;
    mix-blend-mode: multiply;

}
.obscur {

background-color: black;
font:white;


}
.obscur > img{

  transparent:0.8;

}

 
</style>
