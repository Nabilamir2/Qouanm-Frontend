<template>
  <section class="bg-primary-1 py-[71px] lg:px-[57px] px-[10px]">
    <div class="container grid grid-cols-7 auto-rows-[170px] lg:gap-6 gap-2">
      <!-- Card 0 Large Text -->
      <div
        class="col-span-3 row-span-2 col-start-1 row-start-1 py-[58.5px] px-[24px] "
      >
        <p class="text-primary-gold mb-3">
          {{ designedto.label }}
        </p>

        <h3 class="text-white lg:text-[52px] text-[2rem] font-[1rem] leading-none mb-3 lg:w-120">
          {{ designedto.title }}
        </h3>

        <p class="text-grey-text-30 font-medium text-md lg:w-120">
          {{ designedto.description }}
        </p>
      </div>

      <!-- Card 1 Expert Teams -->
      <div
        class="col-span-2 row-span-3 col-start-4 row-start-1 bg-primary-gold-30 rounded-2xl py-[58.5px] px-[24px] 
         "
      >
        <NuxtImg
          :src="expertTeams.icon"
          alt="expert teams icon"
          width="222"
          height="222"
          format="webp"
          quality="80"
          loading="lazy"
          class="mb-10"
        />

        <h6 class="font-bold lg:text-[24px] text-[1rem] text-black lg:w-60 leading-none mb-2 ">
          {{ expertTeams.title }}
        </h6>

        <p class="text-secondary-text font-medium lg:text-md text-sm">
          {{ expertTeams.description }}
        </p>
      </div>

      <!-- Card 2 bottom image -->
      <div
        class="col-span-2 row-span-1 col-start-6 row-start-1 rounded-2xl overflow-hidden "
      >
        <NuxtImg
          :src="expertTeams.image"
          alt="design led image"
          width="262"
          height="328"
          format="webp"
          quality="80"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Card 3 Design Led -->
      <div
        class="col-span-3 row-span-2 col-start-1 row-start-3 bg-primary-gold bg-gold rounded-2xl overflow-hidden relative "
      >
        <NuxtImg
          :src="designdLed.image"
          alt="design led image"
          width="243"
          height="364"
          format="webp"
          quality="80"
          loading="lazy"
          class="absolute lg:right-0 right-[-70px] bottom-0 h-full object-contain"
        />
        <div
          class="py-[58.5px] lg:px-[24px] px-[10px] lg:w-70 w-47 h-full flex flex-col justify-center"
        >
          <h6 class="text-primary-1 font-bold lg:text-[24px] text-[1rem] mb-2">
            {{ designdLed.title }}
          </h6>

          <p class="text-primary-1 font-medium lg:text-md text-sm">
            {{ designdLed.description }}
          </p>
        </div>
      </div>

      <!-- Card 4 small image -->
      <div
        class="col-span-2 row-span-1 col-start-4 row-start-4 rounded-2xl overflow-hidden "
      >
        <NuxtImg
          :src="reliableTimelines.image"
          alt="reliable timelinesimage"
          width="262"
          height="328"
          format="webp"
          quality="80"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Card 5 Reliable Timelines -->
      <div
        class="col-span-2 row-span-3 col-start-6 row-start-2  bg-[#1c1c1c] rounded-2xl p-6 "
      >
        <NuxtImg
          :src="reliableTimelines.icon"
          alt="expert teams icon"
          width="222"
          height="222"
          format="webp"
          quality="80"
          loading="lazy"
          class="mb-10"
        />
        <h6
          class="font-bold lg:text-[24px] text-[1rem] text-primary-gold  lg:w-60 leading-none mb-2 "
        >
          {{ reliableTimelines.title }}
        </h6>
        <p class="text-grey-text-20 font-medium lg:text-md text-sm">
          {{ reliableTimelines.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    designedto: {
        type: Object as PropType<{
            label: string,
            title: string,
            description: string,
        }>,
        default: () => ({})
    },
    designdLed: {
        type: Object as PropType<{
            title: string,
            description: string,
            image: string,
        }>,
        default: () => ({})
    },
    expertTeams: {
        type: Object as PropType<{
            title: string,
            description: string,
            icon: string,
            image: string,
        }>,
        default: () => ({})
    },
    reliableTimelines: {
        type: Object as PropType<{
            title: string,
            description: string,
            image: string,
            icon: string,
        }>,
        default: () => ({})
    }
})
</script>
