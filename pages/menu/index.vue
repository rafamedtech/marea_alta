<script setup lang="ts">
const { menuPageLabels } = useI18n();

const { data: menu } = await useFetch('/api/menu');

useHead({
  title: `${menuPageLabels.value.title} | ${menuPageLabels.value.description}`,
  meta: [
    {
      name: 'description',
      content: menuPageLabels.value.description,
    },
    // Facebook Meta tags
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://brunette.com.mx/',
    },
    {
      property: 'og:title',
      content: 'Brunette Kitchen & Drinks | Menú 📖',
    },
    {
      property: 'og:description',
      content: 'Conoce nuestros deliciosos platillos y mixología.',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/rafamed-dev/image/upload/v1705703429/menu/OG_Image_cl4k6w.png',
    },
  ],
});
</script>

<template>
  <main>
    <AppHeading :title="menuPageLabels.header" />

    <section class="grid gap-6 md:grid-cols-2 md:gap-8 md:px-2 md:pt-4 pb-24 pt-8">
      <CategoryCard v-for="category in menu" :key="category.name.es" :category="category" link padded />
    </section>
  </main>
</template>
