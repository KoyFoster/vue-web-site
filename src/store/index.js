import { createStore } from "vuex";

const store = createStore({
  state() {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("user:", user);
    return {
      user: user ? user : null,
      buffer: "Nothing",
    };
  },

  mutations: {
    saveUser(state, options) {
      state.user = options.user;
      localStorage.setItem("user", JSON.stringify(options.user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    randNum(state) {
      state.buffer = Math.random();
    },
  },

  // used for any asynchronous tasks
  // should be used for anything in general
  actions: {
    delayedCall: (context) => {
      setTimeout(function () {
        context.commit("randNum");
      }, 2000);
    },
    saveUser: (context, options) => {
      context.commit("saveUser", options);
    },
  },

  getters: {
    loggedIn(state) {
      return state.user !== null ? true : false;
    },
    userName: (state) => {
      return state.user ? state.user.username : null;
    },
  },

  // mapping
});

export default store;
