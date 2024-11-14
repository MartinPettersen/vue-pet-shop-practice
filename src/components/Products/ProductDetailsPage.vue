<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import ProductStars from './ProductStars.vue'

defineProps({
  type: String,
  item: String,
  id: String,
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
  <div class="flex flex-col items-center justify-center">
    <div class="w-[55%] py-10">
      <h2 class="text-lg">Home/{{ type }}/{{ item }}/productname</h2>
    </div>
    <div class="flex space-x-4">
      <div class="flex flex-col w-[50%]">
        <img
          class="h-auto w-[100%]"
          src="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg"
        />
        <div>
          <p>Product description</p>
        </div>
      </div>

      <div class="flex space-y-4 flex-col w-[50%] p-4">
        <h1 class="text-[#FF5F42] font-bold text-2xl">ProductName</h1>
        <div class="w-[40%]">

          <ProductStars :score="4.6" :reviewAmount="7"/>
        </div>

        <p>SKU:{{ id }}</p>
        <p class="font-bold text-lg">$123</p>
        <div>
          <p>Quantity</p>
          <div class="flex border-2 w-[20%] border-black items-center justify-evenly">
            <p>{{ amount }}</p>
            <div class="flex flex-col justify-evenly">
              <button class="text-xs" @click="addOne">
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
              </button>
              <button class="text-xs" :disabled="amount < 2" @click="subtracktOne">
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </button>
            </div>
          </div>
        </div>
        <div class="w-[100%] space-y-2">
          <button class="bg-[#FF5F42] hover:bg-[#f16a52] mt-0 mb-0 w-[80%] py-2 text-black">
            Add to Cart
          </button>
          <button class="bg-[#000000] hover:bg-[#262525] mt-0 mb-0 w-[80%] py-2 text-white">
            Buy Now
          </button>
        </div>
        <div>
          <p>Product Info</p>
        </div>
      </div>
    </div>
  </div>
</template>
