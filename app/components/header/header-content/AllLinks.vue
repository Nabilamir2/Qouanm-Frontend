<template>
  <motion.div
    class="relative cursor-pointer flex items-center"
    @click="toggleIcon"
  >
    <!-- MENU -->
    <motion.div
      class="overflow-hidden md:hidden lg:block"
      :animate="{
        width: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.95
      }"
      :transition="{ duration: 0.5, ease: 'easeInOut' }"
      :style="{ pointerEvents: isOpen ? 'auto' : 'none' }"
      :class="isOpen ? 'px-[24px]' : 'px-0'"
    >
      <ul class="flex gap-[24px] whitespace-nowrap">
        <li
          v-for="link in AllLinks"
          :key="link.route"
          class="text-white text-[0.8rem] font-medium"
        >
          <NuxtLink :to="link.route">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </motion.div>

    <motion.div
      class="flex flex-col absolute top-10 right-0 w-fit glass-box py-6 px-1 md:block lg:hidden"
      :animate="{
        opacity: isOpen ? 1 : 0,
      }"
      :transition="{ duration: 0.5, ease: 'easeInOut' }"
      :style="{
        pointerEvents: isOpen ? 'auto' : 'none'
      }"
      v-show="true"
    >
      <ul class="flex flex-col px-[24px] gap-[24px] whitespace-nowrap">
        <li
          v-for="link in AllLinks"
          :key="link.route"
          class="text-white text-[0.8rem] font-medium"
        >
          <NuxtLink :to="link.route">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </motion.div>

    <!-- ICON -->
    <div class="relative w-6 h-full">
      <motion.div
        class="absolute right-0 w-[50%] h-[2px] bg-white"
        :animate="isOpen ? { y: 0 } : { y: -6 }"
        :transition="{ duration: 0.35, ease: 'easeInOut' }"
      />

      <motion.div
        class="absolute w-full h-[2px] bg-white"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.25 }"
      />

      <motion.div
        class="absolute left-0 w-[50%] h-[2px] bg-white"
        :animate="isOpen ? { y: 0 } : { y: 6 }"
        :transition="{ duration: 0.35, ease: 'easeInOut' }"
      />
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v"
import { ref } from "vue"
import { AllLinks } from "~/utils/navLinks"

const isOpen = ref(false)

const toggleIcon = () => {
  isOpen.value = !isOpen.value
}
</script>
