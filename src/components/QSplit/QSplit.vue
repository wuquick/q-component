<template>
  <div
    class="q-split"
    @mousemove="onMouseMove"
    ref="splitEle"
  >
    <div v-if="mode === 'horizontal'" class="top-bottom-wrapper">
      <div
        class="top-wrapper"
        :style="{ height: `calc((100% - 5px) * ${innerSplit})` }"
      >
        <slot name="top"></slot>
      </div>
      <div class="sliding-block" @mousedown="onMouseDown"></div>
      <div
        class="bottom-wrapper"
        :style="{ height: `calc((100% - 5px) * ${1 - innerSplit})` }"
      >
        <slot name="bottom"></slot>
      </div>
    </div>
    <div class="left-right-wrapper" v-else>
      <div class="left-wrapper" :style="{ width: `calc((100% - 5px) * ${innerSplit})` }">
        <slot name="left"></slot>
      </div>
      <div class="sliding-block" @mousedown="onMouseDown"></div>
      <div class="right-wrapper" :style="{ width: `calc((100% - 5px) * ${1 - innerSplit})` }">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

interface PropType {
  split?: number;
  mode?: "horizontal" | "vertical";
  min?: number;
  max?: number;
}
const props = withDefaults(defineProps<PropType>(), {
  split: 0.5,
  mode: "horizontal",
  min: 0,
  max: 1,
});

const innerSplit = ref(props.split);

let canMove = false;
let [lastX, lastY] = [0, 0];
const splitEle = ref<HTMLElement>();

function onMouseDown(e: MouseEvent) {
  canMove = true;
  [lastX, lastY] = [e.x, e.y];
}

function onMouseMove(e: MouseEvent) {
  if (!canMove || !splitEle.value) {
    return;
  }
  const { x, y } = e;
  const disY = y - lastY;
  const disX = x - lastX;
  const { width, height } = splitEle.value.getBoundingClientRect();
  [lastX, lastY] = [x, y];
  if (props.mode === 'horizontal') {
    innerSplit.value = innerSplit.value + disY / height;
  } else {
    innerSplit.value = innerSplit.value + disX / width;
  }
  if (innerSplit.value > props.max) {
    innerSplit.value = props.max;
  }
  if (innerSplit.value < props.min) {
    innerSplit.value = props.min;
  }
}

function cancelMove() {
  canMove = false;
}

onMounted(() => {
  document.addEventListener('mouseup', cancelMove)
})
onBeforeUnmount(() => {
  document.removeEventListener('mouseup', cancelMove)
})

</script>

<style lang="scss">
.q-split {
  height: 100%;
  .top-bottom-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    .sliding-block {
      height: 5px;
      background-color: pink;
      cursor: move;
    }
  }
  .left-right-wrapper {
    display: flex;
    height: 100%;
    .sliding-block {
      width: 5px;
      height: 100%;
      cursor: move;
    }
  }
}
</style>
