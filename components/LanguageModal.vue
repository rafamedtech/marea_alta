<script setup lang="ts">
import { Language } from '@/types/Enums';

const store = useStore();
const { eventModal } = storeToRefs(store);

const { changeLanguage } = useI18n();

function toggleLanguage() {
  changeLanguage(Language.English);
  eventModal.value = false;
}
</script>

<template>
  <UModal
    v-model="eventModal"
    :ui="{
      wrapper: 'z-[999999]',
      overlay: { background: 'bg-gray-800/75 dark:bg-gray-800/75' },
      rounded: 'rounded-xl',
    }"
    class="max-h-dvh overflow-hidden"
    prevent-close
  >
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        background: 'dark:bg-gray-900',
        rounded: 'rounded-xl',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg font-bold">Idioma/Language</h2>
        </div>
      </template>

      <section>
        <h2>Selecciona tu idioma / Choose your language</h2>
        <div class="flex items-center justify-center gap-4 pt-4">
          <UButton label="Español" @click="eventModal = false" />
          <UButton label="English" @click="toggleLanguage" />
        </div>
      </section>
    </UCard>
  </UModal>
</template>
