<template>
  <div class="form">
    <div class="form-clean">
      <button class="btn" @click="handleClean">
        <IconClean></IconClean>
      </button>
    </div>
    <div class="form-text">
      <input type="text" class="text" placeholder="keypress anything here..." :value="text" @keypress.13="handleSubmit">
      <button class="btn btn-primary" @click="handleSubmit">
        <IconRight></IconRight>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconClean from './Icon/IconClean.vue';
import IconRight from './Icon/IconRight.vue';

const emits = defineEmits(['action-handle-submit', 'action-handle-clean']);

const text = ref('');

function handleSubmit() {
  text.value = '';
  emits('action-handle-submit');
}
function handleClean() {
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