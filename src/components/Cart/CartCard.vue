<script lang="ts" setup>
import productsData from '@/assets/products.json'
import type { Product } from '@/types'
import { defineProps, watch } from 'vue'
import { useBasketStore } from '@/stores/basket'

const basketStore = useBasketStore()

const props = defineProps({
  id: String,
  amount: Number,
})

const emit = defineEmits(['updateItemTotal']);

const addOneToBasket = (id: string) => {
  basketStore.addToBasket(id, 1)
}

const removeOneFromBasket = (id: string) => {
  basketStore.removeOneFromBasket(id)
}

const removeItemFromBasket = (id: string) => {
  basketStore.removeFromBasket(id)
}

function findProductById(productId: string) {
  const { animals } = productsData

  for (const animal of animals) {
    for (const category of animal.categories) {
      for (const [categoryName, products] of Object.entries(category)) {
        const product = products.find((p: Product) => p.productId === productId)
        if (product) {
          return { ...product, categoryName, animal: animal.animal }
        }
      }
    }
  }

  return null
}

const product = findProductById(props.id!)

const localTotal = product?.price! * props.amount!;


if (product && props.amount !== undefined) {
  watch(
    () => props.amount,
    (newAmount) => {
      emit('updateItemTotal', { id: props.id, total: product.price * newAmount });
    },
    { immediate: true } // Ensure the parent is updated upon mount
  );
}

emit('updateItemTotal', { id: props.id, total: localTotal });

console.log(product)
</script>

<template>
  <div class="flex p-4 justify-between w-full ">
    <div class="flex space-x-2">
      <img class="h-[90px]" :src="product?.imageUrl[0]" />
      <div class="flex flex-col">
        <p class="">{{ product?.productName }}</p>
        <p class="">${{ product?.price }}</p>
        <div class="flex justify-between">

          <div class="border-2 mx-0 border-black flex items-center justify-center w-14">
            <p class="px-2" @click="removeOneFromBasket(id!)">-</p>
            {{ amount }}
            <p class="px-2" @click="addOneToBasket(id!)">+</p>
          </div>
        <p class="">${{ (product?.price! * amount!) }}</p>

        </div>
      </div>
    </div>
    <font-awesome-icon :icon="['fas', 'trash-can']" @click="removeItemFromBasket(id!)" />
  </div>
</template>
