<template>
  <button
    class="flex items-center gap-[10px] justify-between 
      min-w-[100px]
      bg-transparent 
      "
      :class="textColor"
  >
    <span class="text-[1rem] text-nowrap font-600">{{ ButtonText }}</span>
    <Icon name="uil:arrow-right" :class="textColor" size="18px" />
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
    textColor: {
      type: String,
      required: false,
      default: 'text-primary-gold-dark ',
    },
  },
}
</script>
