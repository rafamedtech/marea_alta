<script setup lang="ts">
import DropdownMenu from '~/components/DropdownMenu.vue';

const { links } = useNav();
const { navLinksLabels } = useI18n();
</script>

<template>
  <main class="flex min-h-screen w-full justify-between lg:pt-0 relative">
    <section class="hidden justify-between lg:flex lg:w-1/6">
      <Sidebar :items="links" />
    </section>

    <div class="flex-auto transition-all min-h-dvh h-dvh relative pt-24 md:pt-0 lg:w-5/6">
      <Topbar />

      <UContainer class="bg-gray-100 min-h-dvh transition-colors dark:bg-neutral-900 relative lg:px-12">
        <slot> </slot>
      </UContainer>

      <div class="fixed bottom-4 right-4">
        <DropdownMenu :links="navLinksLabels" />
      </div>

      <!-- <LanguageModal /> -->
    </div>
  </main>
</template>
