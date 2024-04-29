<script setup lang="ts">
const store = useStore();
const { eventModal } = storeToRefs(store);

const image = 'https://res.cloudinary.com/rafamed-dev/image/upload/v1706125314/events/superbowl_vbcqdu.jpg';

const goToEvents = () => {
  eventModal.value = false;
  return navigateTo('/eventos');
};
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
  >
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        background: ' dark:bg-gray-900',
        rounded: 'rounded-xl',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-lg">Destacado</h2>
          <UButton label="Cerrar" variant="ghost" icon="i-heroicons-x-mark" @click="eventModal = false" />
        </div>
      </template>

      <img :src="image" alt="" class="mx-auto w-80 rounded-xl" />

      <template #footer>
        <section class="flex items-center justify-center">
          <UButton label="Ver eventos" icon="i-heroicons-calendar-days-solid" @click="goToEvents" />
        </section>
      </template>
    </UCard>
  </UModal>
</template>
