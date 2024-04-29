<script setup lang="ts">
const { section } = defineProps<{
  section: Section;
}>();
</script>

<template>
  <div
    class="relative section-banner rounded-xl dark:section-banner-dark flex h-32 w-full flex-col justify-center py-2 lg:h-40 lg:shadow-xl"
  >
    <img
      v-if="section.cover"
      :src="section.cover"
      alt=""
      class="absolute inset-0 h-full w-full rounded-xl object-cover brightness-50"
    />

    <h2
      class="z-10 text-center text-2xl"
      :class="{ 'text-primary dark:text-primary': !section.cover, 'text-gray-100': section.cover }"
    >
      {{ section.name }}
    </h2>
    <p class="text-center z-10 font-handlee text-lg font-extralight text-gray-50" v-if="section.description">
      {{ section.description }}
    </p>
  </div>
</template>
