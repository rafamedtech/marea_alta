<script setup lang="ts">
import { SurveyModal } from "#components";
import { waitersList } from "@/utils/surveyInfo";
import type { FormSubmitEvent } from "#ui/types";

const { surveyPageLabels } = useI18n();

const { surveyData, getQuestions, questions, sendSurvey, sendEmail } =
  useSurvey();
await getQuestions();

const modal = useModal();
const loadingBtn = ref(false);
async function onSubmit(event: FormSubmitEvent<any>) {
  const survey = { ...event.data, questions: questions.value };

  loadingBtn.value = true;

  setTimeout(async () => {
    await sendSurvey(survey);
    // await sendEmail();
    modal.open(SurveyModal, {});
    loadingBtn.value = false;
  }, 500);
}

const ratings = [1, 2, 3, 4, 5];
</script>

<template>
  <UForm :state="surveyData" class="mx-auto max-w-md" @submit="onSubmit">
    <article class="flex flex-col gap-4">
      <UFormGroup :label="surveyPageLabels.form.name">
        <UInput
          size="xl"
          v-model="surveyData.name"
          placeholder="Escribe aquí"
        />
      </UFormGroup>
      <UFormGroup :label="surveyPageLabels.form.email">
        <UInput
          size="xl"
          type="email"
          v-model="surveyData.email"
          placeholder="ejemplo@correo.com"
        />
      </UFormGroup>
      <UFormGroup :label="surveyPageLabels.form.waiter">
        <USelectMenu
          v-model="surveyData.waiter"
          :options="waitersList"
          size="xl"
          color="gray"
          :ui="{ color: { gray: { outline: 'dark:bg-dark-strong' } } }"
        />
      </UFormGroup>
    </article>

    <section class="my-12 flex flex-col gap-4">
      <article
        v-for="question in questions"
        class="flex items-center gap-4 border-b border-gray-300 pb-6 dark:border-gray-600 md:flex-row md:items-center md:gap-2"
      >
        <h3 class="flex-1">{{ question.text }}</h3>
        <div class="flex items-center justify-center gap-2">
          <USelectMenu
            :options="ratings"
            v-model="question.rating"
            size="xl"
            color="gray"
            :ui="{ color: { gray: { outline: 'dark:bg-dark-strong' } } }"
          />
          <Icon name="i-heroicons-star" size="32" class="text-primary" />
        </div>
      </article>
    </section>

    <UFormGroup :label="surveyPageLabels.form.comments">
      <UTextarea
        v-model="surveyData.comments"
        size="xl"
        placeholder="Escribe aquí tus comentarios"
      />
    </UFormGroup>

    <section class="mt-8 flex justify-end">
      <UButton
        :loading="loadingBtn"
        size="lg"
        :label="
          loadingBtn
            ? surveyPageLabels.form.loading
            : surveyPageLabels.form.button
        "
        icon="i-heroicons-paper-airplane"
        type="submit"
      />
    </section>
  </UForm>
</template>
