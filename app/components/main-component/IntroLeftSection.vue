<template>
  <div class="flex flex-col gap-[24px] max-w-[852px]">
    <div>
      <p
        class="text-white lg:text-[1rem] text-[0.8rem] font-bold w-fit py-1 px-4 glass-box"
      >
        {{ subtitle }}
      </p>

      <h1 class="text-white">
        {{ title }}
      </h1>
    </div>

    <div>
      <p class="text-primary-text lg:text-[1.1rem] text-[0.9rem] font-medium">
        {{ description }}
      </p>
    </div>

    <div>
      <MainButton
        :ButtonText="'Let’s Talk'"
        :colorTo="'#957C4F'"
        :colorFrom="'#DBB571'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import MainButton from '../ui/buttons/MainButton.vue'

export default {
  name: 'IntroLeftSection',
  components: {
    MainButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    hasButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
