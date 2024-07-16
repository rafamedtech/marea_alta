<script setup lang="ts">
import { SurveyModal } from '#components';
import type { FormSubmitEvent, FormError } from '#ui/types';

const { surveyData, sendSurvey, sendEmail } = useSurvey();
// await getQuestions();

const modal = useModal();
const loadingBtn = ref(false);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.waiter) {
    errors.push({ path: 'waiter', message: 'Selecciona una opción' });
    window.scrollTo(0, 0);
  }

  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const survey = { ...event.data, questions: surveyQuestions };

  loadingBtn.value = true;

  setTimeout(async () => {
    // await sendSurvey(survey);
    // await sendEmail();

    console.log(survey);
    modal.open(SurveyModal, {});
    loadingBtn.value = false;
  }, 500);
}

const questions = ref(surveyQuestions);

// const ratings = [1, 2, 3, 4, 5];
const ratings = ['1', '2', '3', '4', '5'];
</script>

<template>
  <UForm :state="surveyData" :validate="validate" :validate-on="['submit']" class="mx-auto max-w-md" @submit="onSubmit">
    <article class="flex flex-col gap-4">
      <UFormGroup label="Nombre" name="name">
        <UInput size="xl" v-model="surveyData.name" placeholder="Escribe tu nombre" :ui="{ rounded: '' }" />
      </UFormGroup>
      <UFormGroup label="Correo electrónico" name="email">
        <UInput
          size="xl"
          type="email"
          v-model="surveyData.email"
          placeholder="Escribe tu correo electrónico"
          :ui="{ rounded: '' }"
        />
      </UFormGroup>
      <UFormGroup label="Mesero que le atendió" name="waiter">
        <USelectMenu
          v-model="surveyData.waiter"
          :options="waitersList"
          size="xl"
          color="white"
          :ui="{ color: { gray: { outline: 'dark:bg-dark-strong' } }, rounded: '' }"
          placeholder="Selecciona un mesero"
        />
      </UFormGroup>
    </article>

    <section class="my-12 flex flex-col gap-4">
      <article
        v-for="question in questions"
        :key="question.id"
        class="flex items-center gap-4 border-b border-gray-300 pb-6 dark:border-gray-600 md:flex-row md:items-center md:gap-2"
      >
        <h3 class="flex-1">{{ question.text }}</h3>
        <div class="flex items-center justify-center gap-2">
          <USelectMenu
            :options="ratings"
            v-model="question.rating"
            size="xl"
            color="white"
            :ui="{ color: { gray: { outline: 'dark:bg-dark-strong' } }, rounded: '' }"
            class="forced-rounded-none"
          />
          <Icon name="i-heroicons-star" size="32" class="text-primary" />
        </div>
      </article>
    </section>

    <UFormGroup label="Comentarios">
      <UTextarea
        v-model="surveyData.comments"
        size="xl"
        placeholder="Escribe aquí tus comentarios"
        :ui="{ rounded: '' }"
      />
    </UFormGroup>

    <section class="mt-8 flex justify-end">
      <UButton
        :loading="loadingBtn"
        size="lg"
        :label="loadingBtn ? 'Enviando' : 'Enviar'"
        :disabled="loadingBtn"
        icon="i-heroicons-paper-airplane"
        type="submit"
        :ui="{ rounded: '' }"
      />
    </section>
  </UForm>
</template>
