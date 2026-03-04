<template>
  <section class="-z-10 relative bg-primary-1 py-20 px-15 flex items-center justify-center">
    <div
      class="pointer-events-none absolute inset-0 flex items-end justify-center pb-4"
      aria-hidden="true"
    >
      <div class="w-[520px] h-[520px] rounded-full bg-[#DBB571] blur-3xl opacity-70" />
    </div>
    <QuotationForm :title="'Get Your Quotation'" :description="'Share your project details and receive a tailored quotation from our team.'" />
  </section>
</template>

<script setup lang="ts">
import QuotationForm from '~/components/main-component/QuotationForm.vue'
</script>