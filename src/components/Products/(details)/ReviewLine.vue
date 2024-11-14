<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  label: String,
  amount: Number,
  total: Number,
})

const percentageConverter = computed(() => {
  const temp = props.total! / 100
  console.log("temp", temp)
  console.log("perce", props.amount! / temp)

  return props.amount! / temp
})

</script>

<template>
  <div class="flex space-x-2 items-center justify-center">
          <p>{{ label }}</p>
          <div class="w-[70%] bg-slate-200 h-2">
            <div :style="{ width: `${percentageConverter}%` }" class="h-2 bg-[#FF5F42] "></div>
          </div>
          <p>{{ amount }}</p>
        </div>
</template>
