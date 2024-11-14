<script lang="ts" setup>

import { ref, defineProps } from 'vue';

const props = defineProps({
  show: Boolean,
  label: String,
  info: String,
})

const showText = ref(props.show)

const toggleShowText = () => {
  showText.value = !showText.value
}

</script>

<template>
  <div class="w-full max-w-full">
    <div class="flex justify-between items-center ">
      <h3 class="text-lg py-4">{{ label }}</h3>
      <button @click="toggleShowText" class="text-4xl flex items-center font-thin">-</button>
    </div>
    <p v-if="showText" class="whitespace-normal overflow-auto break-words max-h-40">{{ info }}</p>
  </div>
</template>
