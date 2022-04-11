<template>
  <form @submit.prevent="handleSubmit">
    <h1>Sign Up</h1>
    <label>Email: </label><input type="email" required v-model="email" />
    <label>Password: </label
    ><input type="password" required v-model="password" />
    <p class="error">{{ passwordError }}</p>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <button type="submit" v :disabled="!email || !password">
      Create Account
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      terms: false,

      // errors
      passwordError: null,
    };
  },

  methods: {
    handleSubmit() {
      console.warn("handleSubmit");
      // validations
      // pwd
      this.password.length <= 5
        ? (this.passwordError =
            "This password must be more then 5 characters long")
        : (this.passwordError = null);

      if (this.passwordError) return;
      console.warn({
        email: this.email,
        password: this.password,
        role: this.role,
        skills: this.skills,
        terms: this.terms,
      });
    },
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
