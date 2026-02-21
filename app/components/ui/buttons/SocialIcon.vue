<template>
    <span
      class="group flex items-center justify-center rounded-full border border-white/10 w-8.75 h-8.75 cursor-pointer transition-all duration-300 hover:bg-primary-gold"
    >
      <Icon
        :name="name"
        :size="size"
        class="text-primary-gold transition-all duration-300 group-hover:text-primary-1"
      />
    </span>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 24,
    },
  })
  </script>