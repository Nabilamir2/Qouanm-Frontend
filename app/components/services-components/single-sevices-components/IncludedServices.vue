<template>
  <section class="bg-black py-13">
    <div class="container px-15 grid grid-cols-8 gap-8 max-w-[86vw]">
      <div class="lg:col-span-5 col-span-8 relative h-[65vh]">
        <div class="absolute top-0 left-0 w-[80%] h-[90%] rounded-[1.25rem]">
          <img
            :src="small_image"
            alt="small_image"
            class="w-full h-full object-cover rounded-[1.25rem]"
          />
        </div>
        <div class="absolute bottom-0 right-4 w-[39%] h-[50%] border-t-4 border-l-4 border-black rounded-[1.25rem]">
          <img
            :src="small_image"
            alt="small_image"
            class="w-full h-full object-cover rounded-[1.25rem]"
          />
        </div>
      </div>
      <div class="lg:col-span-3 col-span-8 flex flex-col justify-center gap-4.5">
        <h3 class="text-white text-[2.75rem] font-bold text-nowrap">{{ title }}</h3>
        <p class="text-grey-text-10 text-[1rem] font-normal">{{ subtitle }}</p>
        <ul
          class="list-none text-grey-text-10 text-[1rem] font-normal flex flex-col gap-4.5"
        >
          <li
            v-for="point in points"
            :key="point"
            class="text-grey-text-10 text-[1rem] font-normal text-nowrap"
          >
            <Icon
              name="mdi:check-circle-outline"
              class="text-primary-gold text-[1rem] font-normal mr-2"
            />
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps({
 title: {
    type: String,
    default: '',
 },
 subtitle: {
    type: String,
    default: '',
 },
 points: {
    type: Array<string>,
    default: () => [],
 },
 small_image: {
    type: String,
    default: '',
 },
 big_image: {
    type: String,
    default: '',
 },
})
</script>
