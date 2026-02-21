<template>
  <div class="flex flex-col gap-[24px] max-w-[354px]">
    <h2 class="text-white">
      {{ title }}
    </h2>

    <p class="text-grey-text-30 lg:text-[1.1em] text-[0.8rem]">
      {{ subtitle }}
    </p>

    <div>
      <OutlineButton :ButtonText="'About Qouanm'" />
    </div>
  </div>
</template>

<script lang="ts">
import OutlineButton from '../ui/buttons/OutlineButton.vue'
export default {
  name: 'IntroAboutSection',
  components: {
    OutlineButton
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
