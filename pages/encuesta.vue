<script setup lang="ts">
useHead({
  title: 'Encuesta de satisfacción',
  meta: [
    {
      name: 'description',
      content: 'Agradecemos su opinión respondiendo unas preguntas',
    },
    // Facebook Meta tags
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://mareaalta.netlify.app/encuesta',
    },
    {
      property: 'og:title',
      content: 'Marea Alta - Fresh food | Encuesta de satisfacción 📖',
    },
    {
      property: 'og:description',
      content: 'Ayúdanos a mejorar nuestro servicio.',
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
    <AppHeading title="Encuesta de satisfacción" description="Agradecemos su opinión respondiendo unas preguntas" />

    <section class="pb-24 pt-8">
      <SurveyForm />
    </section>
  </main>
</template>
