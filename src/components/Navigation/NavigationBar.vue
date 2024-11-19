<script lang="ts" setup>
import SearchBar from './SearchBar.vue'
import TopBar from './TopBar.vue'
import { RouterLink } from 'vue-router'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import SideBar from './SideBar.vue'
import ShoppingCart from '../Cart/ShoppingCart.vue'

</script>
<template>
  <TopBar />
  <SearchBar />
  <div class="flex justify-between p-4 mt-8">
    <nav class="text-xs font-bold space-x-6 pl-12">
      <RouterLink class="hover:text-[#06808B]" to="/">SHOP ALL</RouterLink>
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
      <RouterLink class="hover:text-[#06808B]" to="/contact">CONTACT</RouterLink>
    </nav>
    <div class="flex space-x-2 items-center justify-center">
      <RouterLink to="/">
        <UserCircleIcon class="size-8" />
      </RouterLink>
      <RouterLink to="/dogs">Log In</RouterLink>
      <div class="flex">
        <ShoppingCartIcon class="size-5" />
        <p
        class="bg-[#FF5F42] rounded-full flex items-center justify-center h-[20px] w-[20px] pb-[2px]"
        >
        0
      </p>
      <ShoppingCart />
    </div>
    </div>
  </div>
  <SideBar />
</template>
