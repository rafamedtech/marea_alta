<script setup lang="ts">
const store = useStore();
const { isLoading } = storeToRefs(store);

const { categories, getMenu } = useMenu();

const { menuPageLabels } = useI18n();

await getMenu();

onMounted(() => {
  isLoading.value = false;
});

// useHead({
//   title: menuPageLabels.value.title,
//   meta: [
//     {
//       name: "description",
//       content: menuPageLabels.value.description,
//     },
//   ],
// });
useHead({
  title: menuPageLabels.value.title,
  meta: [
    {
      name: "description",
      content: menuPageLabels.value.description,
    },
    // Facebook Meta tags
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://brunette.com.mx/",
    },
    {
      property: "og:title",
      content: "Brunette Kitchen & Drinks | Menú 📖",
    },
    {
      property: "og:description",
      content: "Conoce nuestros deliciosos platillos y mixología.",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/rafamed-dev/image/upload/v1705703429/menu/OG_Image_cl4k6w.png",
    },
  ],
});
</script>

<template>
  <main>
    <MainSection :loading="isLoading" padded>
      <template #heading>
        <AppHeading title="Menú" />
      </template>

      <template #content>
        <section class="grid gap-6 md:grid-cols-2 md:gap-8 md:px-2 md:pt-4">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
            link
            rounded
          />
        </section>
      </template>
    </MainSection>
  </main>
</template>
