<template>
  <div class="flex flex-col items-center justify-center">
    <Breadcrumb v-if="breadcrumbArray.length > 0" :breadcrumbArray="breadcrumbArray" />
    <p class="text-primary-gold text-regular font-small text-center">{{ label }}</p>
    <h1 class="text-white lg:text-[4.375rem] text-[3rem] pb-6 text-center">{{ title }}</h1>
    <p class="text-primary-text text-[1.1em] font-normal max-w-200 text-center">
      {{ subtitle }}
      </p>

    <MainButton class="mt-8" v-if="hasBtn" :ButtonText="'Get Quotation'" :paddingX="'px-[52px] py-[17.5px]'" />
  </div>
</template>

<script lang="ts">
import MainButton from '../ui/buttons/MainButton.vue';
import Breadcrumb from '../ui/breadcrumb/Breadcrumb.vue';
import { defineComponent, type PropType } from 'vue'
import type { BreadcrumbType } from '~/types/Breadcrumb';

export default defineComponent({
  components: {
    MainButton,
    Breadcrumb
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
    breadcrumbArray: {
      type: Array as PropType<BreadcrumbType[]>,
      default: () => [],
    },
  },
});
</script>
