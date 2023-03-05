<template>
  <div class="chat-list" ref="list">
    <Item v-for="item in list" :item="item" :key="item.id" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Item from './Item.vue';

interface Props {
  list: Item[]
}
const props = defineProps<Props>();
const emits = defineEmits(['action-set-list-ref']);

// 列表 ref 值变更向上传递
const listRef = ref<HTMLDivElement>();
watch(listRef, () => {
  emits('action-set-list-ref', listRef.value);
});

</script>

<style scoped lang="less">
.chat-list {
  flex: 1 1 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 1rem;
  /*background-color: var(--theme-color-opacity);*/
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-secondary);
    outline: 0;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 2px;
  }
}
</style>