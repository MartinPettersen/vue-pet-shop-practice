<script lang="ts" setup>
import SearchBar from './SearchBar.vue';
import TopBar from './TopBar.vue';
import { RouterLink} from 'vue-router'


</script>
<template>
  <TopBar />
  <SearchBar />
  <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
</template>
