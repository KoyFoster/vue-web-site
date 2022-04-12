import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    saveUser(state, options) {
      state.user = options.user;
    },
    logout(state) {
      state.user = null;
      console.log('logout:', state);
    },
  },
  getters: {
    loggedIn(state) {
      return state.user !== null ? true : false;
    },
    userName: (state) => {
      let userName = null;
      if (state.user !== null) userName = JSON.parse(state.user).username;
      return userName;
    },
  },
});

export default store;
