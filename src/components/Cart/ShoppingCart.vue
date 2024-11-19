<script lang="ts" setup>

import { useBasketStore } from '@/stores/basket'; // Adjust the path as needed

const basketStore = useBasketStore();


</script>

<template>

  <div class="bg-white h-screen w-[400px] z-100 border-2  flex items-center flex-col border-black absolute top-0 right-0">
    <div class="flex justify-between p-4 items-center w-[90%] border-b-2 ">
      <div class="flex space-x-1 items-center justify-center">
        <h2 class="font-bold text-lg">Cart</h2>
        <p>({{ basketStore.basket.length }} items)</p>
      </div>
      <font-awesome-icon :icon="['fas', 'xmark']" class="w-7 h-7 font-extralight" />
    </div>

    <div>
      <p>Your Cart is Empty</p>
    </div>
  </div>
</template>
