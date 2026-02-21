<template>
  <div
    class="flex flex-col items-center justify-center lg:max-w-[652px] md:max-w-[490px]"
  >
    <h2 class="text-center text-white">{{ title }}</h2>
    <p class="text-center text-primary-text">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
export default {
    name: 'IntroCenterSection',
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    }
}
</script>
