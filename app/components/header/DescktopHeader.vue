<template>
  <div class="flex justify-between items-center px-[60px] py-[21px] h-[94px]">
    <div class="h-full flex items-center">
      <NuxtLink to="/">
        <img src="/images/logo-white.png" alt="logo" width="238" height="52" />
      </NuxtLink>
    </div>

    <div
      class="flex items-center justify-between gap-[24px] glass-box p-[8px] min-w-[260px] h-[56px]"
    >
      <div class="flex items-center justify-center pl-[8px] h-full">
        <AllLinks />
      </div>

      <div class="text-primary-gold font-bold text-nowrap">19123</div>

      <div class="h-full flex items-center">
        <MainButton
          :ButtonText="'Let’s Talk'"
          :colorTo="'#957C4F'"
          :colorFrom="'#DBB571'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MainButton from '../ui/buttons/MainButton.vue'
import * as AllLinks from './header-content/AllLinks.vue'

export default {
  components: {
    MainButton,
    AllLinks: (AllLinks as any).default || AllLinks,
  },
}
</script>
