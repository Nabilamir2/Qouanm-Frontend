<template>
    <section class="bg-primary-gold-10">
      <div class="container py-20">
        <div class="flex flex-col gap-2 justify-center items-center">
          <p class="text-secondary-text text-[1rem] font-normal">
            {{ label }}
          </p>
          <h3 class="text-primary-1 text-[2.5rem] font-bold">{{ title }}</h3>
        </div>
        <div class="w-[62%] mx-auto">
          <AskedQs :faqsQuestion="faqs" />
        </div>
        <div class="flex justify-center">
          <MainButton
            :ButtonText="'View All'"
            :paddingX="'px-[16px] py-[11px]'"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import AskedQs from '~/components/main-component/AskQs.vue';
  import MainButton from '~/components/ui/buttons/MainButton.vue';
  
  const props = defineProps<{
    title: string;
    label: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  }>();
  </script>
  