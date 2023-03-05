<template>
  <div class="header">
    <div class="header-content">
      <i class="header-icon" @click="handleSwitchInfo">C</i>
      <span class="header-text">ChatGPT</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['action-switch-show']);

function handleSwitchInfo() {
  emits('action-switch-show', true);
}

</script>

<style scoped lang="less">
.header {
  flex: 0 0 auto;
  padding: 10px;
  border-bottom: 1px solid var(--border-secondary);
  background-color: var(--border-tertiary);

  .header-content {
    text-align: center;
    line-height: 1;
    }
  .header-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    margin-right: .5rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--bg-secondary);
    background-color: var(--theme-color);
    cursor: pointer;
  }
  .header-text {
    font-weight: bold;
  }
}
</style>