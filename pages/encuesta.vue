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
