<template>
  <button @click="showModal = !showModal">{{ showModal ? 'hidden modal' : 'show modal'}}</button>
  <QModal title="hello world" v-model="showModal" >
    <template #content>model-content</template>
  </QModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import QModal from './QModal.vue';
const showModal = ref(false)
</script>