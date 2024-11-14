<script lang="ts" setup>
import ProductCard from './ProductCard.vue';
import ProductsNavbar from './ProductsNavbar.vue';
import { defineProps, ref } from 'vue'

defineProps({
  type: String,
  item: String,
})

const showSortMenu = ref(false)

const toggleSortMenu = () => {
  showSortMenu.value = !showSortMenu.value
}

</script>

<template>
  <div class="p-10 flex">

    <ProductsNavbar />
    <div class="flex flex-col items-center justify-center w-[86%]">
      <h1 class="text-[#FF5F42] capitalize font-bold text-5xl p-10">{{ item }}</h1>
      <div class="flex w-[90%] justify-between">
        <p>
          3 Products
        </p>
        <div class="flex space-x-3">
          <p>
            Sort By: Recommended
          </p>
          <div class="flex items-center justify-center">
            <font-awesome-icon v-if="!showSortMenu" @click="toggleSortMenu" :icon="['fas', 'chevron-down']" />
            <font-awesome-icon v-if="showSortMenu" @click="toggleSortMenu" :icon="['fas', 'chevron-up']" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-10 pt-10">
        <ProductCard productName="test" :type="type" :item="item" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        <ProductCard productName="test" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>


      </div>
    </div>
  </div>
</template>
