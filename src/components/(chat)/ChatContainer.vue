<script lang="ts" setup>
import ChatButton from './ChatButton.vue'
import ChatBox from './ChatBox.vue'

import { ref } from 'vue'

const isChatting = ref(false)

const toggleChat = () => {
  isChatting.value = !isChatting.value
}

</script>

<template>
  <div
    class="flex items-center justify-center space-x-2 hover:cursor-pointer fixed right-10 bottom-0"
  >
    <div v-if="!isChatting" @click="toggleChat">
      <ChatButton />
    </div>
    <div v-if="isChatting">
      <ChatBox :toggleChat="toggleChat"/>
    </div>
  </div>
</template>
