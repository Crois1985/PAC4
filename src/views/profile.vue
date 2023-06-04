import Header from './components/header.vue'
import modes from './components/modes.vue'
import Llistat from './components/llista.vue'
import Fitxa from './components/file.vue'
import { temas } from '@/components/modes.vue'

<template>
  <modes></modes>
  <Header></Header>
  <Fitxa true></Fitxa>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
