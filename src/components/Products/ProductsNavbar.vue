<script lang="ts" setup>
import { defineProps, ref } from 'vue'


defineProps({
  type: String,
  item: String,
})

const showPriceRange = ref(true)

const togglePriceRange = () => {
  showPriceRange.value = !showPriceRange.value
}

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
          :to="{ path: '/products', query: { type: 'dogs', item: 'toy' } }"
        >
          DOGS
        </RouterLink>
        <RouterLink class="hover:text-[#06808B]" to="/cats">Cats</RouterLink>
        <RouterLink class="hover:text-[#06808B]" to="/birds">Birds</RouterLink>
        <RouterLink class="hover:text-[#06808B]" to="/fish">Fish & Aquatics</RouterLink>
        <RouterLink class="hover:text-[#06808B]" to="/smallanimals">Small Animals</RouterLink>
        <RouterLink class="hover:text-[#06808B]" to="/reptiles">Reptiles</RouterLink>
      </div>
      <h2 class="text-2xl py-4 border-b-2">Filter By</h2>
      <div class="py-4 border-b-2">
        <div class="flex justify-between">
          <p>Price</p>
          <button @onclick="togglePriceRange">-</button>
        </div>
        <div v-if="showPriceRange">

          0 - - - - 10 000
        </div>
      </div>
    </div>
</template>
