<template>
  <div class="form">
    <div class="form-clean">
      <button class="btn" @click="handleClean">
        <IconClean></IconClean>
      </button>
    </div>
    <div class="form-text">
      <input type="text" class="text" placeholder="keypress anything here..." v-model="text" @keypress.enter="handleSubmit">
      <button class="btn btn-primary" @click="handleSubmit">
        <IconRight></IconRight>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../stores';
import IconClean from './Icon/IconClean.vue';
import IconRight from './Icon/IconRight.vue';

const store = useStore();

const emits = defineEmits(['action-handle-submit', 'action-handle-clean']);

const text = ref('');

// 是否请求中
let pending = false;

function handleSubmit() {
  if (pending) return alert('pending...');
  pending = true;

  const content = text.value;
  if (content == '') return alert('text can\' be null');
  text.value = '';

  // 插入当前对话内容
  store.pushItem({
    type: 'self',
    text: content
  }); 

  // 获取回复
  store.submit(content)
  .then((result: CallBack) => {
    if (result.status == 'success') {
      // 请求成功
      store.pushItem({
        type: 'back',
        text: result.message
      });
    } else {
      // 请求失败
      store.pushItem({
        type: 'text',
        text: result.message
      });
    }
  })
  .finally(() => {
    pending = false;
    emits('action-handle-submit');
  });
}
function handleClean() {
  // 清空会话记录
  store.cleanUp();
  emits('action-handle-clean');
}
</script>

<style scoped>
.form {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem .8rem;
}
.form-clean, .form .btn {
  flex: 0 0 auto;
}
.form .btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  margin-right: .5rem;
  border-radius: 50%;
  color: var(--text-secondary);
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.form .btn:hover {
  color: var(--text-primary);
}
.form .btn svg {
  z-index: 1;
}
.form .btn::after {
  content: '';
  position: absolute;
  background-color: var(--theme-color);
  width: calc(54px - 1rem);
  height: calc(54px - 1rem);
  border-radius: 50%;
  opacity: 0;
  z-index: 0;
  transition: all .3s ease-in-out;
}
.form .btn.btn-primary {
  color: var(--highlight);
  font-size: .9rem;
}
.form .btn.btn-primary::after {
  opacity: 1;
}
.form .btn.btn-primary:hover::after {
  opacity: .8;
}
.form-text {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding: .5rem;
  border: 1px solid var(--border-primary);
  border-radius: 9999px;
}
.form-text input.text {
  flex: 1 0 auto;
  font-size: 1rem;
  border: 0;
  padding: 0 .5rem;
  outline: none;
}
</style>