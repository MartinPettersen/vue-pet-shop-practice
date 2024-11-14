<script lang="ts" setup>
import OrangeFooter from '@/components/(utils)/OrangeFooter.vue';
import ProductDetailsPage from '@/components/Products/ProductDetailsPage.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const type = (route.query.type as string) || ''
const item = (route.query.item as string) || ''
const id = (route.query.id as string) || ''
</script>

<template>
  <div class="w-full h-full">
    <ProductDetailsPage :type="type" :item="item" :id="id" />

    <OrangeFooter />
  </div>
</template>
