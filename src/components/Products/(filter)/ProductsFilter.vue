<script lang="ts" setup>
import { ref } from 'vue'

const showPriceRange = ref(true)
const loverPrice = ref(0)
const higherPrice = ref(10000)

const togglePriceRange = () => {
  showPriceRange.value = !showPriceRange.value
}
</script>

<template>
  <div class="py-4 border-b-2">
    <div class="flex justify-between">
      <p>Price</p>
      <button @click="togglePriceRange">-</button>
    </div>
    <div v-if="showPriceRange" class="w-full">
      <div class="w-full h-1 bg-slate-400"></div>
      <div class="flex justify-between">
        <p>{{ loverPrice }}</p>
        <p>
          {{ higherPrice }}
        </p>
      </div>
    </div>
  </div>
</template>
