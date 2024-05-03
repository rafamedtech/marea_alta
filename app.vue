<script setup lang="ts">
const store = useStore();
const { loadingScreen } = storeToRefs(store);
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
