<script lang="ts" setup>
import SearchBar from './SearchBar.vue'
import TopBar from './TopBar.vue'
import { RouterLink } from 'vue-router'
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import SideBar from './SideBar.vue'
import ShoppingCart from '../Cart/ShoppingCart.vue'
import { ref } from 'vue'
import { useBasketStore } from '@/stores/basket'
import NavigationLink from './NavigationLink.vue'

const basketStore = useBasketStore()

const showShoppingCart = ref(false)

const toggleShoppingCart = () => {
  showShoppingCart.value = !showShoppingCart.value
}
</script>
<template>
  <TopBar />
  <SearchBar />
  <div class="flex justify-between p-4 mt-8">
    <nav class="text-xs flex font-bold space-x-6 pl-12">
      <RouterLink class="hover:text-[#06808B]" to="/">SHOP ALL</RouterLink>

      <NavigationLink
        label="DOGS"
        type="dogs"
        :subLinks="[
          { label: 'Dog Beds', item: 'dog beds' },
          { label: 'Dog Collars', item: 'dog collars' },
          { label: 'Dog Food', item: 'dog food' },
          { label: 'Dog Toys', item: 'dog toys' },
        ]"
      />

      <NavigationLink
        label="CATS"
        type="cats"
        :subLinks="[
          { label: 'Cat Litters', item: 'cat litter' },
          { label: 'Cat Poles', item: 'cat poles' },
          { label: 'Cat Tools', item: 'cat tools' },
          { label: 'Cat Toys', item: 'cat toys' },
        ]"
      />

      <NavigationLink
        label="Birds"
        type="birds"
        :subLinks="[
          { label: 'Bird Houses', item: 'bird houses' },
          { label: 'Bird Food', item: 'bird food' },
          { label: 'Bird Toys', item: 'bird toys' },
        ]"
      />

      <NavigationLink
        label="FISH & AQUATICS"
        type="fish & aquatics"
        :subLinks="[
          { label: 'Fish Aquariums', item: 'fish aquariums' },
          { label: 'Fish Cleaning', item: 'fish cleaning' },
          { label: 'fish decoration', item: 'fish decoration' },
        ]"
      />

      <NavigationLink
        label="SMALL ANIMALS"
        type="small animals"
        :subLinks="[
          { label: 'Small Animal Cages', item: 'small animal cages' },
          { label: 'Small Animal Equipment', item: 'small animal equipment' },
          { label: 'Small Animal Toys', item: 'small animal toys' },
        ]"
      />

      <NavigationLink
        label="REPTILES"
        type="reptiles"
        :subLinks="[
          { label: 'Reptile Aquariums', item: 'reptile aquariums' },
          { label: 'Reptile Heating', item: 'reptile heating' },
          { label: 'Reptile Decoration', item: 'reptile decoration' },
        ]"
      />

      <RouterLink class="hover:text-[#06808B]" to="/contact">CONTACT</RouterLink>
    </nav>
    <div class="flex space-x-2 items-center justify-center">
      <RouterLink to="/">
        <UserCircleIcon class="size-8" />
      </RouterLink>
      <RouterLink to="/dogs">Log In</RouterLink>
      <div class="flex">
        <ShoppingCartIcon class="size-5 hover:cursor-pointer" @click="toggleShoppingCart" />
        <p
          class="bg-[#FF5F42] rounded-full flex items-center justify-center h-[20px] w-[20px] pb-[2px]"
        >
          {{ basketStore.basket.length }}
        </p>
        <ShoppingCart v-if="showShoppingCart" @toggleShoppingCart="toggleShoppingCart" />
      </div>
    </div>
  </div>
  <SideBar />
</template>
