<template>
    <section class="bg-primary-1 lg:py-[100px] py-[50px] lg:px-[60px] px-[20px]">
      <div class="container grid grid-cols-4 rounded-[20px]">
        <div
          class="relative lg:col-span-2 col-span-4 w-full min-h-[50vh] h-full"
        >
          <NuxtImg
            :src="image"
            alt="ceo"
            width="600"
            height="700"
            format="webp"
            quality="80"
            class="w-full h-full object-cover object-top absolute top-0 left-0 rounded-[20px]"
          />
        </div>
        <div class="lg:col-span-2 col-span-4">
          <div class="flex flex-col justify-between gap-[16px] px-[44px]">
            <p class="text-primary-gold text-regular font-small">{{ label }}</p>
            <h3 class="text-white text-[3.25rem] font-700">
              {{ title}}
            </h3>
            <p
              class="text-grey-text-20 text-[1.25rem] font-400"
              v-for="(paragraph, index) in listParagraphs"
              :key="index"
            >
              {{ paragraph }}
            </p>
            <MainButton 
            :ButtonText="`let's talk`"
            :paddingX="'px-auto justify-center py-[17.5px]'"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue'
import MainButton from '../ui/buttons/MainButton.vue';
  
  const props = defineProps({
    image: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    listParagraphs: {
      type: Array as PropType<string[]>,
      default: [
  
      ]
    },
  })
  
  </script>
  