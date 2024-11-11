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
  <div
  :style="{
      width: `${cardWidth}%`,
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  :class="`relative w-[${cardWidth}%] p-10 h-[350px] bg-gray-500 overflow-hidden`">
  <div class="absolute inset-0 bg-gray-800 opacity-40"></div>
    <div class="relative space-y-2 w-[120px] flex flex-col justify-end h-full">
      <h1 :class="[{ 'border-b-2': underline }, 'text-3xl', 'font-bold']">{{ headline }}</h1>
      <p>{{ label }}</p>
      <OrangeShoppingButton label="Shop now" />
    </div>
  </div>
</template>
