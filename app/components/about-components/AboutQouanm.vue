<template>
  <section
    class="lg:h-[150vh] h-screen overflow-hidden bg-black pb-18 px-15 flex items-end justify-center"
  >
    <div class="flex flex-col items-center justify-center">
      <IntroAboutSection :title="title" :subtitle="subtitle" :label="label" />
      <div class="grid grid-cols-11 auto-rows-[70px] lg:gap-4 gap-1 mt-[60px]">
        <div
          v-for="(feature, index) in listFeatures"
          :key="index"
          :class="gridClasses[index]"
          class="rounded-[20px] overflow-hidden"
        >
          <NuxtImg
            :src="feature"
            class="w-full h-full object-cover"
            :alt="'about-qouanm--' + index"
            loading="lazy"
            width="262"
            height="328"
            format="webp"
            quality="80"
          />
        </div>
      </div>
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

const gridClasses = [
  'col-span-2 row-span-4 row-start-3',
  'col-span-2 row-span-2 row-start-2',
  'col-span-2 row-span-4 row-start-4',
  'col-span-3 row-span-8 row-start-1',
  'col-span-2 row-span-4 row-start-2',
  'col-span-2 row-span-2 row-start-6',
  'col-span-2 row-span-4 row-start-3',
]
</script>
