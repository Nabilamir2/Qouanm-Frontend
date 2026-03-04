<template>
    <section class="bg-primary-gold-10 py-15">
   
      <ClientOnly>
        <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center px-15">
            <div>
              <h3 class="text-[#1E1D1D] text-[2.75rem] font-bold">{{ title }}</h3>
              <p class="text-secondary-text text-[1rem] font-normal">{{ subtitle }}</p>
            </div>

            <div class="flex items-center justify-center">
                <SwiperNavButtons
                    @prev="slidePrev"
                    @next="slideNext"
                    />
            </div>
        </div>

      <div class="pl-15">
        <swiper-container 
         ref="swiperProjects" 
        :slides-per-view="2.5"
        :space-between="24"
        :loop="true"
        class="h-full" 
        :breakpoints="{
          1024: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 2,
          },
        }"
        >
          <swiper-slide v-for="(item, index) in projects" :key="index">
            <ServiceProjectCard 
              :title="item.title"
              :slug="item.slug"
              :image="item.image"
              :logo="item.logo"
              :roomsDesign="item.rooms_design"
              :furnitureUnits="item.furniture_units"
              :weeks="item.weeks"
              />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
    </ClientOnly>

    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ProjectType } from '~/types/ProjectType';
import { ref } from 'vue';
import SwiperNavButtons from '@/components/ui/buttons/SwiperNavButtons.vue'
import ServiceProjectCard from '@/components/ui/cards/ServiceProjectCard.vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    projects: {
        type: Array as PropType<ProjectType[]>,
        required: true
    }
})


const swiperProjects = ref<any>(null)

function slidePrev() {
  swiperProjects.value?.swiper?.slidePrev()
}

function slideNext() {
  swiperProjects.value?.swiper?.slideNext()
}


</script>