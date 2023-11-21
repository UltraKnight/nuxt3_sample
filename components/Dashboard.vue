<script setup lang="ts">
import { ref } from 'vue';

const item = ref<any>('');

const addItem = async () => {
  await $fetch('/api/storage', { method: 'post' });
}

const getItem = async () => {
  const data = await $fetch('/api/storage');
  item.value = data;
}

const deleteItem = async () => {
  const data = await $fetch('/api/storage', { method: 'delete' });

  item.value = data;
}
</script>

<template>
  <h1>Data from Storage</h1>
  <button @click="addItem">Add item to storage</button>
  <button @click="getItem">Get item from storage</button>
  <button @click="deleteItem">Delete item from storage</button>
  <p>{{ item }}</p>
</template>
