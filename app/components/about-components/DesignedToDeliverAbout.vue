<template>
  <section class="bg-primary-1 py-[71px] lg:px-[57px] px-[10px]">
    <DesignedToDeliver
      :designedto="designedToDeliver?.designedto"
      :designdLed="designedToDeliver?.designdLed"
      :expertTeams="designedToDeliver?.expertTeams"
      :reliableTimelines="designedToDeliver?.reliableTimelines"
    />
  </section>
</template>

<script setup lang="ts">
import DesignedToDeliver from '@/components/main-component/DesignedToDeliver.vue'
import type { DesignedToSection } from '@/types/DesignedToSection'
import type { DesignedLedSection } from '@/types/DesignedLedSection'
import type { ExpertTeamsSection } from '@/types/ExpertTeamsSection'
import type { ReliableTimelinesSection } from '@/types/ReliableTimelinesSection'

defineProps<{
  designedToDeliver: {
    designedto: DesignedToSection
    designdLed: DesignedLedSection
    expertTeams: ExpertTeamsSection
    reliableTimelines: ReliableTimelinesSection
  }
}>()
</script>
