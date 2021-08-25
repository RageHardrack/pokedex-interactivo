<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 "
  >
    <header class="w-full">
      <TheNavbar />
    </header>

    <main class="container flex-grow space-y-8">
      <SearchBar />

      <Pokedex :pokemons="pokemons" :page="page" :totalPages="totalPages" />
    </main>

    <footer>Realizado para Codealo</footer>
  </div>
</template>

<script setup>
import { onBeforeMount, provide, ref, watchEffect } from "vue";
import { getPokeData, getPokemons } from "./services/pokeapi";

import Pokedex from "./components/Pokedex.vue";
import SearchBar from "./components/SearchBar.vue";
import TheNavbar from "./components/TheNavbar.vue";

const pokemons = ref([]);
const page = ref(0);
const totalPages = ref(0);
const loading = ref(false);
const favorites = ref([]);

const fetchPokemons = async () => {
  try {
    loading.value = true;
    const { count, results } = await getPokemons(25, page.value * 25);
    const promises = results.map(async (pokemon) => {
      return await getPokeData(pokemon.url);
    });

    pokemons.value = await Promise.all(promises);
    loading.value = false;
    totalPages.value = Math.ceil(count / 25);
  } catch (error) {
    console.error(error);
  }
};

const lastPage = () => {
  page.value = Math.max(page.value - 1, 0);
};

const nextPage = () => {
  page.value = Math.min(page.value + 1, totalPages.value);
};

const updateFavoritePokemons = (pokeName) => {
  if (favorites.value.includes(pokeName)) {
    favorites.value = favorites.value.filter((pokemon) => pokemon !== pokeName);
  } else {
    favorites.value.push(pokeName);
  }

  localStorage.setItem("favoritesPokemons", JSON.stringify(favorites.value));
};

provide("loading", loading);
provide("favorites", favorites);
provide("lastPage", lastPage);
provide("nextPage", nextPage);
provide("updateFavoritePokemons", updateFavoritePokemons);

watchEffect(() => fetchPokemons());

onBeforeMount(() => {
  fetchPokemons();
  favorites.value = JSON.parse(localStorage.getItem("favoritesPokemons")) || [];
  console.log(JSON.parse(localStorage.getItem("favoritesPokemons")));
});
</script>
