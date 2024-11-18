<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  score: Number,
  reviewAmount: Number,
})

const fullStars = computed(() => Math.floor(props.score!))
const hasHalfStar = computed(() => props.score! % 1 >= 0.5)

</script>

<template>
  <div class="flex space-x-1 items-center justify-center">
    <ul class="flex space-x-1" v-if="score && score > 0">
      <li v-for="n in fullStars" :key="n">
        <font-awesome-icon :icon="['fas', 'star']" class="text-[#FF5F42] h-4 w-4" />
      </li>
    </ul>
    <font-awesome-icon
      v-if="hasHalfStar"
      :icon="['fas', 'star-half']"
      class="text-[#FF5F42] h-4 w-4"
    />
    <p>{{ score }} ({{ reviewAmount }})</p>
  </div>
</template>
