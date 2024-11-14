<script lang="ts" setup>
import OrangeShoppingButton from '../(utils)/OrangeShoppingButton.vue'
import ProductStars from './ProductStars.vue'

import { ref, defineProps } from 'vue'

defineProps({
  imageUrl: String,
  score: Number,
  price: Number,
  productName: String,
  productId: String,
})


const amount = ref(1)

const subtracktOne = () => {
  amount.value = amount.value - 1
}
const addOne = () => {
  amount.value = amount.value + 1
}
</script>

<template>
  <div class="group flex flex-col space-y-4 items-center justify-center">
    <div class=" w-[200px] h-[200px] overflow-hidden relative">
      <div class="group-hover:bg-slate-300 flex items-end hover:bg-opacity-20 w-[200px] h-[200px]">
      <img class="h-[200px] w-[200px]" :src="imageUrl">

        <div
          class="bg-white bg-opacity-30 h-10 w-full flex items-center justify-center absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        >
          <p>Quick View</p>
        </div>
      </div>
    </div>
    <p class="border-b-2">{{ productName }}</p>
    <p>${{ price?.toString() }}</p>
    <ProductStars :score="4.6" :reviewAmount="7"/>
    <div class="w-full border-2 flex justify-between items-center">
      <button class="px-2 text-xl" :disabled="amount < 2" @click="subtracktOne">-</button>
      <p>{{ amount }}</p>
      <button class="px-2 text-xl" @click="addOne">+</button>
    </div>
    <OrangeShoppingButton label="add to cart" />
  </div>
</template>
