<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import ProductStars from './ProductStars.vue'
import DetailsCard from './(details)/DetailsCard.vue'
import ProductReviews from './(details)/ProductReviews.vue';
import ProductRecommandations from './(details)/ProductRecommandations.vue';
import type { Product } from '@/types';
import { useRoute } from 'vue-router';

defineProps({
  type: String,
  item: String,
  id: String,
})

const amount = ref(1)
const route = useRoute();
//const productUnparsed = route.query.product as Product;
const product = JSON.parse(route.query.product as string) as Product
const averageStars = product.reviews.reduce((sum, review) => sum + review.stars, 0) / product.reviews.length;

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
      <h2 class="text-lg">Home/{{ type }}/{{ item }}/{{product.productName}}</h2>
    </div>
    <div class="flex space-x-2 w-[90%] max-w-6xl">
      <div class="flex flex-col pl-14 w-[50%]">
        <img
          class="h-auto w-[90%]"
          :src="product.imageUrl"
        />
        <div>
          <p>{{ product.productDescription }}</p>
        </div>
      </div>
      <div class="flex space-y-4 flex-col w-[50%] px-4">
        <h1 class="text-[#FF5F42] font-bold text-2xl">{{product.productName}}</h1>
        <div class="w-[40%]">
          <ProductStars :score="averageStars" :reviewAmount="product.reviews.length" />
        </div>
        <p>SKU:{{ product.productId }}</p>
        <p class="font-bold text-lg">${{ product.price }}</p>
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
        <div class="w-[80%]">
          <DetailsCard :show="true" label="PRODUCT INFO" :info="product.productInfo" />
          <div class="w-full border-b-2"></div>
          <DetailsCard
            :show="false"
            label="RETURN & REFUND POLICY"
            info="I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
          />
          <div class="w-full border-b-2"></div>
          <DetailsCard
            :show="false"
            label="SHIPPING INFO"
            info="I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
          />
        </div>
        <div class="space-x-4">
          <font-awesome-icon class="text-green-600" :icon="['fab', 'whatsapp']" />
          <font-awesome-icon class="h-[14px] text-blue-500" :icon="['fab', 'facebook-f']" />
          <font-awesome-icon class="text-blue-300" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="text-red-600" :icon="['fab', 'pinterest-p']" />
        </div>
      </div>
    </div>
    <ProductReviews :reviews="product.reviews" />
    <ProductRecommandations />
  </div>
</template>
