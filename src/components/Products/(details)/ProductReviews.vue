<script lang="ts" setup>
import StarRow from '../../(utils)/StarRow.vue'
import ReviewGrid from './ReviewGrid.vue';
import ReviewLine from './ReviewLine.vue';
import type { Review } from '@/types';

import { defineProps, type PropType } from 'vue';

const props = defineProps({
  reviews: Object as PropType<Review[]>,
})


const starChecker = (starNumber: number) => {

  let starCounter = 0
  for (let i = 0; i < props.reviews?.length; i++) {
    if (starNumber === props.reviews[i].stars) {
      starCounter += 1;
    }
  }
  return starCounter
}

const averageStars = props.reviews.reduce((sum, review) => sum + review.stars, 0) / props.reviews.length;

</script>

<template>
  <div class="w-[80%] flex flex-col max-w-5xl mt-10">
    <div class="flex justify-evenly">
      <div class="w-[50%] flex flex-col space-y-2">
        <h2 class="font-bold text-2xl">Reviews</h2>
        <StarRow :score="averageStars" />
        <p>Based on {{ reviews.length }} review(s)</p>
        <button class="border-2 border-[#FF5F42] text-[#FF5F42] h-10 w-[14rem]">
          Leave a Review
        </button>
      </div>
      <div class="w-[50%]">
        <ReviewLine label="5 stars" :amount="starChecker(5)" :total="reviews?.length"/>
        <ReviewLine label="4 stars" :amount="starChecker(4)" :total="reviews?.length"/>
        <ReviewLine label="3 stars" :amount="starChecker(3)" :total="reviews?.length"/>
        <ReviewLine label="2 stars" :amount="starChecker(2)" :total="reviews?.length"/>
        <ReviewLine label="1 stars" :amount="starChecker(1)" :total="reviews?.length"/>
      </div>
    </div>
    <ReviewGrid :reviews="reviews"/>
  </div>
</template>
