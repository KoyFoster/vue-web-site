<template>
  <div class="" id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Games' }">Games</router-link>
    <router-link v-if="showSigns" :to="{ name: 'SignIn' }">SignIn</router-link>
    <router-link v-if="showSigns" :to="{ name: 'SignUp' }">SignUp</router-link>
    | <router-link :to="{ name: 'About' }">About</router-link> |
    <LoggedUser />
  </div>
  <router-view />
</template>

<script>
import { ref } from "@vue/reactivity";
import LoggedUser from "./components/LoggedUser.vue";
export default {
  name: "App",
  components: { LoggedUser },
  setup() {
        localStorage.setItem("name", 'butts');
    const user = localStorage.user;
    const showSigns = ref(!user);
    console.log('butts:', localStorage.name);

    return { showSigns };
  },
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
