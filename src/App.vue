<template>
  <div class="" id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Games' }">Games</router-link>
    <router-link v-if="!loggedIn" :to="{ name: 'SignIn' }">SignIn</router-link>
    <router-link v-if="!loggedIn" :to="{ name: 'SignUp' }">SignUp</router-link>
    | <router-link :to="{ name: 'About' }">About</router-link> |
    <LoggedUser />
  </div>
  <router-view />
</template>

<script>
import LoggedUser from "./components/LoggedUser.vue";
import store from "./store";
export default {
  name: "App",
  components: { LoggedUser },
  computed: {
    loggedIn() {
      return store.getters.loggedIn;
    },
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
}

#nav {
  padding: 16px;
  background: #42b983;
  border-radius: 4px;
}

#nav a {
  padding: 4px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: white;
  border-radius: 2px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
body {
  background: #444;
}
</style>
