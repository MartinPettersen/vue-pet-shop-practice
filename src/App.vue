<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/Navigation/NavigationBar.vue';
import ChatBox from './components/(chat)/ChatContainer.vue';

</script>

<template>
  <header>

    <NavigationBar />
  </header>
  <ChatBox />

  <RouterView />
</template>

<style scoped></style>
