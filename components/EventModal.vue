<script setup lang="ts">
const { event, events } = defineProps<{
  event?: Evento | undefined;
  events?: Evento[] | undefined | null;
}>();

const modal = useModal();
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
          <h2 class="text-lg">
            {{ event ? event?.name : "Galería de eventos" }}
          </h2>
          <UButton
            color="primary"
            variant="ghost"
            trailing-icon="i-heroicons-x-mark"
            size="md"
            label="Cerrar"
            class="-my-1"
            @click="modal.close"
          />
        </div>
      </template>

      <img
        v-if="event"
        :src="event?.cover"
        alt=""
        class="mx-auto h-full max-w-full rounded-xl lg:w-80"
      />

      <EventCarousel v-if="events" :events="events" />

      <template #footer v-if="event">
        <p>{{ event?.description }}</p>
      </template>
    </UCard>
  </UModal>
</template>
