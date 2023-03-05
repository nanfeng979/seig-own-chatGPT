<template>
  <div
    class="chat-item"
    :class="{
      bubble: item.type == 'back' || item.type == 'self',
      user: item.type == 'self'
    }"
    v-html="item.text"
  >
  </div>
</template>

<script setup lang="ts">

interface Props {
  item: Item
}
const props = defineProps<Props>();

</script>

<style scoped lang="less">
.chat-item {
  width: 100%;
  margin-top: .5rem;
  text-align: center;
  color: var(--text-secondary);

  &.bubble {
    width: auto;
    max-width: 90%;
    padding: .5rem 1rem;
    border-radius: 10px;
    line-height: 1.3;
    text-align: left;
    color: var(--text-primary);
    background-color: var(--border-secondary);

    &.user {
      align-self: flex-end;
      color: var(--highlight);
      background-color: var(--theme-color);
    }
  }

  p {
    margin: .2rem 0;
    word-break: break-word;
  }
}
</style>