<template>
  <section class="bg-primary-1 overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-15 px-[60px] py-[115px]">
      <motion.div
        class="col-span-1 flex flex-col items-center justify-center"
        :initial="{
                rotate: -10,
                opacity: 0,
                translateX: '-100%',
            }"
        :whileInView="{
            rotate: 0,
            translateX: 0,
            opacity: 1
        }"
        :transition="{
            duration: 0.5,
            ease: 'easeOut',
            delay: 0.3
        }"
        :viewport="{ once: false }"
      >
        <IntroAboutSection :title="title" :subtitle="subtitle" />
      </motion.div>

      <motion.div
        class="col-span-3 rounded-[20px]"
        :initial="{ translateX: '100%', opacity: 0 }"
        :whileInView="{ translateX: 0, opacity: 1 }"
        :transition="{ duration: 0.5,  ease: 'easeOut', delay: 0.3 }"
        :viewport="{ once: false }"
      >
        <NuxtImg
          :src="image"
          alt="solutions-img"
          width="1036"
          height="652"
          format="webp"
          quality="80"
          class="w-full h-full object-cover rounded-[20px]"
        />
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from "motion-v"
import IntroAboutSection from '../main-component/IntroAboutSection.vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
})
</script>
