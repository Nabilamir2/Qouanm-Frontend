<template>
  <button
    class="flex items-center gap-[10px] justify-between 
      text-primary-gold-dark 
      min-w-[100px]
      bg-transparent 
      "
  >
    <span class="text-[1rem] text-nowrap font-600">{{ ButtonText }}</span>
    <Icon name="uil:arrow-right" class="text-primary-gold-dark" size="18px" />
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
  },
}
</script>
