<template>
  <section class="bg-primary-gold-20 py-[100px] px-[60px] -z-10">
    <div class="container">
      <div class="flex flex-col p-6">
        <h3 class="text-[#1E1D1D] text-[2.75rem] font-bold max-w-[40%]">
          {{ title }}
        </h3>
        <p class="text-secondary-text text-[1rem] font-medium max-w-[46%]">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(quality, index) in qualities"
        :key="index"
        class="col-span-1"
      >
        <BaseCard
          :title="quality?.title"
          :description="quality?.description"
          :index="index + 1"
        />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import BaseCard from '../../ui/cards/BaseCard.vue'

defineProps<{
  title: string
  subtitle: string
  qualities: Array<{
    title: string
    description: string
  }>
}>()
</script>