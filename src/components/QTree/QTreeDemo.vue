

<template>
  <QTree :data="treeData" />
</template>

<script setup lang="ts">
import QTree from './QTree.vue';
import { reactive } from 'vue';
import { ITreeDataItem } from './type';

interface TreeNodeCustomData {
  path: string;
}
type TreeData = ITreeDataItem<TreeNodeCustomData>;

const treeData: TreeData[] = reactive([
  {
    name: "root",
    expand: false,
    isDir: true,
    customData: { path: "" },
    children: [
      {
        name: "孩子一",
        expand: false,
        isDir: true,
        customData: { path: "root" },
        children: [
          {
            name: "孩子一_一",
            expand: false,
            isDir: false,
            customData: { path: "root" },
            children: [],
          },
          {
            name: "孩子一_二",
            expand: false,
            isDir: false,
            customData: { path: "root" },
            children: [],
          },
        ],
      },
      {
        name: "孩子二",
        expand: false,
        isDir: false,
        customData: { path: "root" },
        children: [],
      },
    ],
  },
]);
</script>
