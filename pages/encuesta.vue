<script setup lang="ts">
const { surveyPageLabels } = useI18n();

// const { getQuestions } = useSurvey();
// await getQuestions();

useHead({
  title: surveyPageLabels.value.title,
  meta: [
    {
      name: 'description',
      content: surveyPageLabels.value.description,
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
    <AppHeading :title="surveyPageLabels.title" :description="surveyPageLabels.description" />

    <section class="pb-24 pt-8">
      <SurveyForm />
    </section>
  </main>
</template>
