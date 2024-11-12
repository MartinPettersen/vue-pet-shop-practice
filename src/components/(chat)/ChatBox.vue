<script lang="ts" setup>

import { ref } from 'vue'
import ChatForm from './ChatForm.vue';

const chatLog = ref<string[]>([])
const currentTime = ref("")
const userMessage = ref("")

const addMessage = () => {

  if (currentTime.value === "") {

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes()
    currentTime.value = time
  }

  chatLog.value.push(userMessage.value)
  userMessage.value = ""
}

</script>

<template>
  <div class="flex flex-col items-center justify-start space-x-2 hover:cursor-pointer fixed right-10 bottom-0 w-80 h-[70%] bg-white border-2 border-black">
    <div class="w-full p-4 bg-[#FF5F42]">
      <h1 class="font-bold text-xl">Besties</h1>
      <div class="flex items-center">
        <div class="w-2 h-2 rounded-full mr-2 bg-green-500"></div>
        <p>We'll reply as soon as we can</p>
      </div>
    </div>
    <div class="w-full h-full">
      <div class="w-full flex items-center justify-center m-2">
        <p class="bg-[#989898] px-2 rounded-md text-white">
          08:41
        </p>
      </div>
      <div class="h-[76%] flex flex-col justify-end">
        <ul>
          <li class="m-4 flex flex-col justify-end" v-for="item in chatLog" :key=item>
            <div class="bg-[#FFAFAC] p-4">
              {{ item }}
            </div>
            <p class="self-end">sent</p>
          </li>
        </ul>
        <div v-if="chatLog.length !== 0">
          <ChatForm />
        </div>
      </div>
      <div class="w-full border-t-2 flex items-center justify-center h-[14%]">

        <div class="space-x-2">
          <input class="border-0 outline-none focus:ring-0" v-model="userMessage" placeholder="Write your message..."/>
            <font-awesome-icon :icon="['far', 'face-smile']" class="w-4 h-4"/>
            <font-awesome-icon v-if="userMessage === ''" :icon="['fas', 'paperclip']" class="w-4 h-4"/>
            <font-awesome-icon v-if="userMessage !== ''" :icon="['fas', 'paper-plane']" class="w-4 h-4" @click="addMessage"/>

          </div>

      </div>
    </div>
  </div>
</template>
