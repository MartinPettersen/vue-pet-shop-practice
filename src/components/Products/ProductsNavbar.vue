<script lang="ts" setup>
import { defineProps} from 'vue'
import ProductsFilter from './(filter)/ProductsFilter.vue';

defineProps({
  type: String,
  item: String,
})

</script>

<template>
  <div class="w-[14%]">
    <div class="flex space-x-2 items-center">
      <h3 class="">Home</h3>
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="" />

      <h3 class="capitalize">
        {{ type }}
      </h3>
    </div>
    <h2 class="text-2xl py-4 border-b-2">Browse By</h2>
    <div class="flex flex-col space-y-2 py-4">
      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'dogs', item: 'all' } }"
      >
        DOGS
      </RouterLink>

      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'cats', item: 'all' } }"
        >CATS</RouterLink
      >
      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'birds', item: 'all' } }"
        >BIRDS</RouterLink
      >
      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'fish & aquatics', item: 'all' } }"
        >FISH & AQUATICS</RouterLink
      >
      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'small animals', item: 'all' } }"
        >SMALL ANIMALS</RouterLink
      >
      <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: 'reptiles', item: 'all' } }"
        >REPTILES</RouterLink
      >
    </div>
    <h2 class="text-2xl py-4 border-b-2">Filter By</h2>

    <ProductsFilter />
  </div>
</template>
