<template>
    <footer>
      <FooterContent />
      <DesignedBy />
    </footer>
  </template>
  <script lang="ts">
  import FooterContent from './footer-content/FooterContent.vue';
  import DesignedBy from './footer-content/DesignedBy.vue';
  export default {
      components: {
        FooterContent,
        DesignedBy
      } 
  }
  </script>
  