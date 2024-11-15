<script lang="ts" setup>
import StarRow from '../../(utils)/StarRow.vue'
import ReviewGrid from './ReviewGrid.vue';
import ReviewLine from './ReviewLine.vue';
</script>

<template>
  <div class="w-[80%] flex flex-col max-w-5xl mt-10">
    <div class="flex justify-evenly">
      <div class="w-[50%] flex flex-col space-y-2">
        <h2 class="font-bold text-2xl">Reviews</h2>
        <StarRow :score="4.6" />
        <p>Based on 7 reviews</p>
        <button class="border-2 border-[#FF5F42] text-[#FF5F42] h-10 w-[14rem]">
          Leave a Review
        </button>
      </div>
      <div class="w-[50%]">
        <ReviewLine label="5 stars" :amount="7" :total="14"/>
        <ReviewLine label="4 stars" :amount="2" :total="14"/>
        <ReviewLine label="3 stars" :amount="3" :total="14"/>
        <ReviewLine label="2 stars" :amount="2" :total="14"/>
        <ReviewLine label="1 stars" :amount="0" :total="14"/>
      </div>
    </div>
    <ReviewGrid />
  </div>
</template>
