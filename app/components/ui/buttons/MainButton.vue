<template>
  <button
    class="flex items-center gap-[10px] 
    rounded-[6px] 
    text-white 
    min-h-[40px] 
    "
    :style="{
      background:`linear-gradient(to top, ${colorTo}, ${colorFrom})`
    }"
    :class="paddingX"
  >
    <span class="text-[1rem] text-nowrap">{{ ButtonText }}</span>
    <Icon v-if="hasIcon" name="uil:arrow-right" style="color: white" size="18px" />
  </button>
</template>

<script lang="ts">
export default {
  name: 'MainButton',
  props: {
    ButtonText: {
      type: String,
      required: true,
    },
    colorTo: {
      type: String,
      default: '#DBB571',
    },
    colorFrom: {
      type: String,
      default: '#957C4F',
    },
    paddingX: {
      type: String,
      default: 'px-[16px] justify-between ',
    },
    hasIcon: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
