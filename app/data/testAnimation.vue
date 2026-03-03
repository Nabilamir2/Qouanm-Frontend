<template>
    <section class="bg-black stack-wrapper">
      <div class="container py-[100px] px-[60px] stack-container">
        <motion.div
          v-for="(service, index) in services"
          :key="index"
          class="stack-card"
          :initial="{ opacity: 0, y: 40, scale: 0.9 }"
          :animate="{
            opacity: 1,
            y: -index * 24,
            scale: 1 + index * 0.03,
          }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
        >
          <ServicesCard
            :index="index"
            :title="service?.title"
            :description="service?.description"
            :statistics="service?.statistics"
            :imageCard="service?.gallery"
          />
        </motion.div>
      </div>
    </section>
  </template>
  <script lang="ts" setup>
  import type { ServicesType } from '~/types/ServicesType'
  import type { PropType } from 'vue'
  import { motion } from 'motion-v'
  import ServicesCard from '../ui/cards/ServicesCard.vue'
  
  defineProps<{
    services: ServicesType[]
  }>()
  </script>
  
  <style scoped>
  .stack-wrapper {
    min-height: 200vh;
  }
  
  .stack-container {
    position: relative;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
  
  .stack-card {
    position: sticky;
    top: 40px;
    border-radius: 20px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
    background-color: black;
  }
  
  @media (max-width: 768px) {
    .stack-wrapper {
      min-height: auto;
    }
  
    .stack-card {
      position: static;
      top: auto;
    }
  }
  </style>
  