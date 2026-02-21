<template>
  <div class="flex flex-col gap-8 h-full" :class="textColor">
    <div class=" overflow-hidden">
      <p class="line-clamp-9 text-[0.8rem] lg:text-[1rem]">
        {{ comment }}
      </p>
    </div>

    <div class="flex flex-col mt-auto">
      <div>
        <NuxtImg
          class="w-12 h-12 rounded-full border-2 border-transparent object-cover"
          :src="image"
          alt="reviewer"
          width="48"
          height="48"
          format="webp"
          quality="85"
        />
      </div>
      <div>
        <div class="font-bold text-[1rem] line-clamp-1">{{ name }}</div>
        <div class="mt-1 line-clamp-1 text-[12px]">{{ jobDescription }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
    name: 'ReviewsCard',
    props: {
        comment: {
            type: String,
            default: () => ''
        },
        name: {
            type: String,
            default: () => ''
        },
        jobDescription: {
            type: String,
            default: () => ''
        },
        image: {
            type: String,
            default: () => ''
        },
        textColor: {
            type: String,
            default: () => 'text-white'
        }
    }
}
</script>
