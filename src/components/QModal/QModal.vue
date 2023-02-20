<template>
  <Teleport to="body">
    <Transition name="q-modal">
      <div class="q-modal-wrapper" v-if="modelValue">
        <div class="q-modal-content">
          <div class="top">{{ title }}</div>
          <div class="content">
            <slot name="content"></slot>
          </div>
          <div class="bottom">
            <button @click="confirm">ok</button>
            <button @click="cancel">cancel</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  modelValue: boolean;
}>();

const emit = defineEmits(["confirm", "cancel", "update:modelValue"]);

const showModal = ref(props.modelValue);

function confirm() {
  emit("update:modelValue", false);
  emit("confirm");
}
function cancel() {
  showModal.value = false;
  emit("update:modelValue", false);
  emit("cancel");
}
</script>

<style lang="scss">
.q-modal-wrapper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  .q-modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    background-color: #fff;
    .top {
      height: 36px;
      border-bottom: 1px solid #333;
      padding: 8px 16px;
    }
    .content {
      height: calc(100% - 72px);
      padding: 16px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: end;
      height: 36px;
      border-top: 1px solid #333;
      padding: 8px 16px;
      button {
        margin-left: 8px;
      }
    }
  }
}
/* we will explain what these classes do next! */
.q-modal-enter-active,
.q-modal-leave-active {
  transition: opacity 0.5s ease;
}

.q-modal-enter-from,
.q-modal-leave-to {
  opacity: 0;
}
</style>
