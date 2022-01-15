<template>
  <Navbar />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbar.vue' // @ is an alias to /src

@Options({
  components: {
    Navbar
  }
})
export default class Home extends Vue {}
</script>
