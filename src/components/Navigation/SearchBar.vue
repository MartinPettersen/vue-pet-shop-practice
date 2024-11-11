<script lang="ts" setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import Logo from './Logo.svg'
const text = ref('Search...')
</script>
<template>
  <div class="flex flex-row justify-between border-b-2 border-slate-500">
    <div class="flex flex-row space-x-2 pl-14 items-center justify-center">
      <img :src="Logo" alt="Homepage Logo" class="w-12 h-12" />
      <div>
        <h1 class="font-bold text-4xl text-[#FF5F42]">BESTIES</h1>
        <p>A Pet's Favourite Place</p>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex items-center justify-center px-4">
        <div class="p-2 flex rounded-full">
          <input class="bg-[#F5F5F5] p-2 rounded-l-full" v-model="text" />
          <div class="bg-[#FF5F42] py-1 px-5 flex items-center justify-center rounded-r-full">
            <MagnifyingGlassIcon class="size-5" />
          </div>
        </div>
      </div>
      <div class="bg-[#FF5F42] flex flex-col items-center w-40 justify-center">
        <p class="font-bold text-lg">Call Us</p>
        <p class="font-semibold">123-456-7890</p>
      </div>
    </div>
  </div>
</template>
