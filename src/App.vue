<script setup lang="ts">
import { reactive, ref } from 'vue';
import Header from './components/Header.vue';
import List from './components/List.vue';
import Form from './components/Form.vue';
import Information from './components/Information.vue';

const chatList = reactive<Item[]>([]);

const infoShow = ref(true);
function handleSwitchInfoSubmit() {
  infoShow.value = !infoShow.value;
}

</script>

<template>
  <Header></Header>
  <List :list="chatList" />
  <Form></Form>

  <Information v-show="infoShow" @action-switch-show="handleSwitchInfoSubmit"></Information>
</template>

<style scoped>
</style>
