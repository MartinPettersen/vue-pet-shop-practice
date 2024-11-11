<script lang="ts" setup>
import OrangeShoppingButton from '../(utils)/OrangeShoppingButton.vue';
</script>

<template>
  <div class="flex items-center justify-center space-y-5 flex-col mt-10">
    <div class="w-[70%] border-t-2 mt-10">

    </div>
    <div class="bg-[#FF5F42] w-[70%] flex justify-evenly py-20 ">
      <div class="space-y-8">
        <h1 class="font-bold text-xl">Our Flagship Store</h1>
        <div>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>Tel: 123-456-7890</p>

        </div>
        <p class="underline">View Stores List</p>
      </div>
      <div class="space-y-8">
        <h1 class="font-bold text-xl">Shop</h1>
        <div>
          <p>Dogs</p>
          <p>Cats</p>
          <p>Birds</p>
          <p>Fish and Aquatics</p>
          <p>Small Animals</p>
          <p>Reptiles</p>
        </div>
      </div>
      <div class="space-y-8">
        <h1 class="font-bold text-xl">Info</h1>
        <div>
          <p>Our Story</p>
          <p>Contact</p>
          <p>Shipping & Returns</p>
          <p>Store Policy</p>
          <p>FAQ</p>
        </div>
      </div>
      <div class="space-y-8">
        <h1 class="font-bold text-xl">Get Special Deals & Offers</h1>
        <div class="space-y-2 ">
          <p>Email Address*</p>
          <input class="border-2 h-[34px] border-white hover:border-black w-full" value="">
          <button class="w-full h-[34px] border-2 border-black text-white hover:text-black bg-black hover:bg-opacity-0 transition duration-500">Subscribe</button>
          <p>Thanks for submitting!</p>
        </div>
        <div>

          <p class="font-bold text-lg">Become Our Bestie!</p>
          <div class="space-x-3">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <font-awesome-icon :icon="['fab', 'youtube']" />
            <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
        </div>
      </div>
    </div>
    <div class="pt-20">

      <OrangeShoppingButton label="Shop All" />
    </div>
  </div>
</template>
