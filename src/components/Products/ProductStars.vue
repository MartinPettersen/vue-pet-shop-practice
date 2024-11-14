<script lang="ts" setup>

import { defineProps } from 'vue';

defineProps({
  score: Number,
  reviewAmount: Number,
})

</script>

<template>
  <div class="flex space-x-1 items-center justify-center">
    <font-awesome-icon :icon="['fas', 'star']" class="text-[#FF5F42] h-4 w-4" />
    <font-awesome-icon :icon="['fas', 'star']" class="text-[#FF5F42] h-4 w-4" />
    <font-awesome-icon :icon="['fas', 'star']" class="text-[#FF5F42] h-4 w-4" />
    <font-awesome-icon :icon="['fas', 'star']" class="text-[#FF5F42] h-4 w-4" />
    <font-awesome-icon :icon="['fas', 'star-half']" class="text-[#FF5F42] h-4 w-4" />
    <p>{{ score }} ({{ reviewAmount }})</p>
  </div>
</template>
