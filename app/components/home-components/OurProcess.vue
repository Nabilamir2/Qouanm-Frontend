<template>
  <section class="bg-primary-1 px-[60px] pb-[100px]">
    <div class="container grid grid-cols-10 gap-4 pt-[100px]">
      <div class="col-span-4">
        <div class="sticky top-[100px]">
          <h2 class="text-white">{{ title }}</h2>
          <p
            class="text-primary-text lg:text-[1.1em] text-[0.8rem] pt-2 pb-[60px]"
          >
            {{ subtitle }}
          </p>
          <div class="max-w-[513px] max-h-[513px] pr-[46px]">
            <img
              :src="image"
              alt="Our Process"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="col-span-6">
        <div class="relative flex justify-center lg:mx-[130px] mx-[20px]">
          <div
            class="absolute left-2 transform h-full w-px bg-primary-gold"
          ></div>

          <ol class="text-body" role="list">
            <li
              v-for="(item, index) in steps"
              :key="index"
              class="flex items-center"
            >
              <!-- Auto number -->
              <div class="absolute -left-4 bg-primary-1 py-[16px]">
                <div
                  class="border border-primary-gold rounded-full 
              p-2  
              w-[44px] h-[44px] 
              flex items-center justify-center
              font-bold text-[24px] text-primary-gold"
                  aria-hidden="true"
                >
                  {{ item.number }}
                </div>
              </div>
              <div class="lg:max-w-[370px] max-w-[250px]  py-[35px]">
                <p
                  class="font-bold text-[24px] text-primary-gold py-2 pt-[35px]"
                >
                  {{ item.title }}
                </p>
                <p class="font-normal text-[16px] text-[#E5E5E5] text-wrap">
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div class="mt-8 lg:ml-[240px] ml-[80px]">
          <MainButton
            :ButtonText="`Let's Talk`"
            paddingX="px-[52px] py-[17.5px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import MainButton from '../ui/buttons/MainButton.vue';

defineProps<{
    title: string;
    subtitle: string;
    image: string;
    steps: {
        number: number;
        title: string;
        description: string;
    }[];
}>();
</script>
