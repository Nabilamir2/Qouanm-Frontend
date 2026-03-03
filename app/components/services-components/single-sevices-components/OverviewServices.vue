<template>
    <section class="bg-black py-13 ">
        <div class="container mx-auto max-w-[63vw] flex flex-col gap-8">
        <h5 class="text-primary-gold text-[2rem] font-bold">{{ overviewTitle }}</h5>
        <hr class="w-20 border-primary-gold" />
        <div v-html="overviewDescription"  class="text-white text-[1.25rem] font-400"></div>
    </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    overviewTitle: {
        type: String,
        default: '',
    },
    overviewDescription: {
        type: String,
        default: '',
    },
})
</script>