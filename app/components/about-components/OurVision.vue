<template>
  <section class="bg-black">
    <div class="grid grid-cols-5 gap-13 pt-20 px-15 w-full">
      <div class="col-span-3 relative min-h-[671px] overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full max-w-[820px]">
          <NuxtImg
            :src="image"
            :alt="label"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="col-span-2 flex flex-col justify-center ">
        <h5 class="text-[2rem] font-bold text-primary-gold">{{ label }}</h5>
        <div class="w-15 h-px bg-primary-gold my-8"></div>
        <p class="text-white font-normal text-[1.75rem] leading-[1.3]">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})
</script>
