<template>
  <ul class="q-tree" v-for="(item, idx) in data" :key="idx">
    <QTreeItem :data="item" :dep="1" />
  </ul>
</template>

<script setup lang="ts">
import QTreeItem from './QTreeItem.vue';
import { DefaultTreeDataItem } from './type';
defineProps<{
  data: DefaultTreeDataItem[]
}>()
</script>