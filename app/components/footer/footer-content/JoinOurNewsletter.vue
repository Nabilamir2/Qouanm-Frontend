<template>
  <div class="flex flex-col items-start justify-start">
    <p class="text-primary-gold text-2xl font-bold py-2">Join Our Newsletter</p>
    <p class="text-grey-text-10 text-base font-400 pb-3">
      Stay updated with our exclusive offers and news by joining our newsletter
    </p>
    <!-- Input + Button -->
    <form class="w-full pb-[24px]">
      <div
        class="flex items-center justify-between bg-white border rounded-lg p-[6px]"
      >
        <!-- Input -->
        <input
          type="email"
          placeholder="Enter Your Email Address"
          class="flex-1 bg-transparent outline-none text-black placeholder:text-secondary-text px-3"
        />

        <!-- Button -->
        <MainButton ButtonText="Subscribe" :hasIcon="false" />
      </div>
    </form>
    <div class="flex items-center gap-4">
      <SocialIcon name="ic:baseline-facebook" />
      <SocialIcon name="mdi:instagram" />
      <SocialIcon name="mdi:linkedin" />
      <SocialIcon name="ic:baseline-tiktok" />
    </div>
  </div>
</template>

<script setup>
import SocialIcon from '~/components/ui/buttons/SocialIcon.vue'
import MainButton from '~/components/ui/buttons/MainButton.vue';
</script>
