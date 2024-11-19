<script lang="ts" setup>
import { useBasketStore } from '@/stores/basket'
import CartCard from './CartCard.vue'
import { computed, ref, defineEmits } from 'vue'
import productsData from '@/assets/products.json';
import type { Product } from '@/types';

const basketStore = useBasketStore()
const totalAmount = ref(0)

const itemTotals = ref<Record<string, number>>({});

const emit = defineEmits(['toggleShoppingCart'])


const updateItemTotal = ({ id, total }: { id: string; total: number }) => {
  itemTotals.value[id] = total;

  totalAmount.value = Object.values(itemTotals.value).reduce(
    (sum, itemTotal) => sum + itemTotal,
    0
  );
};


const totalAmountComputed = computed(() => {
  return basketStore.basket.reduce((sum, item) => {
    const product = findProductById(item.id);
    return sum + (product?.price ?? 0) * item.amount;
  }, 0);
});

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

</script>

<template>
  <div
    class="bg-white h-screen w-[400px] z-[9999] border-2 flex items-center flex-col border-black absolute top-0 right-0"
  >
    <div class="flex justify-between p-4 items-center w-[90%] border-b-2">
      <div class="flex space-x-1 items-center justify-center">
        <h2 class="font-bold text-lg">Cart</h2>
        <p>({{ basketStore.basket.length }} items)</p>
      </div>
      <font-awesome-icon @click="emit('toggleShoppingCart')" :icon="['fas', 'xmark']" class="w-7 h-7 hover:cursor-pointer font-extralight" />
    </div>

    <div class="w-full h-full flex flex-col items-center justify-center p-2">
      <p v-if="basketStore.basket.length === 0">Your Cart is Empty</p>
      <div class="h-full w-full" v-if="basketStore.basket.length > 0">
        <div class="w-full" v-for="item in basketStore.basket" :key="item.id">
          <CartCard :id="item.id" :amount="item.amount" @updateItemTotal="updateItemTotal"/>
        </div>
      </div>
      <div
        v-if="basketStore.basket.length > 0"
        class="w-[90%] space-y-4 border-t-2 p-2 flex flex-col items-center justify-center"
      >
        <div class="flex justify-between w-full">
          <h2 class="text-xl">Subtotal</h2>
          <p class="text-xl">${{ totalAmountComputed }}</p>
        </div>
        <div class="w-full">
          <p>Taxes and shipping are calculated at checkout.</p>
        </div>
        <button class="bg-black w-full mt-0 mb-10 px-4 py-2 text-white">Checkout</button>
        <button class="bg-white w-full border-2 border-black mt-0 mb-10 px-4 py-2 text-black">
          View Cart
        </button>
        <div class="flex space-x-2 items-center justify-center">
          <font-awesome-icon :icon="['fas', 'lock']" />
          <p>Secure Checkout</p>
        </div>
      </div>
    </div>
  </div>
</template>
