<template>
  <section class="bg-primary-1 px-[60px] pb-[100px]">
    <OurProcess
      :title="title"
      :subtitle="subtitle"
      :image="image"
      :steps="steps"
      :buttonText="`Let's Talk`"
    />
  </section>
</template>
<script setup lang="ts">
import OurProcess from '../main-component/OurProcess.vue';
import type { ProcessSteps } from '@/types/ProcessSteps';

defineProps<{
    title: string;
    subtitle: string;
    image: string;
    steps: ProcessSteps[];
}>();
</script>
