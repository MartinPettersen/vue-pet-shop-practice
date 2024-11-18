<script lang="ts" setup>
import ReviewCard from './ReviewCard.vue'
import { defineProps, type PropType } from 'vue'
import type { Review } from '@/types'
defineProps({
  reviews: Object as PropType<Review[]>,
})
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <div class="grid grid-cols-2 w-full gap-10 p-10">
      <div v-for="(review, index) in reviews" :key="index">
        <ReviewCard
          :name="review.name"
          :date="review.date"
          :score="review.stars"
          :headline="review.title"
          :review="review.review"
        />
      </div>
    </div>
  </div>
</template>
