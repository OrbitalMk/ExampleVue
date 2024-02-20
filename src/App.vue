<script setup lang="ts">
import { RouterView } from 'vue-router'

function handleClick() {
  window.location.href = 'http://127.0.0.1:8082/oauth2/authorization/spring';
}
</script>

<template>
  <header class="flex items-center justify-between bg-white h-14 py-2 px-6">
    <div class="flex items-center">
      <img class="w-10 h-10" src="@/assets/logo.svg" alt="vue-logo">
      <span class="font-semibold">Vue example</span>
    </div>
    <nav>
      <button class="border shadow-lg font-semibold hover:text-white hover:border-0 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg px-3 py-1" @click="handleClick">Login</button>
    </nav>
  </header>
  <main class="bg-white rounded-xl shadow-2xl mt-16 mx-auto max-w-lg md:max-w-5xl h-64 p-5">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
