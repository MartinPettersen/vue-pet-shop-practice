<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  imagurl: String,
  price: Number,
  productDescription: String,
})
</script>

<template>
  <div class="space-y-2 flex flex-col items-center justify-center">
    <img class="h-auto w-[190px]" :src="imagurl" />
    <div class="border-b-2">
      <p>{{ productDescription }}</p>
    </div>
    <p>${{ price }}</p>
  </div>
</template>
