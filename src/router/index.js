import { createRouter, createWebHistory } from "vue-router";

import Pokedex from "../views/Pokedex";
import PokemonDetails from "../components/pokedex/PokemonDetails";

import store from "../store/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/pokedex" },
    {
      path: "/pokedex",
      component: Pokedex,
      children: [
        {
          path: ":id",
          name: "active-pokemon",
          components: { pokemonDetails: PokemonDetails },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/pokedex") {
    store.dispatch("clearPokedex");
  }
  next();
});

export default router;
