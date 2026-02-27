<template>
  <section class="bg-primary-1 lg:py-[100px] py-[50px] lg:px-[60px] px-[20px]">
    <motion.div
      class="container grid grid-cols-4 bg-black rounded-[20px]"
      :initial="{
            opacity: 0,
            y: 0,
            scale: 0
          }"
      :whileInView="{
          opacity: 1,
          y: 0,
          scale: 1
        }"
      :viewport="{ once: true}"
      :transition="{
          delay: 0.1,
          duration: 0.8,
          ease: 'easeOut'
        }"
    >
      <div
        class="relative lg:col-span-2 col-span-4 w-full  lg:min-h-[95vh] min-h-[50vh] h-full"
      >
        <NuxtImg
          :src="image"
          alt="ceo"
          width="700"
          height="1050"
          format="webp"
          quality="80"
          class="w-full h-full object-cover object-top absolute top-0 left-0 lg:rounded-l-[20px] lg:rounded-t-none rounded-t-[20px]"
        />
      </div>
      <div class="lg:col-span-2 col-span-4">
        <div class="flex flex-col gap-[16px] p-[44px]">
          <h3 class="text-white text-[3.25rem] font-700">
            {{ splitTitle.first }}
            <span class="text-primary-gold">{{ splitTitle.last }}</span>
          </h3>
          <hr class="w-30 border-primary-gold" />
            <div v-html="description"  class="text-grey-text-20 text-[1.25rem] font-400"></div>
        </div>
        <div
          class="flex justify-between items-center pl-[44px] pr-[20px] pb-[20px]"
        >
          <div class="min-w-[121px] min-h-[65px]">
            <NuxtImg
              :src="signature"
              alt="signature"
              width="121"
              height="65"
              format="webp"
              quality="85"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="min-w-[181px] min-h-[181px]">
            <NuxtImg
              :src="logo"
              alt="ceo"
              width="100%"
              height="100%"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { motion } from "motion-v"

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  signature: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  }
})


const splitTitle = computed(() => {
  if (!props.title) return { first: "", last: "" }

  const words = props.title.trim().split(" ")

  if (words.length === 1) {
    return { first: "", last: words[0] }
  }

  return {
    first: words.slice(0, -1).join(" "),
    last: words[words.length - 1]
  }
})
</script>
