<script lang="ts" setup>
import OrangeFooter from '@/components/(utils)/OrangeFooter.vue';
import ProductsPage from '@/components/Products/ProductsPage.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const type = (route.query.type as string) || ''
const item = (route.query.item as string) || ''

/*
watch(
  () => route.query,
  (newQuery) => {
    type.value = newQuery.type as string || '';
    item.value = newQuery.item as string || '';
  }
);

*/
</script>

<template>
  <div class="w-full h-full">
    <ProductsPage :type="type" :item="item" :key="type + item"/>
    <OrangeFooter />
  </div>
</template>
