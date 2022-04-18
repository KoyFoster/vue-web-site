<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign Up</h1>
    <label>Username: </label
    ><input type="username" required v-model="username" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p class="error">{{ passwordError }}</p>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <button type="submit" v :disabled="!username || !password">
      Create Account
    </button>
  </form>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { onMounted, ref } from "@vue/runtime-core";
import { userService } from '@/services/user.services';
export default {
  data() {
    return {

      // errors
      passwordError: null,
    };
  },

  setup() {
    // on mount check if logged in and then redirect back to home
    onMounted(() => {
      if (store.getters.userName !== null) redirect();
    });
    function redirect() {
      router.push({ name: "Games" });
    }

    const username = ref("");
    const password = ref("");
    const terms = ref("");

    const { error, load, requesting } = userService.signup();
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

    return { username, password, terms, error, requesting, handleSubmit };
  },
};
</script>

<style>
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
  background: rgb(51, 51, 207);
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
