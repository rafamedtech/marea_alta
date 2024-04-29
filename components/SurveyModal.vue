<script setup lang="ts">
const { surveyPageLabels } = useI18n();

const modal = useModal();
function closeModal() {
  modal.close();
  return navigateTo("/");
}
</script>

<template>
  <UModal
    prevent-close
    :ui="{
      wrapper: 'z-[999999]',
      overlay: { background: 'bg-dark-medium/75 dark:bg-dark-medium/75' },
      rounded: 'rounded-xl',
    }"
  >
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        background: ' dark:bg-dark-strong',
        rounded: 'rounded-xl',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg">{{ surveyPageLabels.done }}</h2>
          <UButton
            :label="surveyPageLabels.exit"
            color="primary"
            icon="i-heroicons-arrow-left-on-rectangle-solid"
            size="md"
            class="-my-1"
            @click="closeModal"
          />
        </div>
      </template>

      <h3 class="text-primary mb-2 text-xl">
        {{ surveyPageLabels.modalTitle }}
      </h3>
      <p>{{ surveyPageLabels.modalDescription }}</p>
    </UCard>
  </UModal>
</template>
