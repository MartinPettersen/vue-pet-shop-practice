<script lang="ts" setup>

import ReccomandationsCard from './ReccomandationsCard.vue'
</script>


<template>
  <div class="w-[70%] flex flex-col space-y-4">
    <h2 class="font-bold text-lg p-4">You Might Also Like</h2>
  </div>

  <div class="flex space-x-4 ">
    <ReccomandationsCard imagurl="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg" productDescription="Product description" :price="15"/>
    <ReccomandationsCard imagurl="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg" productDescription="Product description" :price="15"/>
    <ReccomandationsCard imagurl="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg" productDescription="Product description" :price="15"/>
    <ReccomandationsCard imagurl="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg" productDescription="Product description" :price="15"/>
    <ReccomandationsCard imagurl="https://static.wixstatic.com/media/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0c46e21cfe2d4e67bb44b3c4f6b007de~mv2.jpg" productDescription="Product description" :price="15"/>
  </div>
</template>
