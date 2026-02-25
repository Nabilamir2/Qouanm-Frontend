<template>
  <section class="bg-primary-gold-10 py-20 pl-15">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-[3.75rem] font-bold text-primary-1">{{ title }}</h2>
      <p class="font-normal text-[1.25rem] text-secondary-text">
        {{ subTitle }}
      </p>
    </div>
    <div class="pt-[3.8rem]">
      <ClientOnly>
        <div class=" h-[760px]">
          <swiper-container
            v-if="ready"
            :space-between="24"
            :observer="false"
            :observe-parents="false"
            :slides-per-view="3.5"
            class="h-full"
          >
            <swiper-slide
              v-for="(team, index) in teams"
              :key="index"
              class="relative h-[593px]"
              :class="index % 2 === 0 ? 'mb-auto' : 'mt-auto'"
            >
              <TeamCard
                :title="team.title"
                :name="team.name"
                :image="team.image"
              />
            </swiper-slide>
          </swiper-container>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref, onMounted } from 'vue'
import TeamCard from '@/components/ui/cards/TeamCard.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    teams: {
        type: Array as PropType<{
            title: string;
            name: string;
            image: string;
        }[]>,
        required: true,
    },
})

const ready = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ready.value = true
    })
  })
})
</script>

<style scoped>
.swiper-slide {
  height: auto !important;
}

.swiper {
  width: 100%;
}
</style>
