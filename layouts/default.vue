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
      <!-- <UButton icon="i-heroicons-bars-3-bottom-right-solid" class="fixed z-[49] bottom-4 right-4" /> -->
      <!-- <Icon name="heroicons:bars-3-bottom-right-solid" class="absolute bottom-4 right-4" /> -->
      <BottomNavbar :items="navLinksLabels" class="lg:hidden" />

      <!-- <FeaturedEvent /> -->
    </div>
  </main>
</template>
