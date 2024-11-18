<script lang="ts" setup>
import OrangeShoppingButton from '../(utils)/OrangeShoppingButton.vue'
import ProductStars from './ProductStars.vue'
import type { Product } from '@/types';

import { ref, defineProps, type PropType } from 'vue'

const props = defineProps({
  imageUrl: String,
  score: Number,
  price: Number,
  productName: String,
  productId: String,
  type: String,
  item: String,
  product: Object as PropType<Product>,
})


const amount = ref(1)
const averageStars = props.product.reviews.reduce((sum, review) => sum + review.stars, 0) / props.product.reviews.length;

const subtracktOne = () => {
  amount.value = amount.value - 1
}
const addOne = () => {
  amount.value = amount.value + 1
}
</script>

<template>
  <div class="group flex flex-col space-y-4 items-center justify-center">
    <RouterLink   :to="{ path: '/products/details', query: { type: type, item: item, id: productId, product: JSON.stringify(product)} }"
    class=" w-[200px] h-[200px] overflow-hidden relative"> 
      <div class="group-hover:bg-slate-300 flex items-end hover:bg-opacity-20 w-[200px] h-[200px]">
      <img class="h-[200px] w-[200px]" :src="product.imageUrl[0]">

        <div
          class="bg-white bg-opacity-30 h-10 w-full flex items-center justify-center absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        >
          <p>Quick View</p>
        </div>
      </div>
    </RouterLink>
    <p class="border-b-2">{{ product.productName }}</p>
    <p>${{ product.price?.toString() }}</p>
    <ProductStars :score="averageStars" :reviewAmount="product?.reviews.length"/>
    <div class="w-full border-2 flex justify-between items-center">
      <button class="px-2 text-xl" :disabled="amount < 2" @click="subtracktOne">-</button>
      <p>{{ amount }}</p>
      <button class="px-2 text-xl" @click="addOne">+</button>
    </div>
    <OrangeShoppingButton label="add to cart" />
  </div>
</template>
