<script setup lang="ts">
const { events } = defineProps<{
  events: Evento[] | null | any;
}>();
</script>

<template>
  <UCarousel
    :items="events"
    v-slot="{ item }"
    :ui="{ item: 'basis-full' }"
    class="overflow-hidden rounded-xl"
    arrows
    indicators
  >
    <img
      :src="item.cover"
      class="mx-auto h-[35rem] w-full max-w-xs rounded-xl object-cover"
      draggable="false"
    />
  </UCarousel>
</template>
