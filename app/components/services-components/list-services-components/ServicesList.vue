<template>
  <section class="bg-black">
    <div v-for="(service, index) in services" :key="index">
      <div class="container py-[100px] px-[60px]">
        <ServicesCard
          :index="index"
          :title="service?.title"
          :description="service?.description"
          :statistics="service?.statistics"
          :imageCard="service?.gallery"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { ServicesType } from '~/types/ServicesType';
import type { PropType } from 'vue';
import ServicesCard from '../../ui/cards/ServicesCard.vue';

const props = defineProps({
    services: {
        type: Array as PropType<ServicesType[]>,
        required: true
    }
})
</script>
