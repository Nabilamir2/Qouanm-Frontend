<template>
  <section class="bg-primary-gold-10 lg:px-15 py-20">
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center lg:px-32 px-4">
        <h5 class=" text-[2rem] font-bold text-primary-gold">{{ label }}</h5>

        <p
          class="text-primary-1 font-bold text-[3.25rem] text-center leading-[1.2] px-4"
        >
          {{ descriptionArray.firstPart }}
          <span
            class="text-grey-text-40"
            >{{ descriptionArray.secondPart }}</span
          >
        </p>
      </div>
      <div
        class="flex items-center justify-center max-h-120 overflow-hidden rounded-[20px] mt-16"
      >
        <img
          :src="image"
          :alt="label"
          class="w-full h-full object-cover  rounded-[20px]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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

const descriptionArray = computed(() => {
    const cutDescription = props.description.split(" ");
    const halfLength = Math.floor(cutDescription.length / 2);
    const firstPart = cutDescription.slice(0, halfLength).join(" ");
    const secondPart = cutDescription.slice(halfLength).join(" ");
    return { firstPart, secondPart }
});
</script>
