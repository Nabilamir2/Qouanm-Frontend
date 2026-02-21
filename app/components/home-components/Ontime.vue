<template>
  <section class="bg-primary-1 py-[124px] px-[97px]">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <IntroCenterSection :title="title" :subtitle="subtitle" />
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-[32px] my-[32px] w-full"
        >
          <div
            class="w-ful h-full z-10 flex items-center justify-center"
            v-for="(item, index) in listOfFeatures"
            :key="index"
          >
            <OntimeCard
              :title="item?.title"
              :description="item?.description"
              :iconCard="item?.icon"
            />
          </div>
        </div>
        <div class="w-full h-full flex items-center justify-center">
          <MainButton
            :ButtonText="'Let’s Talk'"
            :paddingX="'px-[52px] py-[17.5px]'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import OntimeCard from '../ui/cards/OntimeCard.vue'
import MainButton from '../ui/buttons/MainButton.vue'
import type { PropType } from 'vue'
import type { OntimeCardType } from '@/types/OntimeCard'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    listOfFeatures: {
        type: Array as PropType<OntimeCardType[]>,
        default: []
    }
})
</script>
