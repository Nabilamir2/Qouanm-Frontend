<template>
  <section class="bg-black">
    <div class="container py-[100px] px-[60px]">
      <div
        class="flex flex-col items-center justify-center bg-black sticky top-[94px] lg:top-[-70px] z-10"
      >
        <IntroCenterSection :title="title" :subtitle="subtitle" />
      </div>
      <div v-for="(service, index) in services" :key="index">
        <div class="py-[100px]">
          <ServicesCard
            :index="index"
            :title="service?.title"
            :description="service?.description"
            :statistics="service?.statistics"
            :imageCard="service?.image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import ServicesCard from '../ui/cards/ServicesCard.vue'

const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    subtitle: {
        type: String,
        default: () => ''
    },
    services: {
        type: Array as PropType<{ 
          title: string, 
          description: string, 
          statistics: { title: string, icon: string }[], image: string[] }[]>,
        default: () => []
    }
})
</script>
