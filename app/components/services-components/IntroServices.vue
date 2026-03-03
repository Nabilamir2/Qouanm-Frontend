<template>
  <section class="bg-black py-13 min-h-[60vh] flex items-end justify-center">
    <div class="w-full" :style="{ maxWidth: MaxWidth }">
      <IntroMainSection :title="title" :subtitle="subtitle" :label="label" :hasBtn="true"
       :breadcrumbArray="breadcrumbArray" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { BreadcrumbType } from '~/types/Breadcrumb';
import IntroMainSection from '../main-component/IntroMainSection.vue';

defineProps({
    label: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    MaxWidth: {
        type: String,
        required: true
    },
    breadcrumbArray: {
        type: Array as PropType<BreadcrumbType[]>,
        default: () => [],
    }
})
</script>