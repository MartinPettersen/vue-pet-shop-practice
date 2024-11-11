<script lang="ts" setup>
import HomePetCard from './HomePetCard.vue';

</script>
      <HomePetCard headline="" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="" :underline="true"/>

<template>
  <div class="flex flex-col items-center justify-center text-white">
    <div class="flex space-x-4 w-[70%] mt-20 items-center justify-center">

      <HomePetCard headline="Deal of the Week" label="50% of on dog treats" imageUrl="" cardWidth="30" :underline="true"/>
      <HomePetCard headline="Dogs" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="50" :underline="false"/>
      <HomePetCard headline="Cats" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="20" :underline="false"/>
    </div>
    <div class="flex space-x-4 w-[70%] mt-20 items-center justify-center">
      <HomePetCard headline="Birds" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="30" :underline="false"/>
      <HomePetCard headline="Fish" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="70" :underline="false"/>

    </div>

    <div class="flex space-x-4 w-[70%] mt-20 items-center justify-center">
      <HomePetCard headline="Small Animals" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="70" :underline="false"/>
      <HomePetCard headline="Reptiles" label="I'm a title. ​Click here to edit me." imageUrl="" cardWidth="30" :underline="false"/>

    </div>
  </div>
</template>
