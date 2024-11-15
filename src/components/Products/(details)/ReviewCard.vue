<script lang="ts" setup>
import StarRow from '@/components/(utils)/StarRow.vue'
import { defineProps } from 'vue'

defineProps({
  name: String,
  date: String,
  score: Number,
  headline: String,
  review: String,
})
</script>

<template>
  <div class="border-2 w-[80%] p-4 rounded-md border-slate-300 flex flex-col space-y-2">
    <div class="flex justify-between">
      <div class="flex space-x-2 items-center justify-center">
        <p>{{ name }}</p>
        <font-awesome-icon :icon="['fas', 'circle']" class="h-[6px]" />
        <p>{{ date }}</p>
      </div>
      <div class="flex flex-col items-center justify-center space-y-[2px]">
        <font-awesome-icon :icon="['fas', 'circle']" class="h-[2px]" />
        <font-awesome-icon :icon="['fas', 'circle']" class="h-[2px]" />
        <font-awesome-icon :icon="['fas', 'circle']" class="h-[2px]" />
      </div>
    </div>
    <StarRow :score="score" />
    <h3 class="font-bold">{{ headline }}</h3>
    <p>{{ review }}</p>
    <div class="flex space-x-2 items-center">
      <p>Was this helpful?</p>
      <div class="flex space-x-2 items-center justify-center">
        <font-awesome-icon :icon="['far', 'thumbs-up']" class="w-4 h-4" />
        <p>Yes</p>
      </div>
      <div class="flex space-x-2 items-center justify-center">
        <font-awesome-icon :icon="['far', 'message']" class="w-4 h-4" />
        <p>Reply</p>
      </div>
    </div>
  </div>
</template>
