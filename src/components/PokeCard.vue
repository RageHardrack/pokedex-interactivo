<template>
  <div class="flex items-center space-x-4 bg-white rounded shadow-2xl">
    <div class="flex items-center justify-center w-24 h-24">
      <img :src="pokemon.sprites.front_default" :alt="`${pokemon.name}`" />
    </div>

    <div class="flex flex-col justify-between flex-1 h-full p-2">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl capitalize">{{ pokemon.name }}</h3>
        <div class="text-gray-400">#{{ pokemon.id }}</div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex justify-between space-x-2">
          <div
            v-for="(type, idx) in pokemon.types"
            class="capitalize"
            :key="idx"
          >
            {{ type.type.name }}
          </div>
        </div>

        <button @click="updateFavoritePokemons(pokemon.name)">
          <Heart
            customClass="w-6 h-6"
            :active="favorites.includes(pokemon.name)"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import Heart from "./Heart.vue";

const props = defineProps({
  pokemon: { type: Object },
});

const favorites = inject("favorites");
const updateFavoritePokemons = inject("updateFavoritePokemons");
</script>
