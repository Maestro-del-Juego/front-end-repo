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
import { defineComponent, onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import userStore from '@/stores/user' // @ is an alias to /src

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  setup () {
    onMounted(userStore.checkUser)
  }
})
</script>
