<template>
  <section class="bg-black py-[100px] px-[60px]">
    <div class="container">
      <div class="flex flex-col items-center justify-center pb-8">
        <IntroCenterSection :title="title" :subtitle="subtitle" />
      </div>

      <div class="grid grid-cols-4 gap-6 auto-rows-[220px]">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="relative"
          :class="gridClasses[index]"
        >
          <!-- Image (BOTTOM) -->
          <NuxtImg
            :src="project.image"
            alt="featured project"
            width="400"
            height="220"
            format="webp"
            quality="80"
            class="w-full h-full object-cover rounded-xl z-0"
          />

          <div
            class="flex items-center justify-center w-full h-full absolute top-0 left-0"
          >
            <AnimatePresence>
              <motion.div
                class="cursor-pointer
             bg-primary-gold rounded-full
             flex items-center justify-center
             p-[10px]
             shadow-[0_0_0_2px_rgba(0,0,0,0.15)] translate-y-[calc(50%+0)] translate-x-[calc(50%+0)] relative"
                @click="selectProject(project)"
                :animate="{
                    rotate: openedProjectId === project.id ? 45 : 0
                }"
                :transition="{
                    duration: 0.3,
                    ease: 'easeInOut'
                }"
              >
                <Icon name="uil:plus" style="color: white" size="12px" />
              </motion.div>

              <motion.div
                v-if="openedProjectId === project.id"
                class="absolute  z-50 bg-white text-black p-4 rounded-lg shadow-lg"
                :class="(index === 3 || index === 6) ? 'translate-x-[calc(-50%+40px)]  translate-y-[calc(50%+40px)]' : 'translate-x-[50%]  translate-y-[calc(50%+40px)]'"
                :initial="{ opacity: 0, y: -10, scale: 0.9 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :exit="{ opacity: 0, y: -10, scale: 0.9 }"
                :transition="{ duration: 0.25 }"
              >
                <FeaturedPopupCard
                  :title="project?.title"
                  :description="project?.description"
                  :statistics="project?.statistics"
                  :imageCard="project?.logo"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <MainButton
          ButtonText="View All Projects"
          :paddingX="'px-[52px] py-[11px]'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import type { PropType } from 'vue'
import type { ProjectType } from '@/types/ProjectType'
import { motion, } from 'motion-v'
import { AnimatePresence } from 'motion-v'
import FeaturedPopupCard from '../ui/cards/FeaturedPopupCard.vue'
import MainButton from '../ui/buttons/MainButton.vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    projects: {
        type: Array as PropType<ProjectType[]>,
        default: []
    }
})

import { ref } from 'vue'

const openedProjectId = ref<number | null>(null)

const selectProject = (project: ProjectType) => {
  openedProjectId.value =
    openedProjectId.value === project.id ? null : project.id
}



const gridClasses = [
  'row-span-2',
  'row-span-1',
  'row-span-3',
  'row-span-2',
  'row-span-2',
  'row-span-1',
  'row-span-1',
]
</script>
