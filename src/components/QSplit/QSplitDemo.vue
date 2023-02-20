<template>
  <div class="split-wrapper">
    <QSplit>
      <template #top> top block </template>
      <template #bottom>
        <QSplit mode="vertical" :split="0.3" :min="0.2" :max="0.8">
          <template #left>left block</template>
          <template #right>right block</template>
        </QSplit>
      </template>
    </QSplit>
  </div>
</template>

<script setup lang="ts">
import QSplit from "./QSplit.vue";
</script>

<style lang="scss">
.split-wrapper {
  width: 800px;
  height: 600px;
  border: 1px solid #333;
}
</style>
