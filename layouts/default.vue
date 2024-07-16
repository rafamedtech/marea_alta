<script setup lang="ts">
const { links } = useNav();
const { navLinksLabels } = useI18n();
</script>

<template>
  <main class="flex min-h-screen w-full justify-between lg:pt-0 relative">
    <section class="hidden justify-between lg:flex lg:w-1/6">
      <Sidebar :items="links" />
    </section>

    <div class="flex-auto transition-all lg:w-5/6">
      <Topbar />

      <UContainer class="min-h-screen bg-gray-100 transition-colors dark:bg-neutral-900 lg:relative lg:px-12">
        <slot> </slot>
      </UContainer>

      <BottomNavbar :items="navLinksLabels" class="lg:hidden" />

      <!-- <LanguageModal /> -->
    </div>
  </main>
</template>
