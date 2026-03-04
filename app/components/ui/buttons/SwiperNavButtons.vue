<template>
    <div class="flex items-center justify-center gap-4">
      <button class="gallery-nav-btn" @click="$emit('prev')">
        <Icon name="uil:arrow-left" size="18px" />
      </button>
  
      <button class="gallery-nav-btn" @click="$emit('next')">
        <Icon name="uil:arrow-right" size="18px" />
      </button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    emits: ['prev', 'next']
  }
  </script>
