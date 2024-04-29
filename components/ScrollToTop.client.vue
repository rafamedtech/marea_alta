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
    behavior: "smooth",
  });
};

const { scrollToTopLabels } = useI18n();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section
    class="text-primary bg-primary fixed bottom-[5.5rem] right-4 z-[49] flex flex-row rounded-xl shadow-md lg:bottom-8 lg:right-8"
  >
    <UButton
      v-if="showScrollToTop"
      :label="scrollToTopLabels.scrollToTop"
      icon="i-heroicons-arrow-small-up"
      class="text-white"
      :ui="{ inline: 'flex-col', rounded: 'rounded-xl' }"
      @click="scrollToTop"
    />
    <UButton
      :label="scrollToTopLabels.back"
      icon="i-heroicons-arrow-small-left"
      class="text-white"
      @click="navigateTo(backLink)"
      :ui="{ inline: 'flex-col', rounded: 'rounded-xl' }"
    />
  </section>
</template>
