<script lang="ts" setup></script>

<template>
  <div class="flex w-full flex-col pt-20 items-center justify-center">
    <div class="w-[60%] border-t-2 flex">
      <div class="w-[33%]">
        <h1 class="text-[#06808B] font-extrabold text-5xl">Throw us a question, we promise to fetch</h1>
      </div>
      <div class="w-[66%] flex flex-col space-y-2">
        <p>Name</p>
        <input class="border-2 border-black w-full h-8"/>
        <p>Email</p>
        <input class="border-2 border-black w-full h-8"/>
        <p>Phone</p>
        <input class="border-2 border-black w-full h-8"/>
        <p>Message</p>
        <textarea class="border-2 border-black w-full h-[200px]" ></textarea>
        <button class="self-end text-white bg-[#06808B] py-4 px-16">Send</button>
        <p class="self-end">Thanks for submitting!</p>

      </div>
    </div>
  </div>
</template>
