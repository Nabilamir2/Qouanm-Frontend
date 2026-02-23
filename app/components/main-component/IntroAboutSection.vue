<template>
    <div class="flex flex-col items-center justify-center">
        <p class="text-primary-gold text-regular font-small">{{ label }}</p>
        <h1 class="text-white text-[4.375rem] pb-6">{{ title }}</h1>
        <p class="text-primary-text text-[1.1em] font-normal max-w-200 text-center">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>