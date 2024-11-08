<script lang="ts" setup>
import TopBar from './TopBar.vue';
import { RouterLink} from 'vue-router'


</script>
<template>
  <TopBar />
  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
</template>
