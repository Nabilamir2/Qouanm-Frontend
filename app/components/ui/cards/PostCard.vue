<template>
  <div
    class="rounded-[20px] text-surface shadow-secondary-1 dark:bg-surface-dark
   dark:text-white"
  >
    <div class="relative overflow-hidden bg-cover bg-no-repeat w-full">
      <NuxtImg class="rounded-[20px] w-full h-full object-cover" :src="image" alt="qouanm post" width="400" height="260" format="webp" quality="80" />
      <div class="absolute bottom-2 left-2 flex gap-[4px]">
        <p class="text-secondary-text px-4 py-[8px] rounded-[40px] bg-white">
          {{ time }}
        </p>
        <p class="text-secondary-text px-4 py-[8px] rounded-[40px] bg-white">
          {{ date }}
        </p>
      </div>
    </div>
    <div class="pt-4">
      <p class="text-[#131313] text-[1rem] font-bold max-w-[70%] pb-4">
        {{ title }}
      </p>
      <TextButton :ButtonText="'Read More'" />
    </div>
  </div>
</template>

<script lang="ts">
import TextButton from '../buttons/TextButton.vue';

export default {
    name: 'PostCard',
    components: {
        TextButton
    },
    props: {
        title: {
            type: String,
            default: () => ''
        },
        blog: {
            type: String,
            default: () => ''
        },
        time: {
               type: String,
            default: () => ''
        },
        image: {
            type: String,
            default: () => ''
        },
        date: {
            type: String,
            default: () => ''
        }
    }
}
</script>
