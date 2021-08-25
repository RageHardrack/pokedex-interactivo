<template>
  <nav class="container flex items-center h-24 mx-auto justify-evenly">
    <div />

    <img :src="imgSrc" alt="Poke API Logo" class="w-40" />

    <div class="relative">
      <Heart customClass="w-14 h-14" />
      <span
        class="absolute bottom-0 px-4 text-sm text-white bg-black rounded-full  -right-1/4"
        >{{ totalFavorites.length }}</span
      >
    </div>
  </nav>
</template>

<script setup>
import { inject } from "@vue/runtime-core";
import Heart from "./Heart.vue";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

const totalFavorites = inject("favorites");
</script>
