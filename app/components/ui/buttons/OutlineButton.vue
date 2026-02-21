<template>
  <button
    class="flex items-center gap-[10px] justify-between 
      px-[16px] 
      rounded-[6px] 
      text-primary-gold 
      h-[40px] 
      lg:min-w-[137px] 
      min-w-[100px]
      bg-transparent 
      border border-primary-gold"
  >
    <span class="text-[1rem] text-nowrap">{{ ButtonText }}</span>
    <Icon name="uil:arrow-right" style="color: #d7ad61" size="18px" />
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
