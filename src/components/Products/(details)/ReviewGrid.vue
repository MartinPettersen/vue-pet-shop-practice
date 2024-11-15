<script lang="ts" setup>
import ReviewCard from './ReviewCard.vue';

</script>

<template>

  <div class="w-full  flex items-center justify-center">
    <div class="grid grid-cols-2 w-full gap-10 p-10">
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
      <ReviewCard name="Jill Wynstein" date="01.02.2021" :score="4.6" headline="Great Product" review="Cured my pet's nightmares"/>
    </div>
  </div>
</template>
