<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign Up</h1>
    <label>Username: </label>
    <div class="flex">
      <input
        type="username"
        required
        v-model="username"
        @blur="handleNameChange"
      />
      <div class="loader" v-if="requestingName"></div>
    </div>
    <div v-if="dataName !== null">
      <p class="error">{{ errorName }}</p>
      <p :class="dataName.nameTaken ? 'taken' : 'not-taken'">
        {{ dataName.msg }}
      </p>
    </div>
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p class="error">{{ passwordError }}</p>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div class="flex">
      <button type="submit" v :disabled="!username || !password">
        Create Account
      </button>
      <div class="loader" v-if="requesting"></div>
    </div>
  </form>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { onMounted, ref } from "@vue/runtime-core";
import { userService } from "@/services/user.services";
import { DelayedCall } from "@/composables/timers/timers";
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

    // User Registration
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

    // Username validation
    const timeId = ref(0);
    const delay = 500;
    const {
      data: dataName,
      error: errorName,
      load: loadName,
      requesting: requestingName,
    } = userService.nameexists();
    const nameError = ref("");

    const handleNameChange = async () => {
      nameError.value = null;
      clearTimeout(timeId.value, delay);
      timeId.value = 0;
      if (username.value.length < 2) return;

      requestingName.value = true;
      DelayedCall(() => {
        loadName(username.value);
        clearTimeout(timeId.value);
        timeId.value = 0;
      }, delay);
    };

    return {
      username,
      password,
      terms,
      error,
      requesting,
      handleSubmit,

      errorName,
      loadName,
      requestingName,
      dataName,
      handleNameChange,
    };
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
.taken {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.not-taken {
  color: green;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.border {
  border: 1px solid red;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
}
.flex {
  display: flex;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
