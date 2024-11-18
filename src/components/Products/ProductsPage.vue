<script lang="ts" setup>
import ProductCard from './ProductCard.vue';
import ProductsNavbar from './ProductsNavbar.vue';
import { defineProps, ref } from 'vue'
import productsData from '@/assets/products.json';

const props = defineProps({
  type: String,
  item: String,
})

const showSortMenu = ref(false)

const toggleSortMenu = () => {
  showSortMenu.value = !showSortMenu.value
}

const products = ref([])


const animalProducts = productsData["animals"].find(animal => animal.animal === props.type)

if (animalProducts !== undefined && props.item !== undefined) {

  if (props.item !== "all") {

    const temp = animalProducts.categories.find(category => "dog beds" in category)


    products.value = temp[props.item]
  } else {


    animalProducts.categories.forEach(category => {
      // For each category, log its products
      Object.keys(category).forEach(categoryName => {
        products.value = category[categoryName]
      });
    });
  }
}

</script>

<template>
  <div class="p-10 flex">

    <ProductsNavbar :type="type" :item="item"/>
    <div class="flex flex-col items-center justify-center w-[86%]">
      <h1 class="text-[#FF5F42] capitalize font-bold text-5xl p-10">{{ item }}</h1>
      <div class="flex w-[90%] justify-between">
        <p>
          {{ products.length }} Products
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
        <div v-for="(product, index) in products" :key="index">
          <ProductCard :product="product" productName="test" :type="type" :item="item" productId="2" :score="4" :price="40" imageUrl="https://static.wixstatic.com/media/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cf0de513f3e4c03a3be0896bb0c0f11~mv2.jpg"/>
        </div>
      </div>
    </div>
  </div>
</template>
