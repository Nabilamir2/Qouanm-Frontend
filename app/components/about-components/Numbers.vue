<template>
    <section class="bg-primary-1 py-[80px] flex items-center justify-center">
            <div v-for="(item, index) in number" :key="index" 
            class=" 
            border-r-2 
            border-primary-gold/20
             last:border-r-0 px-10"
             >
                <h3 class="text-primary-gold text-[6rem] font-light leading-none"> {{ item.number }}</h3>
                <p class="text-grey-text-10 text-normal font-normal">{{ item.text }}</p>
            </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    number: {
        type: Array as PropType<{ number: string, text: string }[]>,
        default: () => []
    }
})
</script>