<template>
  <div class="flex items-center space-x-4">
    <PaginationButton :left="true" :action="leftClick" />

    <div>{{ page }} de {{ totalPages }}</div>

    <PaginationButton :left="false" :action="rightClick" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import PaginationButton from "./PaginationButton.vue";

const props = defineProps({
  leftClick: { type: Function },
  rightClick: { type: Function },
  page: { type: Number },
  totalPages: { type: Number },
});
</script>
