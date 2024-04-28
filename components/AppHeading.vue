<script setup lang="ts">
const { title, description, cover } = defineProps<{
  title?: string;
  description?: string;
  cover?: string;
}>();
</script>

<template>
  <div class="relative h-full" :class="{ 'min-h-[10rem]': cover }">
    <img
      v-if="cover"
      :src="cover"
      alt=""
      class="absolute inset-0 z-10 h-full w-full rounded-lg object-cover brightness-50"
    />
    <section class="relative z-[48] h-full md:p-2" :class="{ 'grid min-h-[10rem] place-content-center': cover }">
      <h1
        class="font-bold uppercase w-fit text-3xl md:text-4xl"
        :class="{
          'rounded-lg px-2 shadow-sm': cover,
        }"
      >
        {{ title }}
      </h1>
      <span class="dark:text-base-100">{{ description }}</span>
    </section>
  </div>
</template>
