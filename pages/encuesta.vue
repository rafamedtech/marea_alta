<script setup lang="ts">
const store = useStore();
const { isLoading } = storeToRefs(store);

const { surveyPageLabels } = useI18n();

onMounted(() => {
  isLoading.value = false;
});

const { getQuestions } = useSurvey();
await getQuestions();

useHead({
  title: surveyPageLabels.value.title,
  meta: [
    {
      name: "description",
      content: surveyPageLabels.value.description,
    },
  ],
});
</script>

<template>
  <main>
    <MainSection :loading="isLoading" padded>
      <template #heading>
        <AppHeading
          :title="surveyPageLabels.title"
          :description="surveyPageLabels.description"
        />
      </template>

      <template #content>
        <section>
          <SurveyForm />
        </section>
      </template>
    </MainSection>
  </main>
</template>
