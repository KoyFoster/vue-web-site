<template>
  <button class="logged-user" v-if="user">{{ user.name }}</button>
  <button class="logged-user" v-else>[Sign In/Sign Up]</button>
</template>

<script>
export default {
  props: ["user"],
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
