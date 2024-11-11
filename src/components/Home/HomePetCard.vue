<script lang="ts" setup>
import { defineProps } from 'vue'
import OrangeShoppingButton from '../(utils)/OrangeShoppingButton.vue'

defineProps({
  headline: String,
  label: String,
  imageUrl: String,
  cardWidth: String,
  underline: Boolean,
})
</script>

<template>
<div :style="{ width: `${cardWidth}%` }" class="p-10 h-[350px] bg-gray-500">
    <div class="space-y-2 w-[120px] flex flex-col justify-end h-full">
      <h1 :class="[{ 'border-b-2': underline }, 'text-3xl', 'font-bold']">{{ headline }}</h1>
      <p>{{ label }}</p>
      <OrangeShoppingButton label="Shop now" />
    </div>
  </div>
</template>
