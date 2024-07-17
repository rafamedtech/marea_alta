<script setup lang="ts">
const { items } = defineProps<{ items: NavLink[] | NavLink[][] }>();
</script>

<template>
  <UHorizontalNavigation
    :ui="{
      base: 'flex-col w-full ',
      container: 'justify-between w-full',
      inner: 'flex-1 py-1',
      before: 'px-2',
      active: 'text-primary px-2 active:before:bg-black hover:before:bg-black focus:before:bg-black',
      inactive: 'text-gray-400 ',
      icon: { active: 'text-primary', inactive: 'text-gray-500' },
    }"
    :links="items"
    class="fixed bottom-0 z-[49] bg-black"
  />
</template>
