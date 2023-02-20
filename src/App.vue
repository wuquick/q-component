<template>
  <div class="app">
    <div class="left-menu" @click="chooseComponent">
      <div class="left-menu-item" data-id="q-tree">QTree</div>
      <div class="left-menu-item" data-id="q-modal">QModal</div>
      <div class="left-menu-item" data-id="q-split">QSplit</div>
    </div>
    <div class="content">
      <component :is="activeComp"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import QTreeDemo from "./components/QTree/QTreeDemo.vue";
import QModalDemo from "./components/QModal/QModalDemo.vue";
import QSplitDemo from "./components/QSplit/QSplitDemo.vue";

const activeComp = shallowRef();
function chooseComponent(e: any) {
  const id = e.target.dataset.id as string;
  switch (id) {
    case "q-tree":
      activeComp.value = QTreeDemo;
      break;
    case 'q-modal':
      activeComp.value = QModalDemo;
      break;
    case 'q-split':
      activeComp.value = QSplitDemo;
      break;
    default:
      break;
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  .left-menu {
    width: 200px;
    min-height: 100vh;
    border-right: 1px solid #333;
    .left-menu-item {
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      border-bottom: 1px solid #333;
      &:hover {
        background-color: pink;
      }
    }
  }
  .content {
    flex: 1;
    padding: 24px;
  }
}
</style>
