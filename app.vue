<script setup lang="ts">
const store = useStore();
const { loadingScreen } = storeToRefs(store);

useHead({
  meta: [
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
  ],
});
</script>

<template>
  <section class="relative max-h-dvh">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UModals />
    <UNotifications />

    <Loader v-if="loadingScreen" />
  </section>
</template>
