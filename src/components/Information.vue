<template>
  <div class="information">
    <input type="text" class="text" placeholder="user (必填)" v-model="user">
    <input type="text" class="text" placeholder="Openai_key (可选)" v-model="key">
    <button class="submit" @click="handleSubmit">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../stores';

const store = useStore();

const emits = defineEmits(['action-switch-show']);

const user = ref('');
const key = ref('');

function handleSubmit() {
  store.setKey(key.value);
  store.setUser(user.value);
  emits('action-switch-show');
}

</script>

<style scoped lang="less">
.information {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary);
  backdrop-filter: blur(20px);
  z-index: 999;

  .text {
    margin-bottom: 1rem;
    padding: .8rem 1rem;
    font-size: 1rem;
    text-align: center;
    width: 50%;
    min-width: 300px;
    border-radius: 5px;
    border: 1px solid var(--border-tertiary);
    outline: 0;
    transition: all .3s ease-in-out;

    &:hover, &:focus {
      border: 1px solid var(--border-primary);
      box-shadow: 0 0 5px var(--border-tertiary);
    }
  }

  .submit {
    padding: .6rem 1rem;
    color: var(--highlight);
    background-color: var(--theme-color);
    box-shadow: 0 0 5px var(--border-tertiary);
    border: 0;
    border-radius: 5px;
    font-size: .9rem;
    line-height: 1;
    outline: 0;
    cursor: pointer;
  }
}
</style>