<script lang="ts" setup>
import SearchBar from './SearchBar.vue'
import TopBar from './TopBar.vue'
import { RouterLink } from 'vue-router'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import SideBar from './SideBar.vue'
</script>
<template>
  <TopBar />
  <SearchBar />
  <div class="flex justify-between p-4 mt-8">
    <nav class="text-xs font-bold space-x-6 pl-12">
      <RouterLink to="/">SHOP ALL</RouterLink>
      <RouterLink to="/dogs">DOGS</RouterLink>
      <RouterLink to="/cats"></RouterLink>
      <RouterLink to="/birds">BIRDS</RouterLink>
      <RouterLink to="/fish">FISH & AQUATICS</RouterLink>
      <RouterLink to="/smallanimals">SMALL ANIMALS</RouterLink>
      <RouterLink to="/reptiles">REPTILES</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
    </nav>
    <div class="flex space-x-2 items-center justify-center">
      <RouterLink to="/">
        <UserCircleIcon class="size-8" />
      </RouterLink>
      <RouterLink to="/dogs">Log In</RouterLink>
      <RouterLink to="/cats">
        <div class="flex">
          <ShoppingCartIcon class="size-5" />
          <p
            class="bg-[#FF5F42] rounded-full flex items-center justify-center h-[20px] w-[20px] pb-[2px]"
          >
            0
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
  <SideBar />
</template>
