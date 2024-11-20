<script lang="ts" setup>
import ProductCard from './ProductCard.vue'
import ProductsNavbar from './ProductsNavbar.vue'
import { computed, ref, watch } from 'vue'
import productsData from '@/assets/products.json'
import { useRoute } from 'vue-router'

const route = useRoute()

/*
const props = defineProps({
  type: String,
  item: String,
})
*/

const showSortMenu = ref(false)

const toggleSortMenu = () => {
  showSortMenu.value = !showSortMenu.value
}

const products = ref([])

const type = computed(() => route.query.type as string)
const item = computed(() => route.query.item as string)
/*
watch(
  () => route.query,
  () => {
    loadProducts()
  },
  { immediate: true },
)
*/
const loadProducts = () => {
  products.value = []
  const animalProducts = productsData['animals'].find((animal) => animal.animal === type.value)

  if (animalProducts !== undefined && item.value !== undefined && type.value) {
    if (item.value === 'all') {
      animalProducts.categories.forEach(category => {
      Object.values(category).forEach(categoryProducts => {
        products.value.push(...categoryProducts)
      });
    });
    } else {
      animalProducts.categories.forEach((category) => {
        if (item.value in category) {
        products.value.push(...category[item.value])
      }
      })
    }
  }
}

watch(() => route.query, loadProducts, { immediate: true })

/*
watch(
  () => [props.type, props.item],
  () => {
    console.log('Props changed, reloading products:', props.type, props.item);
    loadProducts();
  },
  { immediate: true }
);
*/

/*
// Initial load
onMounted(() => {
  loadProducts();
});

// Handle route updates
onBeforeRouteUpdate((to, from, next) => {
  props.type = to.query.type as string || '';
  props.item = to.query.item as string || '';
  loadProducts();
  next();
});

*/
</script>

<template>
  <div class="p-10 flex">
    <ProductsNavbar :type="type" :item="item" />
    <div class="flex flex-col items-center justify-center w-[86%]">
      <h1 class="text-[#FF5F42] capitalize font-bold text-5xl p-10">{{ item }}</h1>
      <div class="flex w-[90%] justify-between">
        <p>{{ products.length }} Products</p>
        <div class="flex space-x-3">
          <p>Sort By: Recommended</p>
          <div class="flex items-center justify-center">
            <font-awesome-icon
              v-if="!showSortMenu"
              @click="toggleSortMenu"
              :icon="['fas', 'chevron-down']"
            />
            <font-awesome-icon
              v-if="showSortMenu"
              @click="toggleSortMenu"
              :icon="['fas', 'chevron-up']"
            />
          </div>
        </div>
      </div>
      <div class="grid w-[94%] grid-cols-4 gap-10 pt-10">
        <div v-for="(product, index) in products" :key="index">
          <ProductCard :product="product" :type="type" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
