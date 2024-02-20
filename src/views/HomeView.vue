<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const message = ref('')
const text = ref('api/message')

function handleClick() {
  axios.get(`http://127.0.0.1:8082/${text.value}`).then(response => {
    message.value = response.data;
  }).catch(error => {
    message.value = error
  })
}
</script>

<template>
  <div class="block">
    <button @click="handleClick"
      class="text-white font-semibold bg-blue-400 rounded-lg px-3 py-2"
      >
      Request
    </button>
    <input v-model="text" type="text" class="border ml-2">
    <br>
    <span>{{ message }}</span>
  </div>
</template>
