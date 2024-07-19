<script setup lang="ts">
const { links } = defineProps<{
  links: any[];
}>();
</script>

<template>
  <UDropdown
    :items="[links]"
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      item: {
        active: 'border border-transparent dark:bg-transparent bg-transparent ',
        inactive: 'hover:text-white text-gray-600 hover:before:bg-gray-800/50 border border-transparent',
        icon: {
          active: 'text-primary dark:text-primary',
          inactive: 'text-primary dark:text-primary',
        },
      },
    }"
    class="lg:hidden"
  >
    <UButton
      label="Menú"
      color="primary"
      icon="i-heroicons-bars-3-bottom-right"
      class="h-fit"
      :ui="{
        inline: 'flex-col',
        rounded: 'rounded-none',
        color: {
          gray: {
            ghost: 'text-primary dark:text-primary hover:text-gray-200 hover:bg-gray-800 bg-black',
          },
        },
      }"
    />
  </UDropdown>
</template>
