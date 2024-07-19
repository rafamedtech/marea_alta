<script setup lang="ts">
const { backLink } = defineProps<{
  backLink: string;
}>();
const store = useStore();
const { showScrollToTop } = storeToRefs(store);

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 150;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const { scrollToTopLabels } = useI18n();

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  showScrollToTop.value = false;
});
</script>

<template>
  <section
    class="text-primary fixed bottom-4 right-[5.3rem] z-[49] flex gap-2 flex-row rounded-xl lg:bottom-8 lg:right-8"
  >
    <UButton
      v-if="showScrollToTop"
      label="Subir"
      icon="i-heroicons-arrow-small-up"
      :ui="{ inline: 'flex-col', rounded: 'rounded-none' }"
      class="min-w-16"
      color="white"
      @click="scrollToTop"
    />

    <UButton
      label="Atrás"
      icon="i-heroicons-arrow-small-left"
      :ui="{ inline: 'flex-col', rounded: 'rounded-none' }"
      class="min-w-16"
      color="white"
      @click="navigateTo(backLink)"
    />
  </section>
</template>
