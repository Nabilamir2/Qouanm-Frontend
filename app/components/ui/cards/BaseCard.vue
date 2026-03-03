<template>
  <div
    class="rounded-[1.25rem] p-8 w-full h-full"
    :class="isEven ? 'bg-primary-gold-40' :'bg-black' "
  >
    <h3
      class=" lg:text-[1.5rem] text-[1.3rem] font-bold mb-2"
      :class="isEven ? 'text-[#1E1D1D]' :'text-white' "
    >
      {{ title }}
    </h3>
    <p
      class="lg:text-[1rem] text-[0.8rem] font-normal"
      :class="isEven ? 'text-secondary-text' : 'text-grey-text-20' "
    >
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    computed: {
        isEven(): boolean {
            return this.index % 2 === 0
        },
    },
}
</script>
