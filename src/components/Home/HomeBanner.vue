<script lang="ts" setup>
import OrangeShoppingButton from '../(utils)/OrangeShoppingButton.vue';

</script>

<template>
  <div
  class="h-[500px] flex items-center justify-center"
    :style="{
      backgroundImage: 'url(https://static.wixstatic.com/media/84770f_93f926c13b8a48b5a459f55ec2236efc~mv2.jpg/v1/fit/w_2521,h_1037,q_90/84770f_93f926c13b8a48b5a459f55ec2236efc~mv2.webp)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }">
    <div class="bg-white bg-opacity-45 w-80 mr-96">
      <h1 class="font-bold text-4xl p-10">Welcome to Our Pet Supply Shop</h1>
      <div class="pl-10">
        <OrangeShoppingButton label="Start Shopping" />
      </div>
    </div>
  </div>
</template>
