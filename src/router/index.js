import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/Games/GamesView.vue";
import GameView from "../views/Games/GameView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Games",
    name: "Games",
    component: GamesView,
  },
  {
    path: "/Games/:id",
    name: "Game",
    component: GameView,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUpView,
  },
  {
    path: "/About",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BaseURL),
  routes,
});

export default router;
