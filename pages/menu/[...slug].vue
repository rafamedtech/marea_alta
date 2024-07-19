<script setup lang="ts">
const { params } = useRoute();
const [slug] = params.slug;

const { data: menu } = await useFetch('/api/menu');
const currentCategory = menu.value?.find((category) => category.slug === slug) ?? ({} as Category);

const columns = ref(1);

useHead({
  title: currentCategory?.name.es,
  meta: [
    {
      name: 'description',
      content: 'Descripcion',
    },
  ],
});
</script>

<template>
  <main>
    <section class="pt-4 md:pt-8">
      <CategoryCarousel :category="currentCategory" title-size="large" />
    </section>

    <section class="relative">
      <section class="pb-36 pt-8">
        <SectionItems :items="currentCategory?.items" :columns="columns" />
      </section>

      <ScrollToTop back-link="/menu" />
    </section>
  </main>
</template>
