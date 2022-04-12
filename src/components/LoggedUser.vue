<template>
  <button class="logged-user" v-if="getUserName" @click="logout">
    {{ getUserName }}
  </button>
  <button class="logged-user" v-else>[Sign In/Sign Up]</button>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    getUserName() {
      return store.getters.userName ? `@${store.getters.userName}` : null;
    },
  },
  methods: {
    logout() {
      console.log("logout");
      store.commit("logout");
    },
  },
};
</script>

<style>
.logged-user {
  margin: 0 2px;
  padding: 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #42b983;
}
</style>
