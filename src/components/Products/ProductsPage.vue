<script lang="ts" setup>
import ProductsNavbar from './ProductsNavbar.vue';
import { defineProps } from 'vue'

defineProps({
  type: String,
  item: String,
})
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
        <p>
          Sort By: Recommended
        </p>
      </div>
      <div class="">
        <div class="bg-slate-400 w-[200px] h-[200px]"></div>
      </div>
    </div>
  </div>
</template>
