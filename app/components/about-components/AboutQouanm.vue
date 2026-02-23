<template>
  <section class="h-screen overflow-hidden bg-black pb-25 px-15 flex items-end justify-center">
    <div class="flex flex-col items-center justify-center">
        <IntroAboutSection :title="title" :subtitle="subtitle" :label="label" />
        {{ listFeatures }}
    </div>
  </section>
</template>

<script setup lang="ts">
import IntroAboutSection from '../main-component/IntroAboutSection.vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  listFeatures: {
    type: Array<string>,
    required: true,
  },
});
</script>