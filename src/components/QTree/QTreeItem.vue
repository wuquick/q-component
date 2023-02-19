<template>
  <li class="q-tree-item">
    <div
      class="q-tree-item-content-wrapper"
      :style="{ 'padding-left': `${24 * (dep - 1)}px` }"
    >
      <div class="q-tree-item-content">
        <span class="icon-wrapper">
          <span v-if="data.isDir"
            ><i
              class="iconfont iconfont-arrow-right"
              v-show="!data.expand"
              @click="toggleExpand"
            ></i>
            <i
              class="iconfont iconfont-arrow-down"
              v-show="data.expand"
              @click="toggleExpand"
            ></i
          ></span>
        </span>
        <span class="node-name">{{ data.name }}</span>
      </div>
    </div>
  </li>
  <Transition>
    <ul v-if="data.children.length && data.expand">
      <QTreeItem
        v-for="(item, idx) in data.children"
        :key="idx"
        :data="item"
        :dep="dep + 1"
      />
    </ul>
  </Transition>
</template>

<script setup lang="ts">
import { DefaultTreeDataItem } from "./type";

const props = defineProps<{
  data: DefaultTreeDataItem;
  dep: number;
}>();

function toggleExpand() {
  props.data.expand = !props.data.expand;
}
</script>

<style lang="scss">
.q-tree-item {
  .q-tree-item-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    .icon-wrapper {
      display: inline-block;
      width: 24px;
      text-align: center;
    }
  }
  .q-tree-item-content-wrapper {
    &:hover {
      background-color: pink;
    }
  }
  /* we will explain what these classes do next! */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
