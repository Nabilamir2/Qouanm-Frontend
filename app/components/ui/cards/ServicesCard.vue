<template>
  <div
    class="flex lg:flex-nowrap flex-wrap gap-[32px] w-full"
    :class="`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`"
  >
    <div
      v-if="imageCard?.length === 1"
      class="relative flex  min-h-[392px] h-full w-full lg:w-[55.6%] rounded-[20px]"
    >
      <NuxtImg
        class="w-full h-full object-cover absolute top-0 left-0 rounded-[20px]"
        :src="imageCard?.[0]"
        alt="image"
        width="761"
        height="507"
        format="webp"
        quality="80"
      />
    </div>

    <div
      v-else-if="imageCard?.length === 2"
      class="relative grid grid-cols-3 gap-[8px] min-h-[392px] h-full w-full lg:w-[55.6%] "
    >
      <div class="col-span-2 relative rounded-[20px]">
        <NuxtImg
          class="w-full h-full object-cover absolute top-0 left-0 rounded-[20px]"
          :src="imageCard?.[0]"
          alt="image"
          width="761"
          height="507"
          format="webp"
          quality="80"
        />
      </div>
      <div class="col-span-1 relative rounded-[20px]">
        <NuxtImg
          class="w-full h-full object-cover absolute top-0 left-0 rounded-[20px]"
          :src="imageCard?.[1]"
          alt="image"
          width="588"
          height="392"
          format="webp"
          quality="80"
        />
      </div>
    </div>

    <div
      class="flex flex-col gap-[18px] justify-center items-start w-full lg:w-[44.4%]"
    >
      <h3 class="text-white text-[2rem] font-700 w-[72%]">
        {{ title }}
      </h3>
      <ClientOnly>
        <P class="text-grey-text-10 text-base font-400">
          {{ description }}
        </P>
      </ClientOnly>
       
      <div class="flex">
        <div
          v-for="(facility, index) in statistics"
          :key="index"
          :class="`${index === 0 ? 'pl-0' : 'pl-[18px]'}`"
          class="pr-[18px] border-r border-primary-gold/20 last:border-r-0"
        >
          <p class="text-primary-gold text-[1.75rem] font-600">
            {{ facility.icon }}
          </p>
          <p class="text-grey-text-10 text-[1rem] font-400 text-nowrap">
            {{ facility.title }}
          </p>
        </div>
      </div>
      <div class="flex">
        <MainButton
          :ButtonText="'Explore'"
          :paddingX="'px-[52px] py-[17.5px]'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import MainButton from '../buttons/MainButton.vue';

export default {
    name: 'ServicesCard',
    components: {
        MainButton
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
            type: Array as PropType<string[]>,
            default: () => []
        }
    }
}
</script>
