<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  label: String
});
</script>

<template>
  <button class="bg-[#FF5F42] mt-0 mb-10 px-4 py-2 text-black">{{ label }}</button>
</template>
