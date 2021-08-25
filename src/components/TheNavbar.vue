<template>
  <nav class="container flex items-center h-24 mx-auto justify-evenly">
    <div />

    <img :src="imgSrc" alt="Poke API Logo" class="w-40" />

    <div>
      <Heart customClass="w-12 h-12" />
    </div>
  </nav>
</template>

<script setup>
import Heart from "./Heart.vue";

const imgSrc =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
</script>
