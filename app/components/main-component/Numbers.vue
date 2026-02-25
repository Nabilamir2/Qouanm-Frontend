<template>
  <div
    v-for="(item, index) in number"
    :key="index"
    class=" 
            border-r-2 
            border-primary-gold/20
             last:border-r-0 px-10"
  >
    <h3 class="text-primary-gold text-[6rem] font-light leading-none">
      {{ item.number }}
    </h3>
    <p class="text-grey-text-10 text-normal font-normal">{{ item.text }}</p>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
    props: {
        number: {
            type: Array as PropType<{ number: string, text: string }[]>,
            default: () => []
        }
    }
}
</script>
