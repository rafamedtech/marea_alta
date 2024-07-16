<script setup lang="ts">
const { data: menu } = await useFetch('/api/menu');

useHead({
  title: 'Marea Alta | Fresh Food',
  meta: [
    {
      name: 'description',
      content: 'Fresh food',
    },
    // Facebook Meta tags
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://mareaalta.netlify.app/menu',
    },
    {
      property: 'og:title',
      content: 'Marea Alta - Fresh food | Menú 📖',
    },
    {
      property: 'og:description',
      content: 'Conoce nuestros deliciosos platillos y mixología.',
    },
    {
      property: 'og:image',
      content: 'https://res.cloudinary.com/rafamed-dev/image/upload/v1715461267/menus/marea_alta/logo-cover_kqhb6y.png',
    },
  ],
});
</script>

<template>
  <main>
    <AppHeading title="Nuestro menú" />

    <section class="grid gap-6 md:grid-cols-2 md:gap-8 md:px-2 md:pt-4 pb-24 pt-8">
      <CategoryCard v-for="category in menu" :key="category.name.es" :category="category" link padded />
    </section>
  </main>
</template>
