<script setup lang="ts">
import { reactive } from 'vue';
import Header from './components/Header.vue';
import List from './components/List.vue';
import Form from './components/Form.vue';

const chatList = reactive<Item[]>([]);

</script>

<template>
  <Header></Header>
  <List :list="chatList" />
  <Form></Form>
</template>

<style scoped>
</style>
