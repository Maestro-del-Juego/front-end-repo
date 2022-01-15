<template>
  <div id="nav">
    <img src="@/assets/logo.png" id="logo" />
    <div id="site-nav">
      <router-link to="/">Your Collection</router-link> |
      <router-link to="/about">Wishlist</router-link> |
      <router-link to="/">Browse Games</router-link> |
      <router-link to="/about">Game Night!</router-link>
    </div>
    <div id="account-links">
      <router-link v-if="!userStore.state.loggedIn" to="/login"
        >Login</router-link
      >
      |
      <p v-if="userStore.state.loggedIn">You're Logged In!</p>
      |
      <router-link v-if="!userStore.state.loggedIn" to="/register"
        >Register</router-link
      >
      <button
        v-if="userStore.state.loggedIn"
        type="submit"
        @click="userStore.logout()"
      >
        Log Out
      </button>
    </div>
  </div>
  <hr id="hr-one" />
  <hr id="hr-two" />
</template>

<style>
#nav {
  padding: 20px 30px 20px 30px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#site-nav {
  padding: 30px 0px 0px 0px;
}

#account-links {
  padding: 30px 0px 0px 0px;
}

#hr-one {
  background-color: #42b983;
  height: 6px;
}

#hr-two {
  background-color: blue;
  height: 6px;
}

#logo {
  height: 90px;
  border-radius: 100px;
}

hr {
  margin: 0px;
}
</style>
<script>
import { defineComponent } from 'vue'
import userStore from '@/stores/user'

export default defineComponent({
  setup () {
    return { userStore }
  }
})
</script>
