<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign In</h1>
    <label>User Name: </label><input type="text" required v-model="username" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p class="error">{{ error }}</p>

    <div v-if="!requesting" class="submit">
      <button type="submit" v :disabled="!username || !password">
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
import { userService } from "@/services/user.services";
import { ref } from "@vue/reactivity";
import store from "@/store";
import router from "@/router";
import { onMounted } from "@vue/runtime-core";
export default {
  methods: {},
  setup() {
    // on mount check if logged in and then redirect back to home
    onMounted(() => {
      if (store.getters.userName !== null) redirect();
    });
    function redirect() {
      router.push({ name: "Games" });
    }

    const email = ref("");
    const username = ref("");
    const password = ref("");

    const { error, load, requesting } = userService.signin();
    const handleSubmit = async () => {
      error.value = null;
      await load(username.value, password.value);

      // 1. on success
      if (error.value !== null) {
        error.value = "Username or password does not match.";
      } else {
        redirect();
      }
    };

    return { username, email, password, error, requesting, handleSubmit };
  },
};
</script>

<style>
.signin-type-container {
  display: flex;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.pill:hover {
  background: red;
  color: white;
}
button {
  background: rgb(109, 109, 251);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 2px;
}
button:disabled {
  background: rgb(52, 52, 94);
}
.submit {
  text-align: center;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
