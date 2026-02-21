<template>
  <div class="flex flex-col p-[24px] w-fit bg-white rounded-[10px]">
    <div class="relative  max-h-[86px] max-w-[86px]">
      <NuxtImg
        class="w-full h-full object-cover"
        :src="imageCard"
        alt="project logo"
        width="86"
        height="86"
        format="webp"
        quality="85"
      />
    </div>
    <div class="pb-[8px]">
      <h3 class="text-black text-[1.5rem] font-700">
        {{ title }}
      </h3>
    </div>
    <div class="border-b border-grey-text-10 pb-[16px]">
      <P class="text-secondary-text text-[1rem] font-400">
        {{ description }}
      </P>
    </div>

    <div class="flex py-[16px] border-b border-grey-text-10">
      <div
        v-for="(facility, index) in statistics"
        :key="index"
        :class="`${index === 0 ? 'pl-0' : 'pl-[12px]'}`"
        class="pr-[18px] border-r border-primary-gold/20 last:border-r-0"
      >
        <p class="text-primary-gold text-[1.5rem]   font-600">
          {{ facility.icon }}
        </p>
        <p class="text-secondary-text text-[1rem] font-400 text-nowrap">
          {{ facility.title }}
        </p>
      </div>
    </div>

    <div class="flex pt-[16px]">
      <TextButton ButtonText="Explore Project" />
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import TextButton from '../buttons/TextButton.vue';

export default {
    name: 'FeaturedPopupCard',
    components: {
        TextButton
    },
    props: {
        index: {
            type: Number,
            default: () => 0
        },
        title: {
            type: String,
            default: () => ''
        },
        description: {
            type: String,
            default: () => ''
        },
        statistics: {
            type: Array as PropType<{ title: string, icon: string }[]>,
            default: () => []
        },
        imageCard: {
            type: String,
            default: () => ''
        }
    }
}
</script>
