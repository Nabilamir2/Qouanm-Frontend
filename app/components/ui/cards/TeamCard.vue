<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-[75%] rounded-[20px] overflow-hidden">
        <NuxtImg :src="image" alt="team qouanm" class="w-full h-full  object-cover rounded-[20px]" />
    </div>
    <div class="pt-6">
        <p class="text-primary-1 text-[1.75rem] font-bold leading-[1.3]">{{ name }}</p>
        <p class="text-primary-gold text-[1rem] font-semibold leading-normal mt-4">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    },
}
</script>
