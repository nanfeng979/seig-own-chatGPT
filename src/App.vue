<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useStore } from './stores';
import Header from './components/Header.vue';
import List from './components/List.vue';
import Form from './components/Form.vue';
import Information from './components/Information.vue';

const store = useStore();
const { list: chatList } = storeToRefs(store);

// 监听 list 是否添加 => list 滚动
watch(chatList, () => {
  nextTick(() => {
    if (!listRef.value) return;
    const list = listRef.value;
    list.scroll({
      top: list.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
}, {
  deep: true
})

const infoShow = ref(true);
function handleSwitchInfoSubmit(value = false) {
  infoShow.value = value;
}

const listRef= ref<HTMLDivElement>();
function setListRef(value: HTMLDivElement) {
  listRef.value = value;
}

</script>

<template>
  <Header></Header>
  <List :list="chatList" @action-set-list-ref="setListRef" />
  <Form></Form>

  <Information v-show="infoShow" @action-switch-show="handleSwitchInfoSubmit"></Information>
</template>
