<template>
  <!-- //// breadcrumb  -->
    <nav class="flex py-5" aria-label="Breadcrumb">
      <ol
        class="flex items-center flex-wrap gap-[8px]"
      >
        <li
          class="flex items-center cursor-pointer text-nowrap"
          v-for="(items, index) in breadcrumbArray"
          :key="index"
        >
          <NuxtLink
            :to="items.to"
            class="flex items-center font-thin hover:text-white mx-1 text-wrap"
            :class="`text-sm text-grey-text-20 `"
          >
            {{ items.name }}
          </NuxtLink>
          <Icon 
            name="lucide:chevron-right" 
            v-if="index !== breadcrumbArray.length - 1"
           class="text-grey-text-20"
          />
        </li>
      </ol>
    </nav>
</template>

<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import type { BreadcrumbType } from "~/types/Breadcrumb";

export default defineComponent({
  props: {
    breadcrumbArray: {
      type: Array as PropType<BreadcrumbType[]>,
      default: () => [
        { name: 'Home', to: '/' },
      ],
    },
  },
})
</script>
