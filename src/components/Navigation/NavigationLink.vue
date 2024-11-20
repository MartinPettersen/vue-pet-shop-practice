<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
  type: String,
  subLinks: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value: Array<{ label: string; item: string }>) => {
      return value.every(
        (link) => typeof link.label === 'string' && typeof link.item === 'string'
      );
    },
  },
})


</script>

<template>
  <div class="group">
    <RouterLink
      class="hover:text-[#06808B]"
      :to="{ path: '/products', query: { type: type, item: 'all' } }"
    >
      {{ label }}
    </RouterLink>
    <div class="hidden group-hover:flex flex-col absolute pt-4 z-[9999] bg-white">
      <div v-for="subLink in props.subLinks" :key="subLink.label">

        <RouterLink
        class="hover:text-[#06808B]"
        :to="{ path: '/products', query: { type: type, item: subLink.item } }"
        >
        {{ subLink.label }}
      </RouterLink>
    </div>
    </div>
  </div>
</template>
